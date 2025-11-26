import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Software Engineer based in Jacksonville, FL, specializing in
              full-stack development with expertise in building production-grade
              microservices and modern web applications.
            </p>
            <p>
              Currently working as a Software Engineer II at Beeline, Inc, where
              I build and maintain microservices within event-driven
              architectures, mentor interns, and optimize performance for
              enterprise clients including Meta, Amazon, and JP Morgan Chase.
            </p>
            <p>
              I'm passionate about creating scalable, efficient solutions and
              staying current with modern development practices. When I'm not
              coding, I enjoy exploring new technologies and contributing to
              open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
