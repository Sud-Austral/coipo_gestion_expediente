# Registro de versiones — Gestión de Expedientes MVP

| Versión | Estado | Descripción |
|---|---|---|
| v0.1.0 | Referencia | Primera maqueta funcional. |
| v0.2.0 | ✅ OK | Dashboard, Bandeja, Nueva solicitud, Mi bandeja, Detalle, Revisión y Workflow. |
| v0.3.0 | ✅ OK | Filtros desde insights al Workflow, gráfico de estado, cambio de perfil, anulación desde detalle y comentario de liberación. |
| v0.4.0 | ✅ OK | Histórico para Jefatura/Responsable, separación de estados terminales de vistas operativas, cierre automático del drawer al ir a Workflow, KPIs de Mi bandeja y trazabilidad de anulación. |
| **v0.5.0** | **🔎 No OK — reemplazada por v0.5.1** | Visión dinámica por responsable en Dashboard, estado visible junto al ID en Detalle, antigüedad de la solicitud en Seguimiento y eliminación de “Ver en workflow” desde Histórico. |
| **v0.5.1** | **✅ OK** | Corrección de la Visión en Histórico: al filtrar por responsable, la tarjeta Visión muestra “[Nombre]”; sin filtro muestra “Todo el equipo”. |
| **v0.6.0** | **🔎 En revisión** | Histórico con filas completamente seleccionables y detalle lateral; Visión simplificada; prioridad coloreada en Detalle; Workflow con columnas Expediente, Responsable, Solicitud, Compromiso, Prioridad y Estado. |

## Reglas de esta versión

- **Visión Dashboard:** sin responsable seleccionado → “Todo el equipo”; con responsable → “Visión: [Responsable]”.
- **Visión Histórico:** sin responsable seleccionado → “Todo el equipo”; con responsable seleccionado → “[Nombre]”.
- **Histórico:** cada fila completa es seleccionable y abre el detalle lateral; no existe columna ni botón “Ver detalle”.
- **Workflow lista:** orden fijo → Expediente, Responsable, Solicitud, Compromiso, Prioridad, Estado.
- **Prioridad en Detalle:** Normal, Media y Urgente usan el mismo tratamiento visual de prioridad del Workflow.
- **Detalle:** el estado actual aparece junto al ID del expediente y separado visualmente de la prioridad.
- **Seguimiento:** se muestra la antigüedad de la solicitud en días.
- **Histórico:** al abrir un expediente histórico no aparece “Ver en workflow”, porque Archivado/Cerrado/Anulado ya no pertenecen al Workflow operativo.

## Regla de validación

Una versión solamente se convierte en **base oficial** cuando el usuario entrega explícitamente su **OK**.

Si una iteración posterior pierde la visión del sistema, se recupera la última versión marcada como OK.
