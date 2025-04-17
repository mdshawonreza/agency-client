import React from 'react';

import motionBanner from '../../assets/motion-graphics-number-animation.avif'
import motion1 from '../../assets/f9e23dcd-5d99-4cd4-8974-31c867ccec62.avif'
import motion2 from '../../assets/bc564f7a-070f-4e7e-9f1e-5bca318e67ef.avif'
import motion3 from '../../assets/attachment_83773038.avif'
import motion4 from '../../assets/7028e9f8-5168-4513-a84a-733a30fcd022.avif'
import motion5 from '../../assets/9b166a8a-d950-4fac-b46a-42ac9c0117e1.avif'
import motion6 from '../../assets/motion-graphics-london.avif'

const FeaturedBlog2 = () => {
    return (
        <div>
            <div>
                <div className="  perspective-[10px] bg-black">
                    {/* Hero Section */}
                    <div className="relative h-[calc(55vh-60px)] md:h-[calc(80vh-60px)] flex items-center justify-center overflow-hidden ">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/sterling-davis-4iXagiKXn3Y-unsplash-min.jpg"
                            alt="Photo of city during a sunset by Sterling Davis"
                            className="absolute top-0 left-0 w-full h-[100%] object-cover z-10 scale-[1.1]"
                        />
                        <div className="relative z-10 text-white text-center scale-110 -translate-z-[2px] mt-20">
                            <h1 className="text-3xl mx-8 md:mx-0 md:text-[40px] font-semibold italic md:leading-tight">
                                Motion graphics vs. animation: <br /> what’s the difference?
                            </h1>

                        </div>
                    </div>

                </div>

                <div className="px-4 pt-16   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
                    <div className="grid gap-10 md:gap-16 row-gap-8 lg:grid-cols-5">
                        <div className="lg:col-span-5">


                            <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal md:text-2xl">
                                <span className='text-5xl font-semibold text-[#064BA7]'>I</span>f you want to get into producing animated videos for your business, you’ve probably asked yourself: What is the difference between animation and motion graphics?

                                Motion graphics are a type of animation. While motion graphics describes moving or animated graphic design, animation is an umbrella term for the whole field of moving imagery, including everything from cartoons to claymation. Motion graphics focus on giving movement to graphic design elements, but tend to have less of a concrete storytelling aspect than other types of animation.

                                The terms are often used interchangeably and the distinction is not always completely black and white.

                                In this article, we’ll define motion graphics and explain how it differs from other styles of animation. We’ll also explain when to use which term when talking about motion graphics and animation.
                            </p>

                        </div>
                        {/* <div className="flex flex-col space-y-8 lg:col-span-2">
                            <div>

                                <div className="mb-3">

                                    <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl text-[#064BA7]">
                                        Here are the 7 types of logos you need to know about:
                                    </p>

                                </div>
                                <ol className="mb-4  text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    <a href="#mono"><li>1. Monogram (or lettermark) logos</li></a>
                                    <a href="#word"><li>2. Wordmark logos</li> </a>
                                    <a href="#pict"><li>3. Pictorial mark logos</li></a>
                                    <a href="#abst"><li>4. Abstract logo marks</li></a>
                                    <a href="#masc"><li>5. Mascot logos</li></a>
                                    <a href="#comb"><li>6.The combination mark</li></a>
                                    <a href="#embl"><li>7.The emblem</li></a>

                                </ol>

                            </div>

                        </div> */}
                    </div>
                    <div className='flex justify-center items-center mt-8'>
                        <img src={motionBanner} alt="" />
                    </div>
                </div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="mb-10 border-t border-b divide-y">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-8 ">

                            <div id='mono' className="">
                                <div className="mb-3">
                                    <a
                                        href=""
                                        aria-label="Article"
                                        className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                    >
                                        <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
                                            What are motion graphics?
                                        </p>
                                    </a>
                                </div>
                                <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    Motion graphics takes graphic design that would be otherwise static and gives it animation and movement, usually without following a specific narrative.

                                    Want the bars in your graph to rise up for some extra visual flair? That’s motion graphics.

                                    Want the logo on your website to spin around? That’s motion graphics.

                                    Motion graphics design visualizing London
                                    Motion graphics set shapes and letters in motion. Design via Abigail Kim
                                    Want to animate characters to bring a children’s fairy tale to life? That’s actually not motion graphics. It’s a completely different type of animation.

                                    Whether or not there’s a “story” being told is a big determining factor in deciding if you’re dealing with motion graphics or animation. Motion graphics animation usually features shapes, objects or text that are being set in motion.
                                </p>
                                <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    Motion graphics can illustrate complex ideas visually. Think of motion graphics like a visual aid. Some ideas (especially big, abstract ones) are hard to explain with words or still images. A few seconds of motion graphics can clear everything up perfectly. Just think about how password fields sometimes vibrate or turn red when you enter a wrong password, instantly signalling that you need to try again.
                                </p>
                                <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    The visual style of motion graphics appeals to a wide range of viewers. Cartoons may come across as too childish for a formal business. But motion graphics can use that cute and fun style and apply it to more mature topics. No matter what industry you’re in, the motion graphics look can make your message more engaging and entertaining.
                                </p>

                            </div>
                            <div className='flex  justify-center items-center '>
                                <div className='md:w-96' >
                                    <img src={motion1} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-8 ">

                            <div id='word' className="sm:col-span-3 lg:col-span-4">
                                <div className="mb-3">
                                    <a
                                        href="/"
                                        aria-label="Article"
                                        className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                    >
                                        <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
                                            What is animation?
                                        </p>
                                    </a>
                                </div>
                                <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    Animation is the broader umbrella term that motion graphics falls under. Animation has a history dating back more than 100 years. (Wanna dig into that history? Check out this great guide to animation).

                                    animation for an app that detects car crash
                                    This animation tells the story of what happens when texting while driving. Animation design by SB.D
                                    Any technique that makes static objects or images move is animation—whether it’s hand-drawn cartoons, CGI, anime, claymation or motion graphics. These categories are not mutually exclusive. Most motion graphics are done with CGI, but you could theoretically do hand-drawn motion graphics as well.

                                    What separates motion graphics from other types of animation (at least in terms of marketing videos) is content. Motion graphics are typically associated with setting abstract objects, text and other graphic design elements in motion. Bringing a graph, infographic or web design to life using movement is broadly speaking “animation,” but more specifically, it’s a type of animation that’s called motion graphics.

                                    In contrast, animation as a specific art form focuses more on cinematic effects and storytelling techniques to craft a narrative.

                                    Think of it like this: if your video sets graphics in motion to illustrate a point, it’s would be called motion graphics. If your video features a human character that goes on an emotional journey, it’s more likely to be called “animation.”

                                    cartoon gif explaining how data is saved in the cloud
                                    This animation explains through funny storytelling how data is saved in the cloud. Animation by Janos Nyujto.
                                    So when do you use the term animation compared to motion graphics?
                                </p>
                                <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">Animation is used for stories. Anyone who’s seen a Pixar film knows that animation can be a powerful storytelling medium. Motion graphics can bring statistical data to life, but animation can bring characters to life with emotional narratives, creativity, and artistic expression.
                                    Animation is more expensive. Motion graphics are usually easier to produce. It’s a less complex form of animation. But when you start looking at photorealistic CGI, hand-drawn or painted artwork, and stop-motion techniques, expect to invest more money.
                                </p>


                            </div>
                            <div className='flex  justify-center items-center '>
                                <div className='md:w-96' >
                                    <img src={motion2} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="grid py-8 sm:grid-cols-4">

                            <div id='pict' className="sm:col-span-3 lg:col-span-4">
                                <div className="mb-3">
                                    <a
                                        href="/"
                                        aria-label="Article"
                                        className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                    >
                                        <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
                                            Motion graphics vs. animation: When to use each technique
                                        </p>
                                    </a>
                                </div>
                                <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    It’s no secret the internet loves videos. No matter whether you choose motion graphics or other styles of animation, videos in general yield better engagement, traffic and conversions.
                                </p>
                                <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    Narrative title sequence for South by Southwest Conference & Festivals via Coat of Arms

                                    Video is the #1 preferred type of content from brands with 93% of digital marketers saying that social media videos won them new customers. More than half of users engaged with a brand after watching one of their videos on social media.

                                    However, you don’t want just any video, you want the one that best matches your brand and business goals. So, do you use motion graphics or animation?
                                </p>

                            </div>
                        </div>
                        <div className="grid py-8 sm:grid-cols-4">

                            <div id='abst' className="sm:col-span-3 lg:col-span-4">
                                <div className="mb-3">
                                    <a
                                        href="/"
                                        aria-label="Article"
                                        className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                    >
                                        <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
                                            When to use motion graphics
                                        </p>
                                    </a>
                                </div>
                                <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    Motion graphics are best for outlining or emphasizing facts and illustrating a point you’re trying to make. Motion graphics are used when there’s no need for narrative or storytelling.

                                    Motion graphic videos can break down your complex services or products and present them in a memorable way. Remember, motion graphics are at their core visual aids, so they excel at teaching hard-to-understand ideas through visuals.
                                </p>

                                <div className=' mx-auto'>
                                    <div className='flex my-10 justify-center items-center gap-10 '>
                                        <div >
                                            <img className='md:w-96' src={motion3} alt="" />
                                        </div>
                                        <div >
                                            <img className='md:w-96' src={motion4} alt="" />
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-8">


                            <div className='flex  justify-center items-center '>
                                <div className='md:w-96' >
                                    <img src={motion5} alt="" />
                                </div>

                            </div>
                            <div id='masc' className="sm:col-span-3 lg:col-span-4">
                                <div className="mb-3">
                                    <a
                                        href="/"
                                        aria-label="Article"
                                        className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                    >
                                        <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
                                            When to use other animation techniques
                                        </p>
                                    </a>
                                </div>
                                <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    If you want to highlight the emotional aspects of a story, provide a narrative or if you need to connect with your audience on an emotional level, you want to go with other kinds of animation.

                                    Stories help establish a deeper connection between you and your target audience and other types of animation are better suited for creating these kinds of narratives.
                                </p>



                            </div>

                        </div>
                        <div className="grid py-8 sm:grid-cols-4">

                            <div id='comb' className="sm:col-span-3 lg:col-span-4">
                                <div className="mb-3">
                                    <a
                                        href="/"
                                        aria-label="Article"
                                        className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                    >
                                        <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
                                            Marketing in motion
                                        </p>
                                    </a>
                                </div>
                                <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    When we’re talking about motion graphics and other types of animation, remember: there is a lot of overlap between these and sometimes it can be hard to tell them apart.

                                    But no matter which type of animated video you use, you’re on your way to more engaging content for your audience.

                                    And we’re here to help you get it right: learn more about video, from the basics of video production and video marketing and what types of video there are, to scaling your video production and creating video for social media.
                                </p>

                                <div className='flex my-10 justify-center items-center gap-10'>
                                    {/* <div >
                                        <img src={logo16} alt="" />
                                    </div>
                                    <div >
                                        <img src={logo17} alt="" />
                                    </div>
                                    <div >
                                        <img src={logo18} alt="" />
                                    </div> */}
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="text-center">
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            See all articles
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FeaturedBlog2;