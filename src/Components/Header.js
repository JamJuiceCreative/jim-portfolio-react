import React, { useState } from 'react';
import { Row, Col, Dropdown, Button } from 'react-bootstrap'; // Import Bootstrap components
import { Link } from 'react-router-dom';
import menuBarIcon from '../Assets/Images/menu-bar-icon.svg';
import jimIllustration from '../Assets/Images/jim-lister-illustration.png';
import homeIcon from '../Assets/Images/home icon.svg';
import '../index.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <Row>
        <Col xs={12}>
          <div className="header-top">
            <Link to="/">
              <img className="home-icon" src={homeIcon} alt="Home Icon" />
            </Link>
            <div className="outside-nav">
              <nav className="nav">
                <ul>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/video">Video</Link>
                  </li>
                  <li>
                    <Link to="/contact">Say Hi</Link>
                  </li>
                </ul>
              </nav>

              <h1>Jim Lister Full Stack Designer Developer</h1>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="header-bottom">
            <Link to="/">
            <img
              className="jim-illustration"
              src={jimIllustration}
              alt="Jim Lister Illustration"
            /></Link>
            {/* Bootstrap Dropdown */}
            <Dropdown show={isMenuOpen} onToggle={toggleMenu}>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="hamburger-menu"
                
              >
                {/* Hamburger Icon */}
                <img
                  src={menuBarIcon}
                  alt="Hamburger Menu"
                  width="60"
                  height="60"
                  
                  
                />
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  margin: 0,
                  padding: 0,
                  width: '100%',
                  textAlign: 'center',
                  outline: 'none',
                  background: 'none',
                  border: 'none',
                }}
              >
                {/* Separate buttons with space */}
                <Button className="custom-button">
                  <Link to="/">About</Link>
                </Button>
                <Button className="custom-button">
                  <Link to="/projects">Projects</Link>
                </Button>
                <Button className="custom-button">
                  <Link to="/gallery">Gallery</Link>
                </Button>
                <Button className="custom-button">
                  <Link to="/video">Video</Link>
                </Button>
                <Button className="custom-button">
                  <Link to="/contact">Say Hi</Link>
                </Button>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
