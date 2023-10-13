import React, {useRef, useState} from 'react';

import FacebookImg from '../../assets/facebook-icon.png';
import LinkedInImg from '../../assets/linkedIn.png';
import jsbasics from '../../assets/jsbasics.png';
import jsFundamentals from '../../assets/jsFundamentals.png';
import jsAdvanced from '../../assets/jsAdvanced.png';
import jsApplication from '../../assets/jsApplication.png';
import reactUdemy from '../../assets/reactUdemy.png';
import jsUdemy from '../../assets/udemy1.png';
import githubImg from '../../assets/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [expandedImg, setExpandedImg] = useState(null);

    const certificateImages = [
      { src: jsbasics, alt: 'JS Basics' },
      { src: jsFundamentals, alt: 'JS Fundamentals' },
      { src: jsAdvanced, alt: 'JS Advanced' },
      { src: jsApplication, alt: 'JS Application' },
      { src: reactUdemy, alt: 'React Udemy' },
      { src: jsUdemy, alt: 'JS Udemy' },
    ];
  
    const handleImageClick = (index) => {
      setExpandedImg(index === expandedImg ? null : index);
    };

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_iqjeit6', 'template_7uajuns', form.current, 'ie9ugSM03hYpDkCyS')
          .then((result) => {
              console.log(result.text);  
              e.target.reset();  
              alert('Email sent')
          }, (error) => {
              console.log(error.text);
          });
      };
    return   <section id="contactPage">
    <div id="certificates">
      <h1 className="certificatesTitle">My Certificates</h1>
      <div className="certificateImgs">
        {certificateImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className={`certificateImg ${expandedImg === index ? 'expanded' : ''}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
<div className='background-container'>


<div id='contact'>
<h1 className="contactsTitle">Contact me</h1>
<span className="contactDesc">Please fill in the form</span>

<form className='contactForm' ref={form} onSubmit={sendEmail} >
    <input type="text" className="name" placeholder='Your Name' name='your_name'/>
    <input type="email" className="email" placeholder='Your Email' name='your_email' />
    <label>Message</label>
    <textarea className='message' name="message"  rows="6" placeholder='Your Message' />
    <button type='submit' value='Send' className="btn" >Submit</button>
    <div className="links">
        <a href='https://www.linkedin.com/in/velizar-dabov-28729b24b/'>
        <img src={LinkedInImg} alt="LinkedIn" className="link" />
        </a>
      <a href='https://github.com/VelizarDabov'>
      <img src={githubImg} alt="Instagram" className="link" />
      </a>
       <a href='https://www.facebook.com/velizar.dabov'>
       <img src={FacebookImg} alt="Facebook" className="link" />
       </a>
       
    </div>
    
</form>
</div>
</div>
    </section>
}
export default Contact