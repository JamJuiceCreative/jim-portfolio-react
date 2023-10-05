import React from 'react';
import ContactForm from '../Components/ContactForm';
import ContactCard from '../Components/ContactCard';

export default function Contact() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="mb-lg-6 text-center contact-small-screen" style ={{width: '90%'}}>
        <h1 className="mt-5 mb-5 text-center">Please feel free to shoot me a message</h1>
        <ContactCard className ="contact-skill-card" title="Contact Form" content={<ContactForm />} />
      </div>
    </div>
  );
}
