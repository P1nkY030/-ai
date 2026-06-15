@echo off
chcp 65001 >nul 2>&1
title JCC Console - 金铲铲阵容中控台
cd /d "%~dp0"

echo ========================================
echo   JCC Console - 金铲铲阵容中控台
echo ========================================
echo.

:: ── 检查依赖 ──
where node >nul 2>&1
if errorlevel 1 (
    echo [错误] 未找到 Node.js，请先安装: https://nodejs.org
    pause
    exit /b 1
)
where python >nul 2>&1
if errorlevel 1 (
    echo [错误] 未找到 Python，请先安装: https://python.org
    pause
    exit /b 1
)
echo [OK] Node.js 已就绪
echo [OK] Python  已就绪
echo.

:: ── 启动 OCR 服务器（后台 + 崩溃自动重启） ──
echo [1/2] 启动 OCR Server (Python, 端口 5000)...
start "JCC-OCR" /min "%~dp0ocr-loop.bat"

:: 等待 OCR 就绪（最多 30 秒）
echo       等待 OCR 服务就绪...
set /a _retry=0
:wait_ocr
timeout /t 1 /nobreak >nul
powershell -Command "try { (Invoke-WebRequest -Uri 'http://127.0.0.1:5000/ocr/health' -UseBasicParsing -TimeoutSec 2).StatusCode -eq 200 | Out-Null; exit 0 } catch { exit 1 }" >nul 2>&1
if not errorlevel 1 (
    echo       OCR 服务已就绪。
    goto start_web
)
set /a _retry+=1
if %_retry% geq 30 (
    echo       [警告] OCR 启动超时，Web 服务仍可独立运行。
    goto start_web
)
goto wait_ocr

:start_web
:: ── 启动 Web 服务器（主进程 + 崩溃自动重启） ──
echo [2/2] 启动 Web Server (Node.js, 端口 4173)...
echo.
echo   访问地址: http://127.0.0.1:4173
echo   账号: YJJ  密码: YJJ
echo.

:: 打开浏览器（仅首次）
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://127.0.0.1:4173"

:: Node 主进程（崩溃自动重启）
:web_loop
echo [%date% %time%] Web Server 启动中...
node server.js
echo.
echo [%date% %time%] Web Server 退出，5秒后自动重启...
timeout /t 5 /nobreak >nul
goto web_loop
