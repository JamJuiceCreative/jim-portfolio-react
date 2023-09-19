import React from 'react';
import { Card } from 'react-bootstrap';

export default function BlogItem(props) {
  return (
    <Card>
      <Card.Body>
        <a href={props.link}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="blog-post-date">{props.date}</Card.Text>
        </a>
        <Card.Text>{props.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}
