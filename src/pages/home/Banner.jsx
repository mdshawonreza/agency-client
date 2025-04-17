import Headroom from "react-headroom";
import bannerBrkt from "../../assets/Group 143725865.png"
import video from "../../assets/Introduce  Rayluxeo 2.mp4"
import { TypeAnimation } from "react-type-animation";


const Banner = () => {

    return (
        <section id="banner" className="bg-banner  mx-auto" >
            <div className="  ">

                <div className=" pt-32  flex flex-col md:flex-row gap-10 md:gap-0 min-h-[60vh]  md:min-h-[854px]  ">
                {/* bg-black opacity-75 */}
                    <div className="   flex items-center justify-center rounded-r-[50px] md:w-1/2 ">
                        <div className="flex justify-start md:justify-end">
                            <div className="ml-5 w-[380px] md:w-[400px] lg:w-[600px]  md:max-w[500px]  lg:max-w-[760px] mx-auto">
                                <div className="flex items-center gap-3 font-Poppins">
                                    <h1 className=" text-4xl md:text-[40px] lg:text-[55px] font-bold text-black" >Lets make
                                    </h1>

                                </div>
                                <h2 className=" text-xl md:text-[55px] font-bold text-[#064BA7] md:mt-7" ></h2>
                                <TypeAnimation
                                    sequence={[

                                        'Brand Together!',
                                        1000,
                                        'Website Together!',
                                        1000,
                                        'Designs Together!',
                                        1000,
                                        'Marketing Together!',
                                        1000,
                                    ]}
                                    speed={50}

                                    className="text-4xl md:text-[40px] lg:text-[55px] font-bold text-[#064BA7] mt-3 lg::mt-7"
                                    repeat={Infinity}
                                />
                            </div>
                        </div>


                    </div>

                    <div className=" md:w-1/2  flex justify-center items-center px-5 md:px-10 lg:px-0">
                        {/* <video controls className="w-full px-16 rounded-2xl" >
                            
                        </video> */}
                        
                        <video
                        
                            className=" lg:w-[600px]  rounded-xl   shadow-xl"
                            controls
                            autoPlay
                            loop
                            playsInline
                        
                        //    src={video}
                            
                        >
                            <source src={video} type="video/mp4" />
                            
                        </video>


                    </div>


                </div>
            </div>
        </section>
    );
};

export default Banner;