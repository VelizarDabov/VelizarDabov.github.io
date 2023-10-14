import React, {useState} from 'react';

import FacebookImg from '../../assets/facebook-icon.png';
import LinkedInImg from '../../assets/linkedIn.png';
import githubImg from '../../assets/github.png';

import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  const [showContent, setShowContent] = useState(false);


  const toggleContent= () => {
    setShowContent(!showContent)
  }
   
    return (
    <>
     <div className="alert flex justify-center alert-success mt-20 bg-transparent border-purple-500 border-solid border-2">
              <button className="btn" onClick={toggleContent}>
                {showContent ? 'Contact me' : 'Hide contact form'}
              </button>
            </div>
{showContent && <ContactForm/>}
   
     </>
    ) 
}
export default Contact