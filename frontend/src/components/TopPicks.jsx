// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import PlayerItem from "./PlayerItem";

// const TopPicks = () => {
//   const { players } = useContext(ShopContext);
//   const [topPicks, setTopPicks] = useState([]);

//   useEffect(() => {
//     // Select players marked as top picks
//     const topPlayers = players.filter((player) => player.topPick);
//     setTopPicks(topPlayers.slice(0, 5));
//   }, [players]);

//   return (
//     <div className="my-10 bg-white">
//       <div className="text-center text-3xl py-8">
//         <Title text1={"TOP"} text2={"PICKS"} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-[black]">
//           Discover our scouting team's top selections, featuring exceptional 
//           talent from around the globe. These players represent the pinnacle of 
//           skill, potential, and performance in modern football.
//         </p>
//         <p className="hidden">Elite Footballers | Rising Stars | Top Transfers</p>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {topPicks.map((player) => (
//           <PlayerItem
//             key={player._id}
//             id={player._id}
//             name={player.name}
//             profileImage={player.profileImage}
//             position={player.position}
//             nationality={player.nationality}
//             currentClub={player.currentClub}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopPicks;












import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import PlayerItem from "./PlayerItem";

const TopPicks = () => {
  const { players } = useContext(ShopContext);
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    // Get top 5 players by market value
    const sortedPlayers = [...players].sort((a, b) => 
      (b.marketValue || 0) - (a.marketValue || 0)
    );
    setTopPicks(sortedPlayers.slice(0, 5));
  }, [players]);

  return (
    <div className="my-10 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* <Title text1={"ELITE"} text2={"TALENTS"} /> */}
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
             ELITE TALENTS
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
            Featured premier athletes showcasing exceptional skill and market value. 
            Discover the most sought-after players in our current roster.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topPicks.map((player) => (
            <PlayerItem
              key={player._id}
              id={player._id}
              profileImage={player.profileImage}
              name={player.name}
              position={player.position}
              nationality={player.nationality}
              currentClub={player.currentClub}
              marketValue={player.marketValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPicks;












// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import PlayerItem from "./PlayerItem";

// const TopPicks = () => {
//   const { players } = useContext(ShopContext);
//   const [topPicks, setTopPicks] = useState([]);

//   useEffect(() => {
//     const topPlayers = players.filter((player) => player.topPick);
//     setTopPicks(topPlayers.slice(0, 5));
//   }, [players]);

//   return (
//     <div className="my-10 bg-white">
//       <div className="text-center text-3xl py-8">
//         <Title text1={"TOP"} text2={"PICKS"} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-black">
//           Explore our top-picked players, selected for their outstanding performance, skill, and impact in the game. Stay ahead with the latest fan favorites and rising stars.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 bg-white">
//         {topPicks.map((player, index) => (
//           <PlayerItem
//             key={index}
//             id={player._id}
//             name={player.name}
//             image={player.image}
//             team={player.team}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopPicks;
