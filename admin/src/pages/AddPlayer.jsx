import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { assets } from "../assets/assets";

const AddPlayer = ({ token }) => {

  // Set best seller
  
    //  const [toppicks, setToppicks] = useState(false);

  // Basic Info State
  const [profileImage, setProfileImage] = useState(false);
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [nationality, setNationality] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [position, setPosition] = useState('');
  const [strongerFoot, setStrongerFoot] = useState('');
  const [jerseyNumber, setJerseyNumber] = useState('');

  // Add to AddPlayer component's state:
const [scoutingReport, setScoutingReport] = useState('');
const [matchesPlayed, setMatchesPlayed] = useState(0);
const [goals, setGoals] = useState(0);
const [assists, setAssists] = useState(0);
// ... add other stats fields
  
  // Club/Contract Info
  const [currentClub, setCurrentClub] = useState('');
  const [previousClubs, setPreviousClubs] = useState('');
  const [marketValue, setMarketValue] = useState('');
  const [contractExpiry, setContractExpiry] = useState('');
  
  // Agent Info
  const [agentName, setAgentName] = useState('');
  const [agentContact, setAgentContact] = useState('');
  
  // Skills & Attributes
  const [strengths, setStrengths] = useState('');
  const [weaknesses, setWeaknesses] = useState('');
  const [youtubeEmbed, setYoutubeEmbed] = useState('');
  
  // New Fields State
  const [attributes, setAttributes] = useState({
    technical: {
      finishing: 0,
      longShots: 0,
      crossing: 0,
      dribbling: 0,
      ballControl: 0,
      freeKick: 0,
      penalty: 0,
    },
    physical: {
      acceleration: 0,
      sprintSpeed: 0,
      stamina: 0,
      strength: 0,
      agility: 0,
      jumping: 0,
    },
    mental: {
      vision: 0,
      positioning: 0,
      composure: 0,
      aggression: 0,
      teamwork: 0,
      leadership: 0,
    },
    defensive: {
      tackling: 0,
      interceptions: 0,
      marking: 0,
      standingTackle: 0,
      slidingTackle: 0,
    }
  });
  const [preferredPositions, setPreferredPositions] = useState('');
  const [weakFootRating, setWeakFootRating] = useState(1);
  const [skillMoves, setSkillMoves] = useState(1);
  const [internationalCaps, setInternationalCaps] = useState(0);
  const [socialMedia, setSocialMedia] = useState({ twitter: '', instagram: '' });
  const [accolades, setAccolades] = useState([{ title: '', year: '', competition: '' }]);
  const [videos, setVideos] = useState('');

  // Add new accolade field
  const addAccolade = () => {
    setAccolades([...accolades, { title: '', year: '', competition: '' }]);
  };

  // Update accolade field
  const updateAccolade = (index, field, value) => {
    const updated = [...accolades];
    updated[index][field] = value;
    setAccolades(updated);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Basic Info
      formData.append('name', name);
      formData.append('dateOfBirth', dateOfBirth);
      formData.append('age', age);
      formData.append('nationality', nationality);
      formData.append('jerseyNumber', jerseyNumber);
      formData.append('height', height);
      formData.append('weight', weight);
      formData.append('position', position);
      formData.append('strongerFoot', strongerFoot);

      // set toppicks
      
      // formData.append("toppicks",toppicks)

      // In addPlayer controller, add these to formData processing:
formData.append('scoutingReport', scoutingReport);
formData.append('stats', JSON.stringify({
  matchesPlayed: Number(matchesPlayed),
  goals: Number(goals),
  assists: Number(assists),
  // Add other stats fields
}));
      
      // Club/Contract Info
      formData.append('currentClub', currentClub);
      formData.append('previousClubs', previousClubs);
      formData.append('marketValue', marketValue);
      formData.append('contractExpiry', contractExpiry);
      
      // Agent Info
      formData.append('agentName', agentName);
      formData.append('agentContact', agentContact);
      
      // Skills & Attributes
      formData.append('strengths', strengths);
      formData.append('weaknesses', weaknesses);
      formData.append('youtubeEmbed', youtubeEmbed);
      
      // New Fields
      formData.append('attributes', JSON.stringify(attributes));
      formData.append('preferredPositions', preferredPositions);
      formData.append('weakFootRating', weakFootRating);
      formData.append('skillMoves', skillMoves);
      formData.append('internationalCaps', internationalCaps);
      formData.append('socialMedia', JSON.stringify(socialMedia));
      formData.append('accolades', JSON.stringify(accolades));
      formData.append('videos', videos);

      // Profile Image
      profileImage && formData.append('profileImage', profileImage);

      const response = await axios.post(
        backendUrl + '/api/player/add',
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        // Reset all fields
        setName('');
        setDateOfBirth('');
        setAge('');
        setNationality('');
        setJerseyNumber('');
        setHeight('');
        setWeight('');
        setPosition('');
        setStrongerFoot('');
        setCurrentClub('');
        setPreviousClubs('');
        setMarketValue('');
        setContractExpiry('');
        setAgentName('');
        setAgentContact('');
        setStrengths('');
        setWeaknesses('');
        setYoutubeEmbed('');
        setProfileImage(false);
        setAttributes({
          technical: { finishing: 0, longShots: 0, crossing: 0, dribbling: 0, ballControl: 0, freeKick: 0, penalty: 0 },
          physical: { acceleration: 0, sprintSpeed: 0, stamina: 0, strength: 0, agility: 0, jumping: 0 },
          mental: { vision: 0, positioning: 0, composure: 0, aggression: 0, teamwork: 0, leadership: 0 },
          defensive: { tackling: 0, interceptions: 0, marking: 0, standingTackle: 0, slidingTackle: 0 }
        });
        setPreferredPositions('');
        setWeakFootRating(1);
        setSkillMoves(1);
        setInternationalCaps(0);
        setSocialMedia({ twitter: '', instagram: '' });
        setAccolades([{ title: '', year: '', competition: '' }]);
        setVideos('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const renderAttributeSection = (section, category) => (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">{category}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(attributes[section]).map((attr) => (
          <div key={attr} className="space-y-1">
            <label className="block text-sm font-medium capitalize">
              {attr.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={attributes[section][attr]}
              onChange={(e) => setAttributes({
                ...attributes,
                [section]: {
                  ...attributes[section],
                  [attr]: parseInt(e.target.value)
                }
              })}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-4 p-4 max-w-4xl mx-auto">
      {/* Profile Image */}
      <div className="w-full">
        <label className="block text-sm font-medium mb-2">Profile Image</label>
        <div className="flex items-center gap-4">
          <label htmlFor="profileImage" className="cursor-pointer">
            <img
              className="w-32 h-32 object-cover rounded-lg border-2 border-dashed border-gray-300"
              src={profileImage ? URL.createObjectURL(profileImage) : assets.upload_area}
              alt="Profile preview"
            />
            <input
              type="file"
              id="profileImage"
              onChange={(e) => setProfileImage(e.target.files[0])}
              className="hidden"
              accept="image/*"
            />
          </label>
          {profileImage && (
            <button
              type="button"
              onClick={() => setProfileImage(null)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Remove Image
            </button>
          )}
        </div>
      </div>

      {/* Basic Info Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

<div className="space-y-1">
  <label className="block text-sm font-medium">Market Value ($)</label>
  <input
    type="number"
    value={marketValue}
    onChange={(e) => setMarketValue(e.target.value)}
    className="w-full px-3 py-2 border rounded"
    required
  />
</div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">Nationality</label>
          <input
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

<div className="space-y-1">
  <label className="block text-sm font-medium">Jersey Number</label>
  <input
    type="number"
    value={jerseyNumber}
    onChange={(e) => setJerseyNumber(e.target.value)}
    className="w-full px-3 py-2 border rounded"
    required
  />
</div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
      </div>

      {/* Football Specific Info */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* <div className="space-y-1">
          <label className="block text-sm font-medium">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div> */}

<div className="space-y-1">
  <label className="block text-sm font-medium">Position</label>
  <select
    value={position}
    onChange={(e) => setPosition(e.target.value)}
    className="w-full px-3 py-2 border rounded"
    required
  >
    <option value="">Select Position</option>
    <optgroup label="Forward">
      <option value="Striker (ST)">Striker (ST)</option>
      <option value="Center Forward (CF)">Center Forward (CF)</option>
      <option value="Second Striker (SS)">Second Striker (SS)</option>
      <option value="Left Wing (LW)">Left Wing (LW)</option>
      <option value="Right Wing (RW)">Right Wing (RW)</option>
    </optgroup>
    <optgroup label="Midfielder">
      <option value="Central Midfielder (CM)">Central Midfielder (CM)</option>
      <option value="Defensive Midfielder (CDM)">Defensive Midfielder (CDM)</option>
      <option value="Attacking Midfielder (CAM)">Attacking Midfielder (CAM)</option>
      <option value="Left Midfielder (LM)">Left Midfielder (LM)</option>
      <option value="Right Midfielder (RM)">Right Midfielder (RM)</option>
      <option value="Box-to-Box Midfielder">Box-to-Box Midfielder</option>
    </optgroup>
    <optgroup label="Defender">
      <option value="Center Back (CB)">Center Back (CB)</option>
      <option value="Full Back (FB)">Full Back (FB)</option>
      <option value="Left Back (LB)">Left Back (LB)</option>
      <option value="Right Back (RB)">Right Back (RB)</option>
      <option value="Wing Back (WB)">Wing Back (WB)</option>
      <option value="Sweeper (SW)">Sweeper (SW)</option>
    </optgroup>
    <option value="Goalkeeper (GK)">Goalkeeper (GK)</option>
  </select>
</div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">Stronger Foot</label>
          <select
            value={strongerFoot}
            onChange={(e) => setStrongerFoot(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select Foot</option>
            <option value="Left">Left</option>
            <option value="Right">Right</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">Preferred Positions (comma separated)</label>
          <input
            type="text"
            value={preferredPositions}
            onChange={(e) => setPreferredPositions(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">Current Club</label>
          <input
            type="text"
            value={currentClub}
            onChange={(e) => setCurrentClub(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      </div>

      {/* Attributes Section */}
      <div className="w-full space-y-6">
        <h2 className="text-xl font-bold mt-6 mb-4">Player Attributes</h2>
        
        {renderAttributeSection('technical', 'Technical Skills')}
        {renderAttributeSection('physical', 'Physical Attributes')}
        {renderAttributeSection('mental', 'Mental Attributes')}
        {renderAttributeSection('defensive', 'Defensive Skills')}
      </div>

      {/* Ratings Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium">Weak Foot Rating</label>
          <select
            value={weakFootRating}
            onChange={(e) => setWeakFootRating(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num} Stars</option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">Skill Moves</label>
          <select
            value={skillMoves}
            onChange={(e) => setSkillMoves(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num} Stars</option>
            ))}
          </select>
        </div>
      </div>

      {/* Accolades Section */}
      <div className="w-full space-y-4">
        <h2 className="text-xl font-bold mt-6 mb-4">Career Achievements</h2>
        {accolades.map((accolade, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Title"
              value={accolade.title}
              onChange={(e) => updateAccolade(index, 'title', e.target.value)}
              className="px-3 py-2 border rounded"
            />
            <input
              type="number"
              placeholder="Year"
              value={accolade.year}
              onChange={(e) => updateAccolade(index, 'year', e.target.value)}
              className="px-3 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Competition"
              value={accolade.competition}
              onChange={(e) => updateAccolade(index, 'competition', e.target.value)}
              className="px-3 py-2 border rounded"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addAccolade}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Achievement
        </button>
      </div>

      {/* Add these to your form JSX */}

{/* Contract Expiry */}
<div className="space-y-1">
  <label className="block text-sm font-medium">Contract Expiry</label>
  <input
    type="date"
    value={contractExpiry}
    onChange={(e) => setContractExpiry(e.target.value)}
    className="w-full px-3 py-2 border rounded"
  />
</div>

{/* Agent Info */}
<div className="space-y-1">
  <label className="block text-sm font-medium">Agent Name</label>
  <input
    type="text"
    value={agentName}
    onChange={(e) => setAgentName(e.target.value)}
    className="w-full px-3 py-2 border rounded"
  />
</div>

<div className="space-y-1">
  <label className="block text-sm font-medium">Agent Contact</label>
  <input
    type="text"
    value={agentContact}
    onChange={(e) => setAgentContact(e.target.value)}
    className="w-full px-3 py-2 border rounded"
  />
</div>

{/* Social Media */}
<div className="space-y-1">
  <label className="block text-sm font-medium">Twitter Handle</label>
  <input
    type="text"
    value={socialMedia.twitter}
    onChange={(e) => setSocialMedia({...socialMedia, twitter: e.target.value})}
    className="w-full px-3 py-2 border rounded"
  />
</div>

<div className="space-y-1">
  <label className="block text-sm font-medium">Instagram Handle</label>
  <input
    type="text"
    value={socialMedia.instagram}
    onChange={(e) => setSocialMedia({...socialMedia, instagram: e.target.value})}
    className="w-full px-3 py-2 border rounded"
  />
</div>

{/* International Caps */}
<div className="space-y-1">
  <label className="block text-sm font-medium">International Caps</label>
  <input
    type="number"
    value={internationalCaps}
    onChange={(e) => setInternationalCaps(e.target.value)}
    className="w-full px-3 py-2 border rounded"
  />
</div>

{/* Scouting Report */}
<div className="space-y-1">
  <label className="block text-sm font-medium">Scouting Report</label>
  <textarea
    value={scoutingReport}
    onChange={(e) => setScoutingReport(e.target.value)}
    className="w-full px-3 py-2 border rounded h-32"
  />
</div>

{/* Stats Section */}
<div className="w-full space-y-4">
  <h2 className="text-xl font-bold">Performance Stats</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div className="space-y-1">
      <label className="block text-sm font-medium">Matches Played</label>
      <input
        type="number"
        value={matchesPlayed}
        onChange={(e) => setMatchesPlayed(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
    <div className="space-y-1">
      <label className="block text-sm font-medium">Goals</label>
      <input
        type="number"
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
    <div className="space-y-1">
      <label className="block text-sm font-medium">Assists</label>
      <input
        type="number"
        value={assists}
        onChange={(e) => setAssists(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
  </div>
</div>


      {/* Strengths */}
       <div className="w-full">
         <p className="mb-2">Strengths</p>
         <textarea
           onChange={(e) => setStrengths(e.target.value)}
           value={strengths}
           className="w-full px-3 py-2 border"
           rows="3"
         />
       </div>
      {/* Weaknesses */}
       <div className="w-full">
         <p className="mb-2">Weaknesses</p>
         <textarea
           onChange={(e) => setWeaknesses(e.target.value)}
        className="w-full px-3 py-2 border"
           rows="3"
        />
       </div>


      {/* YouTube Embed */}
      <div className="w-full">
        <p className="mb-2">YouTube Embed Link</p>
        <input
          onChange={(e) => setYoutubeEmbed(e.target.value)}
          value={youtubeEmbed}
          className="w-full px-3 py-2 border"
          type="text"
        />
      </div>

      
      {/* <div className='flex gap-2 mt-2'>
          <input onChange={() => setToppicks(prev => !prev)} checked={toppicks} type="checkbox" id='toppicks' />
          <label className='cursor-pointer' htmlFor="toppicks">Add to toppicks</label>
        </div> */}

        {/* Uncomment and fix topPicks in form */}



{/* <div className='flex gap-2 mt-2'>
  <input 
    onChange={() => setToppicks(prev => !prev)} 
    checked={toppicks} 
    type="checkbox" 
    id='toppicks' 
  />
  <label className='cursor-pointer' htmlFor="toppicks">
    Add to top picks
  </label>
</div> */}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 mt-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Add Player
      </button>
    </form>
  );
};

export default AddPlayer;