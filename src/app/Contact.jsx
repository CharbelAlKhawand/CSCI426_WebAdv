import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Your message has been submitted!");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have a question about a car? Send us a message and we'll get back to
          you.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Feel free to contact us if you have any questions about our cars or
            services.
          </p>

          <div className="contact-details">
            <h3>Our Location</h3>
            <p>Saida, Lebanon</p>

            <h3>Phone Number</h3>
            <p>+961 70 123 456</p>

            <h3>Email Address</h3>
            <p>info@autohub.com</p>

            <h3>Working Hours</h3>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
