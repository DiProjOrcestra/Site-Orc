import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectsGrid from "./components/ProjectsGrid";

import Hakuna from "./pages/Hakuna";
import FitFlow from "./pages/FitFlow";
import Allegro from "./pages/Allegro";
import Edwiges from "./pages/Edwiges";
import Nutrir from "./pages/Nutrir";

import "./styles/project-page.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<ProjectsGrid />} />

        <Route path="/hakuna" element={<Hakuna />} />
        <Route path="/fitflow" element={<FitFlow />} />
        <Route path="/allegro" element={<Allegro />} />
        <Route path="/edwiges" element={<Edwiges />} />
        <Route path="/nutrir" element={<Nutrir />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;