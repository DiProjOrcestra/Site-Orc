import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx' // Se o seu App for a Home
import ServicePage from './pages/PageServicos'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* O Header fica aqui para ser fixo em todas as páginas */}
      <Header /> 
      
      <Routes>
        {/* Rota para a sua Home ou componente App atual */}
        <Route path="/" element={<App />} />
        
        {/* Rota dinâmica para as páginas de serviço da Orc'estra */}
        <Route path="/servicos/:id" element={<ServicePage />} />
        
        {/* Rota de fallback caso o usuário digite algo errado */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)