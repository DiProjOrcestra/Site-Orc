import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx' // Se o seu App for a Home
import ServicePage from '../src/pages/PageServicos'
import Header from './components/Header'
import PortfolioPage from '../src/components/PortfolioPage.jsx'
import Hakuna from "../src/pages/Hakuna";
import FitFlow from "../src/pages/FitFlow";
import Allegro from "../src/pages/Allegro.jsx";
import Edwiges from "../src/pages/Edwiges";
import Nutrir from "../src/pages/Nutrir";
import FourSeasons from "../src/pages/FourSeasons";
import AdotePost from "../src/pages/AdotePost";
import CamaroAmarelo from "../src/pages/CamaroAmarelo";
import MeninosPorteira from "../src/pages/MeninosPorteira";
import Ect2016 from "../src/pages/Ect2016";
import ElasProjetam from "../src/pages/ElasProjetam";
import MeteoroPegasus from "../src/pages/MeteoroPegasus";
import Moonlight from "../src/pages/Moonlight";
import Gloria from "../src/pages/Gloria";
import Contact from './components/Contato.jsx'
import ContactForm from "./components/form.jsx";
import QuemSomos from "../src/pages/QuemSomos.jsx";
import BlogPage from "../src/pages/BlogPage.jsx";
import ScrollToTop from './components/ScrollTotop.jsx'
import PageTitle from './components/PageTitle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header /> 
      <ScrollToTop/>
      <PageTitle/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicos/:id" element={<ServicePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/hakuna" element={<Hakuna />} />
        <Route path="/fitflow" element={<FitFlow />} />
        <Route path="/allegro" element={<Allegro />} />
        <Route path="/edwiges" element={<Edwiges />} />
        <Route path="/nutrir" element={<Nutrir />} />
        <Route path="/four-seasons" element={<FourSeasons />} />
        <Route path="/adote-post" element={<AdotePost />} />
        <Route path="/camaro-amarelo" element={<CamaroAmarelo />} />
        <Route path="/meninos-porteira" element={<MeninosPorteira />} />
        <Route path="/ect2016" element={<Ect2016 />} />
        <Route path="/elas-projetam" element={<ElasProjetam />} />
        <Route path="/meteoro-pegasus" element={<MeteoroPegasus />} />
        <Route path="/moonlight" element={<Moonlight />} />
        <Route path="/gloria" element={<Gloria />} />
        <Route path='/contato' element={<Contact/>} />
        <Route path='/quem-somos' element={<QuemSomos/>} />
        <Route path='/blog' element={<BlogPage/>} />
      </Routes>
      <ContactForm/>
    </BrowserRouter>
  </StrictMode>,
)