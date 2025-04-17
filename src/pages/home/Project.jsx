
import ProjectImg4 from "../../assets/Rectangle 21838.png"
import ProjectImg5 from "../../assets/Rectangle 21840.png"
import ProjectImg6 from "../../assets/Rectangle 21840 (1).png"
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import projectImg1 from '../../assets/okay.png'
import projectImg2 from '../../assets/Frame (1).png'
import projectImg3 from '../../assets/Vector (1).png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useRef } from "react";
// ..
AOS.init();

const projects = [
    {
        "id": 1,
        "projectImage": "https://i.ibb.co.com/DffrsTDM/rsz-11kalantor-3.jpg",
        "projectTitle": "Real Estate Logo",
        "serviceName": "Graphic Design",
        "likes": 120
    },
    {
        "id": 2,
        "projectImage": "https://i.ibb.co.com/Qw5p89L/bannar-1.jpg",
        "projectTitle": "Uni Hostel Hub",
        "serviceName": "Web Development",
        "link": "https://uni-hostel-hub.web.app/",
        "likes": 240
    },
    {
        "id": 3,
        "projectImage": "https://i.ibb.co.com/s90Vd7DC/Whats-App-Image-2025-04-17-at-4-36-27-PM.jpg",
        "projectTitle": "Explainer Video",
        "serviceName": "Motion Graphics",
        "link": "https://player.vimeo.com/video/1076335569?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        "likes": 185
    },
    {
        "id": 4,
        "projectImage": "https://i.ibb.co.com/0V270CZT/recipe-app.jpg",
        "projectTitle": "E-Commerce UI Design",
        "serviceName": "UI/UX Design",
        "likes": 320
    },
    {
        "id": 5,
        "projectImage": "https://i.ibb.co.com/VYkfCc12/Screenshot-90.png",
        "projectTitle": "National Grocery Wholesale",
        "serviceName": "Web Development",
        "link": "https://beautiful-lebkuchen-ae71f6.netlify.app/",
        "likes": 95
    },
    {
        "id": 6,
        "projectImage": "https://i.ibb.co.com/gLp6pfZf/esmira-abaya-logo-4.png",
        "projectTitle": "Brand Logo",
        "serviceName": "Graphic Design",
        "likes": 110
    },
    {
        "id": 7,
        "projectImage": "https://i.ibb.co.com/pBzFsPtH/banner.jpg",
        "projectTitle": "Career builder",
        "serviceName": "Web Development",
        "link": "https://career-builder-6a1fb.web.app/",
        "likes": 275
    },
    {
        "id": 8,
        "projectImage": "https://i.ibb.co.com/K3459VV/Whats-App-Image-2025-04-17-at-4-35-42-PM.jpg",
        "projectTitle": "Explainer Video",
        "serviceName": "Motion Graphics",
        "link": "https://player.vimeo.com/video/1076335613?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        "likes": 145
    },
    {
        "id": 9,
        "projectImage": "https://i.ibb.co.com/JWfTL4QL/website.jpg",
        "projectTitle": "Fintech Dashboard UI",
        "serviceName": "UI/UX Design",
        "likes": 290
    },
    // {
    //     "id": 10,
    //     "projectImage": "https://via.placeholder.com/300x200?text=Project+10",
    //     "projectTitle": "Instagram Reel Edits",
    //     "serviceName": "Video Editing",
    //     "likes": 130
    // },
    {
        "id": 11,
        "projectImage": "https://i.ibb.co.com/9kdSCKkq/esmira-new.png",
        "projectTitle": "Brand Logo",
        "serviceName": "Graphic Design",
        "likes": 160
    },
    {
        "id": 12,
        "projectImage": "https://i.ibb.co.com/YTqrZ1sb/Screenshot-89.png",
        "projectTitle": "Bluey",
        "serviceName": "Web Development",
        "link": "https://blueyonsol.vip/",
        "likes": 310
    },
    // {
    //     "id": 13,
    //     "projectImage": "https://via.placeholder.com/300x200?text=Project+13",
    //     "projectTitle": "YouTube Intro Animation",
    //     "serviceName": "Motion Graphics",
    //     "likes": 175
    // },
    {
        "id": 14,
        "projectImage": "https://i.ibb.co.com/NnNc6TCv/dashboard-profile.jpg",
        "projectTitle": "App Onboarding UI",
        "serviceName": "UI/UX Design",
        "likes": 205
    },
    // {
    //     "id": 15,
    //     "projectImage": "https://via.placeholder.com/300x200?text=Project+15",
    //     "projectTitle": "Music Video Edit",
    //     "serviceName": "Video Editing",
    //     "likes": 150
    // },
    {
        "id": 16,
        "projectImage": "https://i.ibb.co.com/gMMRGfB4/halal-works-7.jpg",
        "projectTitle": "Agency Logo",
        "serviceName": "Graphic Design",
        "likes": 100
    },
    {
        "id": 17,
        "projectImage": "https://i.ibb.co.com/8gbqYNmz/wedding.jpg",
        "projectTitle": "Event Management",
        "serviceName": "Web Development",
        "link": "https://wedding-events-management.web.app/",
        "likes": 260
    },
    // {
    //     "id": 18,
    //     "projectImage": "https://via.placeholder.com/300x200?text=Project+18",
    //     "projectTitle": "Social Media Promo",
    //     "serviceName": "Motion Graphics",
    //     "likes": 190
    // },
    {
        "id": 19,
        "projectImage": "https://i.ibb.co.com/mV4cnpWG/dashboard.jpg",
        "projectTitle": "Neobank App UI",
        "serviceName": "UI/UX Design",
        "likes": 310
    },
    // {
    //     "id": 20,
    //     "projectImage": "https://via.placeholder.com/300x200?text=Project+20",
    //     "projectTitle": "Short Film Color Grading",
    //     "serviceName": "Video Editing",
    //     "likes": 140
    // },
    {
        "id": 21,
        "projectImage": "https://i.ibb.co.com/Df82R22t/rakadon-2.jpg",
        "projectTitle": "Gaming Logo",
        "serviceName": "Graphic Design",
        "likes": 120
    },
    {
        "id": 22,
        "projectImage": "https://i.ibb.co.com/GGDXZ0s/logo-v2-orig.png",
        "projectTitle": "Brand Logo",
        "serviceName": "Graphic Design",
        "likes": 120
    },
    {
        "id": 23,
        "projectImage": "https://i.ibb.co.com/8nRj0RwF/the-agroverse-3.jpg",
        "projectTitle": "Agro Logo",
        "serviceName": "Graphic Design",
        "likes": 120
    },
    {
        "id": 24,
        "projectImage": "https://i.ibb.co.com/m5v31Zwk/henna-2.png",
        "projectTitle": "Social Media Page Logo",
        "serviceName": "Graphic Design",
        "likes": 120
    },
    {
        "id": 25,
        "projectImage": "https://i.ibb.co.com/Tx7W4Lb6/green-paradise.jpg",
        "projectTitle": "Resort Logo",
        "serviceName": "Graphic Design",
        "likes": 120
    },
    {
        "id": 26,
        "projectImage": "https://i.ibb.co.com/Nnd50HTm/mockup.jpg",
        "projectTitle": "Neobank App UI",
        "serviceName": "UI/UX Design",
        "likes": 310
    },
    {
        "id": 27,
        "projectImage": "https://i.ibb.co.com/zV5bjM5T/cover.png",
        "projectTitle": "Cover Design",
        "serviceName": "Graphic Design",
        "likes": 310
    },
    {
        "id": 28,
        "projectImage": "https://i.ibb.co.com/9mtFGTZm/untitled-12-1.jpg",
        "projectTitle": "3D Product Design",
        "serviceName": "Graphic Design",
        "likes": 310
    },
    {
        "id": 29,
        "projectImage": "https://i.ibb.co.com/v6XzSBQg/instagram.jpg",
        "projectTitle": "Icon Design",
        "serviceName": "Graphic Design",
        "likes": 310
    },
    {
        "id": 30,
        "projectImage": "https://i.ibb.co.com/RpzTbGLD/sayithandy.jpg",
        "projectTitle": "Hand Written Font",
        "serviceName": "Graphic Design",
        "likes": 310
    },
    {
        "id": 31,
        "projectImage": "https://i.ibb.co.com/236XNTqd/sign-up.jpg",
        "projectTitle": "Icon Design",
        "serviceName": "Graphic Design",
        "likes": 310
    },
    {
        "id": 32,
        "projectImage": "https://i.ibb.co.com/99Zc3N3J/linkedin.jpg",
        "projectTitle": "Icon Design",
        "serviceName": "Graphic Design",
        "likes": 100
    },
    {
        "id": 33,
        "projectImage": "https://i.ibb.co.com/3yCyDGB5/sign-up-3.jpg",
        "projectTitle": "Icon Design",
        "serviceName": "Graphic Design",
        "likes": 100
    },
    {
        "id": 34,
        "projectImage": "https://i.ibb.co.com/HLF3JPyD/rsz-1avoid-rafa.jpg",
        "projectTitle": "Illustration",
        "serviceName": "Graphic Design",
        "likes": 100
    },
    {
        "id": 35,
        "projectImage": "https://i.ibb.co.com/zhTYJL4C/untitled-3.jpg",
        "projectTitle": "3D Product Design",
        "serviceName": "Graphic Design",
        "likes": 100
    },
    {
        "id": 36,
        "projectImage": "https://i.ibb.co.com/FLn3DWnB/brochure.jpg",
        "projectTitle": "Tri-fold Brochure",
        "serviceName": "Graphic Design",
        "likes": 100
    },
    {
        "id": 37,
        "projectImage": "https://i.ibb.co.com/JRNDhLfN/product-package.jpg",
        "projectTitle": "Product Design",
        "serviceName": "Graphic Design",
        "likes": 100
    },
    {
        "id": 38,
        "projectImage": "https://i.ibb.co.com/M5682J1D/logo-1-2.png",
        "projectTitle": "Logo Design",
        "serviceName": "Graphic Design",
        "likes": 100
    },]

