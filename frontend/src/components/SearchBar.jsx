// import React, { useContext, useEffect, useState } from 'react';
// // import { PlayerContext } from '../context/ShopContext'; // Updated to use PlayerContext
// import { ShopContext } from '../context/ShopContext'; // Updated to use PlayerContext
// import { assets } from '../assets/assets';
// import { useLocation } from 'react-router-dom';

// const SearchBar = () => {
//     // const { search, setSearch, showSearch, setShowSearch } = useContext(PlayerContext); // Using PlayerContext
//     const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext); // Using PlayerContext
//     const [visible, setVisible] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         if (location.pathname.includes('roster')) { // Ensure it works for the player roster page
//             setVisible(true);
//         } else {
//             setVisible(false);
//         }
//     }, [location]);

//     return showSearch && visible ? (
//         <div className='border-t border-b bg-gray-50 text-center'>
//             <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
//                 <input
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     className='flex-1 outline-none bg-inherit text-sm text-black'
//                     type="text"
//                     placeholder='Search Players'
//                 />
//                 <img className='w-4' src={assets.search_icon} alt="Search" />
//             </div>
//             <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="Close" />
//         </div>
//     ) : null;
// };

// export default SearchBar;









import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useTheme } from '../context/ThemeContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { theme } = useTheme();
    const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible,setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }
        else {
            setVisible(false)
        }
    },[location])
    
  return showSearch && visible ? (
    <div className='border-t border-b bg-slate-50 dark:bg-slate-800 text-center transition-colors'>
      <div className='inline-flex items-center justify-center border border-slate-300 dark:border-slate-600 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white dark:bg-slate-700'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400' type="text" placeholder='Search'/>
        <img className='w-4 opacity-60 dark:opacity-40' src={assets.search_icon} alt="" />
      </div>
      <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer opacity-60 dark:opacity-40 hover:opacity-100 transition-opacity' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar
