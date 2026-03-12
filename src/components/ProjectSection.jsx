function ProjectSection({ title, children }) {
  return (
    <section className="section">
      <h2 className="sub-title">{title}</h2>
      <p className="paragraph">{children}</p>
    </section>
  );
}

export default ProjectSection;