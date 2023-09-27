import React from 'react'
import VideoPlayer from '../Components/VideoPlayer';
// import { Card } from 'react-bootstrap';
import Skillcard from '../Components/Skillcard';
import Grilld from '../Assets/Images/Thumbnails/grilld.jpg'
export default function Video() {
  return (
<div className="App">
      <h1>Digital Video</h1>
      <Skillcard className ="d-flex align-items-center"
              title="Benga Clients Video"
              content={<>
                <img className="clientVideo" src={Grilld} alt="benga clients video" style={{width:'400px', corners: '5px'}}/>
                <VideoPlayer videoId="DxqeYEa5-0E" />
                </>
              }
              
              
            />
      <div className="video-grid">
        
        <VideoPlayer videoId="ixxGsB5cxl4" />
        <VideoPlayer videoId="YiGGNrCDNwU" />
        <VideoPlayer videoId="DxqeYEa5-0E" />
        <VideoPlayer videoId="ixxGsB5cxl4" />
        <VideoPlayer videoId="YiGGNrCDNwU" />
        {/* Add more VideoPlayer components as needed */}
      </div>
    </div>
  )
}
