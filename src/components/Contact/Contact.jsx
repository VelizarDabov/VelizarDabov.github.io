import React from 'react';
import ContactForm from '../ContactForm/ContactForm';

const Contact = ({ showContactForm, toggleContactForm }) => {
  return (
    <div id='contact' className="alert flex justify-center alert-success mt-10 bg-transparent border-purple-500 border-solid border-2">
      <button className="btn text-white" onClick={() => {
        toggleContactForm();
      }}>
        {showContactForm ? 'Close' : 'Contact me'}
      </button>
      {showContactForm && <ContactForm />}
    </div>
  );
};

export default Contact