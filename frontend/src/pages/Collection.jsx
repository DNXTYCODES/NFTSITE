import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import { FaSolarPanel, FaBatteryThreeQuarters, FaPlug, FaLightbulb } from 'react-icons/fa';
import { GiSolarPower } from 'react-icons/gi';
import { BsSunFill } from 'react-icons/bs';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');
  const [isLoading, setIsLoading] = useState(true);

  // Solar categories from Add component
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

  const categoryIcons = {
    'Solar Panels': <FaSolarPanel className="text-[var(--primary-neon)]" />,
    'Inverters': <GiSolarPower className="text-[var(--primary-neon)]" />,
    'Batteries': <FaBatteryThreeQuarters className="text-[var(--primary-neon)]" />,
    'Charge Controllers': <FaPlug className="text-[var(--primary-neon)]" />,
    'Solar Kits': <BsSunFill className="text-[var(--primary-neon)]" />,
    'Mounting Systems': <FaSolarPanel className="text-[var(--primary-neon)]" />,
    'Solar Lighting': <FaLightbulb className="text-[var(--primary-neon)]" />,
    'Accessories': <FaPlug className="text-[var(--primary-neon)]" />
  };

  const toggleCategory = (categoryName) => {
    if (category.includes(categoryName)) {
      setCategory(prev => prev.filter(item => item !== categoryName));
    } else {
      setCategory(prev => [...prev, categoryName]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => 
        category.includes(item.category)
      );
    }

    setFilterProducts(productsCopy);
    setIsLoading(false);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts];

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  };

  // Solar loading animation component
  const SolarLoader = () => (
  <div className="flex flex-col justify-center items-center py-16 col-span-full">
    <div className="relative w-20 h-20 mb-4">
      {/* Sun core */}
      <div className="absolute inset-0 rounded-full bg-[var(--primary-neon)] animate-pulse"></div>
      
      {/* Sun rays */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="absolute top-1/2 left-1/2 w-2 h-8 bg-[var(--primary-neon)] rounded-full"
          style={{
            transform: `rotate(${i * 45}deg) translateY(-30px)`,
            transformOrigin: '0 0',
            opacity: 0.7,
            animation: `pulse 1.5s ease-in-out infinite ${i * 0.1}s`
          }}
        ></div>
      ))}
    </div>
    <p className="text-[var(--text-muted)] text-center">
      Loading solar products...<br/>Please wait
    </p>
  </div>
);


  useEffect(() => {
    if (products.length > 0) {
      applyFilter();
    } else {
      setIsLoading(true);
    }
  }, [category, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='py-8 bg-[var(--bg)] transition-colors duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Filter Sidebar */}
          <div className='lg:w-64 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-4 h-fit'>
            <h3 className='text-lg font-bold text-[var(--text)] mb-4 flex items-center gap-2'>
              <span className='text-[var(--primary-neon)]'>Solar</span> Categories
            </h3>
            
            <div className='space-y-3'>
              {solarCategories.map((cat) => (
                <div 
                  key={cat}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${category.includes(cat) ? 'bg-[var(--primary-neon)/10] border border-[var(--primary-neon)]' : 'hover:bg-[var(--bg)]'}`}
                  onClick={() => toggleCategory(cat)}
                >
                  <div className="text-lg">
                    {categoryIcons[cat] || <FaPlug className="text-[var(--primary-neon)]" />}
                  </div>
                  <span className='text-sm text-[var(--text)]'>{cat}</span>
                  <input 
                    type="checkbox" 
                    checked={category.includes(cat)}
                    onChange={() => {}}
                    className="ml-auto h-4 w-4 rounded border-[var(--border)] text-[var(--primary-neon)] focus:ring-[var(--primary-neon)]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className='flex-1'>
            {/* Sort Header */}
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-[var(--text)]'>
                <span className='text-[var(--primary-neon)]'>Solar</span> Products
              </h2>
              
              <select 
                onChange={(e) => setSortType(e.target.value)}
                className='bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[var(--primary-neon)] focus:border-transparent'
              >
                <option value="relavent">Sort by: Relevant</option>
                <option value="low-high">Sort by: Price Low to High</option>
                <option value="high-low">Sort by: Price High to Low</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {isLoading ? (
                <SolarLoader />
              ) : filterProducts.length > 0 ? (
                filterProducts.map((item) => (
                  <ProductItem 
                    key={item._id} 
                    name={item.name} 
                    id={item._id} 
                    price={item.price} 
                    image={item.image} 
                  />
                ))
              ) : (
                <div className='col-span-full text-center py-12 text-[var(--text-muted)]'>
                  No solar products found matching your filters
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
