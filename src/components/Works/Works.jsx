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
        <div className="container mx-auto mt-10 mr-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {worksData.map((work, index) => (
              <div key={index} className="col-span-1">
                <div className="card w-96 bg-transparent shadow-xl">
                  <figure className="px-10 pt-10 relative">
                    <img src={work.image} alt={work.title} className="rounded-xl" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{work.title}</h2>
                    <p>{work.description}</p>
                    <div className="card-actions">
                      <a href={work.githubLink}>
                        <button className="btn btn-primary">GitHub</button>
                      </a>
                    </div>
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

