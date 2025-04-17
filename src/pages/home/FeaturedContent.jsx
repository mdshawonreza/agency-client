import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import feature2 from '../../assets/ChatGPT Image Apr 7, 2025, 03_29_04 PM.png'
import feature1 from '../../assets/ChatGPT Image Apr 7, 2025, 03_26_50 PM.png'
import feature3 from '../../assets/ChatGPT Image Apr 7, 2025, 03_39_07 PM.png'
import feature4 from '../../assets/ChatGPT Image Apr 7, 2025, 03_43_10 PM.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const FeaturedContent = () => {
    return (
        <div id='blog' className='max-w-[390px] md:max-w-[800px] lg:max-w-[1320px] mx-auto my-8 md:my-16  min-h-[636px] lg:px-10'>
            <div className="max-w-[350px] md:max-w-[1380px]  mx-auto mb-10 ">
                <h1 className="text-3xl md:text-[58px] font-semibold text-[#064BA7] font-Poppins"> Featured Content</h1>
            </div>

            <div className='flex flex-col gap-5 '>
                <div className=' flex flex-col md:flex-row justify-center items-center gap-5 ' >


                    <div className='aosDiv md:w-1/2 ' >
                        <div data-aos="fade-down-right" className="   rounded-lg shadow-md overflow-hidden bg-[#000000] flex-col flex  items-center justify-center">
                            <div className=''>
                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img
                                        className="object-cover w-full"
                                        src={feature1}
                                        alt="Person"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-85 opacity-0 hover:opacity-100 inter-font">
                                        <Link to='/featuredBlog'>
                                            <h3 className='text-2xl md:text-lg lg:text-2xl font-medium text-white font-Poppins hover:text-[#0379BE]'>
                                                The 7 types of logos  (and how to use them)
                                            </h3>
                                        </Link>

                                    </div>
                                </div>

                            </div>




                        </div>
                    </div>




                    <div className='aosDiv md:w-1/2'>
                        <div data-aos="fade-down-left" className="   rounded-lg shadow-md overflow-hidden bg-[#000000]  flex justify-center items-center">
                            <div className=''>
                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img
                                        className="object-cover w-full"
                                        src={feature2}
                                        alt="Person"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-85 opacity-0 hover:opacity-100 inter-font">
                                        <Link to='/featuredBlog2'>
                                            <h3 className='text-2xl md:text-lg lg:text-2xl font-medium text-white font-Poppins hover:text-[#0379BE]'>
                                                Motion graphics vs. animation: what’s the difference?
                                            </h3>
                                        </Link>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>
                <div className=' flex flex-col md:flex-row justify-center items-center gap-5' >

                    <div className='aosDiv md:w-1/2'>
                        <div data-aos="fade-up-right" className="   rounded-lg shadow-md overflow-hidden bg-[#000000]  flex justify-center items-center">
                            <div className=''>
                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img
                                        className="object-cover w-full"
                                        src={feature3}
                                        alt="Person"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-85 opacity-0 hover:opacity-100 inter-font">
                                        <Link to='/featuredBlog3'>
                                            <h3 className='text-2xl md:text-lg lg:text-2xl font-medium text-white font-Poppins hover:text-[#0379BE]'>
                                                Web design, web development, UI and UX: What’s the difference and which do you need?

                                            </h3>
                                        </Link>

                                    </div>
                                </div>




                            </div>


                        </div>
                    </div>


                    <div className=' aosDiv md:w-1/2'>
                        <div data-aos="fade-up-left" className=" rounded-lg shadow-md overflow-hidden  flex bg-[#000000] justify-center items-center">
                            <div className=''>
                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img
                                        className="object-cover w-full"
                                        src={feature4}
                                        alt="Person"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-85 opacity-0 hover:opacity-100 inter-font">
                                        <Link to='/featuredBlog4'>
                                            <h3 className='text-2xl md:text-lg lg:text-2xl font-medium text-white font-Poppins hover:text-[#0379BE]'>

                                                Why you need a website for your business: 10 reasons to have one
                                            </h3>

                                        </Link>

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

export default FeaturedContent;