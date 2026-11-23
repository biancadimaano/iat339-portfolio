import ProjectCard from "../components/ProjectCard";
import "../css/responsive.css";
import "../css/homepage.css";

function Homepage() {
  return (
    <div>
      <header class="hero flex column">
        <div>
          <h1 class="text-white">bianca dimaano</h1>
          <h2 class="text-white subtitle">Product Designer @ Vena Solutions</h2>
        </div>

        <div class="flex row hero-details">
          <p class="text-white">
            I'm a product designer with a developer's mindset and a creative
            perspective. I enjoy turning complex problems into intuitive
            experiences, exploring how technology can bring ideas to life, and
            adding thoughtful details that make products engaging and delightful
            to use.
          </p>
          <div class="flex row">
            <p class="yarndings text-white">d</p>
            <p class="yarndings text-white">c</p>
            <p class="yarndings text-white">h</p>
          </div>
        </div>
      </header>

      <main>
        <div class="projects-list flex row">
            <ProjectCard
              project_name="Project Name"
              description="Lorem ipsum dolor sit amet consectetur. Netus nisi leo eu integer felis. Montes cursus diam ut velit sollicitudin aliquet nulla dolor."
            />
            <ProjectCard
              project_name="Project Name"
              description="Lorem ipsum dolor sit amet consectetur. Netus nisi leo eu integer felis. Montes cursus diam ut velit sollicitudin aliquet nulla dolor."
            />
        </div>

        <div class="contact">
            <p class="text">I'm open to Product Designer and UX/UI Designer positions for Summer and Fall 2027 terms.</p>

            <h4>Contact Me</h4>
            <p>fbd1@sfu.ca</p>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
