import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Replace these with your EmailJS credentials
      const serviceId = "service_i9wtqxz";
      const templateId = "template_m9dl8qq";
      const publicKey = "UmxHmWeQxFA1XrgaT";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "samwilk1898@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset submitted message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:samwilk1898@gmail.com">samwilk1898@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href="tel:+19045993512">(904) 599-3512</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              <span>Jacksonville, FL</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">GitHub:</span>
              <a
                href="https://github.com/SamWilk"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/SamWilk
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send Me a Message</h3>
            {submitted && (
              <div className="success-message">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            {errors.submit && (
              <div className="error-message" style={{ marginBottom: "1rem" }}>
                {errors.submit}
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "error" : ""}
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <div className="footer">
          <p>&copy; 2025 Sam Wilk. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
