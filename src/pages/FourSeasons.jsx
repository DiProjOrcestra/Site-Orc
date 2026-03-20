import ProjectSection from "../components/ProjectSection";
import fourSeasonsImg from "../assets/four-seasons.png";
import "../styles/project-page.css";

function FourSeasons() {
  return (
    <main className="project">

      <img className="project-image" src={fourSeasonsImg} alt="Projeto Four Seasons"/>

      <h1 className="project-title">Four Seasons</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
          O projeto Four Seasons foi um Desenvolvimento Gamificado encomendado pela Vale S.A que é uma mineradora 
          multinacional brasileira e uma das maiores operadoras de logística do país. É uma das maiores empresas 
          de mineração do mundo e também a maior produtora de minério de ferro, de pelotas e de níquel, 
          eles pediram no desenvolvimento atividades lúdicas e dinâmicas, educação ambiental, formato e 
          funcionamento de um jogo de tabuleiro e cards com perguntas e respostas.
        </p>
       
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
          Nosso desenvolvimento foi feito em uma Plataforma Web com um Formato de tabuleiro com perguntas e 
          respostas, desenvolvemos uma solidificação dos conceitos necessários dentro da empresa Vale com um 
          comprometimento dos membros a estarem se capacitando e ganhando pontos por isso.
        </p>    
      </ProjectSection>

    </main>
  );
}

export default FourSeasons;