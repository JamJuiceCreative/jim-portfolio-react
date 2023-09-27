import React from 'react';
import PortfolioItem from '../Components/PortfolioItem';
import { Row, Col } from 'react-bootstrap';
//Graphic Design
import LiquorStax from '../Assets/Images/GraphicDesign/Liquor-Stax.jpg';
import EqSunMetro from '../Assets/Images/GraphicDesign/eq-sun-metro.jpg';
import Boral from '../Assets/Images/GraphicDesign/boral-timber-floors.jpg';
import Tolsom from '../Assets/Images/GraphicDesign/tolsom.jpg';
import WineStax from '../Assets/Images/GraphicDesign/Winestax.jpg';
import SMHMovies from '../Assets/Images/GraphicDesign/smh-movies.jpg';
import Artisty from '../Assets/Images/GraphicDesign/artistry.jpg';
import C2One from '../Assets/Images/GraphicDesign/c2one.jpg';
import HockeyBanner from '../Assets/Images/GraphicDesign/hockey-banner.jpg';
import Nutricia from '../Assets/Images/GraphicDesign/nutricia.jpg';
import Penguin1 from '../Assets/Images/GraphicDesign/penguin1.jpg';
import Penguin2 from '../Assets/Images/GraphicDesign/penguin2.jpg';
import Penguin3 from '../Assets/Images/GraphicDesign/penguin3.jpg';
import Penguin4 from '../Assets/Images/GraphicDesign/penguin4.jpg';
import PowerYoga from '../Assets/Images/GraphicDesign/power-yoga.jpg';
import PromoSign from '../Assets/Images/GraphicDesign/promo-sign.jpg';
import SandwichBoard1 from '../Assets/Images/GraphicDesign/sandwichboard1.jpg';
import SandwichBoard2 from '../Assets/Images/GraphicDesign/sandwich-board2.jpg';
import SpecialTour1 from '../Assets/Images/GraphicDesign/special-tour1.jpg';
import SpecialTour2 from '../Assets/Images/GraphicDesign/special-tour2.jpg';
import Steyr from '../Assets/Images/GraphicDesign/steyr.jpg';
import Tour from '../Assets/Images/GraphicDesign/tour.jpg';
import TrotsAd from '../Assets/Images/GraphicDesign/trotsad.jpg';
import Xergic from '../Assets/Images/GraphicDesign/xergic.jpg';

// Creative
import Mentoring from '../Assets/Images/Creative/mentoring.jpg';
import Hiudoid from '../Assets/Images/Creative/hiudoid.jpg';
import GlobalKnives from '../Assets/Images/Creative/global-knives.jpg';
import AirTasker from '../Assets/Images/Creative/air-tasker.jpg';
import UpnGo1 from '../Assets/Images/Creative/upngo1.jpg';
import UpnGo2 from '../Assets/Images/Creative/upngo2.jpg';
import UpnGo3 from '../Assets/Images/Creative/upngo3.jpg';
import BillBoard from '../Assets/Images/Creative/adt.jpg';
import TVC from '../Assets/Images/Creative/tvc.jpg';
import ChangeApp from '../Assets/Images/Creative/change-app.jpg';
import DollarShave from '../Assets/Images/Creative/dollar-shave.jpg';
import ApplePay from '../Assets/Images/Creative/apple-tag.jpg';
import TigerTaxis from '../Assets/Images/Creative/tiger-taxis.jpg';
import VW1 from '../Assets/Images/Creative/vw.jpg';
import VW2 from '../Assets/Images/Creative/vw2.jpg';
import VW3 from '../Assets/Images/Creative/vw3.jpg';
import Slots from '../Assets/Images/Creative/slots.jpg';
import ContBook from '../Assets/Images/KeyStoneVisuals/Continental-book-KSV.jpg';
import ContKSV from '../Assets/Images/KeyStoneVisuals/Continental-KSV.jpg';
import ContSpin from '../Assets/Images/KeyStoneVisuals/Continental-spin-KSV.jpg';
import FYIKSV from '../Assets/Images/KeyStoneVisuals/FYI-KSV.jpg';
import OUTPKSV from '../Assets/Images/KeyStoneVisuals/OUTP-KSV.jpg';
import BENDER from '../Assets/Images/KeyStoneVisuals/KSV-Bender.jpg';
import Watch1 from '../Assets/Images/KeyStoneVisuals/watch-boards-1.jpg';
import Watch2 from '../Assets/Images/KeyStoneVisuals/watch-boards-2.jpg';
//Illustration
import OneAtATime from '../Assets/Images/Illustration/1AtATime.jpg';
import BundleOfLove from '../Assets/Images/Illustration/bundle-of-love.jpg';
import SweetAndTender from '../Assets/Images/Illustration/sweet-and-tender.jpg';
import SaintMary from '../Assets/Images/Illustration/saint-mary.png';
import CouchBurners from '../Assets/Images/Illustration/couchburnersV2.png';
import Destroyers from '../Assets/Images/Illustration/destroyers.png';
import DingoIllo from '../Assets/Images/Illustration/dingo-illo.png';
import ThunderLogo from '../Assets/Images/Illustration/thunder-logo.png';
import Secret1 from '../Assets/Images/Illustration/secret1.jpg';
import Mallow from '../Assets/Images/Illustration/mallow-diagram.jpg';
import SchoolBanner1 from '../Assets/Images/Illustration/schoolbanner1.jpg';
import SchoolBanner2 from '../Assets/Images/Illustration/schoolbanner2.jpg';
import SchoolBanner3 from '../Assets/Images/Illustration/schoolbanner3.jpg';
import Buffalo from '../Assets/Images/Illustration/buffalo.jpg';
import BerneseDog from '../Assets/Images/Illustration/bernese-dog.jpg';
import KoalaCrossing from '../Assets/Images/Illustration/koala-crossing.jpg';
import Ollie1 from '../Assets/Images/Illustration/ollie1.jpg';
import Ollie2 from '../Assets/Images/Illustration/ollie2.jpg';
import Ollie3 from '../Assets/Images/Illustration/ollie3.jpg';
import MatildaDecal from '../Assets/Images/Illustration/matilda-decal.png';
import OliverDecal1 from '../Assets/Images/Illustration/oliver-decal1.png';
import OliverDecal2 from '../Assets/Images/Illustration/oliver-decal2.png';
import OttoDecal from '../Assets/Images/Illustration/otto-decal.jpg';
import VrokenKeltor from '../Assets/Images/Illustration/vroken-keltor.jpg';

