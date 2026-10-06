import "../css/BlogPage.css";
import { useEffect, useState } from "react";
import blogframe from "../assets/frame-blog.svg";
import BlogPagination from "./BlogPagination";

function BlogPage() {
  const [pagina, setPagina] = useState(1);
  useEffect (()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pagina]);
  return (
    <>
    <section className="blog-c">
      <div className="blog-content">
        <h1 className="blog-title">
          Blog
        </h1>

        <p className="blog-text blog-subtitulo">
          Tecnologia, Engenharia de Software, comportamento e experiência.
        </p>

        <p className="blog-text">
          Conteúdos, aprendizados e perspectivas da Orc’estra sobre desenvolvimento de
          produtos digitais, mercado, gamificação e as pessoas que utilizam tecnologia.
        </p>
      </div>

      <div className="blog-frame-image">
        <img className="blog-img" src={blogframe} alt="Ilustração do desenhoo" />
      </div>
    </section>
    <BlogPagination
      paginaAtual={pagina}
      mudarPagina={setPagina}
    />
    </>
  );
}

export default BlogPage;