import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import member1 from "../../assets/Team_20250304_041421_0000.png";
import member2 from "../../assets/1688928872221_1688928871369.png";
import member3 from "../../assets/Team_20250304_041421_0002.png";
import member4 from "../../assets/Team_20250304_041421_0002.png";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamMembers = [
    {
        image: member1,
        name: "Sayed Ahmed",
        title: "Co-founder",
        facebook: "https://www.facebook.com/share/1CSdadibed/",
        instagram: "https://www.instagram.com/___you_know_him___?igsh=MTVuNTRxeDk4bGcxcQ%3D%3D&utm_source=qr",
        linkedin: "https://linkedin.com/in/iwantsahmed"
    },
    {
        image: member2,
        name: "Shawon Reza",
        title: "Web Developer",
        facebook: "https://www.facebook.com/md.shawonrj?mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/shawon.fahad?igsh=MWRvd2NjODUyODBoZw==",
        linkedin: "https://www.linkedin.com/in/md-shawon-reza-6840b8224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        image: member3,
        name: "Mohammad Yousuf",
        title: "Motion Graphic Designer",
        facebook: "https://www.facebook.com/yousufmotion/",
        instagram: "https://www.instagram.com/yousufmotion/",
        linkedin: "https://www.linkedin.com/in/yousufart/"
    }
];
const OurTeam = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section id='team'>
            <div className='bg-base-200 py-8 md:py-16 relative'>
                <div className='max-w-[370px] md:max-w-[800px] lg:max-w-[1320px] mx-auto  '>
                    <div className="max-w-[370px] md:max-w-[800px] lg:max-w-[1320px] mx-auto md:pt-5 mb-8 lg:mx-10">
                        <h1 className="text-3xl md:text-[58px] font-semibold text-[#064BA7] font-Poppins">
                            Our Team
                        </h1>
                    </div>

                    {/* Custom Navigation Buttons */}



                    <div className="flex flex-col md:flex-row-reverse justify-between items-end ">
                        <div>
                            <div className='flex gap-4 p-4 z-10 -mt-20 md:mt-0 rounded-lg '>
                                <button ref={prevRef} className=' bg-[#0379BE] hover:bg-[#064BA7] text-white p-3 rounded-full shadow-lg'>
                                    <FaChevronLeft size={20} />
                                </button>
                                <button ref={nextRef} className=' bg-[#0379BE] hover:bg-[#064BA7] text-white p-3 rounded-full shadow-lg'>
                                    <FaChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="max-w-[370px] md:max-w-[700px] lg:max-w-[1070px] mx-auto ">
                            <Swiper
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
                                {teamMembers.map((member, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="w-full md:w-[325px] h-[660px] rounded-lg shadow-md overflow-hidden flex flex-col">
                                            <div className='h-[180px] w-full'></div>
                                            <div className="w-full bg-[#0379BE] h-full">
                                                <div data-aos="fade-up" className='flex justify-center'>
                                                    <img src={member.image} alt={member.name} className="-mt-16 h-[495px] object-cover" />
                                                </div>
                                            </div>
                                            <div className="bg-[#0379BE] w-full text-white py-6 px-6 border-t-2 z-10">
                                                <h3 className="text-[24px] font-semibold font-Poppins">{member.name}</h3>
                                                <h4 className='text-[19px] font-semibold font-Poppins'>{member.title}</h4>
                                                <div className='flex justify-end items-center gap-1 mt-3'>
                                                    <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                                                        <RiFacebookCircleFill className='text-[20px]' />
                                                    </a>
                                                    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                                                        <FaInstagramSquare className='text-[20px] rounded-full' />
                                                    </a>
                                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                                        <div className='w-[20px] h-[20px] bg-white rounded-full ml-[3px] flex justify-center items-center'>
                                                            <FaLinkedinIn className='text-[#0379BE] text-[12px]' />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
