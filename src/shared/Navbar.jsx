import React, { useEffect, useState } from 'react';
// import Headroom from 'react-headroom';
import { IoSearch } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import navLogo1 from '../assets/Rayluxeo.png'
import navLogo2 from '../assets/Rayluxeo - White.png'

const Navbar = () => {
    const navLinks = <>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#tokenomics">Service</a></li>
        <li><a href="#roadmap">Client</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#joinUs">Blog</a></li>
        <li><a href="#contact">Contact</a></li>


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
                    className={` px-7    py-5    z-20 mx-auto   md:h-[103px] flex justify-between container transition-all2  ${isScrolled ? ' max-w-full text-white  bg-[#35709B]' : 'bg-white text-black max-w-[1320px] rounded-[9px] '}`}

                >
                    <div className='flex justify-center items-center max-w-[1600px] mx-auto'>
                        <div className='flex  justify-between gap-16 md:gap-[275px] items-center'>
                            <div className="flex justify-center md:justify-between items-center ">
                                <div className="dropdown flex justify-around">
                                    <div>
                                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        </label>
                                    </div>
                                    <div>
                                        <ul tabIndex={0} className="menu rubik-font font-normal text-base menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-blue-950 rounded-box w-52 font-Poppins">
                                            {navLinks}
                                        </ul>
                                    </div>
                                </div>
                                {/* <h2 className="text-2xl  ml-6 md:ml-16 lg:ml-0 md:text-[34px]  rubik-font font-normal ">
                                    Zjox Softwarks
                                </h2> */}
                                
                                 {/* <div className={` ${isScrolled ? ' max-w-full text-white  bg-[#35709B]' : 'bg-white text-black max-w-[1320px] rounded-[9px] '}`}>

                                 </div> */}

                                 {
                                    isScrolled ? <img src={navLogo2} className="w-[56px]  ml-6 md:ml-16 lg:ml-0 md:w-[166px] " alt="" /> : <img src={navLogo1} className="w-[56px]  ml-6 md:ml-16 lg:ml-0 md:w-[166px] " alt="" />
                                 }

                            </div>
                            <div className=" hidden lg:flex lg:-ml-16">
                                <div className="flex justify-between font-normal text-base  gap-6 font-Poppins ">
                                    <p className="   hover:text-[#60CE70]"><a href="#about">About</a></p>
                                    <p className="   hover:text-[#60CE70]"><a href="#project">Project</a></p>
                                    <p className="   hover:text-[#60CE70]"><a href="#tokenomics">Service</a></p>
                                    <p className="   hover:text-[#60CE70]"><a href="#roadmap">Client</a></p>
                                    <p className="   hover:text-[#60CE70]"><a href="#team">Team</a></p>
                                    <p className="   hover:text-[#60CE70]"><a href="#roadmap">Blog</a></p>
                                    <p className="   hover:text-[#60CE70]"><a href="#contact">Contact</a></p>
                                </div>
                            </div>
                            <div className="mr-5 md:mr-0">
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