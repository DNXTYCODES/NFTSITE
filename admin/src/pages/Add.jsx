import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import { backendUrl } from '../App';

const Add = ({ token }) => {
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null
  });

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Solar Panels',
    bestseller: false
  });

  const solarCategories = [
    'Solar Panels',
    'Inverters',
    'Batteries',
    'Charge Controllers',
    'Solar Kits',
    'Mounting Systems',
    'Solar Lighting',
    'Accessories'
  ];

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    setImages(prev => ({ ...prev, [field]: file }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => form.append(key, value));
      
      Object.entries(images).forEach(([key, value]) => {
        if (value) form.append(key, value);
      });

      const response = await axios.post(`${backendUrl}/api/product/add`, form, {
        headers: { token }
      });

      if (response.data.success) {
        toast.success(response.data.message);
        // Reset form
        setFormData({
          name: '',
          description: '',
          price: '',
          category: 'Solar Panels',
          bestseller: false
        });
        setImages({
          image1: null,
          image2: null,
          image3: null,
          image4: null
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="bg-[var(--card-bg)] p-8 rounded-2xl border border-[var(--border)] max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-[var(--text)] mb-8">Add Solar Product</h2>

      {/* Product Media Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Product Media (One image is Okay)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['image1', 'image2', 'image3', 'image4'].map((field) => (
            <label
              key={field}
              htmlFor={field}
              className="aspect-square border-2 border-dashed border-[var(--border)] rounded-xl hover:border-[var(--primary-neon)] transition-colors cursor-pointer flex items-center justify-center"
            >
              {images[field] ? (
                <img 
                  src={URL.createObjectURL(images[field])} 
                  alt="Preview" 
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="text-center p-4">
                  <img src={assets.upload_area} className="w-12 mx-auto mb-2 opacity-70" alt="Upload" />
                  <span className="text-sm text-[var(--text-muted)]">Click to upload</span>
                </div>
              )}
              <input 
                type="file" 
                id={field} 
                onChange={(e) => handleImageChange(e, field)}
                className="hidden"
                accept="image/*"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[var(--text)] mb-2">Product Name</label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text)] focus:ring-2 focus:ring-[var(--primary-neon)] focus:border-transparent"
            placeholder="E.g., 400W Monocrystalline Solar Panel"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text)] mb-2">Product Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text)] h-32 focus:ring-2 focus:ring-[var(--primary-neon)]"
            placeholder="Describe product specifications, features, and benefits..."
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[var(--text)] mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text)] focus:ring-2 focus:ring-[var(--primary-neon)]"
            >
              {solarCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text)] mb-2">Price (₦)</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text)]"
              placeholder="Enter price in Naira"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <input
            type="checkbox"
            id="bestseller"
            checked={formData.bestseller}
            onChange={(e) => setFormData({ ...formData, bestseller: e.target.checked })}
            className="w-5 h-5 text-[var(--primary-neon)] border-[var(--border)] rounded focus:ring-[var(--primary-neon)]"
          />
          <label htmlFor="bestseller" className="text-sm text-[var(--text)]">
            Mark as Bestseller
          </label>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 bg-[var(--primary-neon)] text-[var(--secondary-dark)] font-semibold rounded-lg hover:shadow-glow transition-all"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default Add;















// import React, { useState } from 'react'
// import {assets} from '../assets/assets'
// import axios from 'axios'
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'

// const Add = ({token}) => {

//   const [image1,setImage1] = useState(false)
//   const [image2,setImage2] = useState(false)
//   const [image3,setImage3] = useState(false)
//   const [image4,setImage4] = useState(false)

//    const [name, setName] = useState("");
//    const [description, setDescription] = useState("");
//    const [price, setPrice] = useState("");
//    const [category, setCategory] = useState("Battery");
//   //  const [subCategory, setSubCategory] = useState("Topwear");
//    const [bestseller, setBestseller] = useState(false);
//   //  const [sizes, setSizes] = useState([]);

//    const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
      
//       const formData = new FormData()

//       formData.append("name",name)
//       formData.append("description",description)
//       formData.append("price",price)
//       formData.append("category",category)
//       // formData.append("subCategory",subCategory)
//       formData.append("bestseller",bestseller)
//       // formData.append("sizes",JSON.stringify(sizes))

//       image1 && formData.append("image1",image1)
//       image2 && formData.append("image2",image2)
//       image3 && formData.append("image3",image3)
//       image4 && formData.append("image4",image4)

//       const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

//       if (response.data.success) {
//         toast.success(response.data.message)
//         setName('')
//         setDescription('')
//         setImage1(false)
//         setImage2(false)
//         setImage3(false)
//         setImage4(false)
//         setPrice('')
//       } else {
//         toast.error(response.data.message)
//       }

//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)
//     }
//    }

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
//         <div>
//           <p className='mb-2'>Upload Image</p>

//           <div className='flex gap-2'>
//             <label htmlFor="image1">
//               <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
//               <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
//             </label>
//             <label htmlFor="image2">
//               <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
//               <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
//             </label>
//             <label htmlFor="image3">
//               <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
//               <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
//             </label>
//             <label htmlFor="image4">
//               <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
//               <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
//             </label>
//           </div>
//         </div>

//         <div className='w-full'>
//           <p className='mb-2'>Product name</p>
//           <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
//         </div>

//         <div className='w-full'>
//           <p className='mb-2'>Product description</p>
//           <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required/>
//         </div>

//         <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

//             <div>
//               <p className='mb-2'>Product category</p>
//               <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
//                   {/* <option value="Men">Men</option> */}
//                   {/* <option value="Women">Women</option> */}
//                   {/* <option value="Kids">Kids</option> */}
                  
//                   <option value="Laptop">Laptop</option>
//                   <option value="Phone">Phone</option>
//                   <option value="Accessoories">Accessoories</option>
//               </select>
//             </div>
// {/* 
//             <div>
//               <p className='mb-2'>Sub category</p>
//               <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
//                   <option value="Topwear">Topwear</option>
//                   <option value="Bottomwear">Bottomwear</option>
//                   <option value="Winterwear">Winterwear</option>
//               </select>
//             </div> */}

//             <div>
//               <p className='mb-2'>Product Price</p>
//               <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25' />
//             </div>

//         </div>
// {/* 
//         <div>
//           <p className='mb-2'>Product Sizes</p>
//           <div className='flex gap-3'>
//             <div onClick={()=>setSizes(prev => prev.includes("S") ? prev.filter( item => item !== "S") : [...prev,"S"])}>
//               <p className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>S</p>
//             </div>
            
//             <div onClick={()=>setSizes(prev => prev.includes("M") ? prev.filter( item => item !== "M") : [...prev,"M"])}>
//               <p className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>M</p>
//             </div>

//             <div onClick={()=>setSizes(prev => prev.includes("L") ? prev.filter( item => item !== "L") : [...prev,"L"])}>
//               <p className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>L</p>
//             </div>

//             <div onClick={()=>setSizes(prev => prev.includes("XL") ? prev.filter( item => item !== "XL") : [...prev,"XL"])}>
//               <p className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>XL</p>
//             </div>

//             <div onClick={()=>setSizes(prev => prev.includes("XXL") ? prev.filter( item => item !== "XXL") : [...prev,"XXL"])}>
//               <p className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>XXL</p>
//             </div>
//           </div>
//         </div> */}

//         <div className='flex gap-2 mt-2'>
//           <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
//           <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
//         </div>

//         <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

//     </form>
//   )
// }

// export default Add