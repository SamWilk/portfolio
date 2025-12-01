import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Handicap Trackr",
      description:
        "Golf handicap tracking application that helps golfers monitor their performance and calculate their official handicap index.",
      technologies: ["React", "Vite", "JavaScript"],
      period: "November 2025",
      highlights: [
        "Built intuitive interface for tracking golf scores and rounds",
        "Implemented handicap calculation algorithm",
        "Deployed on Vercel for seamless accessibility",
      ],
      liveLink: "https://vite-react-nu-two-36.vercel.app",
      githubLink: "https://github.com/SamWilk/handicap-trackr",
    },
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
      githubLink: "https://github.com/SamWilk/job-tracker",
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
              {(project.liveLink || project.githubLink) && (
                <div className="project-links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Live Site
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
