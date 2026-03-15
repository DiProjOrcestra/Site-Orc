import ProjectCard from "./ProjectCard";
import "../styles/project-grid.css";


import hakuna from "../assets/hakuna.png";
import fitflow from "../assets/fitflow.png";
import allegro from "../assets/allegro.png";
import edwiges from "../assets/edwiges.png";
import nutrir from "../assets/nutrir.png";
import fourSeasons from "../assets/four-seasons.png";
import adotePost from "../assets/adote-post.png";
import camaroAmarelo from "../assets/camaro-amarelo.png";
import meninosPorteira from "../assets/meninos-port.png";
import ect2016 from "../assets/ect2016.png";
import elasProjetam from "../assets/elas-projetam.png";
import meteoroPegasus from "../assets/meteoro-pegasus.png";
import moonlight from "../assets/moonlight.png";


function ProjectsGrid() {
  return (
    <section className="projects-grid">

      <div className="projects-header">
        <h1 className="projects-title">Onde já impactamos?</h1>
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

      <ProjectCard
        title="Four Seasons"
        category="Desenvolvimento"
        image={fourSeasons}
        path="/four-seasons"
      />

      <ProjectCard
        title="Adote um Post"
        category="Desenvolvimento"
        image={adotePost}
        path="/adote-post"
      />

      <ProjectCard
        title="Camaro Amarelo"
        category="Design"
        image={camaroAmarelo}
        path="/camaro-amarelo"
      />

      <ProjectCard
        title="Meninos da Porteira"
        category="Design"
        image={meninosPorteira}
        path="/meninos-porteira"
      />

      <ProjectCard
        title="ECT 2016"
        category="Treinamento"
        image={ect2016}
        path="/ect2016"
      />

      <ProjectCard
        title="Elas projetam"
        category="Treinamento"
        image={elasProjetam}
        path="/elas-projetam"
      />

      <ProjectCard
        title="Meteoro de Pegasus"
        category="Consultoria"
        image={meteoroPegasus}
        path="/meteoro-pegasus"
      />

      <ProjectCard
        title="Moonlight Sonata"
        category="Consultoria"
        image={moonlight}
        path="/moonlight"
      />

    </section>
  );
}

export default ProjectsGrid;