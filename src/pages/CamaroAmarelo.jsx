import ProjectSection from "../components/ProjectSection";
import CamaroImg from "../assets/camaro-amarelo.png";
import "../css/project-page.css";

function CamaroAmarelo() {
  return (
    <main className="project">

      <img className="project-image" src={CamaroImg} alt="Projeto Camaro Amarelo"/>

      <h1 className="project-title">Camaro Amarelo</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
          O projeto Camaro foi um projeto encomendado pela Projecta, que é uma Empresa Júnior de Arquitetura e 
          Urbanismo da Universidade Federal da Bahia, ela está sempre trabalhando com equipe capacitada e entregando 
          projetos de qualidade. A mesma procurou a Orc’estra Gamificação com o objetivo de gamificar seu funcionamento 
          interno afim de tornar a empresa acolhedor, engajador e unido.
         </p>
          <p>
            Dentre os problemas a serem trabalhados no design foram elencados o baixo engajamento dos membros da empresa 
            nos projetos, falta de sintonia, desalinhamento cultural e pouco senso de pertencimento no movimento empresa 
            júnior.
          </p>
       
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
          Tendo esse cenário, a Projecta tomou a decisão de aumentar a conexão entre seus membros trazendo um diferencial 
          para sua vivência empresarial diária, a gamificação. Assim, trazendo motivação e engajamento para aqueles que 
          estão participando dos projetos e da empresa, tornando o processo mais divertido e cativante, os envolvendo em 
          uma narrativa gamificada com uma temática mágica e interessante.
        </p>    
        <p>
            A gamificação abrange todos os membros efetivos da Projecta. Para a composição de um projeto coerente para os 
            usuários, é relevante ter informações sobre o perfil de cada membro da empresa, para isso feita uma análise de 
            players com os Amarelinhos.
        </p>
        <p>
            Tendo isso em vista a análise do perfil dos jogadores, as propostas do design foram pensadas de modo a abranger
            todos os tipos para, assim, cada usuário ser motivado por algum elemento presente na gamificação.
        </p>
      </ProjectSection>

      <ProjectSection title="Resultados Obtidos">
        <p>
          A gente é a Projecta, Empresa Júnior de Arquitetura da UFBA Salvador, a gente contratou a Orc’estra para estar fazendo 
          nossa gamificação, e foi um divisor de águas, tanto na nossa cultura, quanto na nossa organização, estavamos passando 
          por muito problemas de desengajamento e procuramos a Orc’estra para desenvolver uma gamificação baseada em nossos problemas, 
          e a partir de toda demanda que a gente passou, eles fizeram uma solução baseada nos nossos problemas e hoje temos uma empresa 
          muito mais engajada e que de fato fica mais comprometida pelos resultados e tudo baseado na gamificação
        </p>
      </ProjectSection>


    </main>
  );
}

export default CamaroAmarelo;