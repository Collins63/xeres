import React, { useRef } from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import ScrollContainer from './scrollContainer'


const HowItWorks = () => {
    return (
        <section className='flex justify-between mt-20 px-10'>
            <h4 className='text-gray-500 w-40'>/How it works/</h4>
            <div className='flex flex-col'>
                <div className='flex gap-10'>
                    <h1 className='text-black text-4xl'>Crafting growth through Saas with xeres</h1>
                    <p className='text-gray-400 w-100'>Elevate your Saas journey with us: Craft, Enhance, Extend. Tailored
                        Saas design solutions, from idea to execution, for business seeking
                        intuitive experiences and growth. Choose xeres to transform your Saas vision into reality
                    </p>
                </div>
                <div className='mt-10 flex justify-between '>
                    <h1 className='text-4xl font-medium text-black'>Design a new Saas</h1>
                    <div className='flex flex-col'>
                        <div className='h-6 w-100 flex items-center bg-gray-300 rounded-4xl'>
                            <div className='h-6 w-20 bg-black rounded-4xl'>
                            </div> 
                            <FiArrowRightCircle className='text-black' />
                        </div>
                    </div>
                </div>
                <ScrollContainer />
            </div>
        </section>
  )
};


export default HowItWorks