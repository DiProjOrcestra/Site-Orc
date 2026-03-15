import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectsGrid from "./components/ProjectsGrid";
import PortfolioPage from "./components/PortfolioPage";

import Hakuna from "./pages/Hakuna";
import FitFlow from "./pages/FitFlow";
import Allegro from "./pages/Allegro";
import Edwiges from "./pages/Edwiges";
import Nutrir from "./pages/Nutrir";
import FourSeasons from "./pages/FourSeasons";
import AdotePost from "./pages/AdotePost";
import CamaroAmarelo from "./pages/CamaroAmarelo";
import MeninosPorteira from "./pages/MeninosPorteira";
import Ect2016 from "./pages/Ect2016";
import ElasProjetam from "./pages/ElasProjetam";
import MeteoroPegasus from "./pages/MeteoroPegasus";
import Moonlight from "./pages/Moonlight";
import Gloria from "./pages/Gloria";

import "./styles/project-page.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<ProjectsGrid />} />
        <Route path="/portfolio" element={<PortfolioPage />} />

        <Route path="/hakuna" element={<Hakuna />} />
        <Route path="/fitflow" element={<FitFlow />} />
        <Route path="/allegro" element={<Allegro />} />
        <Route path="/edwiges" element={<Edwiges />} />
        <Route path="/nutrir" element={<Nutrir />} />
        <Route path="/four-seasons" element= {<FourSeasons />} />
        <Route path="/adote-post" element= {<AdotePost />} />
        <Route path="/camaro-amarelo" element= {<CamaroAmarelo />} />
        <Route path="/meninos-porteira" element= {<MeninosPorteira />} />
        <Route path="/ect2016" element= {<Ect2016 />} />
        <Route path="/elas-projetam" element= {<ElasProjetam />} />
        <Route path="/meteoro-pegasus" element= {<MeteoroPegasus />} />
        <Route path="/moonlight" element= {<Moonlight />} />
        <Route path="/gloria" element= {<Gloria />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;