import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-icon">📚</span>
              <span className="logo-text">GCSE<span className="logo-accent">Hub</span></span>
            </Link>
            <p className="footer-tagline">
              Helping GCSE students across the UK achieve their best grades with
              trusted, qualified tutors.
            </p>
            <div className="trust-badges">
              <span className="trust-badge">✓ DBS Checked Tutors</span>
              <span className="trust-badge">✓ Safeguarding Trained</span>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/subjects">Subjects</Link>
              <Link to="/tutors">Our Tutors</Link>
              <Link to="/contact">Get Help</Link>
            </nav>
          </div>

          <div className="footer-links">
            <h4>Popular Subjects</h4>
            <nav>
              <Link to="/subjects/maths">Mathematics</Link>
              <Link to="/subjects/english-language">English Language</Link>
              <Link to="/subjects/biology">Biology</Link>
              <Link to="/subjects/chemistry">Chemistry</Link>
              <Link to="/subjects/physics">Physics</Link>
            </nav>
          </div>

          <div className="footer-links">
            <h4>For Parents</h4>
            <nav>
              <Link to="/tutors">Meet Our Tutors</Link>
              <Link to="/contact">Contact Us</Link>
              <a href="#safeguarding">Safeguarding Policy</a>
              <a href="#faq">FAQs</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} GCSEHub. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
