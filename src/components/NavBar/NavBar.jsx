import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
const NavBar = () => {
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
            onClick={() => scroll.scrollToBottom()}
          >
            Contact me
          </button>
        </div>
      </div>
    );
  };
  
  export default NavBar;

//         <nav className="menu menu-horizontal bg-base-200">

{/* <img src={logo} alt='logo' className="btn btn-ghost btn-circle avatar"/>
<div className="" >
<div className="w-full bg-black/20 h-[96px] blackdrop-blur-2x1 rounded-full max-w-[400px] mx-auto px-5">
<Link activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>Home</Link>
<Link activeClass="active" to='skills' spy={true} smooth={true} offset={-60} duration={500} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>About</Link>
<Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>Portfolio</Link>
<Link activeClass="active" to='contactPage' spy={true} smooth={true} offset={-60} duration={500} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>Certificates</Link>

<button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900" onClick={()=> {
     document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
}}>
    <img src={contactImg} alt='' className=""/> Contact Me
</button>
</div>
</div>

</nav> */}