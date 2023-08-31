import { Col, Row } from 'react-bootstrap';
import Skillcard from '../Components/Skillcard';
import resumeIcon from '../Assets/Images/resume-icon.svg';
import koala from '../Assets/Images/koalaifications.png';
import dog from '../Assets/Images/great-dane.png';
import videoGames from '../Assets/Images/video-game.png';
import guitar from '../Assets/Images/guitar.png';
import { Link } from 'react-router-dom';
import resume from '../Assets/Images/Jim_Lister_Resume.pdf';

const Home = () => {
  return (
    <div className="intro-container d-flex flex-column align-items-center">
      <Row>
        <Col m={6}>
          <div className="introduction">
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
        <Col m={6} className="mt-3 mt-sm-0  ">
          <Link to={resume} target="_blank">
            <div className="m-3 resume-card">
              <Skillcard title="Resume" content={resumeIcon} isImage={true} />
            </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col m={3}>
          <div className="m-3">
            <Skillcard
              title="Design"
              content={
                <div>
                  <h3>Software Proficiencies</h3>
                  <ul>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Indesign</li>
                    <li>Figma</li>
                    <li>Premier Pro</li>
                    <li>After Effects</li>
                  </ul>
                </div>
              }
              isImage={false}
            />
          </div>
        </Col>
        <Col m={3}>
          <div className="m-3">
            <Skillcard
              title="Front End"
              content={
                <div>
                  <h3>Languages and Frameworks</h3>
                  <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Sass</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              }
              isImage={false}
            />
          </div>
        </Col>
        <Col m={3}>
          <div className="m-3">
            <Skillcard
              title="Back End"
              content={
                <div>
                  <h3>Languages and Databases</h3>
                  <ul>
                    <li>Python</li>
                    <li>Sql</li>
                    <li>NoSql</li>
                    <li>Postgres</li>
                    <li>Flask</li>
                    <li>Mongodb</li>
                    <li>Mongo atlas</li>
                  </ul>
                </div>
              }
              isImage={false}
            />
          </div>
        </Col>
        <Row>
          <Col m={3} style={{ marginLeft: '40px' }}>
            <h3>Education & Koalifications</h3>
            <div style={{ textAlign: 'center' }}>
              <ul
                style={{
                  textAlign: 'left',
                  minWidth: '390px',
                  fontSize: '1.4rem',
                }}
              >
                <li>
                  {' '}
                  2022-23 Diploma of Information Technology - Full Stack Web
                  Development Bootcamp by Coder Academy{' '}
                </li>
                <li>
                  2022 UX Design Specialization - Online Coursera by Google{' '}
                </li>
                <li>
                  2019 AWARD School - Australasian Writers and Art Directors
                  Association{' '}
                </li>
                <li>
                  2019 Certificate 3 in Signs and Graphics - Queensland Tafe{' '}
                </li>{' '}
                <li>
                  2006 - 2008 Bachelor of Visual Media (Graphic and Digital
                  Design) - Griffith University
                </li>
              </ul>
            </div>
            <img className="koala" src={koala} alt="koalifications" />
          </Col>
        </Row>
      </Row>
      <Row>
        <strong>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            Outside of work I enjoy playing the guitar, walking my dog and
            playing video games.
          </p>
        </strong>
      </Row>
      <div className="interests d-flex space-between">
        <Row style={{ width: '100%' }}>
          <Col>
            <img className="great-dane" src={dog} alt="great dane" />
          </Col>
          <Col>
            <img className="video-games" src={videoGames} alt="video games" />
          </Col>
          <Col>
            <img className="guitar" src={guitar} alt="guitar" />
          </Col>
        </Row>
      </div>
      <Row>
        <strong>
          <h3>Hire Me</h3>
        </strong>
        <strong>
          <p>Jim Lister</p>
        </strong>
        <strong>
          <p>phone: 0450 321 332</p>
        </strong>
        <strong>
          <p>email: jim@jamjuicecreative.com.au</p>
        </strong>
      </Row>
    </div>
  );
};

export default Home;
