import React, { use, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AuthContext } from '../AppContext/AppContext';
import { IoIosArrowDown } from 'react-icons/io';
import { FaRoute, FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { toast } from 'react-toastify';
const Header = () => {
    const [isOpen,setIsOpen] = useState(false);
    const { user, logOutUser } = use(AuthContext);
    const link = (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/plants">Plants</NavLink>
            <NavLink to="/myProfile">My Profile</NavLink>
        </>
    );
    console.log(user);
    

    // DROP DOWN FUNCTIONALITIES
    const dropdownRef = useRef(null);
    useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        logOutUser()
        .then(() => {
            toast.success('Logout Successfully!')
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    
    return (
        <div className='bg-[#EEEEEE] text-[#11224E]' style={{ boxShadow: '0 8px 10px -5px rgba(0, 0, 0, 0.4)' }}>
        <div className='c-container'>
            <div className="navbar">

                <div className="navbar-start">
                    <Link to={'/'}><img  className='w-20' src={logo} alt="" srcset="" /></Link>
                </div>
                
                <div className="navbar-center">
                    <ul className="menu menu-vertical c-nav lg:menu-horizontal flex gap-5">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end relative">

                    {
                        ! user ? (
                            <div>
                          <Link to='/login' className="btn btn-link no-underline text-[#11224E]">Login</Link>
                        <Link to='/register' className="btn btn-outline text-[#11224E] bg-[11224E]]">Register</Link>
                    </div>
                    )
                    :        
                    (
                    <div className="relative" ref={dropdownRef}>

                    {/* User button dropdown */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex cursor-pointer items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors duration-200 group"
                        >
                            {/* Avatar */}
                            {user?.photoURL ? (
                            <img
                                src={user?.photoURL}
                                alt={user?.displayName}
                                className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-200 group-hover:ring-slate-300 transition-all"
                            />
                            ) : (
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center ring-2 ring-slate-200 group-hover:ring-slate-300 transition-all">
                                <span className="text-white font-semibold text-sm">
                                {user?.displayName}
                                </span>
                            </div>
                            )}

                            {/* Display Name */}
                            <span className="text-sm font-medium text-slate-700 hidden sm:block">
                            {user?.displayName}
                            </span>

                            {/* arrow */}
                            {<IoIosArrowDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                            {/* User Info Section */}
                            <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
                                <div className="flex items-center space-x-3">
                                {user?.photoURL ? (
                                    <img
                                    src={user?.photoURL}
                                    alt={user?.displayName}
                                    className="w-12 h-12 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-semibold">
                                        {user?.displayName}
                                    </span>
                                    </div>
                                )}
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-slate-900 truncate">
                                    {user?.displayName}
                                    </p>
                                    <p className="text-xs text-slate-500 truncate">
                                    {user?.email}
                                    </p>
                                </div>
                                </div>
                            </div>

                            {/* Menu Items */}
                            <div className="py-2">
                                <Link
                                to={'/myProfile'}
                                onClick={() => {
                                    console.log('Profile clicked');
                                    setIsOpen(false);
                                }}
                                className="w-full flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-150"
                                >
                                <FaUser className="w-4 h-4 text-slate-400" />
                                <span>View Profile</span>
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center space-x-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                                    >
                                    <FiLogOut className="w-4 h-4" />
                                    <span>Logout</span>
                                </button>
                            </div>
                            </div>
                        )}
                    </div>)
                    }

                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;