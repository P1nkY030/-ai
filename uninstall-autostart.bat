@echo off
title JCC Console - Uninstall Auto-Start
echo Removing JCC Console auto-start...
set "STARTUP=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"

if exist "%STARTUP%\JCC-Console.lnk" (
    del "%STARTUP%\JCC-Console.lnk"
    echo Shortcut removed.
) else (
    echo No auto-start shortcut found.
)

if exist "%~dp0start-silent.vbs" (
    del "%~dp0start-silent.vbs"
    echo Silent launcher removed.
)

echo.
pause
