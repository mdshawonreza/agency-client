import React from 'react';
import bannerImg from '../../assets/Web-design-vs-web-de.avif'
import image1 from '../../assets/pexels-photo-196644.avif'
import image2 from '../../assets/attachment_49310635-e1538423585879.avif'
import image3 from '../../assets/blog-webonboarder-half-02-455x700.avif'
import image4 from '../../assets/attachment_31032714.avif'

const FeaturedBlog3 = () => {
    return (
        <div>
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
                                <h1 className="text-3xl md:text-[40px] font-semibold italic mx-4 md:mx-0 md:leading-tight">
                                Web design, web development, UI and UX: <br /> What’s the difference and <br /> which do you need?
                                </h1>

                            </div>
                        </div>

                    </div>

                    <div className="px-4 pt-16   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
                        <div className="grid gap-10 md:gap-16 row-gap-8 lg:grid-cols-5">
                            <div className="lg:col-span-5">


                                <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal md:text-2xl">
                                    <span className='text-5xl font-semibold text-[#064BA7]'>W</span>hat’s the difference between web design and development? And what about UI vs UX? What do these divisions mean? Why are there so many acronyms?? Don’t tech people want everything to be user friendly!?

If you’re new to getting a website designed, coming across the terminology of the tech industry can feel a lot like listening to a foreign language—except most foreign languages have rhyme and reason. But working with a web professional is something every business should do at some point; if you want a successful website, you may need a translator.
                                </p>

                            </div>
                            
                        </div>
                        <div className='flex justify-center items-center mt-8'>
                            <img src={bannerImg} alt="" />
                        </div>
                        <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal md:text-2xl mt-8">
                        That’s what this article is for. If you’re getting your first website designed or just looking to understand the industry better, here we explain and dissect four of the most used and most troublesome terms in tech today: UI, UX, web design and web development. After reading this, you’ll not only know what each field does, but also which one you need your business to focus on most.
                                </p>
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
                                            The ABCs of IT
                                            </p>
                                        </a>
                                    </div>
                                    <div className="mb-4  text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal space-y-4">
                                            <li> <span className='text-[22px] font-bold'>Web design — </span> A broad umbrella category for everything that relates to designing the visuals and usability of a website. Both UI and UX design, along with many other fields, are included under web design.</li>
                                            <li> <span className='text-[22px] font-bold'>Web development — </span>The technical part of making a website, focusing on code. Web development is further divided into “front-end” and “back-end,” explained below.</li>
                                            <li> <span className='text-[22px] font-bold'>User Interface (UI) —</span> A specialization of web design that deals with the controls people use to interact with a website or app, including button displays and gesture controls.</li>
                                            <li> <span className='text-[22px] font-bold'>User Experience (UX) —  </span>Another specialization of web design, this one dealing with user behavior and feeling when using the site or app. UX design encapsulates many other areas, but views them from the perspective of the user.</li>
        
                                        </div>
                                    <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    As you can see already, none of these areas are exclusive and there’s tons of overlap. Web design and development are just two sides of the same coin, UI design influences UX design, web development supports them all… it’s less about which fields handle which tasks, and more about how each field considers the same task from a different point-of-view.

For example, let’s look at loading times, a common problem for every website. How does each field address loading times:
                                    </p>
                                    
                                </div>
                                <div className='flex  justify-center items-center '>
                                    <div className='md:w-96' >
                                        <img src={image1} alt="" />
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
                                                Web design
                                            </p>
                                        </a>
                                    </div>
                                    <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    “Web design” is a bit of an archaic term, dating back to the days when a single person handled all the design aspects of a website. By modern standards, the term “web designer” can be a bit vague; today, thanks to technology and our increased understanding of the craft, we have a rainbow of subdivisions.
                                    </p>
                                    <div className='flex justify-center items-center mt-8'>
                            <img src={image2} alt="" />
                        </div>
                                    
                                    <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal mt-8">The subcategories of web design include both UI and UX, but also other fun acronyms like IA (information architecture, dealing with site mapping and navigation) and CRO (conversion rate optimization, fine-tuning the site’s design to increase sales, signups or other specific actions). There are dozens of these subcategories, with new ones created every day as designers try to get better jobs in a competitive market.

Generally speaking, web design relates to the visuals and functionality of a web site. It’s a field intrinsically tied to graphic design at every level, and deals with the same design principles of visual communication.
                                    </p>


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
                                            What to look for when hiring a web designer…
                                            </p>
                                        </a>
                                    </div>
                                   <div className='flex flex-col  md:flex-row justify-between items-center'>
                                   <div className="mb-4 md:w-1/2 text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal space-y-4">
                                            <li> More than anything, you need to know what you want before you can find the best web designer for you. Because of so many specializations, it’s not about whether a designer is good or bad, but whether they’re a good fit for you.</li>
                                            <li>Pay attention to their portfolio. With the emphasis on graphic design, web designers each have their own unique artistic styles.</li>
                                            <li>Look for a mastery of the aspects you value. If you have a text-heavy site, see how they handle typography, readability and page layout. If you’re building an ecommerce website design, see if they know what makes a good product page. Check out the best ecommerce website designers here.</li>
                                            <li>Is their preferred software compatible with what the rest of your team uses? There’s a lot of different design software—Adobe Photoshop, Illustrator, InDesign and Sketch, as well as prototyping software like UXPin or Balsamiq. Check with your other staff to see what your options are.</li>
                                            <li>Ask your designer about their design process and its time frame. Designers all have their own methods and design cycles, so double-check that you’re hiring someone that fits your company culture as well as its schedule.</li>
        
                                        </div>



                                   <div className='flex justify-center items-center mt-8'>
                            <img src={image3} alt="" />
                        </div>

                                   </div>

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
                                            Web development
                                            </p>
                                        </a>
                                    </div>
                                    <p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    Web design and development are distinguished by the use of code. Development is where things get technical, but the good news is you don’t have to know what your developers are talking about as long as they do (though it’s certainly helpful to learn the basics).

Web development is divided into two main categories:
                                    </p>
                                    <ul className="mb-4 mt-4  text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal space-y-4">
                                            <li> <span className='text-[22px] font-bold'>Front-end :</span> The code for how web site (or app) is displayed on screen. The front-end developer is in charge of bringing the web designer’s vision to life, typically using computer languages like HTML, CSS and JavaScript. Naturally, not everything the designer planned is realistically feasible, so the front-end developer often works back-and-forth with the designer.</li>
                                            <li> <span className='text-[22px] font-bold'>Back-end :</span>The “front-end” pulls from a digital system of resources hosted on a server. The back-end developer manages those behind-the-scenes resources, coding the data in the database and optimizing how that data gets delivered. They use languages like PHP, Ruby, Python, Java or .Net.</li>
                                            <li> <span className='text-[22px] font-bold'>User Interface (UI) —</span> A specialization of web design that deals with the controls people use to interact with a website or app, including button displays and gesture controls.</li>
                                            <li>Similarly, a full-stack developer is someone who can handle both front-end and back-end development. Sometimes they’re a smart option for startups who can’t afford more than one hire, but ideally you’d have a whole team of developers with diverse specializations.</li>
        
                                        </ul>

                                    

                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-8">


                                
                                <div id='masc' className="sm:col-span-3 lg:col-span-4">
                                    <div className="mb-3">
                                        <a
                                            href="/"
                                            aria-label="Article"
                                            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                        >
                                            <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
                                            What to look for when hiring a web developer…
                                            </p>
                                        </a>
                                    </div>
                                    <div className="mb-4 mt-4 text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal space-y-4">
                                            <li> Be sure to see if they’re fluent in the languages you need. If you can’t tell the difference, tell them what you’d like to do with your site and listen to their recommendation.</li>
                                            <li>Although not required, it’s helpful for a developer to be involved with the design process. For example, a developer could preemptively tell a designer if their choices are possible, saving time on revisions in the long-run. You may want to look into how well your developer works with a team, since some prefer to work autonomously.</li>
                                            <li>Review their previous websites through a lens of functionality. Does everything work as it should? Any flags pop up? You may not know enough about development to understand how it works, but you certainly know what it’s like to be a normal person using a site.</li>
                                            
                                            
                                        </div>



                                </div>

                            </div>
                            <div className="grid pt-8 sm:grid-cols-4">

                                <div id='comb' className="sm:col-span-3 lg:col-span-4">
                                    <div className="mb-3">
                                        <a
                                            href="/"
                                            aria-label="Article"
                                            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                        >
                                            <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
                                            User interface (UI)
                                            </p>
                                        </a>
                                    </div>
                                    <div className='flex  flex-col-reverse md:flex-row justify-between items-center md:gap-10  mb-8'>
                                    <p className=" text-xl md:w-5/6 font-medium text-[#3F3F3F] font-Poppins leading-normal">
                                    Now that we’ve explained web design and development, we can discuss the more specialized fields, starting with user interface design. UIs are something everyone uses without giving much thought to—you don’t need to know the history of the hamburger icon to know that the button with three lines is your menu.

Jeeves Information Systems icon design
Icon design by tongal
And that’s an ongoing principle in most web design fields: if their jobs are done well, you shouldn’t even notice them. This is most prevalent in UI design: with a truly intuitive interface, the user doesn’t have to think about it to use it.

If you have to actively think about how to use the controls, it’s considered bad UI design. Searching for the button you need or spending a few seconds figuring out what a button does both distract you from the overall experience of using the site. The goal of UI design is not only to provide all the controls a user could want, but also to create self-explanatory controls that users understand at a glance.

Another concern is space-management. UI designers have to find the happy medium between giving users a lot of options and conserving screen space. That’s how techniques like hover controls and pull out menus came about. It’s the duty of the UI designer to decide which controls need to present at all times and which are negligible enough to hide or disregard completely.
                                    </p>

                                    <div className='flex my-10 justify-center items-center gap-10'>
                                        <div >
                                                    <img src={image4} alt="" />
                                                </div>
                                                
                                    </div>
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
        </div>
    );
};

export default FeaturedBlog3;