import "./BlogPage.css";
import blogframe from "../public/frame-blog.svg";

function BlogPage() {
  return (
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
        <img src={blogframe} alt="Ilustração do desenhoo" />
      </div>
    </section>
  );
}

export default BlogPage;