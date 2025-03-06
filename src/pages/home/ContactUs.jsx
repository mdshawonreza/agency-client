import React from 'react';
import contactImg1 from '../../assets/Arrow 1.png'
import contactImg2 from '../../assets/Group 143725869.png'
import contactImg3 from '../../assets/Frame3.png'
import contactImg4 from '../../assets/Frame 2.png'
import contactImg5 from '../../assets/Rectangle 2183267.png'

const ContactUs = () => {
    
    return (
        <section id='contact'>
            <div className='bg-base-200  pt-10 pb-16'>
                <div className='-mt-14 md:-mt-20'>
                    <img className='animate-pulse w-32 md:w-72' src={contactImg4} alt="" />
                </div>
                <div className='max-w-[350px] md:max-w-[1320px]  mx-auto'>
                    <div className='flex justify-between gap-6 items-center mt-3 md:mt-0'>
                        <div className="  mb-8 ">
                            <h1 className="text-3xl md:text-[58px] font-semibold text-[#35709B] font-Poppins"> Contact us!</h1>
                            <p className='text-xl ml-2 mt-3 md:mt-5 mb-1 font-medium text-[#3F3F3F] font-Poppins'>What can we do for you?</p>
                        </div>
                        <div className='text-4xl md:text-[82px]  font-medium font-Poppins'>
                            <h1>Have a Project?</h1>
                        </div>

                    </div>
                    <div className='flex flex-col md:flex-row '>
                        <div className='md:w-2/3 '>
                            <div className='grid grid-cols-2 md:grid-cols-3 justify-start gap-3 md:gap-5 md:mr-28'>
                                <button className="btn btn-sm md:btn-md btn-outline text-sm md:text-xl rounded-3xl font-Poppins">Product Design</button>
                                <button className="btn btn-sm md:btn-md btn-outline text-sm md:text-[18px] rounded-3xl font-Poppins">Website Development</button>
                                <button className="btn btn-sm md:btn-md btn-outline text-sm md:text-xl rounded-3xl font-Poppins">Apps developmet</button>
                            </div>
                            <div className="mt-16 md:mr-32">
                                <form className="space-y-6 md:space-y-12">
                                    <div className="form-control  border-b-[3px] border-[#A09F9F] rounded-3xl">
                                        <input type="name" placeholder="Name" className="bg-base-200 border-none input input-bordered rounded-3xl" required />
                                    </div>
                                    <div className="form-control border-b-[3px] border-[#A09F9F] rounded-3xl">
                                        <input type="email" placeholder="Email" className="bg-base-200 border-none input input-bordered rounded-3xl" required />

                                    </div>
                                    <div className="form-control border-b-[3px] border-[#A09F9F] rounded-3xl">
                                        <input type="name" placeholder="Project details" className="bg-base-200 border-none input input-bordered rounded-3xl" required />

                                    </div>
                                    <div className='flex justify-between'>
                                        <div className="  ml-1 ">
                                            <button className="btn btn-outline text-xl rounded-3xl w-[130px] h-[54px] border-none hover:bg-[#35709B] bg-[#35709B] contact-button">
                                                <img className='animate-pulse' src={contactImg1} alt="" />
                                            </button>
                                        </div>
                                        <div className='md:-mr-28 -mt-8'>
                                            <img className='animate-ping1 w-24 md:w-full' src={contactImg3} alt="" />
                                        </div>

                                    </div>
                                </form>

                            </div>

                        </div>
                        <div className='md:w-1/3 mt-10 md:mt-0'>
                            <div className='flex justify-center md:justify-end items-end '>
                                <div className='mt-16'>
                                    <img className='animate-bounce -mb-32 ml-14' src={contactImg5} alt="" />
                                    <img className='w-[197px] h-[207px] animate-spin1' src={contactImg2} alt="" />
                                </div>

                            </div>
                            <div className='text-[20px] mt-4 font-Poppins'>
                                <p className='text-[#898989] font-medium'>Phone</p>
                                <p className='font-semibold text-[#3F3F3F]'>+1 (833) 520-3712</p>
                            </div>
                            <div className='text-[20px] mt-4 font-Poppins'>
                                <p className='text-[#898989] font-medium'>Email</p>
                                <p className='font-semibold text-[#3F3F3F]'>Hello@conceptsoftworks.com</p>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactUs;