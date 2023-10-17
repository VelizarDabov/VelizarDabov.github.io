import React from 'react';
import ContactForm from '../ContactForm/ContactForm';

const Contact = ({ showContactForm, toggleContactForm }) => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    contactElement.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <div className="alert flex justify-center alert-success mt-10 bg-transparent border-purple-500 border-solid border-2">
      <button className="btn text-white" onClick={() => {
        toggleContactForm();
        if (!showContactForm) {
          scrollToContact();
        }
      }}>
        {showContactForm ? 'Cancel' : 'Contact me'}
      </button>
   
    </div>
       {showContactForm && <ContactForm />}
       </>
  );
};

export default Contact