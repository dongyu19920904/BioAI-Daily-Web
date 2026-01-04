# Complete Environment Setup and Hugo Launcher
# This script sets up PATH for both Hugo and Go

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Aivora AI Daily                 " -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Refresh PATH from registry
Write-Host "[1/5] Refreshing environment variables..." -ForegroundColor Yellow
$machinePath = [System.Environment]::GetEnvironmentVariable("Path", "Machine")
$userPath = [System.Environment]::GetEnvironmentVariable("Path", "User")
$env:Path = "$machinePath;$userPath"

# Find Hugo
Write-Host "[2/5] Locating Hugo..." -ForegroundColor Yellow
$hugo = Get-Command hugo -ErrorAction SilentlyContinue
if (-not $hugo) {
    Write-Host "[ERROR] Hugo not found!" -ForegroundColor Red
    Write-Host "Please close ALL PowerShell windows and reopen" -ForegroundColor Yellow
    Write-Host "Or run: winget install Hugo.Hugo.Extended" -ForegroundColor Yellow
    pause
    exit 1
}
Write-Host "[OK] Hugo found: $($hugo.Source)" -ForegroundColor Green

# Find Go
Write-Host "[3/5] Locating Go..." -ForegroundColor Yellow
$go = Get-Command go -ErrorAction SilentlyContinue
if (-not $go) {
    Write-Host "[ERROR] Go not found!" -ForegroundColor Red
    Write-Host "Please close ALL PowerShell windows and reopen" -ForegroundColor Yellow
    Write-Host "Or run: winget install GoLang.Go" -ForegroundColor Yellow
    pause
    exit 1
}
Write-Host "[OK] Go found: $($go.Source)" -ForegroundColor Green

# Set Go proxy
Write-Host "[4/5] Configuring Go proxy..." -ForegroundColor Yellow
$env:GOPROXY = "https://goproxy.cn,direct"
Write-Host "[OK] GOPROXY set to China mirror" -ForegroundColor Green

# Download theme if needed
if (-not (Test-Path "go.sum")) {
    Write-Host "[5/5] Downloading Hextra theme (first time only)..." -ForegroundColor Yellow
    Write-Host "This will take 1-3 minutes..." -ForegroundColor Gray
    Write-Host ""
    
    hugo mod get -u
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "[ERROR] Theme download failed!" -ForegroundColor Red
        Write-Host "Please check your internet connection and try again" -ForegroundColor Yellow
        pause
        exit 1
    }
    
    Write-Host "[OK] Theme downloaded!" -ForegroundColor Green
} else {
    Write-Host "[5/5] Theme already downloaded, skipping..." -ForegroundColor Gray
}

# Start server
Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Starting Server...              " -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🌐 Open in browser:" -ForegroundColor Cyan
Write-Host "   http://localhost:1313/" -ForegroundColor White -BackgroundColor DarkBlue
Write-Host ""
Write-Host "⏹️  Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host "----------------------------------" -ForegroundColor Gray
Write-Host ""

hugo server --bind 0.0.0.0
