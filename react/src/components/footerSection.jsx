// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const FooterScaleSection = () => {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
//   const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

//   return (
//     <section ref={sectionRef} className="relative h-[200vh] bg-white">
//       {/* Sticky scaling container */}
//       <motion.div
//         style={{ scale, y }}
//         className="sticky top-0 w-full h-screen bg-blue-700 text-white rounded-4xl flex items-center justify-center z-10"
//       >
//         <h1 className="text-6xl font-bold">Welcome to Our Platform</h1>
//       </motion.div>

//       {/* Static footer content revealed as container scales */}
//       <div className="absolute bottom-0 w-full z-0">
//         <div className="text-center px-4 py-20 bg-white">
//           <h2 className="text-4xl font-semibold text-gray-800">Meet the Team</h2>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FooterScaleSection;

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FooterScaleSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // scroll progresses from start to end
  });

  // Scale and move up
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, - window.innerHeight * 0.15]); // move up more

  return (
    <section ref={sectionRef} className="relative h-[250vh] bg-white">
      {/* Sticky and scaling content */}
      <motion.div
        style={{ scale, y }}
        className="sticky top-0 w-full h-screen rounded-4xl bg-black text-white flex items-center justify-center z-10"
      >
        <div className="flex flex-col items items-center">
            <h1 className="text-6xl">Let's launch your journey</h1>
            <div className="flex mt-10 justify-between gap-30">
                <div className="flex flex-col w-100">
                    <p>We are providing consultations for free. Get advice on customer activation, onboading design, reducing
                        product complexity or growth experiments
                    </p>
                    <p className="mt-20 text-gray-500 text-1xl">CONTACT US</p>
                    <p className="mt-5">collinskurai@gmail.com</p>
                    <p>+263 771472798</p>
                </div>
                <div className="flex flex-col w-100">
                    <input type="text"
                        placeholder="Enter your name"
                        className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-white py-2 placeholder-gray-500"
                    />
                    <input type="text"
                        placeholder="Enter email"
                        className="w-full mt-5 border-b-2 border-gray-400 focus:outline-none focus:border-white py-2 placeholder-gray-500"
                    />
                    <input type="text"
                        placeholder="About your project"
                        className="w-full mt-5 border-b-2 border-gray-400 focus:outline-none focus:border-white py-2 placeholder-gray-500"
                    />
                    <motion.button className='mt-15 bg-white text-black w-40 h-10 rounded-full'
                        whileHover={{
                            scale: 1.05
                        }}
                    >
                        Send message
                    </motion.button>
                </div>
            </div>
        </div>
      </motion.div>

      {/* Footer content appears below once scrolling past sticky section */}
      <div className="relative mt-[130vh]">
        <div className="text-center px-4 py-20 bg-white">
          <h2 className="text-4xl font-semibold text-gray-800">Meet the Team</h2>
        </div>
      </div>
    </section>
  );
};

export default FooterScaleSection;

