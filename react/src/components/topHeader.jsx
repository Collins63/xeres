import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const TopHeader = () => {
  return (
    <div className=' p-10 flex items-center justify-between'>
        <p className='text-black text-2xl font-medium'>xeres</p>
        <div className='w-25 h-3 translate-x-1/2 bg-black rounded-2xl'></div>
        <div className='flex gap-1.5'>
            <button className='text-black bg-gray-100 rounded-full p-2'>
                Book a meeting
            </button>
            <button className='text-white flex gap-1.5 items-center bg-black rounded-full p-2'>
                <FiArrowRight />
                <p>Contact us</p>
                
            </button>
        </div>
    </div>
  )
}

export default TopHeader