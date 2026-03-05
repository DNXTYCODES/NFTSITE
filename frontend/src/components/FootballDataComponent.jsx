import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FootballDataComponent = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/football/matches');
        setMatches(response.data.matches.slice(0, 3));
        setError(null);
      } catch (err) {
        handleErrors(err);
      } finally {
        setLoading(false);
      }
    };

    const handleErrors = (err) => {
      if(err.response?.status === 429) {
        setError('Too many requests - limit is 10 per minute');
      } else if(err.response?.status === 403) {
        setError('Invalid API key or access denied');
      } else {
        setError('Failed to fetch match data');
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="p-6  rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Upcoming Matches</h2>
      
      {loading && (
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      )}

      {error && (
        <div className="bg-red-100 p-3 rounded text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-4">
        {matches.map((match) => (
          <div 
            key={match.id}
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 text-right">
                <span className="font-semibold">{match.homeTeam.shortName}</span>
                <img 
                  src={match.homeTeam.crest} 
                  className="h-8 w-8 mx-2 inline-block"
                  alt={match.homeTeam.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/40x40?text=Team';
                  }}
                />
              </div>
              
              <div className="text-center mx-4">
                <span className="text-sm text-gray-500">
                  {new Date(match.utcDate).toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>

              <div className="flex-1 text-left">
                <img 
                  src={match.awayTeam.crest} 
                  className="h-8 w-8 mx-2 inline-block"
                  alt={match.awayTeam.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/40x40?text=Team';
                  }}
                />
                <span className="font-semibold">{match.awayTeam.shortName}</span>
              </div>
            </div>
            
            <div className="mt-2 text-center text-sm text-gray-500">
              {match.competition.name}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-500 text-center">
        Data provided by the Football-Data.org API
      </div>
    </div>
  );
};

export default FootballDataComponent;














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FootballDataComponent = () => {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Get your free API key from https://www.football-data.org/client/register
//   const API_KEY = "5a847edd299d428a9b3c1aa3d96c1764"; 

//   useEffect(() => {
//     const fetchMatches = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.football-data.org/v4/matches',
//           {
//             headers: {
//               'X-Auth-Token': API_KEY
//             }
//           }
//         );
        
//         setMatches(response.data.matches.slice(0, 3)); // Show 3 upcoming matches
//         setError(null);
//       } catch (err) {
//         if(err.response?.status === 429) {
//           setError('Too many requests - limit is 10 per minute');
//         } else {
//           setError('Failed to fetch match data');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMatches();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-50 rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Upcoming Matches</h2>
      
//       {loading && (
//         <div className="animate-pulse space-y-4">
//           {[...Array(3)].map((_, i) => (
//             <div key={i} className="h-16 bg-gray-200 rounded"></div>
//           ))}
//         </div>
//       )}

//       {error && (
//         <div className="bg-red-100 p-3 rounded text-red-700">
//           {error}
//         </div>
//       )}

//       <div className="grid gap-4">
//         {matches.map((match) => (
//           <div 
//             key={match.id}
//             className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
//           >
//             <div className="flex items-center justify-between">
//               <div className="flex-1 text-right">
//                 <span className="font-semibold">{match.homeTeam.shortName}</span>
//                 <img 
//                   src={match.homeTeam.crest} 
//                   className="h-8 w-8 mx-2 inline-block"
//                   alt={match.homeTeam.name}
//                 />
//               </div>
              
//               <div className="text-center mx-4">
//                 <span className="text-sm text-gray-500">
//                   {new Date(match.utcDate).toLocaleTimeString([], { 
//                     hour: '2-digit', 
//                     minute: '2-digit' 
//                   })}
//                 </span>
//               </div>

//               <div className="flex-1 text-left">
//                 <img 
//                   src={match.awayTeam.crest} 
//                   className="h-8 w-8 mx-2 inline-block"
//                   alt={match.awayTeam.name}
//                 />
//                 <span className="font-semibold">{match.awayTeam.shortName}</span>
//               </div>
//             </div>
            
//             <div className="mt-2 text-center text-sm text-gray-500">
//               {match.competition.name}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 text-sm text-gray-500 text-center">
//         Data provided by the Football-Data.org API
//       </div>
//     </div>
//   );
// };

// export default FootballDataComponent;