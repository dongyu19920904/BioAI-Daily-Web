# Aivora AI Daily - Start Script (Full Path Version)
# This script uses full paths to avoid PATH issues

$ErrorActionPreference = "Stop"

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Aivora AI Daily - Frontend      " -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Hugo executable path
$hugoPath = "C:\Users\dongy\AppData\Local\Microsoft\WinGet\Packages\Hugo.Hugo.Extended_Microsoft.Winget.Source_8wekyb3d8bbwe\hugo.exe"

# Check if Hugo exists
if (-not (Test-Path $hugoPath)) {
    Write-Host "[ERROR] Hugo not found at: $hugoPath" -ForegroundColor Red
    Write-Host "Please reinstall Hugo:" -ForegroundColor Yellow
    Write-Host "  winget install Hugo.Hugo.Extended" -ForegroundColor Yellow
    pause
    exit 1
}

# Show Hugo version
Write-Host "[CHECK] Hugo found!" -ForegroundColor Green
$version = & $hugoPath version 2>&1
Write-Host "Version: $version" -ForegroundColor Gray
Write-Host ""

# Check if in correct directory
if (-not (Test-Path "hugo.yaml")) {
    Write-Host "[ERROR] Not in project directory!" -ForegroundColor Red
    Write-Host "Current: $PWD" -ForegroundColor Yellow
    pause
    exit 1
}

# Set Go proxy for China
$env:GOPROXY = "https://goproxy.cn,direct"
Write-Host "[CONFIG] Set GOPROXY=$env:GOPROXY" -ForegroundColor Gray

# Check if modules need to be downloaded
if (-not (Test-Path "go.sum")) {
    Write-Host ""
    Write-Host "[INIT] Downloading Hextra theme (first time)..." -ForegroundColor Yellow
    Write-Host "This may take a few minutes..." -ForegroundColor Gray
    Write-Host ""
    
    try {
        & $hugoPath mod get -u
        if ($LASTEXITCODE -ne 0) {
            throw "Module download failed"
        }
        Write-Host "[OK] Theme downloaded successfully!" -ForegroundColor Green
    }
    catch {
        Write-Host "[ERROR] Failed to download theme" -ForegroundColor Red
        Write-Host "Error: $_" -ForegroundColor Red
        Write-Host ""
        Write-Host "Possible solutions:" -ForegroundColor Yellow
        Write-Host "1. Check your internet connection" -ForegroundColor Gray
        Write-Host "2. Try again (GitHub might be temporarily unavailable)" -ForegroundColor Gray
        Write-Host "3. If you have a VPN, enable it and retry" -ForegroundColor Gray
        Write-Host ""
        Write-Host "Command to retry manually:" -ForegroundColor Cyan
        Write-Host "  & `"$hugoPath`" mod get -u" -ForegroundColor White
        Write-Host ""
        pause
        exit 1
    }
}

# Pull latest content
Write-Host ""
Write-Host "[SYNC] Pulling latest content from GitHub..." -ForegroundColor Yellow
git pull origin main 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] Content synced" -ForegroundColor Green
} else {
    Write-Host "[WARN] Could not sync (may already be up-to-date)" -ForegroundColor Yellow
}

# Start server
Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Starting Hugo Server...         " -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Access your site at:" -ForegroundColor Cyan
Write-Host "  http://localhost:1313/" -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "  http://localhost:1313/cn/" -ForegroundColor White
Write-Host "  http://localhost:1313/en/" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
Write-Host "----------------------------------" -ForegroundColor Gray
Write-Host ""

# Start Hugo server
& $hugoPath server --bind 0.0.0.0
