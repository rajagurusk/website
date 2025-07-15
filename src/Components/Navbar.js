import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import HomeIcon from '../Images/mindron logo.png';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setIsHovered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
        setIsScrollingUp(false);
      } else {
        setShowNavbar(true);
        setIsScrollingUp(currentScrollY > 10);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const imgStyle = {
    width: '80px',
    height: '100px',
    cursor: 'pointer',
  };

  return (
    <>
      <nav
  className="navbar"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{
    transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
   backgroundColor: (isScrollingUp || isHovered) ? 'white' : 'transparent',
  color: (isScrollingUp || isHovered) && !menuOpen ? '#001f54' : 'white',
    boxShadow: (isScrollingUp || isHovered) && !menuOpen
      ? '0 2px 8px rgba(0,0,0,0.1)'
      : 'none',
    transition: 'all 0.3s ease',
  }}
>
  <div className="nav-content">
    <div className="nav-left">
      <img
        src={HomeIcon}
        alt="Home"
        className="logo-img"
        style={imgStyle}
        onClick={() => navigate('/')}
      />
    </div>

    <span className="menu-icon" onClick={toggleMenu}>&#9776;</span>

    <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
      <li>
        <NavLink to="/" className={`nav-link-text ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>HOME</NavLink>
      </li>
      <li>
        <NavLink to="/product" className={`nav-link-text ${location.pathname === '/product' ? 'active' : ''}`} onClick={closeMenu}>PRODUCT</NavLink>
      </li>
      <li>
        <NavLink to="/about" className={`nav-link-text ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>ABOUT US</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={`nav-link-text ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>CONTACT</NavLink>
      </li>
    </ul>
  </div>
</nav>

    </>
  );
};

export default Navbar;
