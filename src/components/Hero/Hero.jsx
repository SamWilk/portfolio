import "./Hero.css";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Sam Wilk</h1>
        <h2 className="hero-subtitle">
          Software Engineer | Full Stack Developer
        </h2>
        <p className="hero-description">
          Building scalable microservices and modern web applications with
          React, Node.js, and cloud technologies.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={scrollToContact}>
            Get In Touch
          </button>
          <a
            href="https://github.com/SamWilk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
