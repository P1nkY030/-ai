@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"

echo ========================================
echo   JCC Console - 开机自启动设置
echo ========================================
echo.

:: 检查 start.bat 是否存在
if not exist "%~dp0start.bat" (
    echo [错误] 未找到 start.bat！
    pause
    exit /b 1
)

:: 创建 VBS 无窗口启动脚本
set "SCRIPT_DIR=%~dp0"
set "VBS_FILE=%SCRIPT_DIR%start-silent.vbs"

echo Set WshShell = CreateObject("WScript.Shell") > "%VBS_FILE%"
echo WshShell.CurrentDirectory = "%SCRIPT_DIR%" >> "%VBS_FILE%"
echo WshShell.Run "cmd /c start.bat", 0, False >> "%VBS_FILE%"

echo [OK] 无窗口启动脚本已创建: start-silent.vbs

:: 创建快捷方式到启动文件夹
set "STARTUP=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
set "SHORTCUT=%STARTUP%\JCC-Console.lnk"

powershell -Command ^
  "$s = (New-Object -COM WScript.Shell).CreateShortcut('%SHORTCUT%'); ^
   $s.TargetPath = 'wscript.exe'; ^
   $s.Arguments = '\"%VBS_FILE%\"'; ^
   $s.WorkingDirectory = '%SCRIPT_DIR%'; ^
   $s.Description = 'JCC Console - 金铲铲阵容中控台'; ^
   $s.Save()"

if exist "%SHORTCUT%" (
    echo [OK] 开机自启动已设置
    echo.
    echo ========================================
    echo   设置完成！
    echo ========================================
    echo.
    echo   项目将在每次开机登录后自动启动（后台运行）
    echo   访问地址: http://127.0.0.1:4173
    echo.
    echo   取消自启动: 运行 uninstall-autostart.bat
    echo.
    echo   立即启动服务...
    start "" wscript.exe "%VBS_FILE%"
    timeout /t 4 /nobreak >nul
    start http://127.0.0.1:4173
) else (
    echo [错误] 创建快捷方式失败，请尝试以管理员身份运行。
)

echo.
pause
