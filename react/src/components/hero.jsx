import React from 'react'
import { FiAnchor, FiArrowRightCircle } from 'react-icons/fi'
import { blackIphone } from '../assets'

const Hero = () => {
  return (
    <div className='px-5 '>
        <div className='flex flex-col justify-between md:flex-row'>
            <div className='flex flex-col'>
                <h1 className='text-black text-7xl font-medium'>Building tomorrow</h1>
                <h1 className='mt-10 text-black text-7xl font-medium'>Today</h1>
            </div>
            
           <div className='flex flex-col'>
                <p className='text-gray-400 w-100'>We are a company focusing on delivering high end solutions to
                    clients from around the globe. Our ma   in aim is to drive innovation 
                    in various economic sectors
                </p>
                <div className='flex items-center mt-10 gap-1.5'>
                    <FiArrowRightCircle className='text-black' />
                    <a href="" className='text-black'>Explore works</a>
                </div>
            </div> 
        </div>
        <div
            style={{
                backgroundImage: `url(${blackIphone})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height:'70vh'
            }}
            className='mt-5 rounded-4xl'
        >
        </div>
    </div>
  )
}

export default Hero