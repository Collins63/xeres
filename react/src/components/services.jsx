import React from 'react'
import { FiArrowRightCircle, FiBell, FiCornerRightDown, FiServer } from 'react-icons/fi'
import { services } from '../constants'

const Services = () => {
  return (
    <div className='px-5 mt-10'>
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex gap-5'>
                <h4 className='text-gray-500'>/Factory/</h4>
                <h1 className='text-black text-4xl'>Leading SaaS provider</h1>
            </div>
            <div className='flex flex-col'>
                <p className='text-gray-400 w-100'>We are a company focusing on delivering high end solutions to
                    clients from around the globe. Our ma   in aim is to drive innovation 
                    in various economic sectors
                </p>
                <div className='flex items-center mt-10 gap-5'>
                    <p className='bg-black rounded-4xl p-2'>Service Provision</p>
                    <div className='flex items-center  gap-1.5'>
                        <FiArrowRightCircle className='text-black' />
                        <a href="" className='text-black'>Lets connect</a>
                    </div>
                     
                </div>
            </div> 
        </div>
        <ul className='mt-20 px-10'>
            {services.map((item)=>(
                <>
                    <li className='flex justify-between items-center h-20'>
                        <h2 className='text-gray-400'>{item.id}</h2>
                        <button className='text-black'>
                            <FiServer />
                        </button>
                        <div className='flex- flex-col'>
                            <h1 className='text-black'>{item.title}</h1>
                            {/* <p className='text-gray-400 w-100'>{item.content}</p> */}
                        </div>
                    </li>
                    <div className='w-full bg-gray-100 h-0.5'/>
                </>
            
            ))}
        </ul>
    </div>
  )
}

export default Services