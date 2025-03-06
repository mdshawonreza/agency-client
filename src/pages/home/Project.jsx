
import ProjectImg4 from "../../assets/Rectangle 21838.png"
import ProjectImg5 from "../../assets/Rectangle 21840.png"
import ProjectImg6 from "../../assets/Rectangle 21840 (1).png"
import { FaArrowRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import projectImg1 from '../../assets/okay.png'
import projectImg2 from '../../assets/Frame (1).png'
import projectImg3 from '../../assets/Vector (1).png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Project = () => {
    return (
        <section id="project" className="bg-base-200 md:py-20 ">


            <div className="max-w-[350px] md:max-w-[1320px]  mx-auto pt-8 md:pt-0 mb-8 ">
                <h1 className="text-3xl md:text-[58px] font-semibold text-[#35709B] font-Poppins"> Project</h1>
            </div>
            <div className="hidden md:flex md:ml-16">


                <Swiper
                    slidesPerView={3.4}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper max-w-[350px] md:max-w-[1380px] mx-auto flex flex-col md:flex-row "
                >
                    <SwiperSlide >
                        <div className="w-[390px] h-[533px]  rounded-lg shadow-md overflow-hidden bg-[#3F3F3F]">
                            <div className="relative">
                                <img src={ProjectImg4} alt="" className="w-full h-[366px] object-cover" />
                                <div className="absolute top-5 right-5 flex space-x-3 font-Poppins">
                                    <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded ">3D</span>
                                    <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">AR/VR/MR</span>
                                    <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">2D</span>
                                </div>
                            </div>
                            <div className=" text-white py-5 px-4">
                                <h3 className="text-2xl font-semibold font-Poppins">VR training app for a manufacturing company</h3>
                                <div className="flex justify-between  items-center mt-4">
                                    <button className="btn text-white  btn-circle border-none bg-[#6CB0DB] btn-outline">
                                        <FaArrowRight className='text-[20px]' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[390px] h-[533px]  rounded-lg shadow-md overflow-hidden bg-[#3F3F3F]">
                            <div className="relative">
                                <img src={ProjectImg5} alt="" className="w-full h-[366px] object-cover" />
                                <div className="absolute top-5 right-5 flex space-x-3 font-Poppins">
                                    <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">3D</span>
                                    <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">AR/VR/MR</span>
                                    <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">2D</span>
                                </div>
                            </div>
                            <div className=" text-white py-5 px-4">
                                <h3 className="text-2xl font-semibold font-Poppins">VR training app for a manufacturing company</h3>
                                <div className="flex justify-between  items-center mt-4">
                                    <button className="btn text-white  btn-circle border-none bg-[#6CB0DB] btn-outline">
                                        <FaArrowRight className='text-[20px]' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[390px] h-[533px]  rounded-lg shadow-md overflow-hidden bg-[#3F3F3F]">
                            <div className="relative">
                                <img src={ProjectImg6} alt="" className="w-full h-[366px] object-cover" />
                                <div className="absolute top-5 right-5 flex space-x-3 font-Poppins">
                                    <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">3D</span>
                                    <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">AR/VR/MR</span>
                                    <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">2D</span>
                                </div>
                            </div>
                            <div className=" text-white py-5 px-4">
                                <h3 className="text-2xl font-semibold font-Poppins">VR training app for a manufacturing company</h3>
                                <div className="flex justify-between  items-center mt-4">
                                    <button className="btn text-white  btn-circle border-none bg-[#6CB0DB] btn-outline">
                                        <FaArrowRight className='text-[20px]' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[390px] h-[533px]  rounded-lg shadow-md overflow-hidden bg-[#3F3F3F]">
                            <div className="relative">
                                <img src={ProjectImg4} alt="" className="w-full h-[366px] object-cover" />
                                <div className="absolute top-5 right-5 flex space-x-3 font-Poppins">
                                    <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">3D</span>
                                    <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">AR/VR/MR</span>
                                    <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">2D</span>
                                </div>
                            </div>
                            <div className=" text-white py-5 px-4">
                                <h3 className="text-2xl font-semibold font-Poppins">VR training app for a manufacturing company</h3>
                                <div className="flex justify-between  items-center mt-4">
                                    <button className="btn text-white  btn-circle border-none bg-[#6CB0DB] btn-outline">
                                        <FaArrowRight className='text-[20px]' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>

            <div className="md:hidden flex flex-col gap-8">
                <div className="max-w-[350px]  mx-auto flex  flex-col ">
                    <div className="   rounded-lg shadow-md overflow-hidden bg-[#3F3F3F]">
                        <div className="relative">
                            <img src={ProjectImg4} alt="" className="w-full  object-cover" />
                            <div className="absolute top-5 right-5 flex space-x-3 font-Poppins">
                                <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">3D</span>
                                <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">AR/VR/MR</span>
                                <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">2D</span>
                            </div>
                        </div>
                        <div className=" text-white py-5 px-4">
                            <h3 className="text-xl font-semibold font-Poppins">VR training app for a manufacturing company</h3>
                            <div className="flex justify-between  items-center mt-4">
                                <button className="btn text-white btn-md  btn-circle border-none bg-[#6CB0DB] btn-outline">
                                    <FaArrowRight className='text-[18px]' />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="max-w-[350px]  mx-auto flex flex-col ">
                    <div className="   rounded-lg shadow-md overflow-hidden bg-[#3F3F3F]">
                        <div className="relative">
                            <img src={ProjectImg4} alt="" className="w-full  object-cover" />
                            <div className="absolute top-5 right-5 flex space-x-3 font-Poppins">
                                <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">3D</span>
                                <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">AR/VR/MR</span>
                                <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">2D</span>
                            </div>
                        </div>
                        <div className=" text-white py-5 px-4">
                            <h3 className="text-xl font-semibold font-Poppins">VR training app for a manufacturing company</h3>
                            <div className="flex justify-between  items-center mt-4">
                                <button className="btn text-white btn-md  btn-circle border-none bg-[#6CB0DB] btn-outline">
                                    <FaArrowRight className='text-[18px]' />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="max-w-[350px]  mx-auto flex flex-col ">
                    <div className="   rounded-lg shadow-md overflow-hidden bg-[#3F3F3F]">
                        <div className="relative">
                            <img src={ProjectImg4} alt="" className="w-full  object-cover" />
                            <div className="absolute top-5 right-5 flex space-x-3 font-Poppins">
                                <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">3D</span>
                                <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">AR/VR/MR</span>
                                <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">2D</span>
                            </div>
                        </div>
                        <div className=" text-white py-5 px-4">
                            <h3 className="text-xl font-semibold font-Poppins">VR training app for a manufacturing company</h3>
                            <div className="flex justify-between  items-center mt-4">
                                <button className="btn text-white btn-md  btn-circle border-none bg-[#6CB0DB] btn-outline">
                                    <FaArrowRight className='text-[18px]' />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="max-w-[350px]  mx-auto flex flex-col ">
                    <div className="   rounded-lg shadow-md overflow-hidden bg-[#3F3F3F]">
                        <div className="relative">
                            <img src={ProjectImg4} alt="" className="w-full  object-cover" />
                            <div className="absolute top-5 right-5 flex space-x-3 font-Poppins">
                                <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">3D</span>
                                <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">AR/VR/MR</span>
                                <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">2D</span>
                            </div>
                        </div>
                        <div className=" text-white py-5 px-4">
                            <h3 className="text-xl font-semibold font-Poppins">VR training app for a manufacturing company</h3>
                            <div className="flex justify-between  items-center mt-4">
                                <button className="btn text-white btn-md  btn-circle border-none bg-[#6CB0DB] btn-outline">
                                    <FaArrowRight className='text-[18px]' />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className=" mt-20 md:max-w-[1320px] md:h-[451px] mx-auto bg-[#3F3F3F] flex flex-col md:flex-row">

                <div className=" mx-0 md:w-4/6 h-full   py-8" >
                    <div>
                        <img className="animate-pulse" src={projectImg1} alt="" />

                    </div>
                    <div className="">
                        <div className="flex justify-center md:justify-end gap-8 ">
                            <div className="text-4xl md:text-[55px]  font-semibold text-[#D7D7D7] space-y-2 md:space-y-4 my-7 md:my-10 font-Poppins">
                                <h2>See what </h2>
                                <h2> we can do </h2>
                                <h2> for you </h2>

                            </div>
                            <div data-aos="fade-up-right">
                            <img src={projectImg2} className="w-20 md:w-[300px] md:h-[180px]  animate-pulse md:mt-9  hidden md:flex" alt="" />
                            
                            </div>
                        </div>
                    </div>
                    <div  className="flex  justify-center">
                        <img src={projectImg3} className="w-20 md:w-[112px] animate-spin1" alt="" />

                    </div>

                </div>
                <div className=" mx-8 md:mx-10 flex flex-col justify-center   md:w-2/6 mb-10 md:mb-0">
                    <div className="hover:text-white flex justify-between gap-8  items-center">
                        <h3 className="text-2xl md:text-[30px] my-4 font-medium text-[#6D6D6D] hover:text-white font-Poppins">Designer</h3>
                        <FaArrowRight className=" mr-10 text-2xl md:text-3xl  mt-2" />

                    </div>
                    <div className="hover:text-white flex justify-between gap-8  items-center border-[#6D6D6D] border-t-2 border-b-2">
                        <h3 className="text-2xl md:text-[30px] my-4 font-medium  text-[#6D6D6D] hover:text-white font-Poppins">Ideation & Strategy</h3>
                        <FaArrowRight className="text-2xl md:text-3xl  mr-10 mt-2" />
                    </div>
                    <div className="hover:text-white flex justify-between gap-8  items-center">
                        <h3 className="text-2xl md:text-[30px] my-4  font-medium text-[#6D6D6D] hover:text-white font-Poppins">Designer</h3>
                        <FaArrowRight className="text-2xl md:text-3xl  mr-10 mt-2" />

                    </div>
                    <div className="hover:text-white flex justify-between gap-8  items-center border-[#6D6D6D]  border-t-2 ">
                        <h3 className="text-2xl md:text-[30px] font-medium my-4 text-[#6D6D6D] hover:text-white font-Poppins">Ideation & Strategy</h3>
                        <FaArrowRight className=" text-2xl md:text-3xl mr-10 mt-2" />
                    </div>


                </div>
            </div>


        </section>
    );
};

export default Project;