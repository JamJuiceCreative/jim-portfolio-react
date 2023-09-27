import React from 'react';
import { Card } from 'react-bootstrap';

export default function Skillcard({ title, content, isImage }) {
  return (
    <>
      <Card className="d-flex flex-column justify-content-end align-items-center skillcard">
        <Card.Title className="cardTitle pb-3 pt-3">{title}</Card.Title>
        <Card className="innercard">
          <Card.Body
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isImage ? (
              <img
                src={content}
                alt={title}
                style={{
                  height: '80%',
                  maxHeight: '260px',
                  marginLeft: '30px',
                }}
                className="img-fluid"
              />
            ) : (
              <div style={{ color: 'white' }}>{content}</div>
            )}
          </Card.Body>
        </Card>
      </Card>
    </>
  );
}
