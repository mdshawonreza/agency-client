import React from 'react';
import {  FaInstagramSquare } from 'react-icons/fa';
import footerImg1 from '../assets/Rayluxeo - White.png'
import footerImg2 from '../assets/Frame.png'
import { RiFacebookCircleFill } from 'react-icons/ri';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-[#35709B]'>
            <div className=" bg-footer " 
            // style={{ backgroundImage: `url(${footerImg2})` }}
             >

                <div className='flex justify-between items-center min-h-[440px]'>
                    <div className="min-w-96 md:min-w-[800px] lg:min-w-[1320px]  mx-auto  flex flex-col md:flex-row  md:justify-between items-center md:items-end md:my-24 pt-8 pb-5     text-white">
                        <div className='w-1/2'>
                            <div className=''>
                                <div className='md:mb-10 '>
                                    <img className='w-28 md:w-[200px] md:h-[54px] md:-mb-6' src={footerImg1} alt="" />
                                </div>

                                <p className="pt-3 text-sm md:text-[18px] font-medium  text-white max-w-72 lg:max-w-[470px] font-Poppins">
                                    Concept Softworks is a software company, we develop custom built software for clients - covering everything  from financial institutions & medical companies all the way to tech companies and government organizations.
                                </p>
                            </div>

                        </div>

                        <div className='w-1/2 gap-5 flex flex-col justify-end mt-5 md:mt-0 md:mr-10'>
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
                            <div className='  flex justify-center lg:justify-start items-center gap-7'>
                                <h4 className='text-xl font-semibold font-Poppins'>Flow</h4>
                                <div className='flex items-center gap-3'>
                                    <RiFacebookCircleFill className='text-[40px]' />

                                    <FaInstagramSquare className='text-[40px] rounded-full' />
                                    <div className='w-[35px] h-[35px] bg-white rounded-full  ml-[3px] flex justify-center items-center'>
                                        <BsTwitter className='text-[#35709B] text-[20px]' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                    <div className=' '>
                        {/* <img src={footerDesignImg} alt="" /> */}

                    </div>


                </div>
            </div>



        </div>
    );
};

export default Footer;