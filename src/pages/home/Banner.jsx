import Headroom from "react-headroom";
import bannerBrkt from "../../assets/Group 143725865.png"
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    const navLinks = <>
        <li><a href="#banner">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#tokenomics">Service</a></li>
        <li><a href="#roadmap">Client</a></li>
        <li><a href="#joinUs">Team</a></li>
        <li><a href="#joinUs">Blog</a></li>
        <li><a href="#joinUs">Contact</a></li>


    </>
    return (
        <section id="banner" className="bg-banner  mx-auto" >
            <div className="  ">

                <div className="  flex  min-h-[50vh]  md:min-h-[854px]  ">

                    <div className="bg-black opacity-75   flex items-center justify-center rounded-r-[50px] w-1/2">
                        <div className="ml-5 lg:ml-36 md:max-w[500px]  lg:max-w-[660px] mx-auto">
                            <div className="flex items-center gap-3 font-Poppins">
                                <h1 className=" text-lg md:text-[40px] lg:text-[70px] font-bold text-white" >Lets make
                                </h1>
                                {/* <img className="w-[18px] md:w-[40px] lg:w-20  lg:h-14 mt-0 md:mt-2  lg:mt-4" src={bannerBrkt} alt="" /> */}
                            </div>
                            <h2 className=" text-xl md:text-[70px] font-bold text-white md:mt-7" ></h2>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'software together !',
                                    1000,
                                    ' software together !',
                                    1000,
                                    'software together !',
                                    1000,
                                    'software together !',
                                    1000,
                                ]}
                                speed={50}
                                // style={{
                                //     fontSize: '70px', /* text-xl */
                                //     fontWeight: '700', /* font-bold */
                                //     color: 'white', /* text-white */
                                //     marginTop: '1.75rem', /* md:mt-7 */
                                //     '@media (min-width: 768px)': {
                                //       fontSize: '70px', /* md:text-[70px] */
                                //     }
                                //   }}
                                className="text-lg md:text-[40px] lg:text-[70px] font-bold text-white mt-3 lg::mt-7"
                                repeat={Infinity}
                            />
                        </div>


                    </div>

                    <div className=" w-1/2">


                    </div>


                </div>
            </div>
        </section>
    );
};

export default Banner;