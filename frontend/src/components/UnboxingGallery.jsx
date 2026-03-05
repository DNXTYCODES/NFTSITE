import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const UnboxingGallery = () => {
  const mediaContent = [
    {
      type: 'video',
      source: 'https://www.youtube.com/embed/FHBo5RgFnSk',
      caption: 'Gaming pc'
    },
    {
      type: 'video',
      source: 'https://www.youtube.com/embed/VoIFOatUyjs?si',
      caption: 'Gaming Pc'
    },
    {
      type: 'video',
      source: 'https://www.youtube.com/embed/VoIFOatUyjs?si',
      // caption: 'iPhone 15 Pro Unboxing'
      caption: 'Gaming pc'
    },
    // {
    //   type: 'image',
    //   source: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa',
    //   caption: 'Happy MacBook Customer'
    // },
    // {
    //   type: 'image',
    //   source: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33',
    //   caption: 'New Gaming Setup'
    // },
    // {
    //   type: 'image',
    //   source: 'https://images.unsplash.com/photo-1586333237928-8b46e9f4452c',
    //   caption: 'Smart Home Unboxing'
    // }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Real Customer Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what happens when our customers get their hands on the latest tech. 
            Explore genuine unboxing moments and first impressions from our community.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaContent.map((item, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-xl shadow-lg ${
                item.type === 'video' ? 'aspect-video' : 'aspect-square'
              }`}
            >
              {item.type === 'video' ? (
                <>
                  <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaPlayCircle className="text-white text-5xl" />
                  </div>
                  <iframe
                    className="w-full h-full object-cover"
                    src={`${item.source}?modestbranding=1&rel=0`}
                    title={item.caption}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-black/30 z-10 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-medium">{item.caption}</p>
                  </div>
                  <img
                    src={item.source}
                    alt={item.caption}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </>
              )}
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Share Your Unboxing
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default UnboxingGallery;