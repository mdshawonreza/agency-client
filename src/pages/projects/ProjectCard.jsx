import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdStarRate } from 'react-icons/md';



const ProjectCard = ({ item }) => {
    const { id, projectImage, projectTitle, serviceName, likes,link } = item
    return (



        <div key={id} className="   rounded-lg shadow-md overflow-hidden ">
            <div className="relative">
                <img src={projectImage} alt="" className="w-full h-[366px] object-cover" />
                {/* <div className="absolute top-5 right-5 flex space-x-3 font-Poppins">
                        <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">3D</span>
                        <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">AR/VR/MR</span>
                        <span className="bg-white font-medium text-[#3F3F3F] text-base px-2 py-1 rounded">2D</span>
                    </div> */}
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-85 opacity-0 hover:opacity-100  ">
                    <a href={link}>
                    <h3 className="text-2xl text-white font-semibold font-Poppins">{projectTitle}</h3>
                    </a>
                    {/* <p className="mb-4 text-sm text-white inter-font">Co Founder</p> */}
                    {/* <p className="mb-4 text-sm tracking-wide text-gray-200 inter-font">
                        Co-founder dedicated to quality, affordability, and reliability.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
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




    );
};

export default ProjectCard;