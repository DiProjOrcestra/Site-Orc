import '../css/BlogList.css';
import BlogPost from './BlogPost';
function BlogList({irParaPagina}) {
    const posts = [
        {
            id: 1,
            imagem: "../src/assets/Blog-1.webp",
            titulo: "Gamificação Estratégica para Negócios: O Guia Completo para Aumentar o Engajamento e o ROI",
            resumo: "Sua equipe está desengajada? A produtividade parece estagnada e as metas parecem cada vez mais distantes? Você não está sozinho.",
            link: "https://orcestra.com.br/"
        },
        {
            id: 2,
            imagem: "../src/assets/Blog-2.webp",
            titulo: "O Código do Engajamento: 3 Gatilhos Psicológicos que Fazem as Pessoas Amarem (e Usarem) Suas Ideias",
            resumo: "Vamos ser honestos. Você já dedicou semanas a um projeto, criou um conteúdo incrível ou lançou uma nova funcionalidade... apenas",
            link: "https://orcestra.com.br/"
        },
        {
            id: 3,
            imagem: "../src/assets/Blog-3.webp",
            titulo: "Engaje, Motive e Transforme: Como Estruturar um Bom Sistema de Feedback Gamificado",
            resumo: "No ambiente corporativo dinâmico de hoje, manter equipes engajadas e em constante desenvolvimento é um dos maiores desafios das organizações.",
            link: "https://orcestra.com.br/"
        },
        {
            id: 4,
            imagem: "../src/assets/Blog-4.webp",
            titulo: "O Manual do Desastre: 5 Sinais de que Sua Gamificação Está Fadada ao Fracasso",
            resumo: "A promessa da gamificação é sedutora: equipes mais engajadas, clientes mais leais e resultados de negócio amplificados. No entanto, o",
            link: "https://orcestra.com.br/"
        }
    ];
    const postsHome = posts.slice(0,4);
    return (
        <div className='banner'>
            <h2>Se mantenha atualizado com nossos conteúdos</h2>
            <hr />
            <p onClick={irParaPagina}>Blog</p>
            <div className="posts-container">
                {postsHome.map((post) => (
                    <BlogPost
                        key={post.id}
                        imagem={post.imagem}
                        titulo={post.titulo}
                        resumo={post.resumo}
                        link={post.link}
                    />               

                ))}
            </div>
        </div>
      );
}

export default BlogList;