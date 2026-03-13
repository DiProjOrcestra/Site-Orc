import "./BlogPost.css";
function BlogPost({imagem , titulo = "Titulo", resumo= "Resumo", link = "https://orcestra.com.br/"}) {
    
    return (
        <div className="post-item"> 
            <img className="blog-image" src={imagem} alt="imagem blog" />
            <h3>{titulo}</h3>
            <p>{resumo}</p>
            <a target="_blank" href={link}>Ler Mais »</a>
        </div>
    );
}

export default BlogPost;