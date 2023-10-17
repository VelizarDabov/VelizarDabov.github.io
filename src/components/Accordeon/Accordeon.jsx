import React from "react";
import Works from "../Works/Works";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const Accordeon = () => {

    return(
<div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
     
    </div>
    <div className="collapse-content"> 
   <Works />
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <Skills/>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
  <Contact/>
    </div>
  </div>
</div>
    )
}

export default Accordeon