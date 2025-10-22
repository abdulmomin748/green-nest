import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare } from 'react-icons/fa';

const Footer = () => {

    return (
        <div style={{ boxShadow: '0 -8px 10px -5px rgba(0, 0, 0, 0.4)' }}>
            <footer className="c-container footer footer-horizontal footer-center text-base-content rounded p-10" >
                <nav className="grid grid-flow-col gap-4 text-xl">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-4xl">
                        <FaInstagramSquare className='text-yellow-500' />
                        <FaFacebookSquare  className='text-yellow-500'/>
                        <FaPinterestSquare  className='text-yellow-500'/>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;