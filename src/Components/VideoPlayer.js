import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const videoOptions = {
    height: '390',
    width: '640',
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Video
      </Button>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Video Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube videoId={videoId} opts={videoOptions} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VideoPlayer;