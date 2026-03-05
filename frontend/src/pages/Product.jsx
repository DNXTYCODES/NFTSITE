import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col-reverse gap-4 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto sm:w-32 gap-2">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-24 h-24 sm:w-full sm:h-32 object-contain border p-2 rounded-lg cursor-pointer hover:border-green-500 transition-colors"
                alt="Tech product thumbnail"
              />
            ))}
          </div>
          <div className="w-full sm:w-[calc(100%-8rem)]">
            <img 
              className="w-full h-96 object-contain bg-gray-50 p-8 rounded-xl border" 
              src={image} 
              alt={productData.name} 
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{productData.name}</h1>
          
          <div className="flex items-center gap-2 text-lg">
            <span className="text-green-600 font-bold">{currency}{productData.price.toFixed(2)}</span>
            {productData.originalPrice && (
              <span className="text-gray-400 line-through">{currency}{productData.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed">
            {productData.description.split(',').map((line, index) => (
              <React.Fragment key={index}>
                {line.trim()}
                <br />
              </React.Fragment>
            ))}
          </p>

          <button
            // onClick={() => addToCart(productData._id)}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            <a href="https://wa.me/2348134553751">
            BUY
            </a>
          </button>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              <span>1-2 Year Manufacturer Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              <span>Free Technical Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              <span>14-Day Return Policy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Shipping & Delivery</h3>
          <div className="space-y-2 text-gray-600">
            <p>• Lagos: 1-2 business days (₦5,000)</p>
            <p>• Other States: 3-5 business days (₦15,000)</p>
            <p>• Express Delivery Available (+₦10,000)</p>
            <p>• Free In-Store Pickup</p>
          </div>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Support & Services</h3>
          <div className="space-y-2 text-gray-600">
            <p>• Free Device Setup Guide</p>
            <p>• Extended Warranty Options</p>
            <p>• Data Transfer Assistance</p>
            <p>• 24/7 Technical Support</p>
          </div>
        </div>
      </div>

      <RelatedProducts 
        category={productData.category} 
        currentProductId={productData._id} 
      />
    </div>
  ) : (
    <div className="text-center py-24">
      <p className="text-gray-500">Loading product details...</p>
    </div>
  );
};

export default Product;