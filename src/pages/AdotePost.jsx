import ProjectSection from "../components/ProjectSection";
import adotePostImg from "../assets/adote-post.png";
import "../styles/project-page.css";

function AdotePost() {
  return (
    <main className="project">

      <img className="project-image" src={adotePostImg} alt="Projeto Adote um postinho"/>

      <h1 className="project-title">Adote um postinho</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
         O projeto Adote um Postinho foi um Desenvolvimento Gamificado encomendado pelo Instituto de Fiscalização 
         e Controle(IFC) que é uma ONG com mais de 10 anos de atuação na área do controle social e transparência 
         no DF e em outros Estados.
         </p>
        <p>
            O objetivo e desafio com esse projeto é gerar um sentimento de pertencimento, cuidado do bem coletivo 
            e de responsabilidade no melhoramento das condições dos postos de saúde do DF pela própria população 
            que usa os postos.
        </p>
       
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
          No Adote um Postinho foram lançados todos os dados dos 61 postinhos que passaram pela Auditoria Cívica 
          da Saúde que é um projeto do IFC que fomenta a avaliação e acompanhamento das condições dos postos de 
          saúde pela própria população que faz uso dos postos. A metodologia foi desenvolvida pelo IFC e é 
          basicamente uma coleta de informações dos postos de saúde e através dele a população do DF poderá 
          “adotar um postinho para cuidar dele. A gamificação é usada como um meio para a mudança de comportamento 
          e é usada missões em sociedade para solucionar desafios.
        </p>    
      </ProjectSection>

    </main>
  );
}

export default AdotePost;