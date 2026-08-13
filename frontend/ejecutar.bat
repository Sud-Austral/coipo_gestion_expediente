@echo off
cd /d "%~dp0"
echo ===============================================
echo  Gestion de Expedientes - Maqueta MVP
echo ===============================================
echo.
echo Instalando dependencias...
npm install
if errorlevel 1 (
  echo.
  echo ERROR: No fue posible instalar las dependencias.
  pause
  exit /b 1
)
echo.
echo Iniciando Vite...
npm run dev
pause
