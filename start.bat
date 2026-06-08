@echo off
title JCC Console - Starting...
cd /d "%~dp0"

echo ========================================
echo   JCC Console - 金铲铲阵容中控台
echo ========================================
echo.

:: Start OCR server in background
echo [1/2] Starting OCR Server (Python)...
start "JCC-OCR-Server" /min cmd /c "python ocr_server.py"
echo       OCR Server starting on port 5000...

:: Wait a moment for OCR to initialize
timeout /t 2 /nobreak >nul

:: Start Node.js server
echo [2/2] Starting Web Server (Node.js)...
echo       Web Server starting on port 4173...
echo.

:: Open browser after short delay
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://127.0.0.1:4173"

:: Run Node server (blocking)
node server.js

:: Cleanup: kill OCR server when Node exits
echo.
echo Shutting down OCR Server...
taskkill /FI "WindowTitle eq JCC-OCR-Server*" /T /F >nul 2>&1
echo Done.
pause
