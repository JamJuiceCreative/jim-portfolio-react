import React, { useState, useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
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
    emailjs
      .sendForm(
        'service_xkmfr8j',
        'template_kjhoo8f',
        form.current,
        'inuh7mz4pnna9sK9T'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully');
          e.target.reset();
          setFormData({
            user_name: '',
            user_email: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send message');
        }
      );
  };

  return (
    <Row>
      <Col className="contact-container">
        <Form ref={form} onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              style={{ maxWidth: '300px' }}
              type="text"
              name="user_name"
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
              name="user_email"
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

          <div style={{ textAlign: 'right' }}>
            <Button className="mt-4" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
        <Toaster position="bottom-center" reverseOrder={false} />
      </Col>
    </Row>
  );
};

export default ContactForm;
