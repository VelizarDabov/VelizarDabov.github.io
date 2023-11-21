import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import video from './assets/bgggg.mp4'
const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };
  const openContactForm = () => {
    setShowContactForm(true);
  };
  return (
<<<<<<< HEAD
    <div className="relative object-cover h-[155vh]">
      <video className="object-cover w-full h-full z-10 bg-repeat-y" src={video} autoPlay loop muted></video>
=======
    <div className="relative object-cover h-[200vh]">
      <video className="object-cover w-full h-full z-10" src={video} autoPlay loop muted></video>
>>>>>>> f85955c05e84359a5b0e7da278b98392bfed7eeb
      <div className="absolute inset-0 z-20"> 
      <NavBar scrollToContact={scrollToContact} toggleContactForm={openContactForm} />
        <About />
        <Skills />
        <Works />
        <Contact showContactForm={showContactForm} toggleContactForm={toggleContactForm} />
      </div>
    </div>
  );
};

export default App;