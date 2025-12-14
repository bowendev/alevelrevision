import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">📚</span>
          <span className="logo-text">GCSE<span className="logo-accent">Hub</span></span>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/" onClick={closeMenu} end>Home</NavLink>
          <NavLink to="/subjects" onClick={closeMenu}>Subjects</NavLink>
          <NavLink to="/tutors" onClick={closeMenu}>Our Tutors</NavLink>
          <NavLink to="/quiz/chemistry" onClick={closeMenu}>Chemistry Quiz</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="nav-cta">
            Get Help
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
