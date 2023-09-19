import React from 'react';
import PortfolioItem from '../Components/PortfolioItem';
import { Row, Col } from 'react-bootstrap';

import LiquorStax from '../Assets/Images/Liquor-Stax.jpg';
import EqSunMetro from '../Assets/Images/eq-sun-metro.jpg';
import Boral from '../Assets/Images/boral-timber-floors.jpg';

export default function Gallery() {
  return (
    <>
    <h1 className = "mt-5">Graphic Design</h1>
    <Row className="m-5">
      <Col xs={12} md={6} lg={4} >
        <PortfolioItem imageSrc={Boral}/>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <PortfolioItem imageSrc={EqSunMetro}/>
      </Col>
      <Col xs={12} md={6} lg={4} >
        <PortfolioItem  imageSrc={LiquorStax}/>
      </Col>
    </Row>
    <h1 className = "mt-5">Illustration</h1>
    <h1 className = "mt-5">Creative</h1>
    </>
  );
}
