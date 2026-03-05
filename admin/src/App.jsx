import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import AddSolarPackage from './pages/AddSolarPackage'
import ListSolarPackages from './pages/ListSolarPackages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '₦'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <ToastContainer
        toastClassName="bg-[var(--card-bg)] border border-[var(--border)]"
        bodyClassName="text-[var(--text)]"
        progressClassName="bg-[var(--primary-neon)]"
      />
      
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className="flex flex-col h-screen">
          <Navbar setToken={setToken} />
          
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            
            <main className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[var(--bg)] to-[var(--card-bg)]">
              <div className="max-w-7xl mx-auto">
                <Routes>
                  <Route path="/add" element={<Add token={token} />} />
                  <Route path="/list" element={<List token={token} />} />
                  <Route path="/orders" element={<Orders token={token} />} />
                  <Route path="/add-solar-package" element={<AddSolarPackage token={token} />} />
                  <Route path="/list-solar-packages" element={<ListSolarPackages token={token} />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  )
}

export default App



























// import React, { useEffect, useState } from 'react'
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
// import { Routes, Route } from 'react-router-dom'
// import Add from './pages/Add'
// import List from './pages/List'
// import Orders from './pages/Orders'
// import Login from './components/Login'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import AddPlayer from './pages/AddPlayer'
// import ListPlayer from './pages/ListPlayer'

// export const backendUrl = import.meta.env.VITE_BACKEND_URL
// export const currency = '$'

// const App = () => {

//   const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

//   useEffect(()=>{
//     localStorage.setItem('token',token)
//   },[token])

//   return (
//     <div className='bg-gray-50 min-h-screen'>
//       <ToastContainer />
//       {token === ""
//         ? <Login setToken={setToken} />
//         : <>
//           <Navbar setToken={setToken} />
//           <hr />
//           <div className='flex w-full'>
//             <Sidebar />
//             <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
//               <Routes>
//                 <Route path='/add' element={<Add token={token} />} />
//                 <Route path='/list' element={<List token={token} />} />
//                 <Route path='/orders' element={<Orders token={token} />} />
//                 {/* <Route path='/addplayer' element={<AddPlayer token={token} />} /> */}
//                 {/* <Route path='/listplayers' element={<ListPlayer token={token} />} /> */}
//               </Routes>
//             </div>
//           </div>
//         </>
//       }
//     </div>
//   )
// }

// export default App