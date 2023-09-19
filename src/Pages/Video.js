import React from 'react'
import VideoPlayer from '../Components/VideoPlayer';

export default function Video() {
  return (
<div className="App">
      <h1>YouTube Video Player</h1>
      <div className="video-grid">
        <VideoPlayer videoId="VIDEO_ID_1" />
        <VideoPlayer videoId="VIDEO_ID_2" />
        <VideoPlayer videoId="VIDEO_ID_3" />
        {/* Add more VideoPlayer components as needed */}
      </div>
    </div>
  )
}
