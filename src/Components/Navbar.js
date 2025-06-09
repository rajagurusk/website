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
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
              setIsScrollingUp(false);

      } else {
        setShowNavbar(true);
      if (currentScrollY > 10) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false); // at top
      }

      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  

  const imgStyle = {
    width: '80px',
    height: '80px',
    marginRight: '80px',
  };

  return (
    <>
      {/* Embedded CSS for nav link hover, font, and layout */}
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background-color: 'transparent';
            color:  white;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
  transition: background-color 0.3s ease, color 0.3s ease;
          }
//   .navbar:hover {
//   background-color: white;
//   color: black;
// }

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

          .nav-link-wrapper {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .menu-icon {
            display: none;
            font-size: 26px;
            cursor: pointer;
            color: white;
          }

          .nav-links {
            list-style: none;
            display: flex;
            gap: 60px;
            margin: 0;
            padding: 0;
            align-items: center;
          }

          @media (max-width: 768px) {
            .nav-links {
              display: ${menuOpen ? 'flex' : 'none'};
              flex-direction: column;
              position: absolute;
              top: 70px;
              left: 0;
              width: 100%;
              background-color: #001f54;
              padding: 20px;
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }

            .menu-icon {
              display: block;
            }
          }
        `}
      </style>

      <nav
  className="navbar"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{
    transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
    backgroundColor: isScrollingUp || isHovered ? 'white' : 'transparent',
    color: isScrollingUp || isHovered? '#001f54' : 'white',
    boxShadow: isScrollingUp || isHovered  ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
    transition: 'all 0.3s ease',
  }}
>

        <ul className="nav-links">
          <li>
            <div className="nav-link-wrapper">
              <img src={HomeIcon} alt="Home" style={imgStyle} />
              <span className="menu-icon" onClick={toggleMenu}>&#9776;</span>
              <NavLink
                to="/"
                className={`nav-link-text ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                HOME
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to="/product"
              className={`nav-link-text ${location.pathname === '/product' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              PRODUCT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`nav-link-text ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`nav-link-text ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
