import React from 'react';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
const App = () => {
  return (
    <div className='bg-site  bg-cover overflow-hidden'>
      <NavBar />
      <About />
      <Skills/>
      <Works />
      <Contact />
      {/* <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact /> */}
      <div className='h-[4000px]'></div> 
    </div>
  );
};

export default App;
