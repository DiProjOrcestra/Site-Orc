import "../styles/portfolio-page.css";
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
      title: "Adote um Post",
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
      title: "Elas projetam",
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
            Saiba todos os projetos que fizemos em cada um de nossos serviços.
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
        <ProjectSection title="Desenvolvimento Gamificado">
          O Desenvolvimento Gamificado é o serviço em que criamos um sistema gamificado 
          a partir do uso de frameworks e técnicas de gamificação consolidadas no mercado internacional. 
        </ProjectSection>

        <div className="portfolio-grid">
          {desenvolvimento.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <ProjectSection title="Concepção de Software">
          A Concepção de Software Gamificado é o nosso serviço no qual criamos uma ideia, um plano ou 
          um design para um software antes que a sua implementação comece. Esse serviço estabelece a 
          base para o projeto e ajuda a garantir que o produto final atenda às necessidades e requisitos do usuário.
        </ProjectSection>

        <div className="portfolio-grid">
          {concepcao.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <ProjectSection title="Design de Gamificação">
          O Design de Gamificação é o nosso serviço no qual aplicamos as técnicas de Gamificação 
          no seu contexto, trazendo mais engajamento e motivação ao seu público. 
          Utilizamos frameworks consolidados no mercado para o planejamento e construção do 
          seu Design de uma forma completamente personalizada e inovadora.
        </ProjectSection>

        <div className="portfolio-grid">
          {design.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <ProjectSection title="Treinamento">
          O Treinamento Gamificado é o nosso serviço no qual montamos um treinamento acerca dos conteúdos Gamificação, 
          Scrum, Engenharia de Requisitos ou Gestão de Tempo e apresentamos para o público desejado em aulas que podem 
          durar horas ou dias dependendo das necessidades dos ouvintes. 
        </ProjectSection>

        <div className="portfolio-grid">
          {treinamento.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>


      <section className="portfolio-section">
        <ProjectSection title="Consultoria">
         A consultoria gamificada se baseia em estudos da sua gamificação existente, 
         observando seus objetivos e metas. Com isso, nós utilizamos frameworks como 6D e 
         Octalysis para propor modificações e melhorias para tornar a gamificação mais eficiente.
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