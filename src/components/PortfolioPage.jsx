import "../css/portfolio-page.css";
import { Link } from "react-router-dom";
import ProjectSection from "../components/ProjectSection";
import ProjectCard from "../components/ProjectCard";
import portframe from "../assets/portfolio-img.svg";

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
import gloria from "../assets/gloria.png";

function PortfolioPage() {
  const desenvolvimento = [
    {
      title: "Glória",
      image: gloria,
      path: "/gloria",
    },
    {
      title: "Hakuna",
      image: hakuna,
      path: "/hakuna",
    },
    {
      title: "Four Seasons",
      image: fourSeasons,
      path: "/four-seasons",
    },
    {
      title: "Adote um Postinho",
      image: adotePost,
      path: "/adote-post",
    },
  ];

  const concepcao = [
    {
      title: "FitFlow",
      image: fitflow,
      path: "/fitflow",
    },
  ];

  const design = [
    {
      title: "Allegro",
      image: allegro,
      path: "/allegro",
    },
    {
      title: "Camaro Amarelo",
      image: camaroAmarelo,
      path: "/camaro-amarelo",
    },
    {
      title: "Meninos da Porteira",
      image: meninosPorteira,
      path: "/meninos-porteira",
    },
  ];

  const consultoria = [
    {
      title: "Edwiges",
      image: edwiges,
      path: "/edwiges",
    },
    {
      title: "Meteoro de Pegasus",
      image: meteoroPegasus,
      path: "/meteoro-pegasus",
    },
    {
      title: "Moonlight Sonata",
      image: moonlight,
      path: "/moonlight",
    },
  ];

  const treinamento = [
    {
      title: "Nutrir Jr",
      image: nutrir,
      path: "/nutrir",
    },
    {
      title: "ECT 2016",
      image: ect2016,
      path: "/ect2016",
    },
    {
      title: "Elas Projetam",
      image: elasProjetam,
      path: "/elas-projetam",
    },
  ];

  return (
    <main className="portfolio-page">
      <section className="port-c">
        <div className="port-content">

          <h1 className="port-title">Portfólio</h1>

          <p className="port-text">
            Conheça alguns dos problemas que já ajudamos a transformar em produtos e experiências digitais.
          </p>
        </div>

        <div className="port-frame-image">
          <img
            className="port-img"
            src={portframe}
            alt="Ilustração do portfólio"
          />
        </div>
      </section>

      <section className="portfolio-section">
        <ProjectSection title="Desenvolvimento de Software">
          Projetos em que transformamos necessidades em sistemas, plataformas e experiências
          digitais funcionais, personalizadas e preparadas para seus usuários.
        </ProjectSection>

        <div className="portfolio-grid">
          {desenvolvimento.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <ProjectSection title="Concepção de Software">
          Projetos em que estruturamos ideias, requisitos e experiências antes do desenvolvimento,
          ajudando a transformar possibilidades em produtos digitais mais claros e viáveis.
        </ProjectSection>

        <div className="portfolio-grid">
          {concepcao.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <ProjectSection title="Design de Gamificação">
          Projetos em que utilizamos princípios de gamificação para estruturar jornadas,
          comportamentos, feedbacks e experiências mais envolventes.
        </ProjectSection>

        <div className="portfolio-grid">
          {design.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <ProjectSection title="Treinamentos">
          Experiências de aprendizagem desenvolvidas para compartilhar conhecimento de maneira
          prática, estruturada e adaptada ao público.
        </ProjectSection>

        <div className="portfolio-grid">
          {treinamento.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>


      <section className="portfolio-section">
        <ProjectSection title="Consultoria">
          Projetos em que analisamos experiências gamificadas existentes e propomos melhorias
          a partir de objetivos, contexto e comportamento dos usuários.
        </ProjectSection>

        <div className="portfolio-grid">
          {consultoria.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default PortfolioPage;