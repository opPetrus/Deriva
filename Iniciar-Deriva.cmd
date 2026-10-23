@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Instale o Node.js 22.12 ou superior para abrir o Deriva.
  pause
  exit /b 1
)
if not exist "dist\index.html" (
  echo A compilacao ainda nao existe. Execute npm ci e depois npm run build nesta pasta.
  pause
  exit /b 1
)
node iniciar.mjs --open
if errorlevel 1 pause
