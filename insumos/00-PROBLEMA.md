# Problema, reconstruido desde el codigo

Este repositorio es una maqueta declarada como tal [README.md], asi que la
cadena de inferencia es todavia mas debil de lo habitual: lo que hay son
pantallas acordadas, no un sistema en operacion.

## Que se gestiona, y por lo tanto que probablemente estaba roto

Las pantallas cubren el ciclo de un expediente: se ingresa una solicitud
nueva, entra a una bandeja, avanza por un flujo de estados, se asigna a un
responsable que tiene su propia bandeja, y termina archivado en un historico
[frontend/src/pages/Nueva.jsx], [frontend/src/pages/Bandeja.jsx],
[frontend/src/pages/Workflow.jsx], [frontend/src/pages/MisExpedientes.jsx],
[frontend/src/pages/Historico.jsx]. El sistema gestiona el recorrido de un
expediente entre personas y estados, luego probablemente habia un problema
para saber donde esta cada expediente y quien lo tiene [INFERIDO].

Hay estados definidos como catalogo [frontend/src/lib/ui.jsx] y estados
terminales identificados aparte [frontend/src/pages/Historico.jsx]. Que se
distinga explicitamente cual es el final del ciclo sugiere que antes no habia
un cierre claro [INFERIDO]. Cual es el estado terminal correcto segun el
negocio es [PENDIENTE].

Hay tambien una nocion de prioridad por expediente [frontend/src/lib/ui.jsx].
De ahi se infiere que no todos los expedientes se atienden en el mismo orden
[INFERIDO]. Quien asigna esa prioridad y con que regla: [PENDIENTE].

## Quien sufre el problema

Los perfiles si estan en el codigo, pero no como control de acceso. La
documentacion del repositorio describe un selector de perfil con dos opciones,
jefatura y responsable, y asocia pantallas distintas a cada uno [README.md], y
la barra que permite cambiar de perfil vive en la envoltura comun de la
aplicacion [frontend/src/components/Layout.jsx]. Se infiere que el negocio
distingue al menos dos roles: quien reparte el trabajo y quien lo ejecuta
[INFERIDO].

Hay que decirlo con precision: ningun guard, decorador ni verificacion impone
esos perfiles. No existe en la evidencia ningun archivo de autenticacion, ni
dependencia que la provea —el manifiesto declara nueve dependencias y ninguna
lo hace [frontend/package.json:1]—, ni variable de entorno de ningun tipo. El
selector cambia lo que se muestra, no lo que se puede hacer [INFERIDO].

Si hay mas roles ademas de esos dos, y CUANTAS PERSONAS ocupan cada uno:
[PENDIENTE].

## Como lo resolvian antes

El codigo no lo dice. No hay importadores de planilla, ni endpoints de carga,
ni dependencias de lectura de archivos de datos en el manifiesto
[frontend/package.json:1]. Los datos de la maqueta estan escritos a mano en un
archivo de ejemplos [frontend/src/fixtures/expedientes.js], lo que es propio de
una maqueta y no dice nada sobre el proceso real [INFERIDO].

Como se llevaba el registro de expedientes antes de esta maqueta: [PENDIENTE].
Es una de las preguntas que esta maqueta justamente deberia servir para
hacer.

## Volumen

Practicamente no hay indicios. No hay base de datos, no hay indices, no hay
paginacion: la maqueta declara estado en memoria [README.md] y lo mantiene en
un contexto compartido de la aplicacion
[frontend/src/context/ExpedienteContext.jsx]. Lo unico que se puede decir es
que el diseno actual asume un volumen que cabe en memoria del navegador
[INFERIDO], y eso es una decision de maqueta, no una medicion.

Cuantos expedientes entran al mes y cuantos hay abiertos a la vez:
[PENDIENTE].

## Que pasa si no se hace nada

[PENDIENTE]. El codigo no lo responde y no se deduce de que la maqueta exista.

## Quien decide que esta terminado

[PENDIENTE] en cuanto al negocio. Lo unico que consta es que el repositorio
lleva su propio control de versiones de la maqueta
[frontend/VERSIONES.md], y que la documentacion condiciona la validez de una
version a una aprobacion explicita del usuario [README.md]. Quien es esa
persona y como se registra su aprobacion: [PENDIENTE].

## Marco normativo

La descripcion del repositorio asocia el proyecto a un area juridica y a una
contraparte con nombre propio. No se transcribe aca. Que ese sea el marco de
la iniciativa, y que normativa aplique a la tramitacion de expedientes:
[VERIFICAR].
