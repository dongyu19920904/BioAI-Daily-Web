const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../themes/hextra/assets/js/flexsearch.js'), 'utf8');

async function delayedIndex({ clear = false, blur = false } = {}) {
  const listeners = new Map();
  const input = {
    value: '骨骼',
    addEventListener: (name, fn) => listeners.set(name, fn),
    removeEventListener: name => listeners.delete(name),
  };
  const results = { firstChild: null, dataset: {}, classList: { add() {}, remove() {} } };
  const wrapper = { clientHeight: 20, querySelector: selector => selector === '.hextra-search-input' ? input : results };
  const document = {
    activeElement: input,
    addEventListener() {},
    querySelectorAll: selector => selector === '.hextra-search-input' ? [input] : selector === '.hextra-search-wrapper' ? [wrapper] : [],
  };
  const queries = [];
  let finishFetch;
  let fetches = 0;
  const context = {
    document, console,
    fetch: () => { fetches++; return new Promise(resolve => { finishFetch = resolve; }); },
    FlexSearch: { Document: class { add() {} search(query) { queries.push(query); return []; } } },
  };
  context.window = context;
  vm.runInNewContext(source, context);
  listeners.get('focus')({ target: input });
  listeners.get('keyup')({ target: input });
  queries.length = 0;
  input.value = clear ? '' : '衰老';
  if (blur) document.activeElement = null;
  finishFetch({ json: async () => ({ '/': { title: '日报', data: { '#摘要': '骨骼与衰老研究' } } }) });
  await new Promise(resolve => setImmediate(resolve));
  return { queries, fetches };
}

test('slow index replays the latest query without a second keypress or extra fetch', async () => {
  const result = await delayedIndex();
  assert.deepEqual(result.queries, ['衰老']);
  assert.equal(result.fetches, 1);
});

test('clearing a query while the index loads does not reopen search', async () => {
  assert.deepEqual((await delayedIndex({ clear: true })).queries, []);
});

test('leaving search while the index loads does not reopen search', async () => {
  assert.deepEqual((await delayedIndex({ blur: true })).queries, []);
});
