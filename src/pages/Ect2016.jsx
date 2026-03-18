import ProjectSection from "../components/ProjectSection";
import ect2016Img from "../assets/ect2016.png";
import "../styles/project-page.css";

function Ect2016() {
  return (
    <main className="project">

      <img className="project-image" src={ect2016Img} alt="Projeto ECT 2016"/>

      <h1 className="project-title">ECT 2016</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
          O projeto Meninos da Porteiro foi um projeto encomedado pela AD&M, Empresa Júnior de Admnistração da Universidade 
          de Brasília, eles tem uma missão de impactar histórias e transformar realidades com a inovação e gestão. 
          A mesma procurou a Orc’estra Gamificação com o objetivo de melhoria em: permanência dos membros, conhecimento de 
          oportunidades, senso de liderança e propósito pessoal dos membros, ambos de forma gamificada.
         </p>
          <p>
            Dentre os problemas a serem trabalhados na consultoria foram elencados a baixa permanência dos membros, na qual 
            a alta rotação afetava o planejamento estratégico da empresa.
          </p>
          <p>
            Foi visado o problema de pouco conhecimento das oportunidades oferecidas dentro da empresa, tendo a consequência 
            de um baixo senso de liderança, afetando o propósito pessoal do membro, que se sente desmotivado e o problema de 
            baixa permanência se repete.
          </p>
       
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
         Foi elencado também a oportunidade de trazer uma vivência única para os membros da empresa, trabalhando com 
          elementos de gamificação para ter o conhecimento da sua importância na formação profissional. Assim, fomentando a 
          formação de lideranças futuras, e com isso, formando membros mais alinhados com os objetivos da empresa.
        </p>    
        <p>
            Tendo esse cenário, a AD&M tomou a decisão de cativar seus membros trazendo um diferencial para os mesmos, a gamificação.
        </p>
        <p>
            Assim, trazendo motivação e engajamento para aqueles que fazem parte da empresa, tornando o processo de conhecimento e 
            pertencimento mais divertido e cativante, os envolvendo em uma narrativa gamificada com uma temática heroica e 
            interessante, afim de diminuir também a taxa de evasão de membros.
        </p>
        <p>
          Tendo isso em vista, as propostas do Design foram pensadas de modo a abranger todos os tipos de jogadores para, assim, 
          cada usuário ser motivado por algum elemento presente na gamificação.
        </p>
        <p>
          Para suprir as necessidades identificadas da AD&M, a temática escolhida foi ”Heróis”. O tema é um elemento utilizado para 
          tornar a jornada do membro mais lúdica e atrativa. Para o mesmo foi pensada uma narrativa envolvente e dinâmica onde convocamos 
          aqueles que tem interesse em salvar a empresa de um vilão fictício que roubou os arquivos mais importantes da AD&M, tal qual em grupo, 
          deverão solucionar as problemáticas/desafios propostos para derrotar o “vilão”, com escolha das habilidades mais famosas de heróis 
          e adequadas para cada desafio em questão.
        </p>
        <p>
          Com a finalidade de captar percepções quanto ao uso do tema realizamos uma pesquisa com os membros da empresa e pudemos através da mesma 
          observar que os participantes possuem preferência pelo tema, portanto, é importante usar elementos mais gerais sobre o tema, sem um grande 
          aprofundamento no mesmo, sempre instruindo os envolvidos sobre os elementos utilizados.
        </p>
      </ProjectSection>

    </main>
  );
}

export default Ect2016;