import ProjectSection from "../components/ProjectSection";
import ElasProjetamImg from "../assets/elas-projetam.png";
import "../css/project-page.css";

function ElasProjetam() {
  return (
    <main className="project">

      <img className="project-image" src={ElasProjetamImg} alt="Projeto Hakuna"/>

      <h1 className="project-title">Elas Projetam</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
          O Gamificação em Família foi um workshop de gamificação desenvolvido pela Orc’estra Gamificação 
          juntamente com a Elas Projetam que foram quem idealizaram, ele foi realizado durante o feriado do 
          Dia das Crianças com atividades paralelas para toda a família.
         </p>
       
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
          Para criar e desenvolver o objetivo do workshop, foi utilizada a técnica do Golden Circle. 
          Começa perguntando o porquê, levantando os motivos de estar fazendo o evento. Então, 
          como faríamos para alcançar esse porquê, e então o que faríamos para alcançar o objetivo.
        </p>    
        <p>
          Foi feito um levantamento de conteúdo, o Golden Circle contribuiu para encontrar quais 
          temas são abordados no workshop, temas esses que são Desafio no engajamento de equipe, 
          mudança de comportamento para alavancar resultados, gamificação para projetos: funciona mesmo? 
          Verificando resultados da gamificação para mudanças de estratégia, incluindo a família nos desafios do dia-a-dia.
        </p>
      </ProjectSection>

    </main>
  );
}

export default ElasProjetam;