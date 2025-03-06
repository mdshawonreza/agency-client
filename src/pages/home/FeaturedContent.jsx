import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import feature1 from '../../assets/4d4f31d3e8e1dc9a68b10d00be8ec39d 3.png'
import feature2 from '../../assets/original-0a729eec12d236aebc544d1815b8d771 2.png'
import feature3 from '../../assets/okay3.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const FeaturedContent = () => {
    return (
        <div className='max-w-[350px] md:max-w-[1320px] mx-auto my-8 md:my-16  min-h-[636px]'>
            <div className="max-w-[350px] md:max-w-[1380px]  mx-auto mb-10 ">
                <h1 className="text-3xl md:text-[58px] font-semibold text-[#35709B] font-Poppins"> Featured Content</h1>
            </div>

            <div className='flex flex-col gap-5 '>
                <div className=' flex flex-col md:flex-row justify-center items-center gap-5 ' >



                    <div className='aosDiv'>
                        <div data-aos="fade-down-right" className=" w-[350px] md:w-[654px]  h-[406px] rounded-lg shadow-md overflow-hidden bg-[#000000] flex-col flex justify-center items-center">
                            {/* <div className='flex justify-end gap-2 font-semibold text-[#D9D9D9] my-3 mr-4 font-Poppins'>
                                <a href="">Login</a>
                                <p>|</p>
                                <a href=""> Sign up</a>
                            </div> */}

                            <div className='space-y-4 px-8 md:px-20 pt-4 md:pt-8 pb-8 md:pb-0'>
                                <p className='text-xl font-medium font-Poppins'>Top News</p>
                                <h3 className='text-[26px]  font-medium text-white font-Poppins'>
                                    VR training app for a <br /> manufacturing company
                                </h3>
                                <p className='text-xl font-medium text-[#D9D9D9] font-Poppins'>
                                    Throughout 2021, the company,s specialists implemented important skill-sharing and community development initiatives as part
                                </p>
                                <div className=''>
                                    <button className='text-[22px] font-normal text-white hover:text-[#6CB0DB] flex items-center gap-3 font-Poppins'>
                                        <span> Read more </span>
                                        <FaArrowRightLong />
                                    </button>

                                </div>

                            </div>


                        </div>
                    </div>



                    <div className='aosDiv'>
                        <div data-aos="fade-down-left" className="w-[350px] md:w-[654px]  h-[406px]  rounded-lg shadow-md overflow-hidden bg-[#000000]  flex items-center">


                            <div className='space-y-4 px-8 md:px-20 pt-4 md:pt-8 pb-8 md:pb-0 '>
                                <p className='text-xl font-medium font-Poppins'>10 July 2022</p>
                                <h3 className='text-[26px]  font-medium text-white font-Poppins'>
                                    VR training app for a <br /> manufacturing company
                                </h3>
                                <p className='text-xl font-medium text-[#D9D9D9] font-Poppins'>
                                    Throughout 2021, the company,s specialists implemented important skill-sharing and community development initiatives as part
                                </p>
                                <div className=''>
                                    <button className='text-[22px] font-normal text-white hover:text-[#6CB0DB] flex items-center gap-3 font-Poppins'>
                                        <span> Read more </span>
                                        <FaArrowRightLong />
                                    </button>

                                </div>

                            </div>


                        </div>
                    </div>


                </div>
                <div className=' flex flex-col md:flex-row justify-center items-center gap-5' >

                    <div className='aosDiv'>
                        <div data-aos="fade-up-right" className="w-[350px] md:w-[654px] h-[406px]  rounded-lg shadow-md overflow-hidden bg-[#000000]  flex items-center">


                            <div className='space-y-4 px-8 md:px-20 pt-4 md:pt-8 pb-8 md:pb-0 '>
                                <p className='text-xl font-medium font-Poppins'>05 June 2022</p>
                                <h3 className='text-[26px]  font-medium text-white font-Poppins'>
                                    VR training app for a <br /> manufacturing company
                                </h3>
                                <p className='text-xl font-medium text-[#D9D9D9] font-Poppins'>
                                    Throughout 2021, the company,s specialists implemented important skill-sharing and community development initiatives as part
                                </p>
                                <div className=''>
                                    <button className='text-[22px] font-normal text-white hover:text-[#6CB0DB] flex items-center gap-3 font-Poppins'>
                                        <span> Read more </span>
                                        <FaArrowRightLong />
                                    </button>

                                </div>

                            </div>


                        </div>
                    </div>


                    <div className=' aosDiv'>
                        <div data-aos="fade-up-left" className=" w-[350px] md:w-[654px] h-[406px] rounded-lg shadow-md overflow-hidden  flex ">


                            <div className=" bg-banner flex-1  " style={{ backgroundImage: `url(${feature2})` }}>
                                <div className='w-full h-full opacity-75 bg-black'></div>


                            </div>
                            <div className=" bg-banner flex-1 " style={{ backgroundImage: `url(${feature1})` }}>
                                <div className='w-full h-full opacity-75 bg-black'></div>


                            </div>
                            <div className='absolute ml-[100px] md:ml-[230px] mt-[130px] md:mt-[105px]'>
                                <img className='w-48 md:w-full' src={feature3} alt="" />

                            </div>




                        </div>
                    </div>



                </div>


            </div>

        </div>
    );
};

export default FeaturedContent;