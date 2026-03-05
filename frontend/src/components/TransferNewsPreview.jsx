import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TransferNewsPreview = () => {
  const [previewNews, setPreviewNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = "a184699af92e42fdb8f2e7c19b0a15c1";

  const fetchPreviewNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=soccer+transfers&pageSize=3&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      
      setPreviewNews(response.data.articles);
      setError(null);
    } catch (err) {
      if(err.response?.status === 429) {
        setError('Daily news limit reached. Please try again tomorrow.');
      } else {
        setError('Failed to fetch transfer news. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPreviewNews();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-gray-100 rounded-xl h-96 animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded mb-4 text-center">
        {error}
        <button 
          onClick={fetchPreviewNews}
          className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {previewNews.map((article, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={article.urlToImage || 'https://via.placeholder.com/800x400?text=Transfer+News'}
            alt={article.title}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400?text=Transfer+News';
            }}
          />
          <div className="p-4">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              <span>{article.source.name}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-gray-600 line-clamp-3 mb-4">
              {article.description}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More →
            </a>
          </div>
        </div>
      ))}
      
<footer className="text-center text-sm text-gray-500 mt-4">
  News data provided by <a href="https://newsapi.org" target="_blank" rel="noopener">NewsAPI.org</a>
</footer>
    </div>
  );
};

