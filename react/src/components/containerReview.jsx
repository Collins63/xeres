import React, { useEffect, useState } from 'react';

export default function ScrollRevealContainer() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = document.getElementById('reveal-section');

    const onScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress inside section
      const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scale = 1 - scrollProgress * 0.05;
  const translateY = -scrollProgress * 60;

  return (
    <div
      id="reveal-section"
      className="sticky top-0 h-screen z-10 flex items-center justify-center"
    >
      <div
        className="bg-gray-900 w-[90%] h-[80%] rounded-b-[3rem] p-10 text-white shadow-2xl transition-all duration-300"
        style={{
          transform: `scale(${scale}) translateY(${translateY}px)`,
        }}
      >
        {/* Contact/Form or content here */}
        <h2 className="text-4xl font-bold mb-4">Let’s Talk</h2>
        <p className="mb-8 text-gray-300 max-w-lg">
          We are providing consultations, for free. Get advice on customer activation, onboarding design, reducing product complexity, or growth experiments.
        </p>

        <form className="space-y-4 max-w-md">
          <input className="block w-full p-3 bg-transparent border-b border-gray-500 text-white placeholder-gray-400 outline-none" placeholder="First & Last Name" />
          <input className="block w-full p-3 bg-transparent border-b border-gray-500 text-white placeholder-gray-400 outline-none" placeholder="Email" />
          <textarea className="block w-full p-3 bg-transparent border-b border-gray-500 text-white placeholder-gray-400 outline-none" placeholder="About your project" />
          <button className="mt-6 px-6 py-2 bg-white text-black rounded-full hover:scale-105 transition-transform">→ Send message</button>
        </form>
      </div>
    </div>
  );
}
