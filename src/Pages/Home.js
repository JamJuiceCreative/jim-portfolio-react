import { Card, Col, Row } from 'react-bootstrap';
import Skillcard from '../Components/Skillcard';

const Home = () => {
  return (
    <div className= "d-flex flex-column">
      <Row>
        <Col xs={12} sm={9}>
          <div>
            <h2>Hi there, please allow me to introduce myself...</h2>

            <p className="copy-margin">
              My name's Jim and I'm a graphic designer/ illustrator turning
              software/ web developer. Having many years experience in design
              and print, I am now focusing my skills towards my interests in
              coding and web development. Fun fact, I'm also a qualified Sign
              Writer with over 5 years in the industry, as I also enjoy creating
              with my hands. Moving forward I'm bringing together all my
              knowledge and passion for creative design to web development as I
              take a more digital approach to my career.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={3}>
          <div className="m-3">
            <Skillcard />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
