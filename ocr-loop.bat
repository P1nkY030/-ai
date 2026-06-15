@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"
:ocr_loop
echo [%date% %time%] OCR Server 启动中...
python ocr_server.py
echo.
echo [%date% %time%] OCR Server 退出，3秒后自动重启...
timeout /t 3 /nobreak >nul
goto ocr_loop
