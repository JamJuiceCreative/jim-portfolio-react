import React from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoPlayer from '../Components/VideoPlayer';
// import { Card } from 'react-bootstrap';
import Skillcard from '../Components/Skillcard';
import Grilld from '../Assets/Images/Thumbnails/grilld.jpg';
import TeamVsTeam from '../Assets/Images/Thumbnails/teamvsteam.png';
import BengaServices from '../Assets/Images/Thumbnails/benga-services.png';
import PrinterVideo from '../Assets/Images/Thumbnails/printer-video.png';
import JohnCooper from '../Assets/Images/Thumbnails/john-cooper.png';
import SignTimeLapse from '../Assets/Images/Thumbnails/sign-timelapse.png';

export default function Video() {
  return (
    <div className="videoThumbnails">
      <h1>Digital Video</h1>
      <div className="d-flex justify-content-center"></div>
      <div className="d-flex justify-content-center">
        <Row>
          <Col lg={4} md={6} sm={12}className="mb-4">
            <Skillcard
              className="d-flex align-items-center"
              title="Benga Clients Video"
              content={
                <>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="clientVideo rounded-top mb-3"
                      src={Grilld}
                      alt="Benga Clients Video"
                      style={{ width: '95%' }}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <VideoPlayer videoId="DxqeYEa5-0E" />
                  </div>
                </>
              }
            />
          </Col>
          <Col lg={4} md={6} sm={12}className="mb-4">
            <Skillcard
              className="d-flex align-items-center"
              title="Benga Services Video"
              content={
                <>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="clientVideo rounded-top mb-3"
                      src={BengaServices}
                      alt="Benga Services Video"
                      style={{ width: '95%' }}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <VideoPlayer videoId="ixxGsB5cxl4" />
                  </div>
                </>
              }
            />
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Skillcard
              className="d-flex align-items-center"
              title="Wilston AFL Promo Video"
              content={
                <>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="clientVideo rounded-top mb-3"
                      src={TeamVsTeam}
                      alt="Wilston AFL Promo Video"
                      style={{ width: '95%' }}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <VideoPlayer videoId="YiGGNrCDNwU" />
                  </div>
                </>
              }
            />
          </Col>

          <Col lg={4} md={6} sm={12}className="mb-4">
            <Skillcard
              className="d-flex align-items-center"
              title="Sign Install Time Lapse"
              content={
                <>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="clientVideo rounded-top mb-3"
                      src={SignTimeLapse}
                      alt="Sign Install Time Lapse"
                      style={{ width: '95%' }}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <VideoPlayer videoId="BM3-Ib-KnIc" />
                  </div>
                </>
              }
            />
          </Col>
          <Col lg={4} md={6} sm={12}className="mb-4">
            <Skillcard
              className="d-flex align-items-center"
              title="Printer Donation Video"
              content={
                <>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="clientVideo rounded-top mb-3"
                      src={PrinterVideo}
                      alt="Printer Donation Video"
                      style={{ width: '95%' }}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <VideoPlayer videoId="AIFPAs8WJJ8" />
                  </div>
                </>
              }
            />
          </Col>
          <Col lg={4} md={6} sm={12}className="mb-4">
            <Skillcard
              className="d-flex align-items-center"
              title="Sign Fabrication Time lapse"
              content={
                <>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="clientVideo rounded-top mb-3"
                      src={JohnCooper}
                      alt="John Cooper Sign Fabrication"
                      style={{ width: '95%' }}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <VideoPlayer videoId="FYN8qoE9ijY" />
                  </div>
                </>
              }
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
