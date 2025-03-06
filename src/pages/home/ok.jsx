import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import member1 from '../../assets/Team_20250304_041421_0000.png'
import member2 from '../../assets/1688928872221_1688928871369.png'
import member3 from '../../assets/Team_20250304_041421_0002.png'
import { RiFacebookCircleFill } from 'react-icons/ri';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const OurTeam = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section id='team'>
            <div className='bg-base-200 py-8 md:py-16'>
                <div className='max-w-[1320px] mx-auto'>
                    <div className="max-w-[350px] md:max-w-[1320px] mx-auto md:pt-5 mb-8 ">
                        <h1 className="text-3xl md:text-[58px] font-semibold text-[#35709B] font-Poppins"> Our Team</h1>
                    </div>
                    {/* <div className="carousel w-full ">

                        <div id="slide1" className="carousel-item flex flex-col md:flex-row justify-start items-end gap-8 md:gap-20 relative w-full shadow-none">
                            <div className="w-full md:w-[432px] h-[660px]  rounded-lg shadow-md overflow-hidden   flex flex-col ">
                                <div className='h-[180px] w-full '>

                                </div>
                                <div className="w-full bg-[#6CB0DB] h-full ">
                                    <div data-aos="fade-up" className='flex justify-center'>
                                        <img src={member1} alt="" className=" -mt-16  h-[495px] object-cover " />
                                    </div>

                                </div>

                                <div className="bg-[#6CB0DB] w-full text-white py-6 px-6 border-t-2 z-10">
                                    <h3 className="text-[24px] font-semibold font-Poppins">Sayed Ahmed</h3>
                                    <div className='flex justify-between items-center gap-3'>
                                        <h4 className='text-[19px] font-semibold font-Poppins'>
                                            Co-founder</h4>

                                    </div>
                                    <div className='flex justify-end items-center gap-1 mt-3'>
                                        <RiFacebookCircleFill className='text-[20px]' />

                                        <FaInstagramSquare className='text-[20px] rounded-full' />
                                        <div className='w-[20px] h-[20px] bg-white rounded-full  ml-[3px] flex justify-center items-center'>
                                            <BsTwitter className='text-[#6CB0DB] text-[12px]' />
                                        </div>

                                    </div>

                                </div>



                            </div>
                            <div className="w-full md:w-[325px] h-[660px]  rounded-lg shadow-md overflow-hidden   flex flex-col ">
                                <div className='h-[180px] w-full '>

                                </div>
                                <div className="w-full bg-[#6CB0DB] h-full ">
                                    <div data-aos="fade-up" className='flex justify-center'>
                                        <img src={member2} alt="" className=" -mt-16  h-[495px] object-cover " />
                                    </div>

                                </div>

                                <div className="bg-[#6CB0DB] w-full text-white py-6 px-6 border-t-2 z-10">
                                    <h3 className="text-[24px] font-semibold font-Poppins">
                                        Shawon Reza

                                    </h3>
                                    <div className='flex justify-between items-center gap-3'>
                                        <h4 className='text-[19px] font-semibold font-Poppins'> Web Developer</h4>

                                    </div>
                                    <div className='flex justify-end mt-3 items-center gap-1'>
                                        <RiFacebookCircleFill className='text-[20px]' />

                                        <FaInstagramSquare className='text-[20px] rounded-full' />
                                        <div className='w-[20px] h-[20px] bg-white rounded-full  ml-[3px] flex justify-center items-center'>
                                            <BsTwitter className='text-[#6CB0DB] text-[12px]' />
                                        </div>

                                    </div>

                                </div>



                            </div>
                            <div className="w-full md:w-[325px] h-[660px]  rounded-lg shadow-md overflow-hidden   flex flex-col ">
                                <div className='h-[180px] w-full '>

                                </div>
                                <div className="w-full bg-[#6CB0DB] h-full ">
                                    <div data-aos="fade-up" className='flex justify-center'>
                                        <img src={member3} alt="" className="-mt-16  h-[495px] object-cover " />
                                    </div>

                                </div>

                                <div className="bg-[#6CB0DB] w-full text-white py-6 px-6 border-t-2 z-10">
                                    <h3 className="text-[24px] font-semibold font-Poppins">
                                        Mohammad Yousuf

                                    </h3>
                                    <div className='flex justify-between items-center gap-3'>
                                        <h4 className='text-[19px] font-semibold font-Poppins'>Motion Graphic Designer</h4>

                                    </div>
                                    <div className='flex justify-end items-center gap-1 mt-3'>
                                        <RiFacebookCircleFill className='text-[20px]' />

                                        <FaInstagramSquare className='text-[20px] rounded-full' />
                                        <div className='w-[20px] h-[20px] bg-white rounded-full  ml-[3px] flex justify-center items-center'>
                                            <BsTwitter className='text-[#6CB0DB] text-[12px]' />
                                        </div>

                                    </div>

                                </div>



                            </div>


                            <div className=" hidden md:flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                <a href="#slide4" className="btn bg-[#3F3F3F] text-white btn-circle mr-3">❮</a>
                                <a href="#slide2" className="btn bg-[#3F3F3F] text-white btn-circle">❯</a>
                            </div>
                        </div>


                    </div> */}
                    <div className="slider-container ">
                        <Slider {...settings}>
                            <div>
                                <div className="w-full md:w-[432px] h-[660px]  rounded-lg shadow-md overflow-hidden   flex flex-col ">
                                    <div className='h-[180px] w-full '>

                                    </div>
                                    <div className="w-full bg-[#6CB0DB] h-full ">
                                        <div data-aos="fade-up" className='flex justify-center'>
                                            <img src={member1} alt="" className=" -mt-16  h-[495px] object-cover " />
                                        </div>

                                    </div>

                                    <div className="bg-[#6CB0DB] w-full text-white py-6 px-6 border-t-2 z-10">
                                        <h3 className="text-[24px] font-semibold font-Poppins">Sayed Ahmed</h3>
                                        <div className='flex justify-between items-center gap-3'>
                                            <h4 className='text-[19px] font-semibold font-Poppins'>
                                                Co-founder</h4>

                                        </div>
                                        <div className='flex justify-end items-center gap-1 mt-3'>
                                            <RiFacebookCircleFill className='text-[20px]' />

                                            <FaInstagramSquare className='text-[20px] rounded-full' />
                                            <div className='w-[20px] h-[20px] bg-white rounded-full  ml-[3px] flex justify-center items-center'>
                                                <BsTwitter className='text-[#6CB0DB] text-[12px]' />
                                            </div>

                                        </div>

                                    </div>



                                </div>
                            </div>
                            <div>
                                <div className="w-full md:w-[325px] h-[660px]  rounded-lg shadow-md overflow-hidden   flex flex-col ">
                                    <div className='h-[180px] w-full '>

                                    </div>
                                    <div className="w-full bg-[#6CB0DB] h-full ">
                                        <div data-aos="fade-up" className='flex justify-center'>
                                            <img src={member2} alt="" className=" -mt-16  h-[495px] object-cover " />
                                        </div>

                                    </div>

                                    <div className="bg-[#6CB0DB] w-full text-white py-6 px-6 border-t-2 z-10">
                                        <h3 className="text-[24px] font-semibold font-Poppins">
                                            Shawon Reza

                                        </h3>
                                        <div className='flex justify-between items-center gap-3'>
                                            <h4 className='text-[19px] font-semibold font-Poppins'> Web Developer</h4>

                                        </div>
                                        <div className='flex justify-end mt-3 items-center gap-1'>
                                            <RiFacebookCircleFill className='text-[20px]' />

                                            <FaInstagramSquare className='text-[20px] rounded-full' />
                                            <div className='w-[20px] h-[20px] bg-white rounded-full  ml-[3px] flex justify-center items-center'>
                                                <BsTwitter className='text-[#6CB0DB] text-[12px]' />
                                            </div>

                                        </div>

                                    </div>



                                </div>
                            </div>
                            <div>
                                <div className="w-full md:w-[325px] h-[660px]  rounded-lg shadow-md overflow-hidden   flex flex-col ">
                                    <div className='h-[180px] w-full '>

                                    </div>
                                    <div className="w-full bg-[#6CB0DB] h-full ">
                                        <div data-aos="fade-up" className='flex justify-center'>
                                            <img src={member3} alt="" className="-mt-16  h-[495px] object-cover " />
                                        </div>

                                    </div>

                                    <div className="bg-[#6CB0DB] w-full text-white py-6 px-6 border-t-2 z-10">
                                        <h3 className="text-[24px] font-semibold font-Poppins">
                                            Mohammad Yousuf

                                        </h3>
                                        <div className='flex justify-between items-center gap-3'>
                                            <h4 className='text-[19px] font-semibold font-Poppins'>Motion Graphic Designer</h4>

                                        </div>
                                        <div className='flex justify-end items-center gap-1 mt-3'>
                                            <RiFacebookCircleFill className='text-[20px]' />

                                            <FaInstagramSquare className='text-[20px] rounded-full' />
                                            <div className='w-[20px] h-[20px] bg-white rounded-full  ml-[3px] flex justify-center items-center'>
                                                <BsTwitter className='text-[#6CB0DB] text-[12px]' />
                                            </div>

                                        </div>

                                    </div>



                                </div>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>

                        </Slider>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurTeam;