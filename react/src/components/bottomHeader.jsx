import React from 'react'
import {navigation} from '../constants/index.js'
import { useState } from "react";

const BottomHeader = () => {
  const [activeId, setActiveId] = useState(1); // initially active tab

  return (
    <div className="text-black w-full flex justify-center fixed bottom-10 z-80">
      <nav className="rounded-full p-0.5 bg-gray-800">
        <div className="relative bg-white flex items-center justify-center gap-1 px-1 py-1 rounded-full transition-all duration-300 ease-in-out">
          {navigation.map((item) => (
            <a
              href={item.url}
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`px-5 py-2 text-sm transition-all duration-300 ease-in-out ${
                activeId === item.id
                  ? "bg-black text-white rounded-full"
                  : "text-black"
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BottomHeader;