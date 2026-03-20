import ProjectSection from "../components/ProjectSection";
import edwigesImg from "../assets/edwiges.png";
import "../styles/project-page.css";

function Edwiges() {
  return (
    <main className="project">

      <img className="project-image" src={edwigesImg} alt="Projeto Edwiges"/>

      <h1 className="project-title">Edwiges</h1>

      <ProjectSection title="O que foi o projeto?">
        <p>
          O projeto Edwiges foi um projeto encomendado pela ENTRE,
          empresa júnior de arquitetura da Universidade Católica de Brasília.
          A mesma procurou a Orc’estra Gamificação com o objetivo de Gamificar seu processo trainee afim de
          torná-lo mais divertido e engajador.
        </p>

        <p>
          Dentre os problemas a serem trabalhados na consultoria foram elencados a baixa adesão a faculdades de
          cunho particular diante ao cenário de pandemia onde muitos perderam suas rendas e não conseguem arcar com a mensalidade
          de tais faculdades, que gera essa queda de pessoas se matriculando aos cursos da Universidade Católica de Brasília,
          o que, consequentemente, causa a baixa entrada de novos membros ao curso de Arquitetura e Urbanismo, fazendo assim com
          quem o público possível para participar da Entre Empresa Júnior de Arquitetura seja cada vez menor.
        </p>
      </ProjectSection>

      <ProjectSection title="Nossa solução">
        <p>
          Tendo esse cenário, a Entre tomou a decisão de cativar seus inscritos trazendo um diferencial para seu processo seletivo
          e projeto trainee, a gamificação. Assim, trazendo motivação e engajamento para aqueles que estão participando de tal,
          tornando o processo mais divertido e cativante, os envolvendo em uma narrativa gamificada com uma temática mágica e
          interessante, afim de diminuir também a taxa de evasão de membros nesses processos.
        </p>

        <p>
          Tendo isso em vista, as propostas da consultoria foram pensadas de modo a abranger todos os tipos de jogadores para, assim,
          cada usuário ser motivado por algum elemento presente na gamificação.
        </p>

        <p>
          O perfil do jogador é dividido em seis categorias: Achiever, Philanthropist, Socializer, Free Spirit, Player e Disruptor.
          Cada uma dessas categorias se relaciona com a personalidade do player, tendo como referência decisões ou ações que ele
          costuma realizar durante um jogo.
        </p>

        <p>Para o Processo Seletivo e para o Projeto Trainee da Entre, a temática escolhida foi ”Harry Potter”.</p>

        <p>
          O tema é um elemento utilizado para tornar a jornada do candidato mais lúdica e atrativa. Para o mesmo foi pensada uma
          narrativa envolvente e dinâmica onde convocamos aqueles que tem interesse em ingressar em uma nova jornada com elementos
          montados do seu dia a dia como universitários, para que assim, eles ajudassem a salvar a Faculdade Católica de Brasília,
          para o mesmo foram utilizados termos, artefatos, criaturas do universo magico de ” Harry Potter” foi aplicado tanto no
          processo seletivo como no projeto trainee.
        </p>

        <p>
          Com a finalidade de captar percepções quanto ao uso do tema realizamos uma pesquisa com os trainees e pudemos através da
          mesma observar que os participantes possuem níveis de conhecimento variado sobre o tema, portanto, é importante usar elementos
          mais gerais sobre o tema, sem um grande aprofundamento no mesmo, sempre instruindo os envolvidos sobre os elementos utilizados.
        </p>

      </ProjectSection>

    </main>
  );
}

export default Edwiges;