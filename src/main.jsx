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
      <Header /> 
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicos/:id" element={<ServicePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)