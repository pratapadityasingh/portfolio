"use client"
import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import { GrEmoji } from 'react-icons/gr'
import { FaEnvelopeOpenText, FaHeadset } from 'react-icons/fa6'
import { BsPerson } from 'react-icons/bs'
import ProgressBar from '@ramonak/react-progress-bar'
import MANS from "../../../public/man2.png"
import Skilpage from './Skills'

const Aboutpage = () => {
    return (
        <>
            <div id='about' className='lg:w-[1199px] lg:ml-[320px] sm:w-full md:w-full bg-white mobile_about ' data-aos="fade-up">
                <div className='lg:p-10 p-8'>
                    <div>
                        <h1 className='text-black text-3xl font-bold py-3 px-1'>About</h1>
                        <div className='border border-b-4lg:border-blue-600 hidden w-[70px] m-1'></div>
                    </div>
                    <div className='sm:w-full '>
                        <p className='lg:p-1 sm:p-0'>I am a dedicated and experienced full-stack developer with a passion for creating dynamic, user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I have the skills and expertise to bring innovative projects to life from conception to deployment.
                        </p>
                    </div>
                    <div className='lg:w-full lg:flex lg:justify-between lg:items-center lg:p-[40px]'>
                        <div className='lg:w-[30%]'>
                            <Image
                                src={MANS}
                                alt="Picture of the author"
                                className=' '
                            />
                        </div>
                        <div className='lg:w-[70%] sm:w-full '>
                            <div>
                                <h1 className='text-black font-bold text-3xl sm:w-full py-2'>Full-Stack Developer: Crafting Seamless Digital Experiences</h1>
                                <p className='text-black text-base sm:w-full'>With expertise in modern frameworks and technologies, I build scalable, efficient, and intuitive web applications. My approach focuses on delivering high-quality, maintainable code that meets the needs of users and businesses alike.</p>
                            </div>
                            <div className='lg:py-5 lg:flex lg:justify-between'>
                                <div className=''>
                                    <div className='flex gap-1 lg:p-2 py-2 items-center'>
                                        <IoIosArrowForward />
                                        <h1 className='text-lg font-semibold'>Birthday:</h1>
                                        <h2 className='text-lg'>1 May 2004</h2>
                                    </div>
                                    <div className='flex gap-1 lg:p-2 py-2 items-center'>
                                        <IoIosArrowForward />
                                        <h1 className='text-lg font-semibold'>Website:</h1>
                                        <h2 className='text-lg'>https://portfolio-tvb6.vercel.app/</h2>
                                    </div>
                                    <div className='flex gap-1 lg:p-2 py-2 items-center'>
                                        <IoIosArrowForward />
                                        <h1 className='text-lg font-semibold'>Phone:</h1>
                                        <h2 className='text-lg'>+91 6204406826</h2>
                                    </div>
                                    <div className='flex gap-1 lg:p-2 py-2 items-center'>
                                        <IoIosArrowForward />
                                        <h1 className='text-lg font-semibold'>Degree:</h1>
                                        <h2 className='text-lg'>B.Tech</h2>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='flex gap-1 lg:p-2 py-2 items-center'>
                                        <IoIosArrowForward />
                                        <h1 className='text-lg text-left font-semibold'>Age:</h1>
                                        <h2 className='text-lg'>20</h2>
                                    </div>
                                    <div className='flex gap-1 lg:p-2 py-2 items-center'>
                                        <IoIosArrowForward />
                                        <h1 className='text-lg font-semibold'>Email:</h1>
                                        <h2 className='text-lg'>pratap.aditya.offcial@gmail.com</h2>
                                    </div>
                                    <div className='flex gap-1 lg:p-2 py-2 items-center'>
                                        <IoIosArrowForward />
                                        <h1 className='text-lg font-semibold'>Freelance:</h1>
                                        <h2 className='text-lg'>Available</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className='lg:text-base'>I specialize in JavaScript, React, Node.js, and other modern technologies to develop responsive, high-performance web applications. My projects range from small business websites to large-scale enterprise applications. I am passionate about learning new technologies and continuously improving my skills to stay ahead in the fast-paced world of web development.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-full lg:pt-[50px] '>
                        <h1 className='text-black text-3xl font-bold py-3 px-1'>Facts</h1>
                        <div className='border border-b-4 border-blue-600 w-[70px] m-1 '></div>
                        <div className='w-full'>
                            <p className='p-1'>Here are some interesting facts about my career and work:</p>
                        </div>
                        <div className='w-full lg:flex  lg:py-8 lg:justify-around py-5 sm:gap-2 '>
                            <div className='flex lg:flex-row flex-col text-center  gap-2 lg:p-0 p-1 ' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <div className='lg:text-6xl sm:text-3xl text-blue-500 flex justify-center'><GrEmoji /></div>
                                <div className='  '>
                                    <h1 className='lg:text-6xl sm:text-3xl font-medium lg:p-0 p-1'>0+</h1>
                                    <p className='text-base font-medium lg:p-0 p-1'>Happy Clients</p>
                                </div>
                            </div>
                            <div className='flex lg:flex-row flex-col text-center gap-2 ' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <div className='lg:text-6xl sm:text-3xl text-blue-500 flex justify-center lg:p-0 p-1'><FaEnvelopeOpenText /></div>
                                <div>
                                    <h1 className='lg:text-6xl sm:text-3xl  font-medium lg:p-0 p-1'>200+</h1>
                                    <p className='text-base font-medium lg:p-0 p-1'>Projects Completed</p>
                                </div>
                            </div>
                            <div className='flex lg:flex-row flex-col text-center gap-2 ' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <div className='lg:text-6xl sm:text-3xl text-blue-500 flex justify-center lg:p-0 p-1'><FaHeadset /></div>
                                <div>
                                    <h1 className='lg:text-6xl sm:text-3xl font-medium lg:p-0 p-1'>1500+</h1>
                                    <p className='text-base font-medium lg:p-0 p-1'>Hours of Support</p>
                                </div>
                            </div>
                            <div className='flex lg:flex-row flex-col text-center ' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <div className='lg:text-6xl sm:text-3xl flex justify-center lg:p-0 p-1 text-blue-500'><BsPerson /></div>
                                <div>
                                    <h1 className='lg:text-6xl sm:text-3xl font-medium lg:p-0 p-1'>10+</h1>
                                    <p className='text-base font-medium lg:p-0 p-1'>Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Skilpage />
            </div>

        </>
    )
}

export default Aboutpage

