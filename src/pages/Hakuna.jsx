import ProjectSection from "../components/ProjectSection";
import hakunaImg from "../assets/hakuna.png";
import "../css/project-page.css";

function Hakuna() {
  return (
    <main className="project">

      <img className="project-image" src={hakunaImg} alt="Projeto Hakuna"/>

      <h1 className="project-title">Hakuna</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
          O Hakuna foi um Desenvolvimento Gamificado para a Gino Terentim que é um grande empreendedor
          que já atuou no mercado alimentício, de plantas carnívoras e atualmente na educação com um projeto
          de cunho social direcionado a reinventar a educação e aprendizado(um dos objetivos de desenvolvimento
          sustentável) por meio da educação digital, fazendo uso das tecnologias exponenciais para oferecer
          educação extraordinária, de forma acessível, a todos. Já treinaram mais de 5 mil profissionais ao
          longo de um ano.
         </p>
          <p>
            A Gamificação pedida foi gamificar o ensino e aprendizagem, uma plataforma web gamificada, temática de Safari,
            Incentivos na conclusão de cursos, Incentivos para explorar a plataforma.
          </p>
       
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
          Desenvolvemos uma Plataforma Web com missões para incentivar o aprendizado dos cursos
          oferecidos, um certificado e arte de fundo totalmente original.
        </p>    
      </ProjectSection>

    </main>
  );
}

export default Hakuna;