import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            {/* Products Section */}
            <div className='font-bold text-gray-600 text-sm mt-4'>Products</div>
            
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/add">
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Product</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/list">
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>List Products</p>
            </NavLink>

            {/* Solar Packages Section */}
            <div className='font-bold text-gray-600 text-sm mt-6'>Solar Packages</div>
            
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/add-solar-package">
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Package</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/list-solar-packages">
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>List Packages</p>
            </NavLink>

        </div>

    </div>
  )
}

export default Sidebar