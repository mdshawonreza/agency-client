import React from 'react';
import aboutImg1 from "../../assets/Mask group.png"
import aboutImg2 from "../../assets/Mask group (1).png"
import aboutImg3 from "../../assets/Mask group (2).png"
import aboutImg4 from "../../assets/Rectangle 21832 (1).png"
import aboutImg5 from "../../assets/Group 143725869.png"
import aboutImg6 from "../../assets/Rectangle 21832.png"
import aboutImg7 from "../../assets/Vectorc.png"
import aboutImg8 from "../../assets/Group 143725911.png"
import aboutImg9 from "../../assets/Frameo.png"
import aboutImg10 from "../../assets/Framel.png"
import aboutBanner from "../../assets/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { FaArrowRight, FaPhone } from 'react-icons/fa';
// ..
AOS.init();

const AboutUS = () => {
//      const handleWhatsAppClick = () => {
//     // Replace with your WhatsApp number
//     const whatsappNumber = '+8801601982900';
//     const message = 'Hi! I would like to know more about your services.';
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };
    return (
        <section id='about'>
            <div className='max-w-[390px] px-5 lg:px-10 md:max-w-[800px] lg:max-w-[1320px] mx-auto flex justify-center items-center min-h-[100vh] md:min-h-[600px] mt-0 md:mt-0'>

                <div className="flex flex-col lg:flex-row-reverse  gap-10 lg:gap-16">
                    <div className='lg:w-1/2 flex gap-3 justify-center  items-end'>
                        <div>
                            <img className='rounded-lg' src={aboutBanner} alt="" />
                        </div>


                    </div>
                    <div className='lg:w-1/2 flex items-center pb-8 md:pb-16 lg:pb-0'>
                        <div className=''>

                            <h1 className="text-3xl md:text-[58px] font-semibold text-[#064BA7]  md:mt-0 font-Poppins">About Us</h1>
                            <p className="pt-2 md:pt-6 text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal text-justify">
                                At Rayluxeo, our mission is to help businesses grow with creative and effective digital solutions. We focus on designs, websites, user-friendly experiences, marketing, video content, and social media management. Our goal is to make brands stand out and connect with their audience in a meaningful way.
                                We believe in combining creativity and strategy to deliver results that matter. Every project we take on is an opportunity to create something unique and valuable for our clients.
                            </p>
                            <div className="flex justify-center md:justify-start gap-4 relative z-10 flex-wrap mt-3 md:mt-4">



                                <div className="relative inline-flex  group">
                                    <div
                                        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#711fc9] to-[#4c0f6f] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                    </div>
                                    <a href="#appointment">
                                    <button
                                        // onClick={handleWhatsAppClick}
                                        aria-label="Chat on WhatsApp"
                                        className="hover:bg-[#064BA7] text-[#064BA7] hover:text-white px-6 py-2 relative bg-white rounded-full transition duration-300 border-2 border-[#064BA7] md:text-xl font-semibold flex justify-center items-center gap-2">
                                        Free Consultancy
                                    </button>
                                    </a>
                                </div>
                                <div className="relative inline-flex  group">
                                    <div
                                        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r  from-[#44BCFF] via-[#711fc9] to-[#4c0f6f] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                    </div>
                                    <a href="#contact">
                                        <button className="hover:bg-[#064BA7] relative bg-white text-[#064BA7] hover:text-white px-6 py-2 rounded-full transition duration-300 border-2 border-[#064BA7] md:text-xl font-semibold flex justify-center items-center gap-2">
                                            <FaPhone /> Contact
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </section>
    );
};

export default AboutUS;