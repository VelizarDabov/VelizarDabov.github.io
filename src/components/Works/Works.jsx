import React, {useState} from "react";
import calendar from '../../assets/reactCalendar.png';
import calculator from '../../assets/reactCalculato.png';
import shoesApp from '../../assets/shoesApp.png';
import todoApp from '../../assets/todoApp.png';
import weatherApp from '../../assets/weatherApp.png';
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
{showContent && (<div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1">
            <div className="card w-96 bg-transparent shadow-xl">
              <figure className="px-10 pt-10 relative">
                <img src={weatherApp} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">React Weather App</h2>
                <p>Simple weather app using ReactJS and Firebase</p>
                <div className="card-actions">
                <a href='https://github.com/VelizarDabov/React-Weather-App'>
                <button className="btn btn-primary">GitHub </button>
                   </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="card w-96 bg-transparent shadow-xl">
              <figure className="px-10 pt-10 relative">
              <div className="h-56 w-full bg-cover bg-center rounded-xl" style={{ backgroundImage: {todoApp} }}>
                <img src={todoApp} alt="Shoes" className="rounded-xl" />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Todo App</h2>
                <p>Simple Todo App  using ReactJS</p>
                <div className="card-actions">
                <a href='https://github.com/VelizarDabov/React-Weather-App'>
                <button className="btn btn-primary">GitHub </button>
                   </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="card w-96 bg-transparent shadow-xl">
              <figure className="px-10 pt-10">
                <img src={shoesApp} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <a href="https://github.com/VelizarDabov/shoes-store-app/tree/master">
                <button className="btn btn-primary">GitHub </button>
                   </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="card w-96 bg-transparent shadow-xl">
              <figure className="px-10 pt-10">
                <img src={calendar} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">React Calendar</h2>
                <p>Simple React Calendar using Redux</p>
                <div className="card-actions">
                <a href="https://github.com/VelizarDabov/React-Google-Calendar/tree/main/Desktop/google-calendar/google-calendar">
                <button className="btn btn-primary">GitHub </button>
                   </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="card w-96 bg-transparent shadow-xl">
              <figure className="px-20 pt-10">
                <img src={calculator} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Calculator App</h2>
                <p>Simple Calculator App</p>
                <div className="card-actions">
                <a href="https://github.com/VelizarDabov/react-calculator">
                <button className="btn btn-primary">GitHub </button>
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        )}      
    </>
  );

}
export default Works;

