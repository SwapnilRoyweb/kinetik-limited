import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/Kinetik Logo1 ark.png'
import { FaSearchengin, FaHome, FaIndustry } from 'react-icons/fa';
import { BiSolidBusiness } from "react-icons/bi";

const Navbar = () => {

    const navItems = <>
        <li><Link><FaHome />Home</Link></li>
        <li>
            <Link><FaIndustry />Industry</Link>
            {/* <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul> */}
        </li>
        <li><Link><BiSolidBusiness />Company</Link></li>
    </>

    return (
        <div className='bg-black bg-opacity-10 p-2 fixed top-0 left-0 right-0 z-10'>
            <div className='flex items-center justify-center md:justify-between gap-10 mx-5 max-h-10'>
                <div className='flex items-center justify-center'>
                    <img src={logo} alt="" className='h-10 w-10' />
                    <h1 className='text-3xl font-bold'><span className='text-red-800'>Kinetik</span> Limited</h1>
                </div>
                <div>
                    <button className='btn text-white hidden md:flex'>Contact Us</button>
                </div>
            </div>
            <hr className='mt-3 mx-5' />
            <div className='mx-5 h-16'>
                <div className="navbar bg-transparent">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-20 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navItems}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="form-control">
                            <div className="input-group">
                                <div className='flex items-center justify-center'>
                                    <input type="text" placeholder="Search…" className="input input-bordered bg-black bg-opacity-50 text-white hidden md:flex" />
                                    <button className='btn btn-square text-white text-2xl'><FaSearchengin /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;