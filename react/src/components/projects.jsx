import { useScroll, useTransform , motion} from 'framer-motion';
import React, { useRef } from 'react'
import { FiArrowRightCircle } from 'react-icons/fi';
import { darkLogo, light_logo, tallyTapLogo } from '../assets';

const Projects = () => {
   const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const section1Height = useTransform(scrollYProgress, [0, 0.25, 0.5], ["100%", "100%", "0%"]);

  const section2Height = useTransform(scrollYProgress, [0.25, 0.5, 0.75], ["0%", "100%", "0%"]);

  const section3Height = useTransform(scrollYProgress, [0.5, 0.75, 1], ["0%", "100%", "100%"]);
  const section1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 1, 0]);
    const section2Opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
    const section3Opacity = useTransform(scrollYProgress, [0.5, 0.75, 1], [0, 1, 1]);


  return (
    <section ref={containerRef} className="relative mt-20 px-5 w-full h-[400vh] bg-white">

      {/* STATIC TOP BLOCK */}
      <div className="sticky top-0 z-50 bg-white p-10">
          <div className="flex gap-5 justify-between">
            <h4 className="text-gray-500 w-40">/How it works/</h4>
            <h1 className="text-black text-4xl">
              Get to see recent projects
            </h1>
            <p className="text-gray-400 w-100">
              Elevate your Saas journey with us: Craft, Enhance, Extend. Tailored
              Saas design solutions, from idea to execution, for businesses seeking
              
            </p>
          </div>
      </div>
      {/* SCROLLING SECTIONS */}
      <div className="sticky top-50 z-60 rounded-4xl h-[80vh] bg-white  overflow-hidden">
        <motion.div
            className="absolute rounded-t-4xl bottom-0 w-full bg-gray-200 flex items-start justify-center z-30"
            style={{ height: section1Height, opacity: section1Opacity }}
            >
            <div className='flex mt-20 flex-col items-start'>
                    <h1 className='text-4xl font-medium '>Hirelane</h1>
                    <p className='mt-10'>Job seekers platform</p>
                    <p className='mt-5 text-gray-500 w-200'>This is a platform where skilled labour in the informal sector meets potential clients with ease.
                      this is a solution brought about to fill be gap in job seeking when it comes to informal but important jobs
                    </p>
                    <motion.button className='mt-20 bg-white text-black w-40 h-10 rounded-full'
                      whileHover={{
                        scale: 1.05
                      }}
                    >
                      Get the app
                    </motion.button>
                </div>
                <img src={light_logo} className='mt-20'   alt="" />
        </motion.div>
        <motion.div
            className="absolute rounded-t-4xl bottom-0 w-full bg-gray-300 flex items-start justify-center z-20"
            style={{ height: section2Height, opacity: section2Opacity }}
            >
            <div className='flex mt-20 flex-col items-start'>
                    <h1 className='text-4xl text-black font-medium '>TallyTap</h1>
                    <p className='mt-10 text-black'>Fiscalized mobile POS</p>
                    <p className='mt-5 text-gray-500 w-200'>This is a platform where skilled labour in the informal sector meets potential clients with ease.
                      this is a solution brought about to fill be gap in job seeking when it comes to informal but important jobs
                    </p>
                    <motion.button className='mt-20 bg-white text-black w-40 h-10 rounded-full'
                      whileHover={{
                        scale: 1.05
                      }}
                    >
                      Get the app
                    </motion.button>
                </div>
                <img src={tallyTapLogo} className='' width={350}   alt="" />
        </motion.div>
        <motion.div
            className="absolute rounded-t-4xl bottom-0 w-full px-20  bg-black text-white flex   items-start justify-between z-10"
            style={{ height: section3Height, opacity: section3Opacity }}
            >
                <div className='flex mt-20 flex-col items-start'>
                    <h1 className='text-4xl font-medium '>Hirelane</h1>
                    <p className='mt-10'>Job seekers platform</p>
                    <p className='mt-5 text-gray-500 w-200'>This is a platform where skilled labour in the informal sector meets potential clients with ease.
                      this is a solution brought about to fill be gap in job seeking when it comes to informal but important jobs
                    </p>
                    <motion.button className='mt-20 bg-white text-black w-40 h-10 rounded-full'
                      whileHover={{
                        scale: 1.05
                      }}
                    >
                      Get the app
                    </motion.button>
                </div>
                <img src={light_logo} className='mt-20'   alt="" />
        </motion.div>
      </div>
    </section>
  );
}

export default Projects