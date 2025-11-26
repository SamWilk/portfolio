import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer II",
      company: "Beeline, Inc",
      location: "Jacksonville, FL",
      period: "May 2022 - Present",
      responsibilities: [
        "Built and maintain a production-grade microservice within an event-driven architecture, improving scalability and reliability",
        "Drove migration from Azure Application Insights to Grafana, modernizing monitoring and alerting for critical applications",
        "Led and mentored multiple cohorts of interns, spearheading internship projects and guiding successful delivery",
        "Optimized C# and SQL workflows to accelerate long-running processes, reducing runtimes and boosting client satisfaction",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Beeline, Inc",
      location: "Jacksonville, FL",
      period: "May 2022 - October 2022",
      responsibilities: [
        "Improved batch import performance for enterprise clients (Meta, Amazon, JP Morgan Chase)",
        "Built RESTful APIs with ASP.NET 5 and C#, streamlining integrations across services",
        "Migrated SQL stored procedures to C# classes, reducing technical debt and centralizing logic",
      ],
    },
    {
      title: "Front End Developer",
      company: "Perspective, Inc",
      location: "Jacksonville, FL",
      period: "August 2021 - May 2022",
      responsibilities: [
        "Led a small team of developers to deliver a production-ready social media platform on schedule",
        "Implemented core front-end features with React, ensuring responsive design and strong UX",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <div className="experience-meta">
                <span className="location">{exp.location}</span>
                <span className="period">{exp.period}</span>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
