# Simple Hugo Starter
# Minimal script without Git sync

$hugoPath = "C:\Users\dongy\AppData\Local\Microsoft\WinGet\Packages\Hugo.Hugo.Extended_Microsoft.Winget.Source_8wekyb3d8bbwe\hugo.exe"

Write-Host "Starting Hugo Server..." -ForegroundColor Green
Write-Host ""
Write-Host "Visit: http://localhost:1313/" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

$env:GOPROXY = "https://goproxy.cn,direct"

& $hugoPath server --bind 0.0.0.0
