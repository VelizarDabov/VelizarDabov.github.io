import React, {useState} from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import ContactForm from "../ContactForm/ContactForm";
const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Homepage
                </Link>
              </li>
              <li>
                <Link
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                 Works
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">Velizar Dabov</a>
        </div>
        <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle"
          onClick={toggleModal} // Call the function to toggle the modal
        >
          Contact me
        </button>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" checked={isModalOpen} />
        <div className={`modal ${isModalOpen ? 'open' : ''}`}>
          <div className="modal-box bg-transparent">
          <ContactForm/>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7" onClick={toggleModal}></label>
        </div>
      </div>
    </div>
    );
  };
  
  export default NavBar;
