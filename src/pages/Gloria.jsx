import ProjectSection from "../components/ProjectSection";
import gloriaImg from "../assets/gloria.png";
import "../css/project-page.css";
import tabelaGloria from "../assets/tabela-gloria.png";
import exemploGloria from "../assets/exemplo-gloria.webp";
import imagemFinal from "../assets/img-final-gloria.webp";


function Gloria() {
  return (
    <main className="project">

      <img className="project-image" src={gloriaImg} alt="Projeto Gloria"/>

      <h1 className="project-title">Glória | Girls Just Wanna Have Fun</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
          O Instituto Glória trabalha com uma Inteligência Artificial que escuta e ajuda mulheres a 
          lidarem com violências. O Na Praia é um dos maiores eventos de Brasília que conta com shows e 
          programação para toda a família.
         </p>
          <p>
            O Instituto Glória viu no evento “Na Praia” uma oportunidade única de promover a importância 
            das mulheres e suas notáveis contribuições através da história. Em parceria com a Orc’estra, 
            foi desenvolvido uma gamificação inovadora, utilizando modelagem 3D e desenvolvimento de uma 
            plataforma para criar uma atração memorável e repleta de aprendizado.
          </p>
       
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
          Para atender a esse desafio, o Instituto Glória formou uma parceria estratégica conosco. 
          Juntas, as duas organizações desenvolveram uma gamificação inovadora, que utilizou modelagem 
          3D e o desenvolvimento de uma plataforma interativa.
        </p>    
        <p>
          A gamificação criada foi projetada para ser uma atração central no evento “Na Praia”. 
          Utilizando avançadas técnicas de modelagem 3D, foi construída uma plataforma digital 
          que permitia aos participantes interagir com histórias inspiradoras de mulheres notáveis. 
          A plataforma feita por nós oferecia quizzes, desafios e mini-jogos, todos desenhados para educar 
          e inspirar os usuários sobre o papel fundamental das mulheres na história.
        </p>

        <img className="tabela-gloria" src={tabelaGloria} alt="Tabela"/>
      </ProjectSection>

      

      <ProjectSection title="Resultados Obtidos">
        <p>
          No evento “Na Praia”, uma cápsula futurista foi estrategicamente instalada próxima à entrada 
          principal para atrair a atenção dos visitantes assim que chegassem ao local. Este ponto de interesse 
          não só adicionava um elemento de curiosidade e inovação, mas também servia como um marco de destaque para 
          o projeto em questão.
        </p>
        <p>
          A aplicação contava com mais de 50 perguntas que testavam o conhecimento dos visitantes sobre descobertas 
          e impactos significativos na história de um país feitos por mulheres. Focando na imersão, os usuários eram 
          recepcionados por um avatar chamado Glória, que os guiava desde o primeiro contato dentro do aplicativo até 
          o encontro com ela na cápsula localizada na entrada do evento.
        </p>
        <p>
          Glória não apenas apresentava as perguntas, mas também fornecia contexto e informações adicionais sobre cada uma, 
          enriquecendo a experiência educativa e interativa dos participantes. Este avatar atuava como uma anfitriã virtual, 
          criando uma conexão personalizada e contínua com os usuários. Ela os acompanhava em uma jornada de aprendizado, 
          tornando o uso da aplicação mais envolvente e memorável.
        </p>

        <img className="exemplo-gloria" src={exemploGloria} alt="Exemplo"/>

        <p>
          Ao final da jornada, caso os usuários atingissem uma quantidade estabelecida de acertos, eles recebiam um token entregue
          ao término das perguntas. Este token podia ser trocado por brindes variados, que iam desde drinks e itens exclusivos do evento
          “Na Praia” até produtos da instituição Glória.
        </p>
        <p>
          Essa recompensa final não só incentivava a participação e o engajamento dos visitantes, mas também proporcionava uma experiência 
          memorável, celebrando o conhecimento adquirido e a conexão com o projeto.
        </p>
        <p>
          Durante o evento, mais de 1200 usuários participaram ativamente da plataforma e da gamificação. Além de se engajarem com as 
          atividades propostas, muitos demonstraram um profundo interesse em conhecer melhor a instituição Glória. 
          Eles passaram mais tempo conversando com a inteligência artificial dentro da cápsula, aprofundando-se nas discussões sobre 
          a realidade da violência contra as mulheres.
        </p>
        <p>
          Como prova de sua eficácia a seguir uma matéria em que nossa empresa foi reconhecida pelo incrível projeto 
          <a href="https://www.correiobraziliense.com.br/euestudante/ensino-superior/2023/07/5108621-robo-brasiliense-contra-a-violencia-de-genero-chega-a-190-paises.html" 
          target="_blank" rel="noreferrer"> Clicando aqui</a>
        </p>
        <p>
          Além disso, o aplicativo tem sido aproveitado até mesmo no evento desse ano, como mostra na imagem abaixo: 
        </p>

        <img className="exemplo-gloria" src={imagemFinal} alt="Exemplo"/>
        <p>
          Veja a seguir o resultado final do nosso projeto: 
        </p>
        <a href="https://gloria-gamificacao.netlify.app/" target="_blank" rel="noreferrer">https://gloria-gamificacao.netlify.app/</a>
      </ProjectSection>


    </main>
  );
}

export default Gloria;