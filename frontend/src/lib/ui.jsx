export const ESTADOS = ['Pendiente','En proceso','Bloqueado','En revisión','Aprobado / Conforme','Archivado / Cerrado','Anulado'];
export const estadoClass = s => ({
  'Pendiente':'bg-slate-100 text-slate-700 border-slate-200',
  'En proceso':'bg-blue-50 text-blue-700 border-blue-200',
  'Bloqueado':'bg-amber-50 text-amber-800 border-amber-200',
  'En revisión':'bg-violet-50 text-violet-700 border-violet-200',
  'Aprobado / Conforme':'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Archivado / Cerrado':'bg-slate-100 text-slate-600 border-slate-200',
  'Anulado':'bg-red-50 text-red-700 border-red-200'
}[s] || 'bg-slate-100 text-slate-700 border-slate-200');
export function Badge({children}){return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${estadoClass(children)}`}>{children}</span>}
export function Prioridad({children}){const c={Normal:'bg-slate-100 text-slate-700 border-slate-200',Media:'bg-amber-50 text-amber-800 border-amber-200',Urgente:'bg-red-50 text-red-700 border-red-200'}[children]||'bg-slate-100 text-slate-700 border-slate-200';return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${c}`}>{children}</span>}
export const active = e => !['Archivado / Cerrado','Anulado'].includes(e.estado);
export const daysUntil = date => Math.ceil((new Date(`${date}T23:59:59`) - new Date('2026-08-12T12:00:00')) / 86400000);
