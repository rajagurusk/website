import React, { useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import HomeIcon from '../Images/mindron logo.png';
// import '../Components/navbar.css';

// import '../Pages/style.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);



  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'left',
    gap: '80px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  };

  const imgStyle = {
    width: '80px',
    height: '80px',
    marginRight: '80px',
  };

  return (
    <>
      {/* Embedded CSS for hover effect */}
      <style>
        {`
          .nav-link-text {
            color: #000000;
            text-decoration: none;
            font-size: 18px;
            padding-bottom: 4px;
            border-bottom: 2px solid transparent;
            transition: border-color 0.3s ease;
          }

          .nav-link-text:hover,
          .nav-link-text.active {
            border-bottom: 2px solid black;
          }

          .nav-link-wrapper {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
          }

          .menu-icon {
            display: none;
            font-size: 26px;
            cursor: pointer;
          }

          .nav-links {
            list-style: none;
            display: flex;
            gap: 60px;
            margin: 0;
            padding: 0;
            align-items: center;
          }

          /* Mobile styles */
          @media (max-width: 768px) {
            .nav-links {
              display: ${menuOpen ? 'flex' : 'none'};
              flex-direction: column;
              position: absolute;
              top: 70px;
              left: 0;
              width: 100%;
              background-color: white;
              padding: 20px;
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }

            .menu-icon {
              display: block;
            }
          }
        `}
      </style>

      <nav>
        <ul style={ulStyle}>
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
