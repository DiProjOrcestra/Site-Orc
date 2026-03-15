import ProjectCard from "./ProjectCard";
import "../styles/project-grid.css";
import { Link } from "react-router-dom";


import hakuna from "../assets/hakuna.png";
import fitflow from "../assets/fitflow.png";
import allegro from "../assets/allegro.png";
import edwiges from "../assets/edwiges.png";
import nutrir from "../assets/nutrir.png";


function ProjectsGrid() {
  return (
    <section className="projects-grid">

      <div className="projects-header">
        <Link to="/portfolio" className="port-link">
          <h1 className="projects-title">Onde já impactamos?</h1>
        </Link>
        <p className="projects-subtitle">
          Portfólio
        </p>
      </div>
      
      <ProjectCard
        title="Hakuna"
        category="Desenvolvimento"
        image={hakuna}
        path="/hakuna"
      />

      <ProjectCard
        title="FitFlow"
        category="Concepção de Software"
        image={fitflow}
        path="/fitflow"
      />

      <ProjectCard
        title="Allegro"
        category="Design de Gamificação"
        image={allegro}
        path="/allegro"
      />

      <ProjectCard
        title="Edwiges"
        category="Consultoria"
        image={edwiges}
        path="/edwiges"
      />

      <ProjectCard
        title="Nutrir Jr"
        category="Treinamento"
        image={nutrir}
        path="/nutrir"
      />



    </section>
  );
}

export default ProjectsGrid;