export default TransferNewsPreview;














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const TransferNewsPreview = () => {
//   const [previewNews, setPreviewNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const API_KEY = "a184699af92e42fdb8f2e7c19b0a15c1";

//   const fetchPreviewNews = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `https://newsapi.org/v2/everything?q=soccer+transfers&pageSize=3&sortBy=publishedAt&apiKey=${API_KEY}`
//       );
      
//       setPreviewNews(response.data.articles);
//       setError(null);
//     } catch (err) {
//       if(err.response?.status === 429) {
//         setError('Daily news limit reached. Please try again tomorrow.');
//       } else {
//         setError('Failed to fetch transfer news. Please try again later.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPreviewNews();
//   }, []);

//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//         {[...Array(3)].map((_, index) => (
//           <div key={index} className="bg-gray-100 rounded-xl h-96 animate-pulse"></div>
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded mb-4 text-center">
//         {error}
//         <button 
//           onClick={fetchPreviewNews}
//           className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//       {previewNews.map((article, index) => (
//         <div 
//           key={index}
//           className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//         >
//           <img
//             src={article.urlToImage || 'https://via.placeholder.com/800x400?text=Transfer+News'}
//             alt={article.title}
//             className="w-full h-48 object-cover"
//             onError={(e) => {
//               e.target.src = 'https://via.placeholder.com/800x400?text=Transfer+News';
//             }}
//           />
//           <div className="p-4">
//             <div className="flex justify-between text-sm text-gray-500 mb-2">
//               <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
//               <span>{article.source.name}</span>
//             </div>
//             <h3 className="text-lg font-semibold mb-2 line-clamp-2">
//               {article.title}
//             </h3>
//             <p className="text-gray-600 line-clamp-3 mb-4">
//               {article.description}
//             </p>
//             <a
//               href={article.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:text-blue-800 font-medium"
//             >
//               Read More →
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TransferNewsPreview;

































































// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { Link } from 'react-router-dom';

// // // const TransferNewsPreview = () => {
// // //   const [previewNews, setPreviewNews] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchPreviewNews = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const response = await axios.get('/api/news', { // Changed to proxy endpoint
// // //           params: {
// // //             q: "(transfer OR signing) AND (football OR soccer)",
// // //             pageSize: 3,
// // //             sortBy: "publishedAt"
// // //           }
// // //         });
        
// // //         setPreviewNews(response.data.articles.slice(0, 3));
// // //         setError(null);
// // //       } catch (err) {
// // //         setError('Failed to fetch transfer news. Please try again later.');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchPreviewNews();
// // //   }, []);

// // //   if (loading) {
// // //     return (
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto px-4">
// // //         {[...Array(3)].map((_, index) => (
// // //           <div key={index} className="bg-gray-100 rounded-2xl h-96 animate-pulse"></div>
// // //         ))}
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="bg-red-100 p-4 rounded-lg mb-4 max-w-7xl mx-auto text-center">
// // //         {error}
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
// // //       <div className="max-w-7xl mx-auto">
// // //         <div className="text-center mb-12">
// // //           <h2 className="text-3xl font-bold text-gray-900 mb-4">
// // //             Latest Football Transfers
// // //           </h2>
// // //           <p className="text-xl text-gray-600">
// // //             Stay updated with the biggest moves and rumors in world football
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
// // //           {previewNews.map((article, index) => (
// // //             <div 
// // //               key={index}
// // //               className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
// // //             >
// // //               <img 
// // //                 src={article.urlToImage || 'https://via.placeholder.com/800x600?text=Football+Transfer'}
// // //                 alt={article.title}
// // //                 className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform"
// // //                 onError={(e) => {
// // //                   e.target.src = 'https://via.placeholder.com/800x600?text=Football+Transfer';
// // //                 }}
// // //               />
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
// // //                 <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full self-start mb-2">
// // //                   {article.source.name}
// // //                 </span>
// // //                 <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
// // //                   {article.title}
// // //                 </h3>
// // //                 <p className="text-gray-200 line-clamp-2">
// // //                   {article.description}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div className="text-center">
// // //           <Link 
// // //             to="/sportsnews" // Fixed typo in route
// // //             className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg 
// // //               hover:bg-blue-700 transition-colors text-lg font-semibold"
// // //           >
// // //             View All Transfer Updates →
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default TransferNewsPreview;











// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';

// // const TransferNewsPreview = () => {
// //   const [previewNews, setPreviewNews] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const API_KEY = "a184699af92e42fdb8f2e7c19b0a15c1"; // Replace with your actual key

// //   useEffect(() => {
// //     const fetchPreviewNews = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get(
// //           `https://newsapi.org/v2/everything`, {
// //             params: {
// //               q: "(transfer OR signing) AND (football OR soccer)",
// //               pageSize: 3,
// //               sortBy: "publishedAt",
// //               apiKey: API_KEY
// //             },
// //             headers: {
// //               // NewsAPI requires HTTPS in production
// //               "X-Api-Key": API_KEY
// //             }
// //           }
// //         );
        
// //         setPreviewNews(response.data.articles.slice(0, 3));
// //         setError(null);
// //       } catch (err) {
// //         setError('Failed to fetch transfer news. Please try again later.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchPreviewNews();
// //   }, []);

// //   // Rest of the component remains the same...

// //   if (loading) {
// //     return (
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto px-4">
// //         {[...Array(3)].map((_, index) => (
// //           <div key={index} className="bg-gray-100 rounded-2xl h-96 animate-pulse"></div>
// //         ))}
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="bg-red-100 p-4 rounded-lg mb-4 max-w-7xl mx-auto text-center">
// //         {error}
// //       </div>
// //     );
// //   }

// //   return (
// //     <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl font-bold text-gray-900 mb-4">
// //             Latest Football Transfers
// //           </h2>
// //           <p className="text-xl text-gray-600">
// //             Stay updated with the biggest moves and rumors in world football
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
// //           {previewNews.map((article, index) => (
// //             <div 
// //               key={index}
// //               className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
// //             >
// //               <img 
// //                 src={article.urlToImage || 'https://via.placeholder.com/800x600?text=Football+Transfer'}
// //                 alt={article.title}
// //                 className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform"
// //                 onError={(e) => {
// //                   e.target.src = 'https://via.placeholder.com/800x600?text=Football+Transfer';
// //                 }}
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
// //                 <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full self-start mb-2">
// //                   {article.source.name}
// //                 </span>
// //                 <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
// //                   {article.title}
// //                 </h3>
// //                 <p className="text-gray-200 line-clamp-2">
// //                   {article.description}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="text-center">
// //           <Link 
// //             to="/sporstnews" 
// //             className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg 
// //               hover:bg-blue-700 transition-colors text-lg font-semibold"
// //           >
// //             View All Transfer Updates →
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TransferNewsPreview;

















// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { Link } from 'react-router-dom';

// // // const TransferNewsPreview = () => {
// // //   const [previewNews, setPreviewNews] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const API_KEY = "a184699af92e42fdb8f2e7c19b0a15c1"; // Replace with your actual key

// // //   useEffect(() => {
// // //     const fetchPreviewNews = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const response = await axios.get(
// // //           `https://newsapi.org/v2/everything`, {
// // //             params: {
// // //               q: "(transfer OR signing) AND (football OR soccer)",
// // //               pageSize: 3,
// // //               sortBy: "publishedAt",
// // //               apiKey: API_KEY
// // //             },
// // //             headers: {
// // //               // NewsAPI requires HTTPS in production
// // //               "X-Api-Key": API_KEY
// // //             }
// // //           }
// // //         );
        
// // //         setPreviewNews(response.data.articles.slice(0, 3));
// // //         setError(null);
// // //       } catch (err) {
// // //         setError('Failed to fetch transfer news. Please try again later.');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchPreviewNews();
// // //   }, []);

// // //   // Rest of the component remains the same...

// // //   if (loading) {
// // //     return (
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto px-4">
// // //         {[...Array(3)].map((_, index) => (
// // //           <div key={index} className="bg-gray-100 rounded-2xl h-96 animate-pulse"></div>
// // //         ))}
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="bg-red-100 p-4 rounded-lg mb-4 max-w-7xl mx-auto text-center">
// // //         {error}
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
// // //       <div className="max-w-7xl mx-auto">
// // //         <div className="text-center mb-12">
// // //           <h2 className="text-3xl font-bold text-gray-900 mb-4">
// // //             Latest Football Transfers
// // //           </h2>
// // //           <p className="text-xl text-gray-600">
// // //             Stay updated with the biggest moves and rumors in world football
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
// // //           {previewNews.map((article, index) => (
// // //             <div 
// // //               key={index}
// // //               className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
// // //             >
// // //               <img 
// // //                 src={article.urlToImage || 'https://via.placeholder.com/800x600?text=Football+Transfer'}
// // //                 alt={article.title}
// // //                 className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform"
// // //                 onError={(e) => {
// // //                   e.target.src = 'https://via.placeholder.com/800x600?text=Football+Transfer';
// // //                 }}
// // //               />
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
// // //                 <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full self-start mb-2">
// // //                   {article.source.name}
// // //                 </span>
// // //                 <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
// // //                   {article.title}
// // //                 </h3>
// // //                 <p className="text-gray-200 line-clamp-2">
// // //                   {article.description}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div className="text-center">
// // //           <Link 
// // //             to="/sporstnews" 
// // //             className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg 
// // //               hover:bg-blue-700 transition-colors text-lg font-semibold"
// // //           >
// // //             View All Transfer Updates →
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default TransferNewsPreview;