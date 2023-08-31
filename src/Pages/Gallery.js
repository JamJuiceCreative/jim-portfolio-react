import React from 'react';
import PortfolioItem from '../Components/PortfolioItem';
import { Row, Col } from 'react-bootstrap';
import SampleImage1 from '../Assets/Images/british-vogue-september-2018.jpg';
import SampleImage2 from '../Assets/Images/the-rock.jpg';
import SampleImage3 from '../Assets/Images/Mode.jpg';

export default function Gallery() {
  return (
    <Row>
      <Col xs={12} md={6} lg={4} >
        <PortfolioItem title="Item 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."imageSrc={SampleImage1}/>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <PortfolioItem title="Item 2" description="description" imageSrc={SampleImage2}/>
      </Col>
      <Col xs={12} md={6} lg={4} >
        <PortfolioItem title="Item 3" description="description" imageSrc={SampleImage3}/>
      </Col>
    </Row>
  );
}
