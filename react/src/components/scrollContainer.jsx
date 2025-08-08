import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { discussion, serviceDevelopment } from "../assets";
import { FiArchive } from "react-icons/fi";
import { CiBellOn } from "react-icons/ci";
import { FaConciergeBell } from "react-icons/fa";


const contentData = [
  {
    id: 1,
    title: "Discussions with the Client",
    text: "We begin every project with in‑depth consultations to understand your business goals, challenges, and vision. Through collaborative discussions, we identify requirements, define priorities, and ensure that our strategy aligns perfectly with your objectives.",
    image: discussion,
  },
  {
    id: 2,
    title: "Software Development",
    text: "Our engineering team transforms ideas into robust, scalable solutions. Using modern technologies and agile practices, we design, build, and test software that meets your needs while maintaining the highest standards of quality and security.",
    image: serviceDevelopment,
  },
  {
    id: 3,
    title: "Software Deployment",
    text: "We ensure a seamless rollout of your solution into production. Our team handles integration, performance checks, and post‑launch support to guarantee that your software is fully optimized and ready to deliver value from day one.",
    image: serviceDevelopment,
  },
];

const ScrollContainer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);

  // For the progress bar width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressText = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Subscribe to progress text changes
  useMotionValueEvent(progressText, "change", (latest) => {
    setProgressValue(Math.round(latest));
  });

  // Detect active content index
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const section = Math.floor(v * contentData.length);
      setActiveIndex(Math.min(section, contentData.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="relative h-[200vh] " ref={containerRef}>
      {/* Sticky content container */}
      <div className="sticky top-0 h-1/2 flex  items-center rounded-4xl justify-center bg-gray-300 overflow-hidden">
        <div className="absolute translate-x-1/2  top-0 mt-10 rounded-4xl left-0 w-1/2 h-5 bg-gray-200">
          <motion.div
            className="h-full rounded-4xl bg-black"
            style={{ width: progressWidth }}
          />
          <div className="absolute top-5 right-4 text-sm text-black font-semibold">
            {progressValue}%
          </div>
        </div>

        <div className="flex w-full max-w-5xl mt-10 justify-between px-1">
          <motion.div
            key={activeIndex + "-text"}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-1/2"
          >
            <h2 className="text-3xl font-medium text-black mb-4">{contentData[activeIndex].title}</h2>
            <p className="text-lg mt-10 w-100 text-gray-400">{contentData[activeIndex].text}</p>
            <button className='text-white flex mt-25 gap-1.5 items-center bg-black rounded-full p-2'>
              <FaConciergeBell />
              <p>Contact us</p>             
            </button>
          </motion.div>
          <motion.img
            key={activeIndex + "-image"}
            src={contentData[activeIndex].image}
            alt=""
            className="w-1/2 bg-white rounded-4xl h-auto object-contain"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
};

export default ScrollContainer;
