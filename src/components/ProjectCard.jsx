import { Link } from "react-router-dom";
import "../css/project-card.css";


function ProjectCard({ title, category, image, path }) {
  return (
    <Link to={path} className="project-card">

      <img
        src={image}
        alt={title}
        className="project-card-image"
      />

      <div className="project-card-content">
        <h3 className="title-card">{title}</h3>
        <p className="paragraph-card">{category}</p>
      </div>

    </Link>
  );
}

export default ProjectCard;