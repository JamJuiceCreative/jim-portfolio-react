import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <Row>
      <Col className="contact-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              style={{ maxWidth: '300px' }}
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              style={{ maxWidth: '500px' }}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={12}
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>

          <div style={{ textAlign: 'right'}}>
            <Button className = 'mt-4'variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactForm;
