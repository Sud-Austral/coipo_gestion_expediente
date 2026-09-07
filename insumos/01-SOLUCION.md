# Solucion, leida del codigo

Advertencia previa, y es la afirmacion mas importante de este documento: lo
construido es una maqueta de pantallas, no un sistema en operacion. La propia
documentacion del repositorio lo declara: datos ficticios, estado en memoria,
sin servicio, sin base de datos y sin almacenamiento documental [README.md].
Todo lo que sigue describe capacidades de la maqueta.

## Que hace

Permite recorrer, sobre datos de ejemplo, el ciclo completo de un expediente:
ingresar una solicitud nueva, revisarla en una bandeja de entrada, seguir su
avance por un flujo de estados, atenderla desde la bandeja personal de quien
la tiene asignada, y consultarla despues en un historico de casos cerrados
[frontend/src/pages/Nueva.jsx], [frontend/src/pages/Bandeja.jsx],
[frontend/src/pages/Workflow.jsx], [frontend/src/pages/MisExpedientes.jsx],
[frontend/src/pages/Historico.jsx], [frontend/src/pages/Ingresados.jsx].

Permite ademas mirar el conjunto en un tablero con indicadores y graficos
[frontend/src/pages/Dashboard.jsx], y abrir el detalle de un expediente sin
salir de la lista, en un panel lateral
[frontend/src/components/DetailDrawer.jsx]. El estado de todo eso vive en un
contexto compartido de la aplicacion
[frontend/src/context/ExpedienteContext.jsx] y se pierde al recargar
[README.md].

## Capacidades, una por una

- Ingresar un expediente nuevo mediante formulario
  [frontend/src/pages/Nueva.jsx].
- Ver la bandeja general de expedientes, fila por fila
  [frontend/src/pages/Bandeja.jsx].
- Ver la bandeja propia de un responsable
  [frontend/src/pages/MisExpedientes.jsx].
- Ver los expedientes recien ingresados por separado
  [frontend/src/pages/Ingresados.jsx].
- Seguir el flujo de estados de un expediente
  [frontend/src/pages/Workflow.jsx].
- Consultar los expedientes que llegaron a un estado terminal
  [frontend/src/pages/Historico.jsx].
- Ver indicadores agregados y graficos [frontend/src/pages/Dashboard.jsx], con
  la libreria de graficos declarada en el manifiesto
  [frontend/package.json:1].
- Abrir el detalle de un expediente en un panel lateral
  [frontend/src/components/DetailDrawer.jsx].
- Distinguir visualmente estado y prioridad mediante insignias
  [frontend/src/lib/ui.jsx].
- Cambiar de perfil para ver la aplicacion como jefatura o como responsable
  [README.md], [frontend/src/components/Layout.jsx].

## Roles: quien ve que

Existen dos perfiles, jefatura y responsable, y a cada uno le corresponden
pantallas distintas segun la documentacion del repositorio [README.md]. El
cambio entre perfiles se hace desde la envoltura comun de la aplicacion
[frontend/src/components/Layout.jsx], y la navegacion se resuelve en el
enrutador de la aplicacion [frontend/src/App.jsx].

Ningun guard impone esos perfiles. No hay en la evidencia ningun archivo de
autenticacion o autorizacion, ninguna variable de entorno —el inventario de
variables de entorno del analizador viene vacio para este repositorio— y
ninguna dependencia de sesion o de identidad entre las nueve declaradas
[frontend/package.json:1]. El perfil es una vista, no un permiso [INFERIDO].

Que operaciones deberia habilitar cada perfil cuando esto deje de ser maqueta,
y si hacen falta mas roles: [PENDIENTE].

## De donde salen los datos

- Datos de ejemplo escritos en el repositorio
  [frontend/src/fixtures/expedientes.js], que incluyen un catalogo de personas
  y uno de estados. La documentacion los declara ficticios [README.md]. Que
  sean efectivamente sinteticos es [VERIFICAR]: el analizador no puede
  distinguir un nombre inventado de uno real.
- No hay ninguna otra fuente. No se consume ninguna interfaz externa: el
  inventario de rutas y llamadas del analizador viene vacio para este
  repositorio [INFERIDO].
- Quien seria el DUENO de los datos reales cuando existan: [PENDIENTE].

## Que NO hace

Ausencias declaradas por el propio repositorio o comprobadas de forma
exhaustiva por el analizador.

- No tiene servicio propio, base de datos ni almacenamiento de documentos: lo
  declara la documentacion [README.md] y lo confirma el inventario, que no
  detecta ninguna ruta de API ni ninguna tabla.
- No persiste nada entre sesiones: el estado vive en memoria
  [frontend/src/context/ExpedienteContext.jsx], [README.md].
- No hay ninguna variable de entorno configurable: el inventario del
  analizador viene vacio para este repositorio [INFERIDO].
- No hay pruebas automatizadas en el inventario de archivos [INFERIDO].
- Aunque el bloqueo de dependencias menciona un servidor web
  [frontend/package-lock.json], eso es una dependencia transitiva y no
  evidencia de que el proyecto tenga backend: no se declara ni se importa en
  ninguna parte [INFERIDO].

## Iteraciones

El repositorio lleva control de versiones propio de la maqueta
[frontend/VERSIONES.md], y la documentacion registra una version en revision
que incorpora decisiones tomadas al revisar las pantallas [README.md]. Se
infiere que hubo al menos una ronda de revision con el area usuaria antes de
esta version [INFERIDO]. Cuando ocurrio y quienes participaron: [PENDIENTE].

Hay dos flujos automatizados en el repositorio, uno de publicacion
[.github/workflows/deploy.yml] y otro de documentacion
[.github/workflows/readme.yml], y un atajo de ejecucion local para Windows
[frontend/ejecutar.bat], [README.md]. Se infiere que la maqueta se publica
para que la revisen sin instalar nada [INFERIDO]; donde queda publicada es
[PENDIENTE].

## Sobre la calidad de esta evidencia

Este repositorio describe bien lo que se quiere mostrar y casi nada de lo que
el sistema haria. Al no haber datos, servicio ni control de acceso, todo lo
sustantivo del negocio quedo en [PENDIENTE]. Eso no es una falla del
repositorio: es lo que corresponde a una maqueta de diseno, y conviene leer
este documento como el listado de preguntas que la maqueta todavia no
responde.
