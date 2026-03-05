import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import PlayerItem from "./PlayerItem";

const LatestPlayers = () => {
  const { players } = useContext(ShopContext);
  const [latestPlayers, setLatestPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (players.length > 0) {
      setIsLoading(false);
    }
    setLatestPlayers(players.slice(0, 10));
  }, [players]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"DEVICES"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base mt-4 text-xl text-gray-500">
          Discover Our latest gadgets in Stock
        </p>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center my-20">
          <div className="relative w-24 h-24">
            {/* Football Spinner */}
            <div className="absolute inset-0 rounded-full bg-black animate-spin">
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          <p className="mt-6 text-xl text-gray-600 font-medium">
            Loading Latest Devices...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestPlayers.map((player, index) => (
            <PlayerItem
              key={index}
              id={player._id}
              profileImage={player.profileImage}
              name={player.name}
              currentClub={player.currentClub}
              position={player.position}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestPlayers;





























// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import PlayerItem from "./PlayerItem";

// const LatestPlayers = () => {
//   const { players } = useContext(ShopContext);
//   const [latestPlayers, setLatestPlayers] = useState([]);

//   useEffect(() => {
//     setLatestPlayers(players.slice(0, 10));
//   }, [players]);

//   return (
//     <div className="my-10">
//       <div className="text-center py-8 text-3xl">
//         <Title text1={"LATEST"} text2={"PLAYERS"} />
        
//         {/* <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-[#FEF3ED] ">
//         LATEST PLAYERS
//           </h2> */}
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base mt-4 text-xl text-gray-500">
//           Discover the latest rising stars and top-performing players in the game. Stay updated with new talent and fan favorites making waves.
//         </p>
//       </div>

//       {/* Rendering Players */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {latestPlayers.map((player, index) => (
//           <PlayerItem
//             key={index}
//             id={player._id}
//             profileImage={player.profileImage}
//             name={player.name}
//             currentClub={player.currentClub}
//             position={player.position}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestPlayers;
