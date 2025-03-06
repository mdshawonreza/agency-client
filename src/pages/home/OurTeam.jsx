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
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OurTeam = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section id='team'>
            <div className='bg-base-200 py-8 md:py-16 relative'>
                <div className='max-w-[1320px] mx-auto'>
                    <div className="max-w-[350px] md:max-w-[1320px] mx-auto md:pt-5 mb-8">
                        <h1 className="text-3xl md:text-[58px] font-semibold text-[#35709B] font-Poppins">
                            Our Team
                        </h1>
                    </div>

                    {/* Custom Navigation Buttons */}
                    <div className='absolute bottom-20 right-16 flex gap-2 p-4 z-10  rounded-lg shadow-lg'>
                        <button ref={prevRef} className='bg-[#35709B] text-white p-3 rounded-full shadow-lg'>
                            <FaChevronLeft size={20} />
                        </button>
                        <button ref={nextRef} className='bg-[#35709B] text-white p-3 rounded-full shadow-lg'>
                            <FaChevronRight size={20} />
                        </button>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
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
                        {[member1, member2, member3,member4].map((member, index) => (
                            <SwiperSlide key={index}>
                                <div  className="w-full md:w-[325px] h-[660px] rounded-lg shadow-md overflow-hidden flex flex-col">
                                    <div className='h-[180px] w-full'></div>
                                    <div className="w-full bg-[#6CB0DB] h-full">
                                        <div  data-aos="fade-up" className='flex justify-center'>
                                            <img   src={member} alt='' className="-mt-16 h-[495px] object-cover" />
                                        </div>
                                    </div>
                                    <div className="bg-[#6CB0DB] w-full text-white py-6 px-6 border-t-2 z-10">
                                        <h3 className="text-[24px] font-semibold font-Poppins">
                                            {index === 0 ? "Sayed Ahmed" : index === 1 ? "Shawon Reza" : "Mohammad Yousuf"}
                                        </h3>
                                        <h4 className='text-[19px] font-semibold font-Poppins'>
                                            {index === 0 ? "Co-founder" : index === 1 ? "Web Developer" : "Motion Graphic Designer"}
                                        </h4>
                                        <div className='flex justify-end items-center gap-1 mt-3'>
                                            <RiFacebookCircleFill className='text-[20px]' />
                                            <FaInstagramSquare className='text-[20px] rounded-full' />
                                            <div className='w-[20px] h-[20px] bg-white rounded-full ml-[3px] flex justify-center items-center'>
                                                <BsTwitter className='text-[#6CB0DB] text-[12px]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
