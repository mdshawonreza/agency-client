import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ProjectsTab from './ProjectsTab';


// https://i.ibb.co.com/DffrsTDM/rsz-11kalantor-3.jpg
// https://i.ibb.co.com/gLp6pfZf/esmira-abaya-logo-4.png
// https://i.ibb.co.com/9kdSCKkq/esmira-new.png
// https://i.ibb.co.com/gMMRGfB4/halal-works-7.jpg
// https://i.ibb.co.com/Df82R22t/rakadon-2.jpg
// https://i.ibb.co.com/GGDXZ0s/logo-v2-orig.png
// https://i.ibb.co.com/8nRj0RwF/the-agroverse-3.jpg

const OurProjects = () => {
    const [tabIndex, setTsbIndex] = useState(0)
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
          "link":"https://uni-hostel-hub.web.app/",
          "likes": 240
      },
      {
          "id": 3,
          "projectImage": "https://i.ibb.co.com/s90Vd7DC/Whats-App-Image-2025-04-17-at-4-36-27-PM.jpg",
          "projectTitle": "Explainer Video",
          "serviceName": "Motion Graphics",
          "link":"https://player.vimeo.com/video/1076335569?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
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
          "link":"https://beautiful-lebkuchen-ae71f6.netlify.app/",
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
          "link":"https://career-builder-6a1fb.web.app/",
          "likes": 275
      },
      {
          "id": 8,
          "projectImage": "https://i.ibb.co.com/K3459VV/Whats-App-Image-2025-04-17-at-4-35-42-PM.jpg",
          "projectTitle": "Explainer Video",
          "serviceName": "Motion Graphics",
          "link":"https://player.vimeo.com/video/1076335613?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
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
          "link":"https://blueyonsol.vip/",
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
          "link":"https://wedding-events-management.web.app/",
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
      
      
    const GraphicDesign = projects.filter(item => item.serviceName === 'Graphic Design')
    const WebDevelopment = projects.filter(item => item.serviceName === 'Web Development')
    const MotionGraphics = projects.filter(item => item.serviceName === 'Motion Graphics')
    const UIUXDesign = projects.filter(item => item.serviceName === 'UI/UX Design')
    const VideoEditing = projects.filter(item => item.serviceName === 'Video Editing')
    return (
        <div>
            <div className="relative ">
                <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/sterling-davis-4iXagiKXn3Y-unsplash-min.jpg"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-55 pt-16 md:pt-20">
                    <div className="absolute inset-x-0 bottom-0">
                        <svg
                            viewBox="0 0 224 12"
                            fill="currentColor"
                            className="w-full -mb-1 text-white"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                        </svg>
                    </div>
                    <div className="px-4 py-10 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center ">
                            

                            <h2 className=" font-sans tracking-tight text-white sm:text-4xl sm:leading-none text-3xl md:text-[58px] font-extrabold text-center  inter-font my-3">

                                Our <span className='text-[#0379BE] md:leading-relaxed'>Projects </span>
                            </h2>
                            <p className=" md:text-[26px] text-center font-medium text-gray-200 inter-font px-3 md:px-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing perspiciatis ratione?
                            </p>


                            <a
                                href="#brands"
                                aria-label="Scroll down"
                                className="flex mt-7 items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-[#0379BE] rounded-full hover:text-teal-accent-400 hover:border-[#0379BE] hover:shadow hover:scale-110 hover:bg-[#0379BE]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="currentColor"
                                >
                                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[380px] md:max-w-3xl  lg:max-w-[1200px] mx-auto pt-12 pb-8 '>

                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTsbIndex(index)}>
                    <TabList className="bg-gray-300 border-2 p-6 rounded-md flex-col md:flex-row gap-5 max-w-[400px] md:max-w-3xl lg:max-w-[1320px]  mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around ">
                        <Tab className="btn bg-white hover:bg-gradient-to-tr from-[#121f4a] to-[#143192] hover:text-white md:text-xl font-semibold ">All Projects</Tab>
                        <Tab className="btn bg-white hover:bg-gradient-to-tr from-[#121f4a] to-[#143192] hover:text-white md:text-xl font-semibold ">Graphic Design</Tab>
                        <Tab className="btn bg-white  hover:bg-gradient-to-tr from-[#121f4a] to-[#143192] md:text-xl hover:text-white font-semibold ">Web Development</Tab>
                        <Tab className="btn bg-white  hover:bg-gradient-to-tr from-[#121f4a] to-[#143192]  md:text-xl hover:text-white font-semibold">Motion Graphics</Tab>
                        <Tab className="btn bg-white  hover:bg-gradient-to-tr from-[#121f4a] to-[#143192] md:text-xl hover:text-white font-semibold ">UI/UX Design</Tab>
                        {/* <Tab className="btn bg-white  hover:bg-gradient-to-tr from-[#121f4a] to-[#143192] md:text-xl hover:text-white font-semibold ">Video Editing</Tab> */}
                    </TabList>
                    <TabPanel className='mt-12'>
                        <ProjectsTab items={projects}></ProjectsTab>
                    </TabPanel>
                    <TabPanel className='mt-12'>
                        <ProjectsTab items={GraphicDesign}></ProjectsTab>
                    </TabPanel>
                    <TabPanel>
                        <ProjectsTab items={WebDevelopment}></ProjectsTab>
                    </TabPanel>
                    <TabPanel>
                        <ProjectsTab items={MotionGraphics}></ProjectsTab>
                    </TabPanel>
                    <TabPanel>
                        <ProjectsTab items={UIUXDesign}></ProjectsTab>
                    </TabPanel>
                    <TabPanel>
                        <ProjectsTab items={VideoEditing}></ProjectsTab>
                    </TabPanel>

                </Tabs>

            </div>
        </div>
    );
};

export default OurProjects;