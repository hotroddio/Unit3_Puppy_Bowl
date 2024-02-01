import { useNavigate, useParams } from "react-router-dom";
import { useSinglePlayerQuery } from "../api/puppyBowlApi";
import { useEffect, useState } from "react";

function SinglePlayer() {
  const [player, setPlayer] = useState({});
  const { playerinfo } = useParams();
  const navigate = useNavigate();
  console.log(playerinfo);

  const { data, error, isLoading } = useSinglePlayerQuery(playerinfo);
  // const { data, error, isLoading } = await useSinglePlayerQuery();
  // console.log( await useSinglePlayerQuery(id));
  // console.log(data);

  useEffect(() => {
    if (data) {
      setPlayer(data);
    }
  }, [data]);
  console.log(player?.data?.player?.id);

  function handleClick(e) {
    console.log(e.target);
    navigate(`/`);
  }

  // singlePlayer(id)
  // console.log (singlePlayer);
  return (
    <div key={player?.data?.player?.id} className="single-player-card">
      {console.log(player?.data?.player?.name)}
      <img className="player-image" src={`${player?.data?.player?.imageUrl}`} />
      <div className="player-details">
        <h2> {player?.data?.player?.name} </h2>

        <p> Breed: {player?.data?.player?.breed} </p>

        <p> Status: {player?.data?.player?.status} </p>

        <p> Team: {player?.data?.player?.teamId} </p>

        <button name="home" onClick={handleClick}>Home</button>
      </div>
    </div>
  );
}

export default SinglePlayer;
