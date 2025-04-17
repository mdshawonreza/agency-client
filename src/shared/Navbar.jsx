import React, { useEffect, useState } from 'react';
// import Headroom from 'react-headroom';
import { IoSearch } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import navLogo1 from '../assets/Logo.webp'
import navLogo2 from '../assets/Logo-White.webp'

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/" className=" text-lg font-medium  hover:text-[#60CE70]">Home</NavLink></li>
        <li><a className='text-lg font-medium  hover:text-[#60CE70]' href="#about">About</a></li>
        <li><NavLink to='/ourProjects' className=" text-lg font-medium  hover:text-[#60CE70]">Projects</NavLink></li>

        {/* <li><a href="#tokenomics">Service</a></li> */}
        {/* <li><a href="#roadmap">Client</a></li> */}
        {/* <li><a className='text-lg font-medium  hover:text-[#60CE70]' href="#team">Projects</a></li> */}
        <li><a className='text-lg font-medium  hover:text-[#60CE70]' href="#team">Team</a></li>
        <li><a className='text-lg font-medium  hover:text-[#60CE70]' href="#blog">Blog</a></li>
        <li><a className='text-lg font-medium  hover:text-[#60CE70]' href="#contact">Contact</a></li>


    </>
    const [isScrolled, setIsScrolled] = useState(false);

    // Event listener to detect scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust this value based on when you want to change color
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className=''>

            <div className={` w-full z-20 scroll-smooth  md:h-[103px] flex items-center  mx-auto  ${isScrolled ? 'mt-0 fixed   transition-all1 ' : 'md:mt-6 fixed '}`}>

                <div
                    className={` px-7    py-5    z-20 mx-auto   md:h-[103px] flex justify-between items-center container transition-all2  ${isScrolled ? ' max-w-full  text-white  bg-[#064BA7]' : 'bg-white text-black max-w-[800px] md:max-w-[700px] lg:max-w-[1240px] rounded-[9px] '}`}

                >
                    <div className=' flex justify-center items-center  md:max-w-[700px] lg:max-w-[1600px] mx-auto  '>
                        <div className='flex gap-16  mx-auto  justify-between   md:gap-[150px] lg:gap-[200px] items-center '>
                            <div className="flex  md:w-3/6 lg:w-2/6 justify-between md:justify-between lg:justify-start items-center gap-16 md:gap-16 lg:gap-0 ">
                                <div className="dropdown flex justify-around">
                                    <div>
                                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7  w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        </label>
                                    </div>
                                    <div>
                                        <ul tabIndex={0} className="menu rubik-font font-normal text-base menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-[#064BA7] rounded-box w-52 font-Poppins">
                                            {navLinks}
                                        </ul>
                                    </div>
                                </div>

                                <div className='hidden lg:flex md:ml-0 lg:ml-0  '>
                                    {
                                        isScrolled ? <img src={navLogo2} className="w-[126px] md:w-[220px]  lg:w-[280px] " alt="" /> : <img src={navLogo1} className="w-[126px] md:w-[220px] lg:w-[280px] " alt="" />
                                    }
                                </div>

                            </div>
                            <div className='flex md:w-4/6  justify-center items-center lg:hidden -ml-6 md:-ml-0 '>
                                {
                                    isScrolled ? <img src={navLogo2} className="w-[166px] md:w-[220px]  lg:w-[280px]  md:-ml-12 lg:ml-0" alt="" /> : <img src={navLogo1} className="w-[166px] md:w-[220px] lg:w-[280px] md:-ml-12 lg:ml-0" alt="" />
                                }
                            </div>

                            <div className=" hidden lg:w-4/6 justify-center items-center lg:flex  ">
                                <div className="flex items-center justify-between font-normal text-base  gap-8 font-Poppins ">
                                    <p><NavLink to="/" className=" hover:text-[#60CE70]  font-medium  ">Home</NavLink></p>
                                    <p className=" font-medium  hover:text-[#60CE70]"><a href="#about">About</a></p>
                                    <p><NavLink to='/ourProjects' className=" hover:text-[#60CE70]  font-medium  ">Projects</NavLink></p>
                                    {/* <p className="   hover:text-[#60CE70]"><a href="#tokenomics">Service</a></p> */}
                                    {/* <p className=" font-medium  hover:text-[#60CE70]"><a href="#roadmap">Projects</a></p> */}
                                    <p className=" font-medium  hover:text-[#60CE70]"><a href="#team">Team</a></p>
                                    <p className=" font-medium  hover:text-[#60CE70]"><a href="#blog">Blog</a></p>
                                    <p className=" font-medium  hover:text-[#60CE70]"><a href="#contact">Contact</a></p>

                                </div>
                            </div>
                            <div className="mr-5   flex justify-end items-center  lg:w-2/6  md:mr-4 lg:mr-0">
                                <a href="">
                                    <IoSearch className='text-3xl' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>


    );
};

export default Navbar;