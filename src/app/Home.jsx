import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Find the Car That Fits Your Life</h1>
        <p>Quality pre-owned and new vehicles, honest prices, and a team you can trust.</p>
        <div className="hero-buttons">
          <Link to="/store" className="btn btn-primary">Browse Our Inventory</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Buy From Us</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Inspected Vehicles</h3>
            <p>Every car goes through a full inspection before it reaches our lot.</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Financing</h3>
            <p>Payment options that work with your budget, with no pressure.</p>
          </div>
          <div className="feature-card">
            <h3>Trade-Ins Welcome</h3>
            <p>Get a fair offer on your current car when you upgrade.</p>
          </div>
        </div>
      </section>

      <section className="about-teaser">
        <h2>Who We Are</h2>
        <p>A short sentence or two about your dealership and how long you've been serving customers.</p>
        <Link to="/about" className="teaser-link">Learn more about us</Link>
      </section>

      <section className="cta">
        <h2>Ready to Take a Test Drive?</h2>
        <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
      </section>
    </div>
  );
}

export default Home;