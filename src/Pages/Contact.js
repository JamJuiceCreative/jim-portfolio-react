import React from 'react';
import ContactForm from '../Components/ContactForm';
import ContactCard from '../Components/ContactCard';

export default function Contact() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="mb-lg-6 text-center" style ={{width: '90%'}}>
        <h1 className='mb-4 mt-4'>Please feel free to shoot me a message</h1>
        <ContactCard className ='contact-skill-card' title="Contact Form" content={<ContactForm />} />
      </div>
    </div>
  );
}
