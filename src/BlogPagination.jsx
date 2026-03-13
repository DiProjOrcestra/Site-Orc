import "./BlogList.css";
import "./BlogPagination.css";
import BlogPost from "./BlogPost";

function BlogPagination({ paginaAtual, mudarPagina }) {
  const posts = [
    {
      id: 1,
      imagem: "/Blog-1.webp",
      titulo: "Gamificação Estratégica para Negócios: O Guia Completo para Aumentar o Engajamento e o ROI",
      resumo: "Sua equipe está desengajada? A produtividade parece estagnada e as metas parecem cada vez mais distantes? Você não está sozinho.",
      link: "https://youtube.com"
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
      imagem: "/Blog-4.webp",
      titulo: "placeholder-4",
      resumo: "A promessa da gamificação é sedutora: equipes mais engajadas, clientes mais leais e resultados de negócio amplificados.",
      link: "https://orcestra.com.br/"
    },
    {
      id: 6,
      imagem: "/Blog-4.webp",
      titulo: "placeholder-3",
      resumo: "A promessa da gamificação é sedutora: equipes mais engajadas, clientes mais leais e resultados de negócio amplificados.",
      link: "https://orcestra.com.br/"
    },
    {
      id: 7,
      imagem: "/Blog-4.webp",
      titulo: "placeholder-2",
      resumo: "A promessa da gamificação é sedutora: equipes mais engajadas, clientes mais leais e resultados de negócio amplificados.",
      link: "https://orcestra.com.br/"
    },
    {
      id: 8,
      imagem: "/Blog-4.webp",
      titulo: "placeholder-1",
      resumo: "A promessa da gamificação é sedutora: equipes mais engajadas, clientes mais leais e resultados de negócio amplificados.",
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