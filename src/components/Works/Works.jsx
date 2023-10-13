import React from "react";
import calendar from '../../assets/reactCalendar.png';
import calculator from '../../assets/reactCalculato.png';
import shoesApp from '../../assets/shoesApp.png';
import todoApp from '../../assets/todoApp.png';
import weatherApp from '../../assets/weatherApp.png';
const Works = () => {
  
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1">
            <div className="card w-96 bg-base-100 shadow-xl">
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
            <div className="card w-96 bg-base-100 shadow-xl">
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
            <div className="card w-96 bg-base-100 shadow-xl">
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
            <div className="card w-96 bg-base-100 shadow-xl">
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
            <div className="card w-96 bg-base-100 shadow-xl">
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
          <div className="col-span-1">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title"></h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
export default Works;

