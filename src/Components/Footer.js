import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import github from '../Assets/Images/github-icon.svg';
import linkedin from '../Assets/Images/linked-in-icon.svg';
import facebook from '../Assets/Images/face-book-icon.svg';
import twitter from '../Assets/Images/twitter-icon.svg';
import instagram from '../Assets/Images/instagram-icon.svg';

export default function Footer() {
  return (
    <div className="footer">
      <Row className="d-flex flex-row  justify-content-center align-items-center">
        <Col xs={12} md={6}>
          <span style={{ fontSize: '1.5rem' }}>
            Jim Lister Designer Developer | copyright 2023
          </span>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-row justify-content-center">
          <Row className="socials">
            <Col xs={1}></Col>
            <Col xs={2}>
              <Link to="https://github.com/JamJuiceCreative">
                <img className="git-hub" src={github} alt="git hub" />
              </Link>
            </Col>
            <Col xs={2}>
              <Link to="https://au.linkedin.com/in/jim-lister-8a249756?original_referer=https%3A%2F%2Fwww.google.com%2F">
                <img className="linked-in" src={linkedin} alt="linked in" />
              </Link>
            </Col>
            <Col xs={2}>
              <Link to="https://www.facebook.com/jamjuicecreative/">
                <img className="face-book" src={facebook} alt="facebook" />
              </Link>
            </Col>
            <Col xs={2}>
              <Link to="https://twitter.com/JamJuiceCrea">
                <img className="twitter" src={twitter} alt="twitter" />
              </Link>
            </Col>
            <Col xs={2}>
              <Link to="https://www.instagram.com/jamjuicecreative/">
                <img className="instagram" src={instagram} alt="instagram" />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
