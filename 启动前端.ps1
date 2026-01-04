# Aivora AI Daily - Quick Start Script
# Usage: .\start.ps1

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Aivora AI Daily - Frontend      " -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if in correct directory
if (-not (Test-Path "hugo.yaml")) {
    Write-Host "[ERROR] Please run this script in project root!" -ForegroundColor Red
    Write-Host "Current: $PWD" -ForegroundColor Yellow
    Write-Host "Expected: D:\GitHub\Hextra-AI-Insight-Daily\" -ForegroundColor Yellow
    pause
    exit 1
}

# Check Hugo installation
Write-Host "[CHECK] Verifying Hugo installation..." -ForegroundColor Yellow
try {
    $hugoVersion = hugo version 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "Hugo not found"
    }
    Write-Host "[OK] Hugo installed: $hugoVersion" -ForegroundColor Green
}
catch {
    Write-Host "[ERROR] Hugo not installed or not in PATH" -ForegroundColor Red
    Write-Host "Run: winget install Hugo.Hugo.Extended" -ForegroundColor Yellow
    Write-Host "Then restart PowerShell!" -ForegroundColor Yellow
    pause
    exit 1
}

# Initialize modules if needed
if (-not (Test-Path "go.sum")) {
    Write-Host "[INIT] Initializing Hugo modules..." -ForegroundColor Yellow
    hugo mod get -u
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Module initialization failed" -ForegroundColor Red
        pause
        exit 1
    }
    Write-Host "[OK] Modules initialized" -ForegroundColor Green
}

# Pull latest content
Write-Host "[SYNC] Pulling latest content..." -ForegroundColor Yellow
git pull origin main 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] Content updated" -ForegroundColor Green
}
else {
    Write-Host "[WARN] Could not pull latest (already up-to-date or network issue)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Starting Local Server...        " -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Access URLs:" -ForegroundColor Cyan
Write-Host "  Home:    http://localhost:1313/" -ForegroundColor White
Write-Host "  Chinese: http://localhost:1313/cn/" -ForegroundColor White
Write-Host "  English: http://localhost:1313/en/" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
Write-Host "----------------------------------" -ForegroundColor Gray

# Start Hugo server
hugo server --bind 0.0.0.0 --baseURL http://localhost:1313/
