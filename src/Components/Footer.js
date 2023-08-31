import React from 'react';
import { Row, Col } from 'react-bootstrap';
import github from '../Assets/Images/github-icon.svg';
import linkedin from '../Assets/Images/linked-in-icon.svg';
import facebook from '../Assets/Images/face-book-icon.svg';
import twitter from '../Assets/Images/twitter-icon.svg';
import instagram from '../Assets/Images/github-icon.svg';

export default function Footer() {
  return (
    <div className="footer">
      <Row className="d-flex flex-row  justify-content-center align-items-center">
        <Col xs={12} md={6}>
          <span style={{fontSize:"1.5rem"}}>Jim Lister Designer Developer | copyright 2023</span>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-row justify-content-center">
          <Row className="socials">
            <Col xs={1}></Col>
            <Col xs={2}>
              <img className="git-hub" src={github} alt="git hub" />
            </Col>
            <Col xs={2}>
              <img className="linked-in" src={linkedin} alt="linked in" />
            </Col>
            <Col xs={2}>
              <img className="face-book" src={facebook} alt="facebook" />
            </Col>
            <Col xs={2}>
              <img className="twitter" src={twitter} alt="twitter" />
            </Col>
            <Col xs={2}>
              <img className="instagram" src={instagram} alt="instagram" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
