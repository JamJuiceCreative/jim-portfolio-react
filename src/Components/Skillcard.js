import React from 'react';
import { Card } from 'react-bootstrap';

export default function Skillcard() {
  return (
    <>
      <Card className="d-flex flex-column justify-content-end align-items-center skillcard" >
        <Card.Title className= "cardTitle">
            Resume
        </Card.Title>
        <Card className= "innercard">

        </Card>
      </Card>
    </>
  );
}
