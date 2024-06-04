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
                                <h4>John Doe</h4>
                                <p className='lg:w-[400px] w-full'>Highly skilled full-stack developer with over 10 years of experience in developing scalable web applications. Proficient in JavaScript, React, Node.js, and various back-end technologies. Adept at collaborating with cross-functional teams to deliver high-quality projects on time.</p>
                                <ul>
                                    <li>Location: Indore, India</li>
                                    <li>Phone: +91 594312344</li>
                                    <li>Email: example@gmail.com</li>
                                </ul>
                            </div>
                            <h1 className='text-3xl p-1'>Education</h1>
                            <div className="resume-item pb-0">
                                <h4>Bachelor of Technology in Computer Science</h4>
                                <h5>ABC University, 2008-2012</h5>
                                <p className='lg:w-[400px] w-full'>Graduated with honors, specializing in software development and algorithms. Gained a solid foundation in computer science principles and practical experience through various projects and internships.</p>
                            </div>
                            <div className="resume-item pb-0">
                                <h4>Master of Science in Software Engineering</h4>
                                <h5>XYZ University, 2013-2015</h5>
                                <p className='lg:w-[400px] w-full'>Focused on advanced software engineering methodologies, project management, and full-stack development. Completed a thesis on optimizing web application performance.</p>
                            </div>
                        </div>
                        <div className='49%' data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <h1 className='text-3xl p-1'>Professional Experience</h1>
                            <div className="resume-item pb-0">
                                <h4>Senior Full-Stack Developer</h4>
                                <h5>Tech Solutions Inc., 2018-Present</h5>
                                <p className='lg:w-[400px] w-full'>Lead a team of developers in creating dynamic, responsive web applications. Implemented new features and maintained existing codebase for a variety of client projects, ensuring optimal performance and user satisfaction.</p>
                                <ul>
                                    <li>Location: Indore, India</li>
                                    <li>Phone: +91 594312344</li>
                                    <li>Email: example@gmail.com</li>
                                </ul>
                            </div>
                            <div className="resume-item pb-0">
                                <h4>Full-Stack Developer</h4>
                                <h5>Innovatech Solutions, 2015-2018</h5>
                                <p className='lg:w-[400px] w-full'>Developed and maintained full-stack web applications using modern frameworks and technologies. Collaborated with designers and product managers to deliver user-centric solutions. Optimized application performance and scalability.</p>
                                <ul>
                                    <li>Location: Indore, India</li>
                                    <li>Phone: +91 594312344</li>
                                    <li>Email: example@gmail.com</li>
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
