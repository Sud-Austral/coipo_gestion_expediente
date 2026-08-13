import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Bandeja from './pages/Bandeja.jsx';
import WorkflowPage from './pages/Workflow.jsx';
import Historico from './pages/Historico.jsx';
import Nueva from './pages/Nueva.jsx';
import MisExpedientes from './pages/MisExpedientes.jsx';
export default function App(){return <Layout><Routes><Route path="/" element={<Dashboard/>}/><Route path="/bandeja" element={<Bandeja/>}/><Route path="/workflow" element={<WorkflowPage/>}/><Route path="/historico" element={<Historico/>}/><Route path="/nueva" element={<Nueva/>}/><Route path="/mis-expedientes" element={<MisExpedientes/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></Layout>}
