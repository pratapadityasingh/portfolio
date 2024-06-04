import React from 'react'
import { CgMail } from 'react-icons/cg';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';


const Contactpage = () => {
    return (
        <>
            <div id="contact" className='lg:w-[1199px] lg:ml-[320px] lg:p-5 p-8 scroll-auto z-50 bg-[#060B27]'>
                <div>
                    <h1 className="text-white text-3xl font-bold py-3 lg:px-6 px-5">Contact</h1>
                    <div className="lg:border-b-4 lg:border-blue-600 hidden w-[70px] m-1"></div>
                </div>
                <div>
                    <p className="text-base text-white lg:px-6 px-5">
                    Have a project in mind or just want to say hello? Feel free to get in touch with me. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </div>
                <div className='w-full  flex lg:justify-between lg:flex-row flex-col-reverse lg:p-8  lg:mt-0 '>
                    <div className='lg:w-[38%] w-full mt-8 lg:mt-0 '>
                        <div className='mx-auto bg-white shadow-lg rounded-lg lg:p-8 p-4  '>

                            <div className='flex lg:flex-row flex-col  gap-5 items-center lg:justify-start justify-center mt-2  '>
                                <div>
                                    <p className='text-4xl hover:text-fuchsia-400'data-aos="fade-down"><SlLocationPin /></p>
                                </div>
                                <div>
                                    <h3 className='text-black text-xl font-bold' >Location</h3>
                                    <p className='text-gray-700 text-base'>Indore,India</p>
                                </div>

                            </div>
                            <div className='flex gap-5 lg:flex-row flex-col  items-center mt-6  lg:justify-start justify-center '>
                                <div>
                                    <p className='text-4xl  hover:text-orange-500' data-aos="fade-down"><CgMail /></p>
                                </div>
                                <div className='lg:text-left text-center'>
                                    <h3 className='text-black text-xl font-bold ' >Email</h3>
                                    <p className='text-gray-700 text-base'>Indore@gmail.com</p>
                                </div>

                            </div>
                            <div className='flex lg:flex-row flex-col  gap-5 items-center mt-6  lg:justify-start justify-center  '>
                                <div>
                                    <p className='text-4xl hover:text-blue-600' data-aos="fade-down"><MdOutlinePermPhoneMsg /></p>
                                </div>
                                <div>
                                    <h3 className='text-black text-xl font-bold' >Phone</h3>
                                    <p className='text-gray-700 text-base'>453452454</p>
                                </div>

                            </div>
                            <div className='w-full h-[251px] relative mt-3 '>


                                
                                    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginwidth="0" scrolling="no" 
                                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Indore+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                                     classname="map_style rounded-lg"
                                    ></iframe>

                                
                            </div>
                        </div>

                    </div>
                    <div className='lg:w-[60%] w-full '>

                        <div className="container ">
                            <div className=" mx-auto bg-white shadow-lg rounded-lg lg:p-8 p-5">
                                <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

                                <form>
                                    <div className='flex lg:flex-row flex-col w-full justify-between'>
                                        <div className="mb-4 lg:w-[45%] w-full">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" id="name" type="text" placeholder="Your name" />
                                        </div>

                                        <div className="mb-4 lg:w-[45%] w-full">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" id="email" type="email" placeholder="Your email" />
                                        </div>
                                    </div>


                                    <div className='flex lg:flex-row flex-col w-full justify-between'>
                                        <div className="mb-4 lg:w-[45%] w-full">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" id="phone" type="tel" placeholder="Your phone number" />
                                        </div>
                                        <div className="mb-4 lg:w-[45%] w-full">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
                                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" id="subject" type="tel" placeholder="Subject" />
                                        </div>


                                    </div>
                                    <div className="mb-4  ">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                                        <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" id="message" placeholder="Your message"></textarea>
                                    </div>

                                    <div className="text-center w-full ">
                                        <button className="bg-black  text-white font-bold    px-24 py-2 rounded-full hover:bg-blue-600" type="submit">Send Message</button>
                                    </div>
                                </form>

                                <div className="lg:mt-10 mt-4 text-center flex lg:flex-row lg:justify-around flex-col ">
                                    <div>
                                        <p className="text-xl text-black font-bold">Our Office</p>
                                        <p className="text-gray-700 ">123 Main Stret,Indore</p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-bold">Email</p>
                                        <p className="text-gray-700"> contact@example.com</p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-bold">Phone</p>
                                        <p className="text-gray-700"> (123) 456-7890</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </>
    )
}

export default Contactpage;
