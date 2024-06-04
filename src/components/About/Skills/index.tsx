import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'

const Skilpage = () => {
  return (
    <>
    <div className='lg:w-full bg-[#060B27] ' data-aos="zoom-in">
                    <div className='lg:px-9 lg:pb-8 lg:py-0 p-5'>
                        <h1 className='text-white text-3xl font-bold py-3 '>Skills</h1>
                        <div className='border lg:border-b-4 border-blue-600 hidden w-[70px]  my-1 '></div>
                        <div className='flex gap-4 pt-2 pb-5'>
                            <div className='w-[49%] '>
                                <div >
                                    <div className='flex justify-between p-1 text-white'>
                                        <div className='50%'>
                                            <p>HTML</p>
                                        </div>
                                        <div className='50%'>
                                            <p>100%</p>
                                        </div>
                                    </div>
                                    <div className='py-1'>
                                        <ProgressBar completed={100} bgColor="#cfff13" baseBgColor="#FFFFFF" labelColor="#000000" borderRadius="10px" />
                                    </div>
                                </div>

                                <div >
                                    <div className='flex justify-between p-1 text-white'>
                                        <div className='50%'>
                                            <p>CSS</p>
                                        </div>
                                        <div className='50%'>
                                            <p>60%</p>
                                        </div>
                                    </div>
                                    <div className='py-1'>
                                        <ProgressBar completed={60} bgColor="#cfff13" baseBgColor="#FFFFFF" labelColor="#000000" borderRadius="10px" />
                                    </div>
                                </div>

                                <div >
                                    <div className='flex justify-between p-1 text-white'>
                                        <div className='50%'>
                                            <p>JAVASCRIPT</p>
                                        </div>
                                        <div className='50%'>
                                            <p>30%</p>
                                        </div>
                                    </div>
                                    <div className='py-1'>
                                        <ProgressBar completed={30} bgColor="#cfff13" baseBgColor="#FFFFFF" labelColor="#000000" borderRadius="10px" />
                                    </div>
                                </div>


                            </div>

                            <div className='w-[49%] '>
                                <div >
                                    <div className='flex justify-between p-1 text-white'>
                                        <div className='50%'>
                                            <p>React</p>
                                        </div>
                                        <div className='50%'>
                                            <p>40%</p>
                                        </div>
                                    </div>
                                    <div className='py-1'>
                                        <ProgressBar completed={40} bgColor="#cfff13" baseBgColor="#FFFFFF" labelColor="#000000" borderRadius="10px" />
                                    </div>
                                </div>

                                <div >
                                    <div className='flex justify-between p-1 text-white'>
                                        <div className='50%'>
                                            <p>Next Js</p>
                                        </div>
                                        <div className='50%'>
                                            <p>50%</p>
                                        </div>
                                    </div>
                                    <div className='py-1'>
                                        <ProgressBar completed={50} bgColor="#cfff13" baseBgColor="#FFFFFF" labelColor="#000000" borderRadius="10px" />
                                    </div>
                                </div>

                                <div >
                                    <div className='flex justify-between p-1 text-white'>
                                        <div className='50%'>
                                            <p>Node Js</p>
                                        </div>
                                        <div className='50%'>
                                            <p>30%</p>
                                        </div>
                                    </div>
                                    <div className='py-1'>
                                        <ProgressBar completed={30} bgColor="#cfff13" baseBgColor="#FFFFFF" labelColor="#000000" borderRadius="10px" />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Skilpage
