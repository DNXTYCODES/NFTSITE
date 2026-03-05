import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { assets } from '../assets/assets';
import RelatedPlayers from '../components/RelatedPlayers';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// Updated Player component with error handling
const Player = () => {
  const { playerId } = useParams();
  const { players } = useContext(ShopContext);
  const [playerData, setPlayerData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const foundPlayer = players.find(player => player._id === playerId);
    if (foundPlayer) {
      // Ensure attributes exist with default values
      const safePlayer = {
        ...foundPlayer,
        attributes: {
          technical: foundPlayer.attributes?.technical || {},
          physical: foundPlayer.attributes?.physical || {},
          mental: foundPlayer.attributes?.mental || {},
          defensive: foundPlayer.attributes?.defensive || {}
        }
      };
      setPlayerData(safePlayer);
    }
  }, [playerId, players]);

  if (!playerData) return <div className="min-h-screen bg-gray-50"></div>;

  // Safe radar data creation
  const radarData = {
    labels: ['Acceleration', 'Sprint Speed', 'Finishing', 'Dribbling', 'Vision', 'Tackling'],
    datasets: [{
      label: 'Attributes',
      data: [
        playerData.attributes.physical?.acceleration || 0,
        playerData.attributes.physical?.sprintSpeed || 0,
        playerData.attributes.technical?.finishing || 0,
        playerData.attributes.technical?.dribbling || 0,
        playerData.attributes.mental?.vision || 0,
        playerData.attributes.defensive?.tackling || 0
      ],
      backgroundColor: 'rgba(99, 102, 241, 0.2)',
      borderColor: 'rgba(99, 102, 241, 1)',
      borderWidth: 2,
    }]
  };

  // Rest of the component remains the same...

  const radarOptions = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: { display: false },
        grid: { color: 'rgba(200, 200, 200, 0.2)' },
        pointLabels: { color: '#4b5563' }
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div className="min-h-screen  bg-[#FEF3ED] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Player Header Section */}
        <div className=" rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Image & Radar Chart */}
            <div className="w-full md:w-1/3 space-y-6">
              <img
                className="w-full h-96 object-cover rounded-xl shadow-md"
                src={playerData.profileImage || assets.defaultProfileImage}
                alt={playerData.name}
                onError={(e) => {
                  e.target.src = assets.defaultProfileImage;
                }}
              />
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Key Attributes</h3>
                <div className="h-64">
                  <Radar data={radarData} options={radarOptions} />
                </div>
              </div>
            </div>

            {/* Right Column - Player Info */}
            <div className="w-full md:w-2/3 space-y-6">
              {/* Basic Info */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {playerData.name}
                  <span className="text-2xl text-gray-600 ml-2">#{playerData.jerseyNumber || '00'}</span>
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {playerData.position}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {playerData.nationality}
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {playerData.currentClub || 'Free Agent'}
                  </span>
                </div>
              </div>

              {/* Vital Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Age" value={playerData.age} unit="years" />
                <StatCard label="Height" value={playerData.height} unit="cm" />
                <StatCard label="Weight" value={playerData.weight} unit="kg" />
                <StatCard label="Market Value" value={`$${playerData.marketValue?.toLocaleString() || '-'}`} />
              </div>

              {/* Attributes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AttributeSection 
                  title="Technical Skills"
                  attributes={playerData.attributes.technical}
                  color="blue"
                />
                <AttributeSection
                  title="Physical Attributes"
                  attributes={playerData.attributes.physical}
                  color="green"
                />
                <AttributeSection
                  title="Mental Attributes"
                  attributes={playerData.attributes.mental}
                  color="purple"
                />
                <AttributeSection
                  title="Defensive Skills"
                  attributes={playerData.attributes.defensive}
                  color="red"
                />
              </div>

              {/* Ratings */}
              <div className="grid grid-cols-2 gap-4">
                <RatingCard 
                  title="Weak Foot" 
                  rating={playerData.weakFootRating} 
                  max={5}
                />
                <RatingCard 
                  title="Skill Moves" 
                  rating={playerData.skillMoves} 
                  max={5}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-4 mb-8 border-b border-gray-200">
          {['overview', 'stats', 'scouting', 'media'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 capitalize ${
                activeTab === tab
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          {activeTab === 'overview' && (
            <OverviewTab player={playerData} />
          )}

          {activeTab === 'stats' && (
            <StatsTab stats={playerData.stats} />
          )}

          {activeTab === 'scouting' && (
            <ScoutingTab player={playerData} />
          )}

          {activeTab === 'media' && (
            <MediaTab player={playerData} />
          )}
        </div>

        {/* Accolades Section */}
        {playerData.accolades?.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Career Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {playerData.accolades.map((accolade, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg">{accolade.title}</h3>
                  <p className="text-gray-600">{accolade.competition}</p>
                  <p className="text-sm text-gray-500">{accolade.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <RelatedPlayers position={playerData.position} nationality={playerData.nationality} />
      </div>
    </div>
  );
};

// Helper Components
const StatCard = ({ label, value, unit }) => (
  <div className="bg-gray-50 p-4 rounded-lg text-center">
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-500">
      {label} {unit && <span className="text-xs">({unit})</span>}
    </div>
  </div>
);

const AttributeSection = ({ title, attributes, color }) => (
  <div className={`bg-${color}-50 p-4 rounded-xl`}>
    <h3 className={`text-lg font-semibold mb-4 text-${color}-700`}>{title}</h3>
    <div className="space-y-2">
      {Object.entries(attributes).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between">
          <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
          <div className="flex items-center w-2/3">
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div 
                className={`h-full bg-${color}-500 rounded-full`}
                style={{ width: `${value}%` }}
              />
            </div>
            <span className="text-sm font-medium ml-2 w-12">{value}%</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RatingCard = ({ title, rating, max }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  </div>
);

const Star = ({ filled }) => (
  <svg 
    className={`w-6 h-6 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const OverviewTab = ({ player }) => (
  <div className="space-y-6">
    <Section title="Career History">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoItem label="Current Club" value={player.currentClub || 'Free Agent'} />
        <InfoItem label="Previous Clubs" value={player.previousClubs?.join(', ') || 'None'} />
        <InfoItem label="Debut Date" value={new Date(player.dateAdded).toLocaleDateString()} />
        <InfoItem label="International Caps" value={player.internationalCaps || '0'} />
      </div>
    </Section>

    <Section title="Contract Details">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoItem label="Market Value" value={`$${player.marketValue?.toLocaleString() || '-'}`} />
        <InfoItem 
          label="Contract Expiry" 
          value={player.contractExpiry ? new Date(player.contractExpiry).toLocaleDateString() : 'N/A'} 
        />
      </div>
    </Section>

    {player.socialMedia && (player.socialMedia.twitter || player.socialMedia.instagram) && (
      <Section title="Social Media">
        <div className="flex gap-4">
          {player.socialMedia.twitter && (
            <a 
              href={`https://twitter.com/${player.socialMedia.twitter}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Twitter
            </a>
          )}
          {player.socialMedia.instagram && (
            <a 
              href={`https://instagram.com/${player.socialMedia.instagram}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              Instagram
            </a>
          )}
        </div>
      </Section>
    )}
  </div>
);

const StatsTab = ({ stats }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {stats && Object.entries(stats).map(([key, value]) => (
      <div key={key} className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
        <p className="text-2xl font-bold text-blue-600">{value}</p>
      </div>
    ))}
  </div>
);

const ScoutingTab = ({ player }) => (
  <div className="space-y-6">
    <Section title="Scouting Report">
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
        {player.scoutingReport || 'No scouting report available'}
      </blockquote>
    </Section>

    <Section title="Strengths & Weaknesses">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StrengthWeaknessList title="Strengths" items={player.strengths} color="green" />
        <StrengthWeaknessList title="Weaknesses" items={player.weaknesses} color="red" />
      </div>
    </Section>
  </div>
);

// const MediaTab = ({ player }) => (
//   <div className="space-y-6">
//     {player.youtubeEmbed && (
//       <Section title="Highlights">
//         <div className="aspect-w-16 aspect-h-9">
//           <iframe
//             className="w-full h-full rounded-lg"
//             src={player.youtubeEmbed}
//             title="Player Highlights"
//             allowFullScreen
//           />
//         </div>
//       </Section>
//     )}

//     {player.videos?.length > 0 && (
//       <Section title="Additional Videos">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {player.videos.map((video, index) => (
//             <div key={index} className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
//               <span className="text-gray-500">Video {index + 1}</span>
//             </div>
//           ))}
//         </div>
//       </Section>
//     )}
//   </div>
// );

// ... (keep all other existing code above the same)

const MediaTab = ({ player }) => {
  // Function to extract video ID from any YouTube URL format
  const getVideoId = (url) => {
    const regExp = 
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Function to create proper embed URL
  const createEmbedUrl = (url) => {
    const videoId = getVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  return (
    <div className="space-y-6">
      {player.youtubeEmbed && createEmbedUrl(player.youtubeEmbed) && (
        <Section title="Highlights">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src={createEmbedUrl(player.youtubeEmbed)}
              title="Player Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </Section>
      )}

      {player.videos?.length > 0 && (
        <Section title="Additional Videos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {player.videos.map((video, index) => {
              const embedUrl = createEmbedUrl(video);
              return embedUrl ? (
                <div key={index} className="bg-gray-100 aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={embedUrl}
                    title={`Highlight Video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              ) : (
                <div key={index} className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Invalid Video URL</span>
                </div>
              );
            })}
          </div>
        </Section>
      )}
    </div>
  );
};

// ... (keep all other existing code below the same - Section component, etc.)


const Section = ({ title, children }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
    {children}
  </div>
);

const InfoItem = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-100">
    <span className="text-gray-600">{label}</span>
    <span className="text-gray-900 font-medium">{value}</span>
  </div>
);

const StrengthWeaknessList = ({ title, items, color }) => (
  <div className={`bg-${color}-50 p-4 rounded-xl`}>
    <h3 className={`text-lg font-semibold mb-3 text-${color}-700`}>{title}</h3>
    <ul className="list-disc list-inside space-y-1">
      {items?.map((item, index) => (
        <li key={index} className="text-gray-600">{item}</li>
      ))}
      {(!items || items.length === 0) && <li className="text-gray-400">No information available</li>}
    </ul>
  </div>
);

export default Player;