import React from 'react';import{createRoot}from'react-dom/client';import{BrowserRouter}from'react-router-dom';import'./index.css';import App from './App.jsx';import{ExpedienteProvider}from'./context/ExpedienteContext.jsx';
createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><ExpedienteProvider><App/></ExpedienteProvider></BrowserRouter></React.StrictMode>)
