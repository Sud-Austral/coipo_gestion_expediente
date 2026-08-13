import { createContext, useContext, useState } from 'react';
import { expedientesIniciales } from '../fixtures/expedientes.js';

const C = createContext(null);
const stamp = () => new Date().toLocaleString('es-CL', { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' });

export function ExpedienteProvider({ children }) {
  const [expedientes, setExpedientes] = useState(expedientesIniciales);
  const [rol, setRol] = useState('jefatura');
  const [usuario, setUsuario] = useState('Jefatura');

  const actualizar = (id, fn) => setExpedientes(xs => xs.map(x => x.id === id ? fn({ ...x, historial:[...x.historial], comentarios:[...x.comentarios] }) : x));
  const evento = (a, text, actor='Jefatura', comentario) => { a.historial.push([stamp(), text, actor]); if (comentario) a.comentarios.push(comentario); };

  const cambiarEstado = (id, estado, actor=usuario, comentario='') => actualizar(id, a => { const prev=a.estado; a.estado=estado; evento(a, `${prev} → ${estado}`, actor, comentario); if(estado==='En proceso') a.fechaUltimoCambio=stamp(); return a; });
  const asignar = (id, responsable) => actualizar(id, a => { a.responsable=responsable; a.fechaDerivacion='2026-08-12'; const prev=a.estado; a.estado='En proceso'; evento(a, `Asignado a ${responsable}`, 'Jefatura'); evento(a, `${prev} → En proceso`, 'Jefatura'); return a; });
  const comentar = (id, texto, actor=usuario) => actualizar(id, a => { a.comentarios.push(texto); evento(a, 'Comentario registrado', actor); return a; });
  const bloquear = (id, motivo, comentario) => actualizar(id, a => { const prev=a.estado; a.estado='Bloqueado'; a.bloqueo={motivo, comentario, inicio:stamp()}; evento(a, `${prev} → Bloqueado`, a.responsable || 'Responsable', comentario); return a; });
  const liberar = (id, comentario) => actualizar(id, a => { const inicio=a.bloqueo?.inicio || ''; a.bloqueo={...a.bloqueo, fin:stamp(), liberacionComentario:comentario}; a.estado='En proceso'; evento(a, 'Bloqueado → En proceso', a.responsable || 'Responsable', `Liberación de bloqueo: ${comentario}`); return a; });
  const devolver = (id, comentario) => actualizar(id, a => { a.estado='En proceso'; evento(a, 'En revisión → En proceso', 'Jefatura', comentario); return a; });
  const aprobar = (id, comentario='') => actualizar(id, a => { a.estado='Aprobado / Conforme'; evento(a, 'En revisión → Aprobado / Conforme', 'Jefatura', comentario); return a; });
  const cerrar = (id, comentario='') => actualizar(id, a => { a.estado='Archivado / Cerrado'; evento(a, 'Aprobado / Conforme → Archivado / Cerrado', 'Jefatura', comentario); return a; });
  const anular = (id, comentario) => actualizar(id, a => { a.estado='Anulado'; evento(a, 'Anulado', 'Jefatura', comentario); return a; });
  const enviarRevision = (id, comentario) => actualizar(id, a => { a.estado='En revisión'; evento(a, 'En proceso → En revisión', a.responsable || 'Responsable', comentario); return a; });
  const crear = data => setExpedientes(xs => [{ ...data, id:`EXP-${String(100000 + xs.length + 1).slice(-6)}`, estado:data.responsable ? 'En proceso':'Pendiente', responsable:data.responsable || 'Sin asignar', fechaDerivacion:data.responsable?'2026-08-12':'', comentarios:data.comentarioInicial?[data.comentarioInicial]:[], historial:[[stamp(),'Solicitud creada','Jefatura'], ...(data.responsable ? [[stamp(),`Asignado a ${data.responsable}`,'Jefatura'],[stamp(),'Pendiente → En proceso','Jefatura']] : [])] }, ...xs]);

  return <C.Provider value={{expedientes,rol,setRol,usuario,setUsuario,asignar,cambiarEstado,comentar,bloquear,liberar,devolver,aprobar,cerrar,anular,enviarRevision,crear}}>{children}</C.Provider>;
}
export const useExpedientes = () => useContext(C);
