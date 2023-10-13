import React from "react";
import javascriptPic from '../../assets/javascript.png';
import reactPic from '../../assets/react.png'
import htmlcssPic from '../../assets/htmlcss.png'
const Skills = () => {
return (
<div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
  <div className="divider lg:divider-horizontal">OR</div> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
</div>

  
)
}
export default Skills;

{/* <section id='skills'>
<p className="">What i do</p>

<div className="">
    <div className="">
        <img src={javascriptPic} alt="JavaScript" className="" />
        <div className="">
            <h2>JavaScript</h2>
        </div>
    </div>
    <div className="">
        <img src={reactPic} alt="ReactJS" className="" />
        <div className="">
            <h2>ReactJS</h2>
        </div>
    </div>
    <div className="">
        <img src={htmlcssPic} alt="htmlcss" className="" />
        <div className="">
            <h2>HTML and CSS</h2>
        </div>
    </div>
</div>
    </section> */}