import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectsGrid from "./components/ProjectsGrid";
import PortfolioPage from "./components/PortfolioPage";
import { projectRoutes } from "./routes/projectRoutes";

import "./styles/project-page.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectsGrid />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        {projectRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;