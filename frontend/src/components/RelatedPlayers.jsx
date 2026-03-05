import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import PlayerItem from './PlayerItem';

const RelatedPlayers = ({ position, nationality }) => {
    const { players } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (players.length > 0) {
            let playersCopy = players.slice();
            playersCopy = playersCopy.filter((item) => position === item.position);
            playersCopy = playersCopy.filter((item) => nationality === item.nationality);
            setRelated(playersCopy.slice(0, 5));
        }
    }, [players]);

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PLAYERS'} />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.map((item, index) => (
                    <PlayerItem key={index} id={item._id} name={item.name} profileImage={item.profileImage} position={item.position} />
                ))}
            </div>
        </div>
    );
};

export default RelatedPlayers;
