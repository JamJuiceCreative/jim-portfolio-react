import { Col, Row } from 'react-bootstrap';
import Skillcard from '../Components/Skillcard';
import resumeIcon from '../Assets/Images/resume-icon.svg'


const Home = () => {
  return (
    <div className= "d-flex flex-column align-items-center justify-content-center">
      <Row>
        <Col m = {6} >
          <div className= "introduction">
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
        <Col m={6} className="mt-3 mt-sm-0 " >
          <div className="m-3">
            <Skillcard title="Resume" content={resumeIcon} isImage={true} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col m={3}><div className="m-3">
            <Skillcard title="Design" content={<div>
              <h3>Software Proficiencies</h3>
              <ul>
                <li>
                  Photoshop
                </li>
                <li>
                  Illustrator
                </li>
                <li>
                  Indesign
                </li>
                <li>
                  Figma
                </li>
                <li>
                  Premier Pro
                </li>
                <li>
                  After Effects
                </li>
              </ul>
            </div>} isImage={false} />
          </div></Col>
        <Col m={3}><div className="m-3">
            <Skillcard title="Front End" content={<div>
              <h3>Languages and Frameworks</h3>
              <ul>
                <li>
                  Photoshop
                </li>
                <li>
                  Illustrator
                </li>
                <li>
                  Indesign
                </li>
                <li>
                  Figma
                </li>
                <li>
                  Premier Pro
                </li>
                <li>
                  After Effects
                </li>
              </ul>
            </div>} isImage={false} />
          </div></Col>
        <Col m={3}><div className="m-3">
            <Skillcard title="Back End" content={<div>
              <h3>Languages and Databases</h3>
              <ul>
                <li>
                  Photoshop
                </li>
                <li>
                  Illustrator
                </li>
                <li>
                  Indesign
                </li>
                <li>
                  Figma
                </li>
                <li>
                  Premier Pro
                </li>
                <li>
                  After Effects
                </li>
              </ul>
            </div>} isImage={false} />
          </div></Col>
        <Col m={3}><p>Education & Koalifications
• 2022-23 Diploma of Information Technology - Full Stack Web Development Bootcamp by Coder Academy
• 2022 UX Design Specialization - Online Coursera by Google
• 2019 AWARD School - Australasian Writers and Art Directors Association
• 2019 Certificate 3 in Signs and Graphics - Queensland Tafe
• 2006 - 2008 Bachelor of Visual Media (Graphic and Digital Design) - Griffith University</p></Col>
      </Row>
    </div>
    
  );
};

export default Home;
