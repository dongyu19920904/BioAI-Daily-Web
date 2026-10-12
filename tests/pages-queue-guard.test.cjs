const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const workflow = fs.readFileSync(path.join(__dirname, '../.github/workflows/pages-queue-guard.yaml'), 'utf8');
const source = workflow.split(/script: \|\r?\n/)[1].replace(/^ {12}/gm, '');
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
const execute = new AsyncFunction('github', 'context', 'core', 'setTimeout', source);

async function runGuard(records, forceRequired = false) {
  const calls = [];
  const actions = {
    listWorkflowRuns() {},
    async getWorkflowRun({ run_id }) {
      return { data: records.find(run => run.id === run_id) };
    },
    async cancelWorkflowRun({ run_id }) {
      calls.push(['cancel', run_id]);
      if (!forceRequired) records.find(run => run.id === run_id).status = 'completed';
    },
    async createWorkflowDispatch(args) {
      assert.equal(args.workflow_id, 'pages.yaml');
      assert.equal(args.ref, 'main');
      calls.push(['dispatch']);
    },
  };
  const github = {
    rest: { actions },
    async paginate(method, args, mapFn) {
      assert.equal(method, actions.listWorkflowRuns);
      assert.equal(args.owner, 'dongyu19920904');
      assert.equal(args.repo, 'BioAI-Daily-Web');
      assert.equal(args.branch, 'main');
      assert.equal(args.workflow_id, 'pages.yaml');
      // Octokit pagination normalizes workflow_runs to the response data array.
      const data = records.filter(run => run.status === args.status);
      return mapFn ? mapFn({ data }) : data;
    },
    async request(route, { run_id }) {
      assert.equal(route, 'POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel');
      calls.push(['force', run_id]);
      records.find(run => run.id === run_id).status = 'completed';
    },
  };
  const summary = { addRaw() { return this; }, async write() {} };
  await execute(github, { repo: { owner: 'dongyu19920904', repo: 'BioAI-Daily-Web' } },
    { info() {}, summary }, callback => callback());
  return calls;
}

function run(id, minutesAgo, status = 'queued') {
  return { id, status, created_at: new Date(Date.now() - minutesAgo * 60000).toISOString() };
}

test('Pages queue guard leaves an empty or healthy queue untouched', async () => {
  assert.deepEqual(await runGuard([]), []);
  assert.deepEqual(await runGuard([run(1, 5, 'in_progress'), run(2, 2, 'pending')]), []);
});

test('Pages queue guard releases a ten-day-old lock without cancelling the fresh build', async () => {
  assert.deepEqual(await runGuard([run(1, 10 * 24 * 60), run(2, 2, 'in_progress')]),
    [['cancel', 1], ['dispatch']]);
});

test('Pages queue guard force-cancels only after normal cancellation does not complete', async () => {
  assert.deepEqual(await runGuard([run(1, 120)], true),
    [['cancel', 1], ['force', 1], ['dispatch']]);
});
