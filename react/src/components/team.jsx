import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import { team } from '../constants'
import { robots } from '../assets'

const Team = () => {
  return (
    <section className='flex justify-between mt-20 mb-20 px-10'>
            <h4 className='text-gray-500 w-40'>/Team/</h4>
            <div className='flex flex-col'>
                <div className='flex gap-10'>
                    <h1 className='text-black text-4xl'>Meet the people that make everything possible</h1>
                    <p className='text-gray-400 w-100'>Behind every powerful solution we deliver is a passionate team of innovators, engineers, and creators. Meet the minds driving our SaaS technology forward — committed to building scalable, secure, and user-first experiences.
                    </p>
                </div>
                <div className='flex justify-between mt-10'>
                    <div className='flex flex-col items-start'>
                        <div className='flex bg-gray-200 items-center justify-center rounded-4xl w-80 h-80'>
                            <div className='w-60 h-60 rounded-4xl bg-red-50'
                                style={{
                                    backgroundImage: `url(${robots})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                            </div>
                        </div>
                        <h1 className='text-black text-1xl font-medium mt-5'>Collaborators</h1>
                        <p className='w-75 text-gray-500 mt-5 '>Our strength lies in our tem with top-notch
                            UX designers, programmers and marketers   
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-center bg-gray-300 rounded-4xl w-80 h-80'>
                            <div className='w-60 h-60 rounded-4xl bg-red-50'
                                style={{
                                    backgroundImage: `url(${robots})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                            </div>
                        </div>
                        <h1 className='text-black text-1xl font-medium mt-5'>Reginald Chiveto</h1>
                        <p className='w-75 text-gray-500 mt-5'> As Head of Communications and Strategy, heshapes the voice, vision, and direction of our brand.
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='bg-gray-200 rounded-4xl w-80 h-80 flex items-center justify-center'>
                            <div className='w-60 h-60 rounded-4xl bg-red-50'
                                style={{
                                    backgroundImage: `url(${robots})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                            </div>
                        </div>
                        <h1 className='text-black text-1xl font-medium mt-5'>Collins Chimbganda</h1>
                        <p className='w-75 text-gray-500 mt-5'>As Chief Technology Officer, he leads the strategic direction and execution of our technology vision.
                        </p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Team