
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Man from "../../../public/man.jpg"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaHome, FaBook, FaRegCopyright } from 'react-icons/fa';

import { IoPerson } from 'react-icons/io5';
import { BsPersonCircle } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';

const Sidebar = () => {
    return (
        <>
            <div className='lg:h-[100vh]  lg:fixed lg:top-0 w-[320px] mobile_sidebar'>
                <div className="   text-white p-4 h-screen bg-black mobile_sidebar  ">

                    <div className='flex items-center justify-center my-3 '>
                        <Image
                            src={Man}
                            alt="Picture of the author"
                            className='border_man w-[100px] h-[100px] '
                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <h2 className='text-2xl font-bold p-3 text-white'>Aditya Pratap</h2>
                    </div>
                    <div className='flex items-center justify-center p-3'>
                        <div className="flex space-x-4 justify-center">
                            <Link href="https://www.facebook.com" className="text-white hover:text-blue-800 text-2xl">
                                <FaFacebook />
                            </Link>
                            <Link href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700 text-2xl">
                                <FaInstagram />
                            </Link>
                            <Link href="https://www.twitter.com" className="text-blue-400 hover:text-blue-600 text-2xl">
                                <FaTwitter />
                            </Link>
                            <Link href="https://www.linkedin.com" className="text-blue-700 hover:text-blue-900 text-2xl">
                                <FaLinkedin />
                            </Link>
                            <Link href="https://www.github.com" className="text-white hover:text-gray-600 text-2xl">
                                <FaGithub />
                            </Link>
                        </div>


                    </div>

                    <div className='gap-4 flex flex-col pt-2'>

                        <div className=' bold_border rounded-3xl text-lg p-2 font-bold hover:bg-slate-200 hover:text-black flex justify-center items-center gap-2'>
                            <FaHome /> <Link href="/">Home</Link>
                        </div>

                        <div className=' bold_border rounded-3xl text-lg p-2 font-bold hover:bg-slate-200 hover:text-black flex justify-center items-center gap-2'>
                            <IoPerson /> <Link href="#about">About</Link>
                        </div>


                        <div className='bold_border rounded-3xl text-lg p-2 font-bold hover:bg-slate-200 hover:text-black flex justify-center items-center gap-2'>
                            <FaBook />
                            <Link href="#resume">Resume</Link>
                        </div>
                        <div className='bold_border rounded-3xl text-lg p-2 font-bold hover:bg-slate-200 hover:text-black flex justify-center items-center gap-2'>
                            <BsPersonCircle /> <Link href="#service">Services</Link>
                        </div>
                        <div className='bold_border rounded-3xl text-lg p-2 font-bold hover:bg-slate-200 hover:text-black flex justify-center items-center gap-2'>
                            <MdOutlineMailOutline /> <Link href="#contact">Contact</Link>
                        </div>
                    </div>

                    <div className='mt-[100px] text-center flex flex-col justify-center items-center'>
                        <p className='flex gap-2 text-base  align-middle items-center'><FaRegCopyright /> Copyright iPortfolio</p>
                        <p>Designed by Aditya </p>
                    </div>


                </div>
            </div>
        </>

    );
};

export default Sidebar;
