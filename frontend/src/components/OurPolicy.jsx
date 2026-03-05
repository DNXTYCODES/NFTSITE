import React from 'react';
import { FaShieldAlt, FaHeadset, FaCreditCard, FaSyncAlt } from 'react-icons/fa';

const OurPolicy = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-4 sm:px-8 bg-gray-50'>
      {/* Warranty Protection */}
      <div className='flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
        <FaShieldAlt className='w-12 h-12 text-blue-600 mb-6' />
        <h3 className='text-xl font-semibold mb-3 text-gray-800'>Warranty Protection</h3>
        <p className='text-gray-600 text-center'>
          All products come with 1-3 year manufacturer warranties and 30-day hassle-free returns
        </p>
      </div>

      {/* 24/7 Tech Support */}
      <div className='flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
        <FaHeadset className='w-12 h-12 text-green-600 mb-6' />
        <h3 className='text-xl font-semibold mb-3 text-gray-800'>24/7 Tech Support</h3>
        <p className='text-gray-600 text-center'>
          Round-the-clock expert assistance for setup, troubleshooting, and technical queries
        </p>
      </div>

      {/* Secure Shopping */}
      <div className='flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
        <FaCreditCard className='w-12 h-12 text-purple-600 mb-6' />
        <h3 className='text-xl font-semibold mb-3 text-gray-800'>Secure Shopping</h3>
        <p className='text-gray-600 text-center'>
          256-bit SSL encryption and certified payment gateways for safe transactions
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;






















// import React from 'react';
// import { FaShieldAlt, FaHeadset, FaBalanceScale, FaChartLine } from 'react-icons/fa';
// import { GiProgression } from 'react-icons/gi';

// const OurPolicy = () => {
//   return (
//     <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-4 sm:px-8 bg-[#FEF3ED]'>
//       {/* Contract Security */}
//       <div className='flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
//         <FaShieldAlt className='w-12 h-12 text-blue-600 mb-6' />
//         <h3 className='text-xl font-semibold mb-3 text-gray-800'>Contract Security</h3>
//         <p className='text-gray-600 text-center'>
//           Guaranteed favorable terms and ironclad agreements with performance-based incentives
//         </p>
//       </div>

//       {/* 24/7 Athlete Support */}
//       <div className='flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
//         <FaHeadset className='w-12 h-12 text-green-600 mb-6' />
//         <h3 className='text-xl font-semibold mb-3 text-gray-800'>24/7 Athlete Support</h3>
//         <p className='text-gray-600 text-center'>
//           Round-the-clock personalized assistance for career decisions and emergency situations
//         </p>
//       </div>

//       {/* Compliance Assurance */}
//       <div className='flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
//         <FaBalanceScale className='w-12 h-12 text-purple-600 mb-6' />
//         <h3 className='text-xl font-semibold mb-3 text-gray-800'>Regulatory Compliance</h3>
//         <p className='text-gray-600 text-center'>
//           Full legal adherence to FIFA regulations and national sports governing body standards
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OurPolicy;










// import React from 'react'
// import { assets } from '../assets/assets'

// const OurPolicy = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 bg-white'>
      
//       <div className=' pt-8 pb-8 border border-black rounded-xl'>
//         <img src={assets.exchange_icon2} className='w-12 m-auto mb-5' alt="" />
//         <p className=' font-semibold '>Easy Exchange Policy</p>
//         <p className=' text-gray-400'>We offer hassle free  exchange policy</p>
//       </div>
//       <div className=' pt-8 pb-8 border border-black rounded-xl'>
//         <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
//         <p className=' font-semibold '>7 Days Return Policy</p>
//         <p className=' text-gray-400'>We provide 7 days free return policy</p>
//       </div>
//       <div className=' pt-8 pb-8 border border-black rounded-xl'>
//         <img src={assets.support_icon2} className='w-12 m-auto mb-5' alt="" />
//         <p className=' font-semibold '>Best customer support</p>
//         <p className=' text-gray-400'>we provide 24/7 customer support</p>
//       </div>

//     </div>
//   )
// }

// export default OurPolicy
