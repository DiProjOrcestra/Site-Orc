import ProjectSection from "../components/ProjectSection";
import allegroImg from "../assets/allegro.png";
import "../styles/project-page.css";

function Allegro() {
  return (
    <main className="project">

      <img className="project-image" src={allegroImg} alt="Projeto Allegro"/>

      <h1 className="project-title">Allegro</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
          O projeto Allegro foi um projeto encomendado
          pela Pupila Audiovisual que é uma das Empresas Juniores dos cursos de Comunicação da Universidade de Brasília.
          O projeto tem como objetivo maximizar a eficiência dos membros da Pupila Audiovisual, os quais estavam tendo
          dificuldades com os prazos para a entrega de seus projetos e deveres.
        </p>

        <p>
          Entre os membros da Empresa é possível notar uma constante competitividade nos trabalhos,
          isso pode muitas vezes atrapalhar e desmotivar os membros a trabalharem em equipe.
        </p>
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
          Para a eficiência da gamificação, foi definido um tema com o qual os membros da Pupila Audiovisual se relacionem.
          A temática escolhida foi uma premiação cinematográfica baseada no Oscar. O tema foi o Prêmio Gado de Ouro.
        </p>

        <p>
          A escolha do nome foi inspirado no mascote da empresa júnior, o boi.
          Nesse tema, os membros teriam a missão de produzir um conteúdo audiovisual
          e apresentarem em uma cerimônia para a toda empresa.
          O tema foi pensado da maneira que se pudessem aplicar técnicas de gamificação para sensação de pertencimento.
        </p>

        <p>
          Na gamificação serão encorajados a sempre trabalharem em equipe e manterem um comportamento amistoso e empático,
          e no final, aqueles que mais se destacarem diante as categorias receberão as devidas premiações.
          Mais de uma pessoa pode ganhar o mesmo prêmio, todos podem ganhar o mesmo prêmio ou ninguém pode ganhar nenhum prêmio.
          O objetivo dessa gamificação não é causar uma competição entre os membros, e sim trabalho em equipe.
        </p>
      </ProjectSection>

    </main>
  );
}

export default Allegro;