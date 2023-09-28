import React from 'react';
import Skillcard from '../Components/Skillcard';
import { Row, Col, Button } from 'react-bootstrap';
import superflyWallPapers from '../Assets/Images/Thumbnails/superfly-wall-papers.png';
import ZAPP from '../Assets/Images/Thumbnails/ZAPP.png';
import ZAPP2 from '../Assets/Images/Thumbnails/ZAPP2.png';
import WRAPI from '../Assets/Images/Thumbnails/WRAPI.png';
import TranslatorPU from '../Assets/Images/Thumbnails/translator-pu.png';
import { Link } from 'react-router-dom';

export default function Projects() {
  const websiteUrl1 = 'https://superfly-wallpapers-e6d83528d884.herokuapp.com/';
  const websiteUrl2 =
    'https://github.com/JamJuiceCreative/T1A3---Terminal-Application';
  const websiteUrl3 = 'https://github.com/JamJuiceCreative/JamesLister_T2A2';
  const websiteUrl4 = 'https://translatorpu.netlify.app/';

  // Function to open the website in a new tab
  const openWebsite = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div>
      <h1 className="mt-5 text-center">Check out my latest projects!</h1>
      <div
        style={{ width: '100%' }}
        className="d-flex justify-content-center mt-3"
      >
        <Row className="mt-5">
          <Col
            
            lg={4}
            className=" projects-card col-md-6 mb-4 d-flex align-items-center"
          >
            <Skillcard
              className="mb-4 d-flex justify-content-center"
              title="Superfly Wallpapers E-commerce Site"
              content={
                <>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="projects rounded-top mb-3"
                      src={superflyWallPapers}
                      alt="Superfly Wallpapers"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <Button
                      variant="primary"
                      onClick={() => openWebsite(websiteUrl1)}
                    >
                      View Deployed Project
                    </Button>
                  </div>
                </>
              }
            />
          </Col>
          <Col xs={12} lg={8} className="col-md-6 mb-4">
            <div className="projects-text">
              <p style={{ color: 'black', textAlign: 'left', height: '500px' }}>
                {' '}
                <strong>
                  <a style={{ fontSize: '2rem', color: '#0a629c' }}>
                    Superfly Wallpapers
                  </a>{' '}
                  is a fullstack application intended as an e-commerce platform
                  for selling wide format graphics online to a gamer/ streamer
                  demographic.
                </strong>
                <br></br>
                <br></br> <strong>Features Include;</strong>
                <br></br>• User Auth/ Register and Login <br></br>• Site
                Navigation <br></br>• Gallery/ Featured Designs <br></br>•
                Search functionality <br></br>• Rating and Commenting component{' '}
                <br></br>• Quoting Calculator <br></br>• Shopping Cart Checkout
                and Billing services<br></br>• Favouriting ability in the UI
                <br></br>• Admin dashboard - data aggregation utilising google
                charts<br></br>• CRUD operations in user, design, orders &
                quotes lists for complete user interaction within database.{' '}
                <br></br>
                <strong>Technology Stack;</strong>
                <br></br>• Front end languages: HTML, CSS, SCSS<br></br>• Front
                end frameworks: React, React-Bootstrap <br></br>• Server side
                programming: Java Script <br></br>• Back end frameworks:
                Express, NodeJS, MongoDB <br></br>• Database Cloud Deployment:
                Mongo Atlas & Cloudinary<br></br>• Client Application: Insomnia{' '}
                <br></br>• Development IDE: Visual Studio Code <br></br>•
                Deployment platform: Heroku <br></br>
                <strong>
                  <Link to="https://superfly-wallpapers-e6d83528d884.herokuapp.com/">
                    Link to Deployed Site<br></br>
                  </Link>
                  <Link to="https://github.com/JamJuiceCreative/super-fly-wallpapers">
                    Link to Github
                  </Link>
                </strong>
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div
        style={{ width: '100%' }}
        className="d-flex justify-content-center mt-3"
      >
        <Row className="mt-5">
          <Col
            lg={4}
            className=" projects-card col-md-6 mb-4 d-flex align-items-center"
          >
            <Skillcard
              className="mb-4 d-flex justify-content-center"
              title="ZAPP (Zombie Apocalypse Planning Poker)"
              content={
                <>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="projects rounded-top mb-3"
                      src={ZAPP2}
                      alt="ZAPP (Zombie Apocalypse Planning Poker)"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <Button
                      variant="primary"
                      onClick={() => openWebsite(websiteUrl2)}
                    >
                      Visit project github
                    </Button>
                  </div>
                </>
              }
            />
          </Col>
          <Col lg={8} className="col-md-6 mb-4">
            <div className="projects-text">
              <p style={{ color: 'black', textAlign: 'left', height: '500px' }}>
                {' '}
                <strong>
                  <a style={{ fontSize: '2rem', color: '#0a629c' }}>
                    ZAPP (Zombie Apocalypse planning poker)
                  </a>{' '}
                  is a terminal application that features a game familiar to
                  those in the programming world “planning poker” or “scrum
                  poker” based around the zombie apocalypse
                </strong>
                <br></br>
                <br></br>
                <strong>Technology Stack;</strong>
                <br></br>• Programming languages: python, bash scripting{' '}
                <br></br>• Development IDE: Visual Studio Code <br></br>
                <strong>
                  <Link to="https://github.com/JamJuiceCreative/T1A3---Terminal-Application">
                    Link to Github
                  </Link>
                </strong>
              </p>
            </div>
          </Col>
        </Row>
      </div>




      <div
        style={{ width: '100%' }}
        className="d-flex justify-content-center mt-3"
      >
        <Row className="mt-5">
          <Col
            lg={4}
            className=" projects-card col-md-6 mb-4 d-flex align-items-center"
          >
            <Skillcard
              className="mb-4 d-flex justify-content-center"
              title="WRAPI (Wildlife Rescue API)"
              content={
                <>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="projects rounded-top mb-3"
                      src={WRAPI}
                      alt="WRAPI (Wildlife Rescue API)"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <Button
                      variant="primary"
                      onClick={() => openWebsite(websiteUrl3)}
                    >
                      Visit project github
                    </Button>
                  </div>
                </>
              }
            />
          </Col>
          <Col lg={8} className="col-md-6 mb-4">
            <div className="projects-text">
              <p style={{ color: 'black', textAlign: 'left', height: '500px' }}>
                {' '}
                <strong>
                  <a style={{ fontSize: '2rem', color: '#0a629c' }}>
                  WRAPI (Wildlife Rescue API)
                  </a>{' '}
                  is an API to give those interested in wildlife conservation a
                  platform to communicate with one another as well as
                  establishing their own rescue organisation.
                </strong>
                <br></br>
                <br></br>
                <strong>Technology Stack;</strong>
                <br></br>• Server side programming: python, SQL {' '}
                <br></br>• Back-end framework: flask<br></br>
                • Database: Postgres<br></br>•
                Client applications: Postman, Insomnia, Dbeaver <br></br>•
                Development IDE: Visual Studio Code<br></br>
                <strong>
                  <Link to="https://github.com/JamJuiceCreative/JamesLister_T2A2">
                    Link to github
                  </Link>
                </strong>
              </p>
            </div>
          </Col>
        </Row>
      </div>
      



      <div
        style={{ width: '100%' }}
        className="d-flex justify-content-center mt-3"
      >
        <Row className="mt-5">
          <Col
            lg={4}
            className=" projects-card col-md-6 mb-4 d-flex align-items-center"
          >
            <Skillcard
              className="mb-4 d-flex justify-content-center"
              title="Translator PU"
              content={
                <>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="projects rounded-top mb-3"
                      src={TranslatorPU}
                      alt="Translator PU"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <Button
                      variant="primary"
                      onClick={() => openWebsite(websiteUrl4)}
                    >
                      View deployed project
                    </Button>
                  </div>
                </>
              }
            />
          </Col>
          <Col lg={8} className="col-md-6 mb-4">
            <div className="projects-text">
              <p style={{ color: 'black', textAlign: 'left', height: '500px' }}>
                {' '}
                <strong>
                  <a style={{ fontSize: '2rem', color: '#0a629c' }}>
                    Translator PU
                  </a>{' '}
                  is a is a front-end for the LibreTranslate API. User interface
                  features drop-down menus for language selection and text-boxes
                  for input and output text.
                </strong>
                <br></br>
                <strong>Technology Stack;</strong>
                <br></br>• Front end technologies: HTML, CSS, Bootstrap{' '}
                <br></br>• Front end framework: React <br></br>• Server side
                programming: Java Script <br></br>• Development IDE: Visual
                Studio Code <br></br>• Deployment platform: Netlify <br></br>
                <strong>
                  <Link to="https://translatorpu.netlify.app/">
                    Link to Deployed Site<br></br>
                  </Link>
                  <Link to="https://github.com/JamJuiceCreative/react-translation-app">
                    Link to Github
                  </Link>
                </strong>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
