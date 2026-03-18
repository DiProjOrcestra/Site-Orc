import ProjectSection from "../components/ProjectSection";
import nutrirImg from "../assets/nutrir.png";
import "../styles/project-page.css";

function Nutrir() {
  return (
    <main className="project">

      <img className="project-image" src={nutrirImg} alt="Projeto Nutrir"/>

      <h1 className="project-title">Nutrir Jr</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
          O treinamento foi realizado para a Nutrir, Empresa Júnior do curso de Nutrição da Universidade de Brasília,
          a empresa possui como serviços consultorias na área de nutrição. O objetivo da Nutrir foi montar um
          treinamento especializado voltado para os funcionários das diferentes áreas envolvidas no processo de
          preparação das refeições, ela esperava poder reforçar a importância das boas práticas de higiene pessoal
          qual em exercício do trabalho.
        </p>
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
          A Nutrir entrou em contato com a Orc’estra Gamificação solicitando o desenvolvimento do Design da Gamificação para
          tal treinamento, com o objetivo de tornar ele mais dinâmico e interativo.
        </p>

        <p>
          Com o objetivo de pesquisar a fundo quais são os principais obstáculos, foi realizada uma entrevista com a Empresa Junior
          a fim de compreender todo o contexto do seu treinamento em relação a seu cliente, analisando o problema de diferentes perspectivas.
        </p>

        <p>
          Como proposta de solução aos problemas encontrados, a Orc’estra Gamificação realizou o design da gamificação do treinamento
          a ser realizado pela Nutrir, de maneira que atenda às necessidades dos funcionários do restaurante em questão e do cliente,
          com o objetivo de motivar e engajar os funcionários durante o treinamento, na expectativa de reforçar as práticas de maneira
          divertida e engajadora.
        </p>
      </ProjectSection>

    </main>
  );
}

export default Nutrir;