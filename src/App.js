import React from 'react';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import video from './assets/bgggg.mp4'
const App = () => {
  return (
    <div className="relative h-[200vh]">
      <video className="object-cover w-full h-full z-10" src={video} autoPlay loop muted></video>
      <div className="absolute inset-0 z-20"> 
        <NavBar />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
      <div className="h-[1000px]"></div>
    </div>
  );
};

export default App;