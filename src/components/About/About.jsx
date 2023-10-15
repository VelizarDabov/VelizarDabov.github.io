import React from 'react'
import profilePic from '../../assets/profilePic.jpg'
import myResume from '../../assets/Velizars-Resume.pdf';

function About() {
  return (
<>

<div className='mockup-phone min-h-screen-50vh min-w-screen-50vh mt-5'>
  <div className='text-center'>
    <h1>My Skills</h1>
  </div>
<div className="progress-container">
    <label className="progress-label">JavaScript</label>
    <progress className="progress progress-secondary w-56" value='80' max="100"></progress>
  </div>

  <div className="progress-container">
    <label className="progress-label pr-5">ReactJS</label>
    <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
  </div>
  <div className="progress-container">
    <label className="progress-label pr-7">NextJS</label>
    <progress className="progress progress-secondary w-56" value="65" max="100"></progress>
  </div>
  <div className="progress-container">
    <label className="progress-label">HTML&CSS</label>
    <progress className="progress progress-secondary w-56" value="40" max="100"></progress>
  </div>

  <div className="progress-container">
    <label className="progress-label pr-5">Tailwind</label>
    <progress className="progress progress-secondary w-56" value="50" max="100"></progress>
  </div>

 
</div>


<div className='flex space-x-4'>
  <div className="mockup-phone block items-right justify-right min-h-screen-80vh bgg-about bgg-cover bgg-center bgg-no-repeat">
  <div className="camera"></div> 
  <div className="display ">
    <div className="artboard  items-right justify-rightart board-demo phone-1  bg-about bg-cover bg-center bg-no-repeat artbord-ml-10">
    <div className="chat chat-end ">
  <div className="chat-image avatar online">
    <div className="w-10 rounded-full">
      <img src={profilePic} className='w-24 rounded-full'/>
    </div>
  </div>
  <div className="chat-bubble bg-grey bg-opacity-50 chatrelative w-fit p-4 max-w-90 mt-12">Hello,</div>
</div>
<div className="chat chat-end">
  <div className="chat-image  avatar online">
    <div className="w-10 rounded-full">
      <img src={profilePic} />
    </div>
  </div>
  <div className="chat-bubble bg-grey bg-opacity-30 ">I'm <div>Velizar </div>Junior Front-End Developer</div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar online">
    <div className="w-10 rounded-full">
      <img src={profilePic} />
    </div>
  </div>
  <div className="chat-bubble bg-grey bg-opacity-30">A motivated junior front-end developer with a passion for creating seamless and visually appealing web experiences.</div>
  
    </div>
    <div className='px-14 mt-14'>
      <a href={myResume} download='Velizars-Resume.pdf'>
      <button className='btn text-white'>Download Resume</button>
      </a>
      
    </div>
   
  </div>
  </div>
  
</div>
</div>
</>
   
  )
}

export default About

    


