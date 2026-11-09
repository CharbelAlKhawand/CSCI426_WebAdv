import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About AutoHub</h1>
        <p>
          A car dealership in Saida, built around great cars, honest prices and
          friendly service.
        </p>
      </section>

      <section className="about-section about-story">
        <h2>Our Story</h2>
        <p>
          AutoHub brings sports, luxury and classic cars together in one place.
          We started with a simple idea: buying a car should be exciting, clear
          and stress free.
        </p>
        <p>
          Every car on our lot is checked before it is listed, and every price
          is shown openly. Whether you want a daily drive or a dream car, our
          team helps you find the one that fits your budget and your taste.
        </p>
      </section>

      <section className="about-section about-offer">
        <h2>What We Offer</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Performance Cars</h3>
            <p>Fast and exciting cars like the Toyota Supra and the McLaren P1.</p>
          </div>
          <div className="about-card">
            <h3>Luxury Cars</h3>
            <p>Comfort and style from brands like Bentley, for those who want more.</p>
          </div>
          <div className="about-card">
            <h3>Modern Classics</h3>
            <p>Legends like the Nissan GT-R R34 and the Subaru WRX STI.</p>
          </div>
        </div>
      </section>

      <section className="about-section about-values">
        <h2>Our Values</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Transparency</h3>
            <p>Clear prices and real details about every car. No surprises.</p>
          </div>
          <div className="about-card">
            <h3>Passion</h3>
            <p>We love cars, and we enjoy helping you find the right one.</p>
          </div>
          <div className="about-card">
            <h3>Customer First</h3>
            <p>We listen to what you need and never push you to buy.</p>
          </div>
        </div>
      </section>

      <section className="about-visit">
        <h2>Visit Us</h2>
        <p>Saida, Lebanon</p>
        <p>Monday - Saturday, 9:00 AM - 6:00 PM</p>
        <div className="about-buttons">
          <Link to="/store" className="btn btn-primary">Browse Cars</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

export default About;