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
            <h4>Availability</h4>
            <p class="text paragraph">I'm open to Product Designer and UX/UI Designer positions for Summer and Fall 2027 terms. I'm open to exploring opportunities across different industries, with a particular interest in esports and the gaming industry.</p>
        </div>

        <footer>
            <p class="display-text">bianca dimaano</p>
            <div class="contact-list">
                <a href="mailto:fbd1@sfu.ca">Email</a>
                <a href="https.//www.linkedin.com/in/biancadimaano">LinkedIn</a>
            </div>
        </footer>
      </main>
    </div>
  );
}

export default Homepage;
