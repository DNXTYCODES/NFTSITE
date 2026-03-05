import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'; // Make sure to import your assets

const PlayerItem = ({ id, profileImage, name, position, nationality, currentClub }) => {
  return (
    <Link 
      to={`/player/${id}`} 
      onClick={() => window.scrollTo(0, 0)}
      className="block group text-goldenrod hover:text-goldenrod-dark transition-colors"
    >
      <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <img 
          className="w-full h-60 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
          // src={profileImage || assets.defaultProfileImage}
          src={profileImage}
          alt={`${name} profile`}
          onError={(e) => {
            e.target.src = assets.defaultProfileImage;
          }}
        />
        
        <div className="p-4 bg-white">
          <h3 className="bold text-lg font-semibold text-black truncate">{name}</h3>
          <div className="mt-2 space-y-1">
            <p className="text-sm font-medium text-gray-600">{position}</p>
            <p className="text-sm text-gray-500">{nationality}</p>
            <p className={`text-sm font-medium ${
              currentClub ? 'text-green-600' : 'text-red-600'
            }`}>
              {currentClub || 'Free Agent'}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlayerItem;











// import React from 'react';
// import { Link } from 'react-router-dom';

// const PlayerItem = ({ id, profileImage, name, position }) => {
//   return (
//     <Link onClick={() => scrollTo(0, 0)} className='text-goldenrod cursor-pointer' to={`/player/${id}`}>
//       <div className='overflow-hidden'>
//         {/* <img className='rounded-xl hover:scale-110 transition ease-in-out aspect-square object-cover' src={profileImage[0]} alt={name} /> */}
//         <img className='rounded-xl hover:scale-110 transition ease-in-out aspect-square object-cover' src={profileImage} alt={name} />
//       </div>
//       <p className='pt-3 pb-1 text-sm text-black prata-regular bg-white'>{name}</p>
//       <p className='text-sm font-medium bg-white text-black'>{position}</p>
//     </Link>
//   );
// };

// export default PlayerItem;
