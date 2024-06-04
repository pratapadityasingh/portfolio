import React from 'react'
import Image from 'next/image'
import Aboutpage from '../About'
import Resumepage from '../Resume'
import Servicepage from '../Servicespage'
import MAN from "../../../public/man2.png"


const Homepage = () => {
  return (
    <>
    {/* <div className=' '>
      <div className='flex lg:w-[1199px] lg:ml-[320px] h-screen hero_bg   justify-between items-center mobile_hero'>
        
        <div className=' text-white text-center lg:move_bg'>
          <h1 className='  font-bold lg:text-white text-black text-6xl'>Aditya <span className=' text-green-600'>Pratap</span></h1>
          <p className='p-5 text-center text-lg font-bold '>I am Fullstack Developer.........</p>
        </div>
        <div>
          <Image
            src={MAN}
            alt="Picture of the author"
            className='  '
          />
        </div>



      </div>
      </div> */}
      <Aboutpage/>
      <Resumepage/>
     
    </>
  )
}

export default Homepage

