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

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AboutUS = () => {
    return (
        <section id='about'>
            <div className='max-w-[350px] md:max-w-[1320px] mx-auto flex justify-center items-center min-h-[100vh] md:min-h-[636px] '>

                <div className="flex flex-col lg:flex-row gap-28 lg:gap-0">
                    <div className='md:w-1/2 flex gap-3  md:mr-10'>
                        <div className='flex items-center  '>
                            <img className='w-[35px] ml-24 md:ml-[222px] mb-[230px] md:mb-[434px] absolute ' src={aboutImg9} alt="" />
                            <img className='w-16 md:w-[119px] -ml-7 md:-ml-[72px]    mt-[170px]   md:mt-[334px] absolute animate-spin3' src={aboutImg7} alt="" />
                            <div data-aos="zoom-in-up" >
                                <img className='' src={aboutImg1} alt="" />
                            </div>
                            <img className='w-16  md:w-[119px] -ml-[35px] md:-ml-[72px]  mt-[180px] md:mt-[334px] absolute animate-ping' src={aboutImg8} alt="" />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div data-aos="zoom-in-up">
                                <img className='' src={aboutImg2} alt="" />
                            </div>
                            <div data-aos="zoom-in-up">
                                <img className='' src={aboutImg3} alt="" />
                            </div>



                        </div>
                    </div>
                    <div className='md:w-1/2 flex items-center'>
                      <div className=''>
                      <div className='flex justify-center md:justify-between items-start gap-7 md:gap-0 '>
                            <img className='md:ml-6 md:-mt-8' src={aboutImg10} alt="" />
                            <div className=' md:mb-16'>
                                <img className='-mb-20 md:-mb-28 ml-14 w-10 md:w-16 animate-bounce' src={aboutImg4} alt="" />
                                <img className='w-[150px] md:w-[197px] animate-spin1 h-[150px] md:h-[207px] -mb-6' src={aboutImg5} alt="" />
                                <img className='animate-bounce -mt-24 md:-mt-32 w-10 md:w-16 ml-[58px] md:ml-16' src={aboutImg6} alt="" />
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-[58px] font-semibold text-[#35709B] mt-16 md:mt-0 font-Poppins">About US</h1>
                        <p className="pt-2 md:pt-6 text-xl font-medium text-[#3F3F3F] font-Poppins">
                            Concept Softworks is a software company, we develop custom built software for clients - covering everything from financial institutions & medical companies all the way to tech companies and government organizations.
                        </p>
                      </div>

                    </div>
                </div>


            </div>
        </section>
    );
};

export default AboutUS;