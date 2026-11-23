import placeholder from "../images/image_placeholder.png";
import "../css/normalize.css";
import "../css/variables.css";
import "../css/main.css";

function ProjectCard({project_name, description}) {
  return (
    <a href="">
      <div class="project-card">
        <figure>
          <img src={placeholder} alt="This text describes the image." />
        </figure>

        <div class="project-details">
          <h3>{project_name}</h3>
          <p>
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;