export default function Gallery() {
  return (
    <>
      <h1 className="mt-5">Graphic Design</h1>
      <Row className="m-5 d-flex align-items-center">
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={WineStax} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Boral} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={EqSunMetro} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={LiquorStax} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Tolsom} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={SMHMovies} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Artisty} />
          <PortfolioItem imageSrc={HockeyBanner} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={C2One} />
        </Col>

        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Nutricia} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Penguin1} />
          <PortfolioItem imageSrc={Penguin2} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Penguin3} />
          <PortfolioItem imageSrc={Penguin4} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={PowerYoga} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={PromoSign} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={SandwichBoard1} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={SandwichBoard2} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Tour} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={SpecialTour1} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={SpecialTour2} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Steyr} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={TrotsAd} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Xergic} />
        </Col>
      </Row>
      <h1 className="mt-5">Illustration</h1>
      <Row className="m-5 d-flex align-items-center">
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={OneAtATime} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={BundleOfLove} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={SweetAndTender} />
        </Col>
        <Col xs={12} md={4} lg={2}>
          <PortfolioItem imageSrc={Secret1} />
        </Col>
        <Col xs={12} md={4} lg={3}>
          <PortfolioItem imageSrc={SaintMary} />
        </Col>

        <Col xs={12} md={6} lg={4}>
          <Row>
            <Col xs={12} md={6}>
              <PortfolioItem imageSrc={DingoIllo} />
            </Col>
            <Col xs={12} md={6}>
              <PortfolioItem imageSrc={CouchBurners} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} >
              <PortfolioItem imageSrc={ThunderLogo} />
            </Col>
            <Col xs={12} md={6}>
              <PortfolioItem imageSrc={Destroyers} />
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={4} lg={3}>
          <PortfolioItem imageSrc={Mallow} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={SchoolBanner1} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={SchoolBanner2} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={SchoolBanner3} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={BerneseDog} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Buffalo} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={KoalaCrossing} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Ollie1} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Ollie2} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Ollie3} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={OliverDecal1} />
          <PortfolioItem imageSrc={OliverDecal2} />
          <PortfolioItem imageSrc={MatildaDecal} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={VrokenKeltor} />
          <PortfolioItem imageSrc={OttoDecal} />

        </Col>

      </Row>
      

      <h1 className="mt-5">Creative</h1>
      <Row className="m-5 d-flex align-items-center">
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Mentoring} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Hiudoid} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={GlobalKnives} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={AirTasker} />
          <PortfolioItem imageSrc={BillBoard} />
        </Col>

        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={UpnGo1} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={UpnGo2} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={UpnGo3} />
        </Col>

        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={TVC} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={ChangeApp} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={DollarShave} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={ApplePay} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={TigerTaxis} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={VW1} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={VW2} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={VW3} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Slots} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={ContBook} />
          <PortfolioItem imageSrc={ContKSV} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={ContSpin} />
          <PortfolioItem imageSrc={FYIKSV} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={OUTPKSV} />
          <PortfolioItem imageSrc={BENDER} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <PortfolioItem imageSrc={Watch1} />
          <PortfolioItem imageSrc={Watch2} />
        </Col>
      </Row>
    </>
  );
}
