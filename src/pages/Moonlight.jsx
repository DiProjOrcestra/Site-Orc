import ProjectSection from "../components/ProjectSection";
import moonlightImg from "../assets/moonlight.png";
import "../css/project-page.css";

function Moonlight() {
  return (
    <main className="project">

      <img className="project-image" src={moonlightImg} alt="Projeto Moonlight Sonata"/>

      <h1 className="project-title">Moonlight Sonata</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
        O Moonlight Sonata foi uma Consultoria para a Mais Consultoria que foi eleita a maior de Minas Gerais e 
        quarta maior empresa junior do Brasil entre mais de 1300 empresas juniores, a Mais Consultoria é formada 
        por graduandos do curso de Engenharia de Produção da Universidade Federal de Juiz de Fora. Hoje, com 19 
        anos de história, coleciona experiências de impacto e transformação em todo o Brasil, atendendo mais de 10 
        regiões, 60 cidades e realizando mais de 500 consultorias em sua trajetória.
         </p>
          <p>
            A Gamificação pedida foi melhorar a gamificação deles, adaptar para o contexto EAD a Gamificação já existente, 
            criar um clima de competição saudável, fomentar a interação em equipe, estimulando os membros da Mais Consultoria 
            a se conhecerem melhor.
          </p>
       
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
          Criamos um Manual temático com base nos gostos da empresa, com adaptação de uma gamificação o qual funcionava apenas 
          de forma presencial para remota, melhoramos a conexão entre os membros dentro da Empresa Junior e resultados 
          mais eficientes e rápidas por conta do engajamento.
        </p>    
      </ProjectSection>

    </main>
  );
}

export default Moonlight;