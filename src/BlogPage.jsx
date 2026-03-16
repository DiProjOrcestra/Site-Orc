import "./BlogPage.css";
import { useEffect, useState } from "react";
import blogframe from "../public/frame-blog.svg";
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
        <a href="/blog" className="blog-tag">
          Blog
        </a>

        <h1 className="blog-title">
          Além de empresa,
          <br />
          também é informação!
        </h1>

        <p className="blog-text">
          Conteúdos sobre inovação, tecnologia e muito mais você só aprende
          aqui, no Blog da Orc’estra
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