# CLAUDE.md — coipo_gestion_expediente

Guía para agentes. Maqueta de pantallas (React) de gestión de expedientes; NO es un sistema en operación. Contexto en [insumos/](insumos/) y [README.md](README.md).

## Estructura

```
frontend/            única aplicación (package.json, vite.config.js)
  src/App.jsx        rutas
  src/pages/         Dashboard, Bandeja, Workflow, Historico, Nueva, MisExpedientes, Ingresados (sin ruta)
  src/components/    Layout (selector de perfil y navegación), DetailDrawer
  src/context/       ExpedienteContext.jsx: todo el estado y las transiciones de estado
  src/fixtures/      expedientes.js: datos ficticios
  src/lib/ui.jsx     catálogo de estados y prioridades
  VERSIONES.md       registro de versiones y reglas de cada una
insumos/             00-PROBLEMA, 01-SOLUCION, MANIFIESTO.yaml (generados desde el código)
.github/workflows/   deploy.yml (GitHub Pages), readme.yml (generador compartido)
```

## Comandos (desde `frontend/`)

- `npm install` o `npm ci`, `npm run dev`, `npm run build`, `npm run preview`.
- No hay `test` ni `lint`. Verificar un cambio = `npm run build` y mirar la pantalla.

## Convenciones y reglas del proyecto

- Español en textos de interfaz. El código está muy compacto (muchas líneas largas en una sola fila); respetar el estilo del archivo que se edite.
- Las reglas de comportamiento de cada versión están en `frontend/VERSIONES.md` (por ejemplo, Histórico sin botón "Ver detalle", filas seleccionables; orden de columnas del Workflow). Leerlas antes de cambiar pantallas.
- Una versión solo es base oficial con el **OK explícito del usuario**. No se declara una versión como OK por cuenta propia; si una iteración pierde la visión, se vuelve a la última marcada OK.
- Los estados válidos y transiciones están en `ExpedienteContext.jsx`: Pendiente, En proceso, Bloqueado, En revisión, Aprobado / Conforme, Archivado / Cerrado, Anulado.

## Trampas conocidas

- `frontend/package.json` dice 0.5.0 y `VERSIONES.md` llega a v0.6.0 (en revisión): no están alineados.
- `vite.config.js` usa `base: './'` para servirse bajo la subruta de GitHub Pages; no cambiarlo sin revisar el despliegue.
- El despliegue a Pages se dispara solo con cambios en `frontend/**` o en `deploy.yml`.
- `frontend/node_modules` aparece versionado en git (miles de archivos) aunque existe `.gitignore`; no lo toques ni lo agregues a commits. Retirarlo del índice es decisión de una persona.
- Los datos son ficticios, pero `insumos/MANIFIESTO.yaml` marca como `[VERIFICAR]` si `expedientes.js` contiene datos personales reales: no agregar datos reales.

## Qué no tocar

- Nada de secretos ni datos reales en `fixtures/`.
- `.github/workflows/readme.yml` lo comparte la flota (apunta a `coipo_aireadme@v1`).
- Marcas `[PENDIENTE]` y `[VERIFICAR]` en `insumos/`: no se resuelven por cuenta propia.
