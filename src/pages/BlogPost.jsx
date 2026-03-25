import "../css/BlogPost.css";
function BlogPost({imagem , titulo = "Titulo", resumo= "Resumo", link = "https://orcestra.com.br/"}) {
    
    return (
        <div className="post-item"> 
            <img className="blog-image" src={imagem} alt="imagem blog" />
            <a className="blog-title" target="_blank" href={link}><h3>{titulo}</h3></a>
            <p>{resumo}</p>
            <a className="blog-link" target="_blank" href={link}>Ler Mais »</a>
        </div>
    );
}

export default BlogPost;