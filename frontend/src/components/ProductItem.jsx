// ProductItem.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <div className="group relative h-full flex flex-col bg-[var(--card-bg)] border border-[var(--border)] rounded-xl hover:border-[var(--primary-neon)] transition-all duration-300 overflow-hidden"
             itemScope itemType="https://schema.org/Product">
            
            {/* Structured data */}
            <link itemProp="url" href={`https://sunpeak.ng/product/${id}`} />
            <meta itemProp="sku" content={id} />
            
            {/* Solar Badge */}
            <div className="absolute top-2 left-2 z-10">
                <span className="bg-[var(--primary-neon)] text-[var(--secondary-dark)] px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wide">
                    Solar
                </span>
            </div>

            <Link 
                onClick={() => window.scrollTo(0, 0)} 
                to={`/product/${id}`}
                className="flex-1 flex flex-col p-3"
                itemProp="url"
            >
                {/* Product Image */}
                <div className="aspect-square bg-[var(--bg)] rounded-lg overflow-hidden mb-3 p-4 flex items-center justify-center"
                     itemProp="image" content={image[0]}>
                    <img
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        src={image[0]}
                        alt={`${name} - Sun Peak Energy Solutions`}
                    />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between p-2">
                    <h3 className="text-sm sm:text-base font-medium text-[var(--text)] truncate mb-2"
                        itemProp="name">
                        {name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                        <p className="text-base sm:text-lg font-bold text-[var(--primary-neon)]"
                           itemProp="offers" itemScope itemType="https://schema.org/Offer">
                            <meta itemProp="priceCurrency" content="NGN" />
                            <span itemProp="price" content={price}>
                                {currency}{price}
                            </span>
                        </p>
                        <a
                            href="https://wa.me/2348134553751"
                            className="flex items-center gap-1 bg-[var(--primary-neon)] text-[var(--secondary-dark)] px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm font-semibold hover:shadow-glow transition-all"
                            aria-label={`Buy ${name} via WhatsApp`}
                        >
                            <FaWhatsapp className="text-sm sm:text-base" />
                            <span className="hidden sm:inline">Buy</span>
                        </a>
                    </div>
                </div>
            </Link>

            {/* Hidden SEO content */}
            <div className="sr-only" itemProp="description">
                Professional-grade {name} available in Nigeria with 5-year warranty. 
                Solar energy solution for Nigerian homes and businesses.
            </div>
        </div>
    );
};

export default ProductItem;