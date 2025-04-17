
import React, { useState } from 'react';
import contactImg1 from '../../assets/Arrow 1.png'
import contactImg2 from '../../assets/Group 143725869.png'
import contactImg3 from '../../assets/Frame3.png'
import contactImg4 from '../../assets/Frame 2.png'
import contactImg5 from '../../assets/Rectangle 2183267.png'

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import swal from "sweetalert";
import { Loader2, Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const ContactUs = () => {
    // const letters = "Have  a  Project?".split("");
    const form = useRef();
    // const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
       
        // const form=e.target
        // const message = form.message.value
        // console.log(message)
        
        // setIsLoading(true);
        emailjs
            .sendForm('service_v37fh2g', 'template_uchokvb', form.current, {
                publicKey: 'bX4WvkEhlrCHLW83Q',
                
            })
            
            .then(
                () => {
                    
                    console.log('SUCCESS!');
                    swal({
                        title: "Good job!",
                        text: "Message send successfully",
                        icon: "success",
                        button: "Aww yiss!",
                    });
                    form.current.reset();

                },
                (error) => {
                    toast.error('Failed to send message. Please try again.');
                    // console.log('FAILED...', error.text);
                    
                },
                // setIsLoading(false)
                
            );
           
    };

    return (
        <section id='contact'>
            <div className='bg-base-200  pt-10 pb-16'>
            <Toaster position="top-right" />
                <div className='-mt-14 md:-mt-20'>
                    <img className='animate-pulse w-32 md:w-72' src={contactImg4} alt="" />
                </div>
                <div className='max-w-[390px] md:max-w-[800px] lg:max-w-[1320px]  mx-auto px-5 lg:px-10'>
                    <div className='flex justify-between gap-3 md:gap-6 items-s items-center mt-3 md:mt-0'>
                        <div className="w-[160px] md:w-1/2   mb-8 ">
                            <h1 className="text-2xl md:text-[58px] font-semibold text-[#064BA7] font-Poppins"> Contact us!</h1>
                            <p className='text-xl  md:ml-2 mt-3 md:mt-5 font-medium text-[#3F3F3F] font-Poppins'>What can we do for you?</p>
                        </div>
                        <div className='text-[23px]  md:text-[43px] lg:text-[72px]  font-medium font-Poppins'>

                            <h1 className="">
                                {"Have".split("").map((char, index) => (
                                    <span
                                        key={index}
                                        className="inline-block relative animate-depth font-depth"
                                        style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                                    >
                                        {char}
                                    </span>
                                ))}

                                {/* Add a space here */}
                                <span className="inline-block w-[0.2em]"></span>

                                {"a".split("").map((char, index) => (
                                    <span
                                        key={index + 6}
                                        className="inline-block relative animate-depth font-depth"
                                        style={{ animationDelay: `${(index + 7) * 0.1}s` }}
                                    >
                                        {char}
                                    </span>
                                ))}
                                {/* Add a space here */}
                                <span className="inline-block w-[0.2em]"></span>

                                {"Project?".split("").map((char, index) => (
                                    <span
                                        key={index + 7}
                                        className="inline-block relative animate-depth font-depth"
                                        style={{ animationDelay: `${(index + 7) * 0.1}s` }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </h1>
                        </div>


                    </div>
                    <div className='flex flex-col md:flex-row '>
                        <div className='lg:w-2/3 '>
                            <div className='grid grid-cols-2 lg:grid-cols-3 justify-start gap-3 md:gap-5 md:mr-28'>
                                <button className="btn btn-sm md:btn-md btn-outline text-sm lg:text-base rounded-3xl font-Poppins">Graphic Design</button>
                                <button className="btn btn-sm md:btn-md btn-outline text-sm lg:text-base rounded-3xl font-Poppins">Motion Graphics</button>
                                <button className="btn btn-sm md:btn-md btn-outline text-sm lg:text-base rounded-3xl font-Poppins">Video Editing</button>
                                <button className="btn btn-sm md:btn-md btn-outline text-sm lg:text-base rounded-3xl font-Poppins">UI/UX Design</button>
                                <button className="btn btn-sm md:btn-md btn-outline text-sm lg:text-base rounded-3xl font-Poppins">Web Development</button>
                                <button className="btn btn-sm md:btn-md btn-outline text-sm lg:text-base rounded-3xl font-Poppins">Domain & Hosting</button>
                                <button className="btn btn-sm md:btn-md btn-outline text-sm lg:text-base rounded-3xl font-Poppins">SEO</button>
                                <button className="btn btn-sm md:btn-md btn-outline text-xs lg:text-base rounded-3xl font-Poppins">Social Media Marketing</button>
                            </div>
                            <div className="mt-16 md:mt-10 md:mr-32">
                                <form ref={form} onSubmit={sendEmail} className="space-y-6 md:space-y-8">
                                    <div className="form-control  border-b-[3px] border-[#A09F9F] rounded-3xl">
                                        <input type="text" name="name" placeholder="Name" className="bg-base-200 border-none input input-bordered rounded-3xl" required />
                                    </div>
                                    <div className="form-control border-b-[3px] border-[#A09F9F] rounded-3xl">
                                        <input type="email" name="from_name" placeholder="Email" className="bg-base-200 border-none input input-bordered rounded-3xl" required />

                                    </div>
                                    <div className="form-control border-b-[3px] border-[#A09F9F] rounded-3xl">
                                        <input name="message" placeholder="Project details" className="bg-base-200 border-none input input-bordered rounded-3xl" required />

                                    </div>
                                    <div className='flex justify-between'>
                                        <div className="  ml-1 ">
                                            <button type="submit" value="Send" className="btn btn-outline text-xl rounded-3xl w-[130px] h-[54px] border-none hover:bg-[#064BA7] bg-[#064BA7] contact-button ">
                                            <img className='animate-pulse' src={contactImg1} alt="" />
                                                
                                                
                                            </button>

                                        </div>
                                        {/* <div className='md:-mr-28 -mt-8 '>
                                            <img className='animate-ping1 w-24 md:w-full' src={contactImg3} alt="" />
                                        </div> */}

                                    </div>
                                </form>


                            </div>

                        </div>
                        <div className='md:w-1/3 mt-10 md:mt-0'>
                            <div className='flex justify-center md:justify-end items-end '>
                                <div className='mt-16 md:mr-4'>
                                    <img className='animate-bounce -mb-32 ml-14' src={contactImg5} alt="" />
                                    <img className='w-[197px] h-[207px] animate-spin1' src={contactImg2} alt="" />
                                </div>

                            </div>
                            <div className='text-[20px] mt-4 font-Poppins'>
                                <p className='text-[#898989] font-medium'>Phone</p>
                                <p className='font-semibold text-[#3F3F3F]'>+880 1601982900</p>
                            </div>
                            <div className='text-[20px] mt-4 font-Poppins'>
                                <p className='text-[#898989] font-medium'>Email</p>
                                <p className='font-semibold text-[#3F3F3F]'>Support@rayluxeo.com</p>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactUs;