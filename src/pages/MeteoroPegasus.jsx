import ProjectSection from "../components/ProjectSection";
import meteoroImg from "../assets/meteoro-pegasus.png";
import "../css/project-page.css";

function MeteoroPegasus() {
  return (
    <main className="project">

      <img className="project-image" src={meteoroImg} alt="Projeto Meteoro de Pegasus"/>

      <h1 className="project-title">Meteoro de Pegasus</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
          O projeto Meteoro de Pegasus foi trazido o jogo Synchronus2D que é um jogo que busca desenvolver 
          conhecimentos acerca da astrologia ao longo da história guiada pelas escolhas do jogador. 
          Nesse sentido, o jogo encontrava-se em formato de protótipo, de modo a ser aperfeiçoado com os 
          conhecimentos apresentados para nós.
         </p>
          <p>
            No jogo, protagonista Gani é guiado ao seu destino por meio de suas próprias decisões, usando os 
            conhecimento de Astroel, o guia, que definem seu Mapa Astral. Dessa forma, a proposta do jogo 
            consiste em desenvolver, no jogador, reflexões arquetípicas através da exploração de mitos e de 
            escolhas simbólicas. Entretanto, era perceptível a ausência de elementos que proporcionem engajamento e 
            motivação constante nos usuários. Além disso, temos pouca ou quase nenhuma perda no jogo, elemento 
            necessário para engajamento constante.
          </p>
       
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
          Nessa ótica, foi possível encaixar elementos que instiguem a sensação de ganho e dono, as quais podem ser perdidas, 
          satisfazendo a problemática da perda. Por fim, é importante fornecer um tutorial e dicionário, opcional, para 
          o usuário para que possa usufruir ainda mais da experiência.
        </p>    
        <p>
          A Orc’estra ficou responsável por aperfeiçoar a experiência do game e inserir elementos da gamificação, trazendo consigo, 
          a bibliografia utilizada para desenvolvimento das ideias e soluções. As principais referências a serem utilizadas serão 
          a teoria dos players, por Richard Bartle e Andrzej Marczewski e o framework Octalysis por Yu-kai Chou. Satisfeito isso, 
          foi desenvolvida a jornada de experiência do usuário, em sua descoberta, entrada, dia-a-dia e saída, elementos desenvolvidos, 
          também, por Yu-kai Chou.
        </p>
        <p>
          A gamificação se abrange para usuários diversos que consomem conteúdos de Astrologia, têm interesse em sistemas de 
          auto-descoberta do estilo de quizzes. Esse público, geralmente, está disposto entre pessoas das mais diversas faixas 
          etárias. Que utilizam aparelhos móveis para realizar suas atividades diárias, de lazer e entretenimento, porém o 
          perfil dessas pessoas podem ser os mais variados possíveis, sendo assim, a explicação detalhada dos perfis de 
          players para essa gamificação, além de como os players de cada tipo utilizam e impactam o sistema em que estão 
          inseridos será informada neste tópico.
        </p>
        <p>
          A temática foi bem definida, portanto nessa consultoria seguimos com a ideia proposta que consiste na exploração 
          de pequenos mundos fantasias onde cada um terá sua própria personalização e desafios únicos de acordo com os 
          respectivos signos.
        </p>
        <p>
          Como a astrologia possui um grande acervo histórico e está relacionada com mitos antigos, é de cunho fulcral 
          para o jogador possuir elementos visuais desse estilo para facilitar a imersão e identificação com os conteúdos 
          apresentados pelo jogo. A mistura com a tecnologia também é bem-vinda, pois vai gerar uma originalidade e 
          personalidade para o jogo.
        </p>
      </ProjectSection>

    </main>
  );
}

export default MeteoroPegasus;