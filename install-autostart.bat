@echo off
title JCC Console - Auto Start Setup
echo ========================================
echo   JCC Console Auto-Start Installer
echo ========================================
echo.

:: Check if start.bat exists
if not exist "%~dp0start.bat" (
    echo ERROR: start.bat not found!
    pause
    exit /b 1
)

:: Create VBS launcher (silent, no cmd window)
set "SCRIPT_DIR=%~dp0"
set "VBS_FILE=%SCRIPT_DIR%start-silent.vbs"

echo Set WshShell = CreateObject("WScript.Shell") > "%VBS_FILE%"
echo WshShell.CurrentDirectory = "%SCRIPT_DIR%" >> "%VBS_FILE%"
echo WshShell.Run "cmd /c start.bat", 0, False >> "%VBS_FILE%"

:: Create shortcut in Startup folder
set "STARTUP=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
set "SHORTCUT=%STARTUP%\JCC-Console.lnk"

powershell -Command ^
  "$s = (New-Object -COM WScript.Shell).CreateShortcut('%SHORTCUT%'); ^
   $s.TargetPath = 'wscript.exe'; ^
   $s.Arguments = '\"%VBS_FILE%\"'; ^
   $s.WorkingDirectory = '%SCRIPT_DIR%'; ^
   $s.Description = 'JCC Console Auto-Start'; ^
   $s.Save()"

if exist "%SHORTCUT%" (
    echo.
    echo SUCCESS! JCC Console registered for auto-start.
    echo.
    echo Shortcut: %SHORTCUT%
    echo.
    echo The server will start silently on Windows boot.
    echo To remove: run uninstall-autostart.bat
    echo.
    echo Starting now...
    start "" wscript.exe "%VBS_FILE%"
    timeout /t 4 >nul
    start http://127.0.0.1:4173
) else (
    echo FAILED to create shortcut. Try running as Administrator.
)

echo.
pause
