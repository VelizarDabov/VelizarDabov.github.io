import React, {useState} from "react";
import worksData from "./WorksObj";

const Works = () => {
 
  const [showContent, setShowContent]=useState(false);

  const toggleContent = () =>{
    setShowContent(!showContent)
  }
  return (
    <>
    <div className="alert flex justify-center alert-success mt-20 bg-transparent border-purple-500 border-solid border-2  ">
      <button className="btn text-white" onClick={toggleContent}>
      {showContent ? 'Hide My Works' : 'Show My Works'}
      </button>
 
</div>
{showContent && (
        <div className="w-full md:h-screen text-gray-300 bg-[#0a192f] mt-20">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {worksData.map((work, index) => (
             <div
             key={index}
             style={{ backgroundImage: `url(${work.image})` }}
             className="shadow-lg  shadow-[#040c16] group container rounded-md 
                       flex justify-center text-center items-center mx-auto content-div "
           >
             <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {work.name}
      </span>
      <div className="pt-8 text-center ">
       
        <a href={work.githubLink} target="_blank">
          <button className="btn w-60 text-white"
          >
           github
          </button>
        </a>
      </div>
    </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Works;

