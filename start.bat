@echo off
chcp 65001 >nul
echo ==================================
echo   Aivora AI Daily - Frontend
echo ==================================
echo.

REM Check Hugo
where hugo >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Hugo not found in PATH
    echo Please restart PowerShell or run:
    echo   winget install Hugo.Hugo.Extended
    pause
    exit /b 1
)

REM Show Hugo version
for /f "tokens=*" %%i in ('hugo version') do set HUGO_VER=%%i
echo [OK] %HUGO_VER%
echo.

REM Pull latest
echo [SYNC] Pulling latest content...
git pull origin main >nul 2>&1
echo.

REM Start server
echo ==================================
echo   Starting Hugo Server
echo ==================================
echo.
echo Access URLs:
echo   Home:    http://localhost:1313/
echo   Chinese: http://localhost:1313/cn/
echo   English: http://localhost:1313/en/
echo.
echo Press Ctrl+C to stop
echo ----------------------------------
echo.

hugo server --bind 0.0.0.0 --baseURL http://localhost:1313/
