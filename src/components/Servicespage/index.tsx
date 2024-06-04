"use client"
import { DiAndroid, DiDatabase } from 'react-icons/di';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { MdOutlineSettingsBrightness } from 'react-icons/md';
import Image from 'next/image';
import SimpleImageSlider from 'react-simple-image-slider';
import Testimonial from './Testomonial';





const Servicepage = () => {


    return (
        <>
            <div id="service" className="lg:w-[1199px] lg:ml-[320px] lg:mt-[100px]  lg:p-10 ">
                <div>
                    <div>
                        <h1 className="text-black text-3xl font-bold py-3 px-8 lg:px-1">Services</h1>
                        <div className=" w-[70px] mx-8 lg:mx-8 "></div>
                    </div>
                    <div className="pt-5 lg:flex lg:justify-around lg:p-5 p-8">
                        <div>
                            <div className="flex gap-3  lg:w-[300px] w-full pb-8">
                                <div className="text-6xl text-orange-400 hover:text-blue-500" data-aos="fade-down"><DiDatabase /></div>
                                <div>
                                    <h1 className="text-base font-semibold">Database Management</h1>
                                    <p className="text-base">Expertise in designing, implementing, and managing scalable databases to ensure your data is secure, accessible, and optimized for performance.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 lg:w-[300px] w-full pb-8">
                                <div className="text-6xl text-green hover:text-yellow-400" data-aos="fade-down"><DiAndroid /></div>
                                <div>
                                    <h1 className="text-base font-semibold">Mobile App Development</h1>
                                    <p className="text-base">Creating intuitive and engaging mobile applications for Android and iOS platforms, tailored to meet your business needs and user expectations.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-3 lg:w-[300px] w-full pb-8">
                                <div className="text-6xl text-yellow-400 hover:text-pink-600" data-aos="fade-down"><FaEnvelopeOpenText /></div>
                                <div>
                                    <h1 className="text-base font-semibold">Email Marketing Solutions</h1>
                                    <p className="text-base">Developing and integrating powerful email marketing tools to help you reach your audience effectively and boost your marketing campaigns.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 lg:w-[300px] w-full pb-8">
                                <div className="text-6xl text-grey hover:text-orange" data-aos="fade-down"><MdOutlineSettingsBrightness /></div>
                                <div>
                                    <h1 className="text-base font-semibold">Custom Web Development</h1>
                                    <p className="text-base">Building custom websites that are visually appealing, user-friendly, and optimized for performance, ensuring a seamless user experience.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-3 lg:w-[300px] w-full pb-8">
                                <div className="text-6xl text-blue-300 hover:text-red-500" data-aos="fade-down"><GiNetworkBars /></div>
                                <div>
                                    <h1 className="text-base font-semibold">Network & Security</h1>
                                    <p className="text-base">Providing robust network solutions and security measures to protect your digital assets from threats and ensure smooth operation.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 lg:w-[300px] w-full pb-8">
                                <div className="text-6xl text-blue-400 hover:text-black" data-aos="fade-down"><FaEnvelopeOpenText /></div>
                                <div>
                                    <h1 className="text-base font-semibold">API Integration</h1>
                                    <p className="text-base">Seamlessly integrating third-party APIs into your applications to enhance functionality and streamline processes for better performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonial />
        </>
    );
};

export default Servicepage;
