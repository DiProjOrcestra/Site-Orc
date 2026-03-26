import ProjectSection from "../components/ProjectSection";
import fitflowImg from "../assets/fitflow.png";
import "../css/project-page.css";

function FitFlow() {
  return (
    <main className="project">

      <img className="project-image" src={fitflowImg} alt="Projeto Fitflow"/>

      <h1 className="project-title">FitFlow</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
          O FitFlow que é uma aplicação que visa incentivar o público geral à cuidar da própria saúde,
          a aplicação é capaz de realizar o acompanhamento dos exercícios físicos e controle da dieta e
          qualidade de sono do usuário.
        </p>

        <p>
          Dentre os problemas que visa solucionar é a baixa motivação que o público geral possui quando se
          trata de cuidados à saúde, sendo mais em específico, a falta de consistência e persistência na
          prática de exercícios e no controle da dieta e qualidade do sono.
        </p>
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
          É feito um sistema de grupos, onde os usuários que se conhecem e tenham se adicionado em lista de
          amigos criem estes grupos e possam acompanhar o progresso uns dos outros, uma maneira de fazer com
          os conhecidos do usuário possam incentivá-lo a continuar a cuidar da saúde e utilizar a aplicação.
        </p>

        <p>O tema escolhido foi “Esportes” e a gamificação foi dividida em 3 partes: Grupos, usuários e loja.</p>

        <p>
          Essa loja possui 6 categorias de itens, sendo eles contabilizados por pacotes de dinheiros, 1 pacote
          para os itens mais baratos e 3 para os mais caros.
        </p>
      </ProjectSection>

    </main>
  );
}

export default FitFlow;