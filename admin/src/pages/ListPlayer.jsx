import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const ListPlayer = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/player/list');
      if (response.data.success) {
        setList(response.data.players.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removePlayer = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/player/remove',
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Players List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_2fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Profile</b>
          <b>Name</b>
          <b className="text-center">Action</b>
        </div>

        {list.map((player, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_2fr] items-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <img className="w-12" src={player.profileImage} alt="" />
            <p>{player.name}</p>
            <p
              onClick={() => removePlayer(player._id)}
              className="text-right cursor-pointer text-lg"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPlayer;
