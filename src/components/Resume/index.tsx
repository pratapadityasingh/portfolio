import React from 'react'
import Servicepage from '../Servicespage';

const Resumepage = () => {
    return (
        <>
            <div id='resume' className='bg-white lg:py-0 py-5 lg:h-screen  lg:w-[1199px] lg:ml-[320px] w-full  '>
                <div className='lg:p-10 px-8 '>
                    <div>
                        <h1 className='text-black text-3xl font-bold py-3'>Resume</h1>
                        <div className='border border-b-4 lg:border-blue-600 hidden w-[70px] m-1'></div>
                    </div>
                    <div>
                        <p className='text-base mb-5'>I am an accomplished full-stack developer with a comprehensive background in designing and implementing cutting-edge web applications. My proficiency spans both front-end and back-end technologies, ensuring seamless user experiences and robust functionality.</p>
                    </div>
                    <div className='w-full lg:flex lg:justify-between'>
                        <div className='49%' data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <h1 className='text-3xl p-1'>Summary</h1>
                            <div className="resume-item pb-0">
                                <h4>Aditya Pratap</h4>
                                <p className='lg:w-[400px] w-full'>Highly skilled full-stack developer with over 6 Month of experience in developing scalable web applications. Proficient in JavaScript, React, Node.js, and various back-end technologies. Adept at collaborating with cross-functional teams to deliver high-quality projects on time.</p>
                                <ul>
                                    <li>Location: Indore, India</li>
                                    <li>Phone: +91 6204406826</li>
                                    <li>Email: pratap.aditya.official@gmail.com</li>
                                </ul>
                            </div>
                            <h1 className='text-3xl p-1'>Education</h1>
                            <div className="resume-item pb-0">
                                <h4>Bachelor of Technology in Computer Science</h4>
                                <h5>CDGI , 2021-2025</h5>
                                <p className='lg:w-[400px] w-full'>Graduated with honors, specializing in software development and algorithms. Gained a solid foundation in computer science principles and practical experience through various projects and internships.</p>
                            </div>
                            <div className="resume-item pb-0">
                                <h4>High School School</h4>
                                <h5>DAV Public School, 2019-2021</h5>
                                <p className='lg:w-[400px] w-full'>Focused on advanced software engineering methodologies, project management, and full-stack development. Completed a thesis on optimizing web application performance.</p>
                            </div>
                        </div>
                        <div className='49%' data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <h1 className='text-3xl p-1'>Professional Experience</h1>
                            <div className="resume-item pb-0">
                                <h4> Full-Stack Developer</h4>
                                <h5>Ment Tech, 2024-Present</h5>
                                <p className='lg:w-[400px] w-full'>Lead a team of developers in creating dynamic, responsive web applications. Implemented new features and maintained existing codebase for a variety of client projects, ensuring optimal performance and user satisfaction.</p>
                                <ul>
                                    <li>Location: Indore, India</li>
                                    <li>Phone: +91 6204406826</li>
                                    <li>Email: pratap.aditya.official@gmail.com</li>
                                </ul>
                            </div>
                            <div className="resume-item pb-0">
                                <h4>Full-Stack Developer</h4>
                                <h5>Ment Tech</h5>
                                <p className='lg:w-[400px] w-full'>Developed and maintained full-stack web applications using modern frameworks and technologies. Collaborated with designers and product managers to deliver user-centric solutions. Optimized application performance and scalability.</p>
                                <ul>
                                    <li>Location: Indore, India</li>
                                    <li>Phone: +916204406826</li>
                                    <li>Email: pratap.aditya.official@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Servicepage />
        </>
    )
}

export default Resumepage;
