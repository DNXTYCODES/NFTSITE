import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { FiTrash2 } from 'react-icons/fi'

const List = ({ token }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', 
        { id }, 
        { headers: { token } }
      )

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] p-6">
      <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-2">
        <span className="text-[var(--primary-neon)]">Solar</span> Product Inventory
      </h2>

      <div className="overflow-x-auto">
        {/* Table Header */}
        <div className="grid grid-cols-[100px_2fr_1fr_1fr_80px] items-center gap-4 px-4 py-3 bg-[var(--bg)] rounded-t-xl text-[var(--text-muted)] text-sm font-semibold">
          <span>Image</span>
          <span>Product Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-center">Action</span>
        </div>

        {/* Product List */}
        <div className="divide-y divide-[var(--border)]">
          {list.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-[100px_2fr_1fr_1fr_80px] items-center gap-4 px-4 py-3 hover:bg-[var(--bg)] transition-colors"
            >
              {/* Product Image */}
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-[var(--border)]">
                <img 
                  className="w-full h-full object-cover" 
                  src={item.image[0]} 
                  alt={item.name} 
                />
              </div>

              {/* Product Name */}
              <p className="text-[var(--text)] font-medium truncate">{item.name}</p>

              {/* Category */}
              <span className="text-sm text-[var(--text-muted)]">{item.category}</span>

              {/* Price */}
              <span className="text-[var(--primary-neon)] font-semibold">
                {currency}{item.price}
              </span>

              {/* Delete Button */}
              <button
                onClick={() => removeProduct(item._id)}
                className="text-[var(--text-muted)] hover:text-red-500 transition-colors flex justify-center w-full"
              >
                <FiTrash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {list.length === 0 && (
        <div className="text-center py-12 text-[var(--text-muted)]">
          No solar products found in inventory
        </div>
      )}
    </div>
  )
}

export default List


























// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { backendUrl, currency } from '../App'
// import { toast } from 'react-toastify'

// const List = ({ token }) => {

//   const [list, setList] = useState([])

//   const fetchList = async () => {
//     try {

//       const response = await axios.get(backendUrl + '/api/product/list')
//       if (response.data.success) {
//         setList(response.data.products.reverse());
//       }
//       else {
//         toast.error(response.data.message)
//       }

//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   const removeProduct = async (id) => {
//     try {

//       const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })

//       if (response.data.success) {
//         toast.success(response.data.message)
//         await fetchList();
//       } else {
//         toast.error(response.data.message)
//       }

//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   useEffect(() => {
//     fetchList()
//   }, [])

//   return (
//     <>
//       <p className='mb-2'>All Products List</p>
//       <div className='flex flex-col gap-2'>

//         {/* ------- List Table Title ---------- */}

//         <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b className='text-center'>Action</b>
//         </div>

//         {/* ------ Product List ------ */}

//         {
//           list.map((item, index) => (
//             <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
//               <img className='w-12' src={item.image[0]} alt="" />
//               <p>{item.name}</p>
//               <p>{item.category}</p>
//               <p>{currency}{item.price}</p>
//               <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
//             </div>
//           ))
//         }

//       </div>
//     </>
//   )
// }

// export default List