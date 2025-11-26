import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "JobTrackr",
      description:
        "Full-stack web application for tracking and managing job applications with secure authentication and responsive UI.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Docker",
        "JWT",
      ],
      period: "August 2025 - Present",
      highlights: [
        "Developed full-stack app with secure JWT authentication",
        "Containerized with Docker & Docker Compose for streamlined deployment",
        "Implemented responsive UI for optimal user experience",
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-period">{project.period}</p>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
