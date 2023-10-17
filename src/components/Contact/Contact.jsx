import React, {useState, useRef} from 'react';

import FacebookImg from '../../assets/facebook-icon.png';
import LinkedInImg from '../../assets/linkedIn.png';
import githubImg from '../../assets/github.png';
import NavBar from '../NavBar/NavBar';
import ContactForm from '../ContactForm/ContactForm';

const Contact = ({ showContactForm, toggleContactForm }) => {
  return (
    <div id='contact' className="alert flex justify-center alert-success mt-20 bg-transparent border-purple-500 border-solid border-2">
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