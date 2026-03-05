import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  const slides = [
    { type: 'image', src: assets.handshake }, // Replace with your video path
    { type: 'image', src: assets.africansigning }, // Replace with your first image path
    { type: 'image', src: assets.stadium },  // Replace with your second image path
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col sm:flex-row bg-[#FEF3ED] ">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div>
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-black"></p>
            <p className="font-medium text-sm">DISCOVER RISING TALENT</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            TOP SCOUTED PLAYERS
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">EXCLUSIVE ACCESS</p>
            <p className="w-8 md:w-11 h-[1px] bg-black"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side - Slideshow */}
      <div className="w-full sm:w-1/2 h-[500px] rounded-3xl relative overflow-hidden z-[1] bg-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'video' ? (
              <video
                className="w-full h-full object-cover rounded-3xl"
                src={slide.src}
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                className="w-full h-full object-cover rounded-3xl z-[0] "
                src={slide.src}
                alt="SOCCER SCOUTING"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;












// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border rounded-3xl bg-golden-brown bg-clip-text text-transparent bg-to-b'>
//       {/* Hero Left Side */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-white'></p>
//                     <p className=' font-medium text-sm md:'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-white'></p>
//                 </div>
//             </div>
//       </div>
//       {/* Hero Right Side */}
//       <img className='w-full sm:w-1/2 rounded-3xl' src={assets.b6} alt="" />
//     </div>
//   )
// }

// export default Hero

