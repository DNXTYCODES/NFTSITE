import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets'; // Replace with your image imports

const IntroSection = () => {
  return (
    <section 
      className="relative py-20 px-4 overflow-hidden bg-cover bg-center  bg-[#FEF3ED] "
      style={{ backgroundImage: `url(${assets.stadium})` }} // Add your background image
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-12 h-1  bg-[#ff956f] rounded-full"></span>
                <span className="text-lg font-medium  text-[#ff956f]">Welcome to Benistig Agency</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-100 leading-tight">
                <span className="bg-gradient-to-br from-[#43284b] to-[#ff956f] bg-clip-text text-transparent">
                  Football Excellence
                </span>{' '}
                <p className=' text-[#ff956f]'>
                Through Unified Vision

                </p>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed">
                We are a FIFA-certified agency creating champions through 
                <span className="font-semibold  text-[#ff956f]"> strategic partnerships</span> and 
                <span className="font-semibold  text-[#ff956f]"> family values</span>.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <span className="text-3xl font-bold text-[#ff956f]">15+</span>
                  <p className="text-gray-200 mt-2">Years Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <span className="text-3xl font-bold text-[#ff956f]">200+</span>
                  <p className="text-gray-200 mt-2">Players Signed</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <span className="text-3xl font-bold text-[#ff956f]">€1B+</span>
                  <p className="text-gray-200 mt-2">In Transfers</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 
                    rounded-xl text-lg font-semibold shadow-lg transition-all hover:shadow-xl"
                >
                  Meet Our Team
                </motion.button>
                
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-gray-300 hover:border-purple-300 text-gray-300 
                    hover:text-purple-300 px-8 py-4 rounded-xl text-lg font-semibold 
                    transition-all bg-white/10 backdrop-blur-sm"
                >
                  View Success Stories
                </motion.button> */}
              </div>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <img 
                src={assets.teamPhoto} // Replace with your image path
                alt="Team meeting" 
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl transform group-hover:rotate-1 transition-all duration-300"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-4 border-white rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={assets.playerAction} // Replace with your image path
                  alt="Player in action" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300"
                />
              </div>
              {/* <div className="absolute top-8 -left-8 bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-400">15+</span>
                  <p className="text-gray-200">Years Experience</p>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