const Project = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <section id="project" className="bg-base-200 md:py-20 ">


            <div className="max-w-[390px]   pt-8 md:pt-0 mb-8  md:max-w-[800px] lg:max-w-[1320px] mx-auto lg:px-10 relative ">
                <h1 className="text-3xl md:text-[58px] font-semibold text-[#064BA7] font-Poppins"> Project</h1>

                <div className='absolute top-[12px] md:-top-[15px] lg:-top-5 right-1 md:right-6 flex gap-3 md:gap-5 p-4   rounded-lg '>
                <button ref={prevRef} className=' bg-[#0379BE] hover:bg-[#064BA7] w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full flex justify-center items-center text-white hover:text-[#6F6E6E] '>
                    <FaChevronLeft className="" size={20} />
                </button>
                <button ref={nextRef} className=' bg-[#0379BE] hover:bg-[#064BA7] md:w-[50px]  w-[40px] h-[40px] md:h-[50px] rounded-full flex justify-center items-center text-white hover:text-[#6F6E6E] '>
                    <FaChevronRight className="" size={20} />
                </button>
            </div>
            </div>
           
            <div className="">


                <Swiper
                    className="flex z-0 justify-between flex-col md:flex-row max-w-[390px]  md:max-w-[800px] lg:max-w-[1220px] mx-auto lg:mx-10"
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    }}
                    breakpoints={{
                        1024: { slidesPerView: 3 },
                        600: { slidesPerView: 2 },
                        480: { slidesPerView: 1 },
                    }}
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>

                            <div key={project.id} className="   rounded-lg shadow-md overflow-hidden ">
                                <div className="relative">
                                    <img src={project.projectImage} alt="" className="w-full h-[366px] object-cover" />
                                    {/* <div className="absolute top-5 right-5 flex space-x-3 font-Poppins">
                        <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">3D</span>
                        <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">AR/VR/MR</span>
                        <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">2D</span>
                    </div> */}
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-85 opacity-0 hover:opacity-100  ">
                                        <a href={project.link}>
                                            <h3 className="text-2xl text-white font-semibold font-Poppins">{project.projectTitle}</h3>
                                        </a>
                                        {/* <p className="mb-4 text-sm text-white inter-font">Co Founder</p> */}
                                        {/* <p className="mb-4 text-sm tracking-wide text-gray-200 inter-font">
                                            Co-founder dedicated to quality, affordability, and reliability.
                                        </p> */}
                                        {/* <div className="flex items-center justify-center space-x-3">
                                            <a
                                                href="/"
                                                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                            >
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="/"
                                                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                            >
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                                </svg>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className=" text-white bg-[#3F3F3F] py-7 px-5 flex justify-between items-center">
                    
                    <h3 className="text-2xl font-semibold font-Poppins">{projectTitle}</h3>
                    <div className="flex justify-between  items-center mt-4">
                        <button className="btn text-white  btn-circle border-none bg-[#0379BE] btn-outline">
                            <FaArrowRight className='text-[20px]' />
                        </button>
                    </div>
                </div> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>



            <div className=" mt-20 md:max-w-[1320px] mx-auto bg-[#3F3F3F] flex flex-col md:flex-row">
                <div>
                    <img className="animate-pulse" src={projectImg1} alt="" />

                </div>

                <div className=" mx-0 lg:w-4/6    flex items-center justify-center" >
                    <div className="">

                        <div className="">
                            <div className="flex justify-center md:justify-end gap-8 ">
                                <div className="text-4xl lg:text-[55px]  font-semibold text-[#D7D7D7] space-y-2 md:space-y-4 my-7 md:my-10 font-Poppins">
                                    <h2>See what </h2>
                                    <h2> we can do </h2>
                                    <h2> for you </h2>

                                </div>
                                <div data-aos="fade-up-right">
                                    <img src={projectImg2} className="w-20 md:w-[250px] lg:w-[300px] md:h-[180px]  animate-pulse md:mt-9  hidden md:flex" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="flex  justify-center">
                            <img src={projectImg3} className="w-20 md:w-[112px] animate-spin1" alt="" />

                        </div>
                    </div>

                </div>
                <div className=" mx-8 md:mx-10 flex flex-col justify-center   lg:w-2/6 mb-10 md:mb-0 md:py-5 lg:py-10">
                    <div className="hover:text-white flex justify-between gap-8  items-center">
                        <h3 className="text-2xl  my-4 font-medium text-[#6D6D6D] hover:text-white font-Poppins">Graphic Design</h3>
                        <FaArrowRight className=" mr-10 text-2xl  mt-2" />

                    </div>
                    <div className="hover:text-white flex justify-between gap-8  items-center border-[#6D6D6D] border-t-2 border-b-2">
                        <h3 className="text-2xl  my-4 font-medium  text-[#6D6D6D] hover:text-white font-Poppins">Motion Graphics</h3>
                        <FaArrowRight className="text-2xl   mr-10 mt-2" />
                    </div>
                    <div className="hover:text-white flex justify-between gap-8  items-center">
                        <h3 className="text-2xl  my-4  font-medium text-[#6D6D6D] hover:text-white font-Poppins">Video Editing</h3>
                        <FaArrowRight className="text-2xl   mr-10 mt-2" />

                    </div>
                    <div className="hover:text-white flex justify-between gap-8  items-center border-[#6D6D6D]  border-t-2 ">
                        <h3 className="text-2xl  font-medium my-4 text-[#6D6D6D] hover:text-white font-Poppins">UI/UX Design</h3>
                        <FaArrowRight className=" text-2xl  mr-10 mt-2" />
                    </div>
                    <div className="hover:text-white flex justify-between gap-8  items-center border-[#6D6D6D]  border-t-2 ">
                        <h3 className="text-2xl  font-medium my-4 text-[#6D6D6D] hover:text-white font-Poppins">Web Development</h3>
                        <FaArrowRight className=" text-2xl  mr-10 mt-2" />
                    </div>
                    <div className="hover:text-white flex justify-between gap-8  items-center border-[#6D6D6D]  border-t-2 ">
                        <h3 className="text-2xl  font-medium my-4 text-[#6D6D6D] hover:text-white font-Poppins">Domain & Hosting</h3>
                        <FaArrowRight className=" text-2xl  mr-10 mt-2" />
                    </div>
                    <div className="hover:text-white flex justify-between gap-8  items-center border-[#6D6D6D]  border-t-2 ">
                        <h3 className="text-2xl  font-medium my-4 text-[#6D6D6D] hover:text-white font-Poppins">SEO</h3>
                        <FaArrowRight className=" text-2xl mr-10 mt-2" />
                    </div>
                    <div className="hover:text-white flex justify-between gap-8  items-center border-[#6D6D6D]  border-t-2 ">
                        <h3 className="text-[22px]  font-medium my-4 text-[#6D6D6D] hover:text-white font-Poppins">Social Media Marketing</h3>
                        <FaArrowRight className=" text-2xl   mr-10 mt-2" />
                    </div>


                </div>
            </div>


        </section>
    );
};

export default Project;