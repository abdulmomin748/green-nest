import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
const Header = () => {
    const link = (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/plants">Plants</NavLink>
            <NavLink to="/myProfile">My Profile</NavLink>
        </>
    );
    return (
        <div className='bg-[#EEEEEE] text-[#11224E]' style={{ boxShadow: '0 8px 10px -5px rgba(0, 0, 0, 0.4)' }}>
        <div className='c-container'>
            <div className="navbar">

                <div className="navbar-start">
                    <img  className='w-[80px]' src={logo} alt="" srcset="" />
                </div>
                
                <div className="navbar-center">
                    <ul className="menu menu-vertical c-nav lg:menu-horizontal flex gap-5">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                          <Link to='/login' className="btn btn-link no-underline text-[#11224E]">Login</Link>
                        <Link to='/register' className="btn btn-outline text-[#11224E] bg-[11224E]]">Register</Link>
                    </div>

                    {/* <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                    </div> */}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;