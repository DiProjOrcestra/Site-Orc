import "../css/BlogPagination.css";
import "../css/BlogPage.css";
import BlogPost from "./BlogPost";

function BlogPagination({ paginaAtual, mudarPagina }) {
  const posts = [
    {
      id: 1,
      imagem: "/Blog-1.webp",
      titulo: "Gamificação Estratégica para Negócios: O Guia Completo para Aumentar o Engajamento e o ROI",
      resumo: "Sua equipe está desengajada? A produtividade parece estagnada e as metas parecem cada vez mais distantes? Você não está sozinho.",
      link: "https://orcestra.com.br"
    },
    {
      id: 2,
      imagem: "/Blog-2.webp",
      titulo: "O Código do Engajamento: 3 Gatilhos Psicológicos que Fazem as Pessoas Amarem (e Usarem) Suas Ideias",
      resumo: "Vamos ser honestos. Você já dedicou semanas a um projeto, criou um conteúdo incrível ou lançou uma nova funcionalidade... apenas",
      link: "https://orcestra.com.br/"
    },
    {
      id: 3,
      imagem: "/Blog-3.webp",
      titulo: "Engaje, Motive e Transforme: Como Estruturar um Bom Sistema de Feedback Gamificado",
      resumo: "No ambiente corporativo dinâmico de hoje, manter equipes engajadas e em constante desenvolvimento é um dos maiores desafios das organizações.",
      link: "https://orcestra.com.br/"
    },
    {
      id: 4,
      imagem: "/Blog-4.webp",
      titulo: "O Manual do Desastre: 5 Sinais de que Sua Gamificação Está Fadada ao Fracasso",
      resumo: "A promessa da gamificação é sedutora: equipes mais engajadas, clientes mais leais e resultados de negócio amplificados.",
      link: "https://orcestra.com.br/"
    },
      {
          id: 5,
          imagem: "/Blog-5.webp",
          titulo: "Processos seletivos gamificados e o que você precisa saber sobre",
          resumo: "Ter um alto nível de engajamento nos processos de recrutamento é algo essencial para seu sucesso, logo um processo seletivo gamificado é certeza de resultado! Mas antes de saber os benefícios e ver exemplos práticos dessa aplicação é melhor você entender porque utilizá-la…",
          link: "https://orcestra.com.br/"
      },
      {
          id: 6,
          imagem: "/Blog-6.webp",
          titulo: "Como construímos nossos softwares?",
          resumo: "Desenvolver softwares de qualidade é uma jornada que envolve planejamento, inovação e muita dedicação. Seguimos um processo claro e bem estruturado para garantir que cada produto entregue atenda às expectativas e necessidades dos nossos clientes. Vamos te mostrar um resumo geral de como tudo funciona!",
          link: "https://orcestra.com.br/"
      },
      {
          id: 7,
          imagem: "/Blog-7.webp",
          titulo: "Aprenda a definir objetivos realistas",
          resumo: "Quando vamos definir objetivos, é bem comum traçarmos objetivos que não sejam realistas e que muitas vezes acabam sendo abandonados. Ao final de 2021, muitos de nós irão pensar em um ano 2022 melhor e traçar objetivos de ano novo...",
          link: "https://orcestra.com.br/"
      },
      {
          id: 8,
          imagem: "/Blog-8.webp",
          titulo: "Como a Gamificação Pode Transformar seu Desenvolvimento Profissional",
          resumo: "Você sabia que desenvolver soft skills pode ser mais leve, estratégico e até divertido? Muita gente ainda associa a gamificação apenas ao ensino de habilidades técnicas. Mas a verdade é que ela pode ir muito além: ajuda no crescimento pessoal e profissional, fortalecendo competências que fazem toda a diferença no mercado de trabalho.",
          link: "https://orcestra.com.br/"
      }
  ];

  {/* Flexivel se você quiser colocar mais páginas, o sistema vai adicionar automaticamente 
    (Funciona? n sei) -> testar depoiss*/}
    
  const postsPorPagina = 4;
  const totalPaginas = Math.ceil(posts.length / postsPorPagina);
  const primeiroPost = (paginaAtual - 1) * postsPorPagina;
  const ultimoPost = primeiroPost + postsPorPagina;
  const postsExibidos = posts.slice(primeiroPost, ultimoPost);

  return (
    <section className="banner">

      <h2>Mais recentes</h2>
      <hr />
      <p></p>
      <div className="posts-container">
        {postsExibidos.map((post) => (
          <BlogPost
            key={post.id}
            imagem={post.imagem}
            titulo={post.titulo}
            resumo={post.resumo}
            link={post.link}
          />
        ))}
      </div>

      <div className="pagination">

        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((pagina) => (
          <button
            key={pagina}
            className={`page ${paginaAtual === pagina ? "active" : ""}`}
            onClick={() => mudarPagina(pagina)}
          >
            {pagina}
          </button>
        ))}

        <button
          className="page next"
          onClick={() => mudarPagina(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
        >
          &gt;&gt;
        </button>
      </div>
    </section>
  );
}

export default BlogPagination;