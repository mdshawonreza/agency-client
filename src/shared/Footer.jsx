import React from 'react';
import {  FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
import footerImg1 from '../assets/Logo-White.webp'
import footerImg2 from '../assets/Frame.png'
import { RiFacebookCircleFill } from 'react-icons/ri';
import { BsTwitter } from 'react-icons/bs';

// max-w-[390px] md:max-w-[800px] lg:max-w-[1380px] 
const Footer = () => {
    return (
        <div className='bg-[#064BA7]'>
            <div className=" " 
            
             >

                <div className=' max-w-[390px] md:max-w-[800px] lg:max-w-[1280px] mx-auto px-5 lg:px-10 py-16 md:py-20'>
                    <div className="flex flex-col md:flex-row md:gap-10 justify-between items-center md:items-end">
                        <div className=''>
                            <div className=''>
                                <div className='md:mb-10 '>
                                    <img className='w-28 md:w-[200px] md:h-[54px] md:-mb-6' src={footerImg1} alt="" />
                                </div>

                                <p className="pt-3 text-sm md:text-[18px] font-medium  text-white  lg:max-w-[470px] font-Poppins leading-normal">
                                Rayluxeo helps businesses grow with creative designs, websites, marketing, and video content. We make brands stand out and connect with their audience.
                                </p>
                            </div>

                        </div>

                        <div className=' gap-5 flex flex-col justify-end mt-5 md:mt-0 '>
                            <div className='flex flex-col lg:flex-row justify-center md:justify-start gap-3 lg:gap-9  items-center text-[16px] font-semibold text-white'>

                                <div className='flex justify-between gap-3 md:gap-9 font-Poppins'>
                                <a href="">About</a>
                                <a href="">Project</a>
                                <a href="">Service</a>
                                <a href="">Client</a>
                                </div>
                                <div className='flex justify-between gap-3 md:gap-9 font-Poppins'>
                                <a href="">Team</a>
                                <a href="">Blog</a>
                                <a href="">Contact</a>
                                </div>



                            </div>
                            <div className=' text-white flex justify-center lg:justify-start items-center gap-7'>
                                {/* <h4 className='text-xl font-semibold font-Poppins'>Flow</h4> */}
                                <div className='flex items-center gap-3'>
                                    <RiFacebookCircleFill className='text-[30px] md:text-[40px]' />

                                    <FaInstagramSquare className='text-[30px] md:text-[40px] rounded-full' />
                                    <div className='w-[28px] md:w-[35px] h-[28px] md:h-[35px] bg-white rounded-full  ml-[3px] flex justify-center items-center'>
                                        <FaLinkedinIn className='text-[#064BA7] text-[20px]' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                    


                </div>
            </div>



        </div>
    );
};

export default Footer;