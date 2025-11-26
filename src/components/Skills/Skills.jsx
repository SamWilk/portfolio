import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Databases",
      skills: [
        "JavaScript",
        "TypeScript",
        "Java",
        "C",
        "C#",
        "SQL",
        "Postgres",
        "T-SQL",
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "ASP.NET",
        "Python",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "Azure",
        "Docker",
        "Kubernetes",
        "Event Grid",
        "RabbitMQ",
        "GitHub Actions",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
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

export default Skills;
