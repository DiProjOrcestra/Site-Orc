import './BlogList.css'
import './BlogPagination.css'
import BlogPost from './BlogPost';
function BlogPagination({paginaAtual,mudarPagina}) {
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
            resumo: "A promessa da gamificação é sedutora: equipes mais engajadas, clientes mais leais e resultados de negócio amplificados. No entanto, o",
            link: "https://orcestra.com.br/"
        },
        {
            id: 5,
            imagem: "/Blog-4.webp",
            titulo: "placeholder-4",
            resumo: "A promessa da gamificação é sedutora: equipes mais engajadas, clientes mais leais e resultados de negócio amplificados. No entanto, o",
            link: "https://orcestra.com.br/"
        },
        {
            id: 6,
            imagem: "/Blog-4.webp",
            titulo: "placeholder-3",
            resumo: "A promessa da gamificação é sedutora: equipes mais engajadas, clientes mais leais e resultados de negócio amplificados. No entanto, o",
            link: "https://orcestra.com.br/"
        },
        {
            id: 7,
            imagem: "/Blog-4.webp",
            titulo: "placeholder-2",
            resumo: "A promessa da gamificação é sedutora: equipes mais engajadas, clientes mais leais e resultados de negócio amplificados. No entanto, o",
            link: "https://orcestra.com.br/"
        },
        {
            id: 8,
            imagem: "/Blog-4.webp",
            titulo: "placeholder-1",
            resumo: "A promessa da gamificação é sedutora: equipes mais engajadas, clientes mais leais e resultados de negócio amplificados. No entanto, o",
            link: "https://orcestra.com.br/"
        }
    ];

    const postsPorPagina = 4;
    const ultimoPostExibido = paginaAtual * postsPorPagina;
    const primeiroPostExibido = ultimoPostExibido - postsPorPagina;
    const postsExibidos = posts.slice(primeiroPostExibido, ultimoPostExibido);
    const totalPaginas = Math.ceil(8 / postsPorPagina);

    return (
        <div className='banner'>
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
            <div>
                <button
                    disabled={paginaAtual === 1} 
                    onClick={() => mudarPagina(paginaAtual - 1)}
                >
                    «
                </button>

                <span >
                    Página {paginaAtual} de {totalPaginas}
                </span>

                <button 
                    disabled={paginaAtual === totalPaginas} 
                    onClick={() => mudarPagina(paginaAtual + 1)}
                >
                    »
                </button>
            </div>
        </div>
        
      );
}

export default BlogPagination;