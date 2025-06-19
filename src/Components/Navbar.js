import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import HomeIcon from '../Images/mindron logo.png';

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
  setIsHovered(false); // 👈 Add this line
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
    backgroundColor: menuOpen
      ? 'transparent'
      : (isScrollingUp || isHovered)
      ? 'white'
      : 'transparent',
    color: (isScrollingUp || isHovered) && !menuOpen ? '#001f54' : 'white',
    boxShadow: (isScrollingUp || isHovered) && !menuOpen
      ? '0 2px 8px rgba(0,0,0,0.1)'
      : 'none',
    transition: 'all 0.3s ease',
  }}
>

        <div className="nav-left">
          <img src={HomeIcon} alt="Home" style={imgStyle} onClick={() => navigate('/')} />
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
            {/* <li>
              <NavLink to="/events" className={`nav-link-text ${location.pathname === '/events' ? 'active' : ''}`} onClick={closeMenu}>EVENTS</NavLink>
            </li> */}
          </ul>
        </div>

      </nav>

      <style>{`
        .navbar {
          display: flex;
          
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 40px;
            flex: 1; /* allows icon to float to right */

        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 60px;
          margin: 0;
          padding: 0;
        }

        .nav-link-text {
          color: #001f54;
          text-decoration: none;
          font-weight: bold;
          font-size: 18px;
          padding-bottom: 4px;
          border-bottom: 2px solid transparent;
          transition: border-color 0.3s ease;
        }

        .nav-link-text:hover,
        .nav-link-text.active {
          border-bottom: 2px solid #001f54;
        }

        .menu-icon {
          display: none;
          font-size: 26px;
          cursor: pointer;
          color: #001f54;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100px;
            left: 0;
            width: 100%;
            background-color: #001f54;
            padding: 20px;
          }

          .nav-links.open {
            display: flex;
              // background-color: transparent !important; /* 👈 force transparent */

          }

          .nav-link-text {
            color: white !important;
          }

          .nav-links li {
            width: 100%;
            text-align: center;
            margin-bottom: 12px;
          }

          .menu-icon {
            display: block;
          }

          .nav-left {
            flex: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
