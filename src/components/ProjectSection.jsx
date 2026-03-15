function ProjectSection({ title, children }) {
  return (
    <section className="section">
      <h2 className="sub-title">{title}</h2>
      <div className="paragraph">{children}</div>
    </section>
  );
}

export default ProjectSection;