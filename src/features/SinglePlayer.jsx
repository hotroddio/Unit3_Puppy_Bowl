import { useParams } from "react-router-dom";
import { useSinglePlayerQuery } from "../api/puppyBowlApi";
import { useEffect } from "react";

function SinglePlayer() {
  const [singlePlayer] = useSinglePlayerQuery();
  const {id} = useParams();

  singlePlayer(id) {
  return (
    <div key={player.id} className="player-card">
            <img className="player-image" src={`${player.imageUrl}`} />
            <div className="player-details">
              <h2> {player.name} </h2>

              <p> Breed: {player.breed} </p>

              <p> Status: {player.status} </p>
            </div>
          </div>
      );
    }}
    </div>
}

export default SinglePlayer;
