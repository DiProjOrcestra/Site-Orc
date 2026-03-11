import './BlogPosts.css'
function BlogPosts() {
    return (
        <div style={{padding: '0px'}} >
            <h2>Se mantenha atualizado com nossos conteúdos</h2>
            <hr />
            <p>Blog</p>
            <div className="posts-container">
                <div className="post-item"> 
                    {/* //TODO pegar as imagens e trocar o src */}
                    <img src="/vite.svg" alt="" />
                    <h3>Gamificação Estratégica para Negócios: O Guia Completo para Aumentar o Engajamento e o ROI</h3>
                    <p>Sua equipe está desengajada? A produtividade parece estagnada e as metas parecem cada vez mais distantes? Você não está sozinho.</p>
                    <a target="_blank" href="https://orcestra.com.br/">Ler Mais »</a>
                </div>
                <div className="post-item">
                    <img src="/vite.svg" alt="" />
                    <h3>O Código do Engajamento: 3 Gatilhos Psicológicos que Fazem as Pessoas Amarem (e Usarem) Suas Ideias</h3>
                    <p>Vamos ser honestos. Você já dedicou semanas a um projeto, criou um conteúdo incrível ou lançou uma nova funcionalidade... apenas</p>
                    <a target="_blank" href="https://orcestra.com.br/">Ler Mais »</a>
                </div>
                <div className="post-item">
                    <img src="/vite.svg" alt="" />
                    <h3>Engaje, Motive e Transforme: Como Estruturar um Bom Sistema de Feedback Gamificado</h3>
                    <p>No ambiente corporativo dinâmico de hoje, manter equipes engajadas e em constante desenvolvimento é um dos maiores desafios das organizações.</p>
                    <a target="_blank" href="https://orcestra.com.br/">Ler Mais »</a>
                </div>
                <div className="post-item">
                    <img src="/vite.svg" alt="" />
                    <h3>O Manual do Desastre: 5 Sinais de que Sua Gamificação Está Fadada ao Fracasso</h3>
                    <p>A promessa da gamificação é sedutora: equipes mais engajadas, clientes mais leais e resultados de negócio amplificados. No entanto, o</p>
                    <a target="_blank" href="https://orcestra.com.br/">Ler Mais »</a>
                </div>
            </div>
        </div>
      );
}

export default BlogPosts;