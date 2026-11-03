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
          Além de empresa, também é informação!
        </h1>

        <p className="blog-text">
          Tecnologia, produtos digitais, gamificação e pessoas sob a ótica da Orc’estra.
        </p>
      </div>

      <div className="blog-frame-image">
        <img className="blog-img" src={blogframe} alt="Ilustração do blog da Orc’estra" />
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