# Gestión de Expedientes — Maqueta MVP

Maqueta funcional (React, sin backend) para validación del **FW Coipo — Etapa 3: Diseño**. Muestra el ciclo de un expediente: ingreso, bandeja, asignación, flujo de estados, revisión y cierre, sobre datos ficticios.

Para quién: Jefatura y Responsables que validan las pantallas acordadas. Contexto y solución leídos del código en [insumos/00-PROBLEMA.md](insumos/00-PROBLEMA.md) y [insumos/01-SOLUCION.md](insumos/01-SOLUCION.md); guía para agentes en [CLAUDE.md](CLAUDE.md).

## Versión actual

Según `frontend/package.json` la versión es **0.5.0**, pero `frontend/VERSIONES.md` registra **v0.6.0 en revisión** (la última con OK explícito es v0.5.1). La versión solo es base válida cuando el usuario entrega su **OK**. Cuál es la numeración vigente: pendiente de confirmar por el equipo.

## Stack (VERIFICADO en frontend/package.json)

React 19, Vite 8, React Router 7, Tailwind CSS 4, Recharts, lucide-react. No hay pruebas automáticas ni linter configurados.

## Ejecutar

Todo vive en `frontend/`:

```bash
cd frontend
npm install
npm run dev
```

También `frontend/ejecutar.bat` en Windows (instala y levanta Vite). Otros scripts: `npm run build`, `npm run preview`.

## Perfiles de prueba

El selector superior ("Ver sistema como") alterna entre **Jefatura** y **Responsable**.

## Pantallas (rutas en `frontend/src/App.jsx`)

| Ruta | Pantalla |
|---|---|
| `/` | Dashboard |
| `/bandeja` | Bandeja |
| `/workflow` | Workflow |
| `/historico` | Histórico (casos archivados, cerrados o anulados) |
| `/nueva` | Nueva solicitud |
| `/mis-expedientes` | Mi bandeja (Responsable) |

Existe `pages/Ingresados.jsx` (bandeja de ingresados por asignar) pero no tiene ruta en `App.jsx`. El detalle de un expediente se abre en un panel lateral (`components/DetailDrawer.jsx`).

## Alcance

Datos ficticios (`frontend/src/fixtures/expedientes.js`) y estado en memoria (`context/ExpedienteContext.jsx`), que se pierde al recargar. Sin backend, base de datos ni almacenamiento documental.

## Despliegue

`.github/workflows/deploy.yml` compila `frontend/` (Node 22, `npm ci`, `npm run build`) y publica `frontend/dist` en GitHub Pages en cada push a `main` que toque `frontend/`. `readme.yml` es un workflow compartido que regenera documentación (`Sud-Austral/coipo_aireadme`).

## Control de versiones

Ver `frontend/VERSIONES.md`.
