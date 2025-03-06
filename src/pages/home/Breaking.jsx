import React from 'react';
import Marquee from "react-fast-marquee";
import BreakingLogo1 from "../../assets/image 182.png"
import BreakingLogo2 from "../../assets/image 181.png"
import BreakingLogo3 from "../../assets/image 152.png"
import BreakingLogo4 from "../../assets/image 150.png"
import BreakingLogo5 from "../../assets/image 149.png"
const Breaking = () => {
    return (
        <div className='-mt-8 md:-mt-16  relative z-10 '>
            <div className='max-w-[360px] md:max-w-5xl lg:max-w-[1320px] h-[70px] md:h-[123px] px-10 bg-white mx-auto flex items-center rounded-3xl border-b-[3px]'>
                <Marquee className='flex  '>
                    <img className='w-[70px] md:w-[149px] h-[20px] md:h-[45px] mr-[70px]' src={BreakingLogo1} alt="" />
                    
                    <img className='w-[70px] md:w-[149px] h-[20px] md:h-[45px] mr-[70px]' src={BreakingLogo2} alt="" />
                    
                    <img className='w-[70px] md:w-[149px] h-[20px] md:h-[45px] mr-[70px]' src={BreakingLogo3} alt="" />
                    
                    <img className='w-[70px] md:w-[149px] h-[20px] md:h-[45px] mr-[70px]' src={BreakingLogo4} alt="" />
                    
                    <img className='w-[70px] md:w-[149px] h-[20px] md:h-[45px] mr-[70px]' src={BreakingLogo5} alt="" />
                    
                   
                   
                </Marquee>
            </div>

        </div>
    );
};

export default Breaking;