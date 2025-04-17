import React from 'react';
import Marquee from "react-fast-marquee";
import BreakingLogo1 from "../../assets/jc99le8o8ctniie9dlcy.webp"
import BreakingLogo2 from "../../assets/download.png"
import BreakingLogo3 from "../../assets/Relaxy+600x600px-min.png"
import BreakingLogo4 from "../../assets/hellotaskapp_logo.jpg"
import BreakingLogo5 from "../../assets/images (1).png"
import BreakingLogo6 from "../../assets/images (2).png"
import BreakingLogo7 from "../../assets/images (3).png"
import BreakingLogo8 from "../../assets/images (4).jpg"
// import BreakingLogo9 from "../../assets/3378436_th1.jpg"
const Breaking = () => {
    return (
        <div className='-mt-8 md:-mt-16  relative z-10 '>
            <div className='max-w-[360px] md:max-w-5xl lg:max-w-[1200px] h-[70px] md:h-[123px] px-10 bg-white mx-auto flex items-center rounded-3xl border-b-[3px]'>
                <Marquee className='flex  items-center '>
                    <img className='w-[140px] md:w-[230px] mr-[40px]  md:mr-[70px]' src={BreakingLogo1} alt="" />
                    
                    <img className='w-[120px] md:w-[230px] mr-[40px]  md:mr-[70px]' src={BreakingLogo2} alt="" />
                    
                    <img className='w-[120px] md:w-[230px]  mr-[40px]  md:mr-[70px]' src={BreakingLogo3} alt="" />
                    
                    <img className='w-[70px] md:w-[100px]  mr-[40px]  md:mr-[70px]' src={BreakingLogo4} alt="" />
                    
                    <img className='w-[130px] md:w-[230px]  mr-[40px]  md:mr-[70px]' src={BreakingLogo5} alt="" />
                    <img className='w-[130px] md:w-[230px]  mr-[40px]  md:mr-[70px]' src={BreakingLogo6} alt="" />
                    <img className='w-[130px] md:w-[230px]  mr-[40px]  md:mr-[70px]' src={BreakingLogo7} alt="" />
                    <img className='w-[40px] md:w-[80px]  mr-[40px]  md:mr-[70px]' src={BreakingLogo8} alt="" />
                    {/* <img className='w-[100px] md:w-[200px]  mr-[40px]  md:mr-[90px]' src={BreakingLogo9} alt="" /> */}
                    
                   
                   
                </Marquee>
            </div>

        </div>
    );
};

export default Breaking;