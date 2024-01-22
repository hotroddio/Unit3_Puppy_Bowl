import React from "react";
import { useDispatch } from "react-redux";
import {
  useGetPlayersQuery,
  useDeletePlayersMutation,
  useAddPlayersMutation,
  useSinglePlayerQuery,
} from "../api/puppyBowlApi";
import "../index.css";
import { puppyBowlApi } from "../api/puppyBowlApi";
import { useState } from "react";
import { useNavigate} from 'react-router-dom';

// This is function that renders the players on the screen. //
function Players() {
  const { data, error, isLoading } = useGetPlayersQuery();
  const [deletePlayer] = useDeletePlayersMutation();
  const [addPlayers] = useAddPlayersMutation();
  const [addPuppyName, setAddPuppyName] = useState("");
  const [addPuppyBreed, setAddPuppyBreed] = useState("");
  const [addPuppyStatus, setAddPuppyStatus] = useState("bench");
  const [addPuppyPic, setAddPuppyPic] = useState("");
  const [addPuppyTeam, setAddPuppyTeam] = useState("");
  const navigate = useNavigate();

//   const playerList = () => {
//     const [singlePlayer, setSinglePlayer] = useState(null);
//   }

  //   This below "handleSubmit" performs a "POST" function to the API and then Renders the page with the "New Player".
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello", e);
    console.log(addPuppyStatus);
    addPlayers({
      name: addPuppyName,
      breed: addPuppyBreed,
      status: addPuppyStatus,
      imageUrl: addPuppyPic,
    });
  };


  function handleClick(e) {
    console.log(e.target.id);
    navigate(`/${e.target.id}`);
  }
  
  //   The "handleDelete" function performs the "Delete" function to the API using the deletePlayers Mutation and then renders the page with the player removed.
  function handleDelete(e) {
    console.log(e.target.id);
    deletePlayer(e.target.id);
  }
  if (isLoading) {
  }

  if (error) {
  }

  //   This "return" performs the actual Render onto the page using HTML Syntax and props.
  return (
    <div className="players">
      {console.log(data)}
      {/* This "form" provides the text boxes for "input" and provides the "button" to "submit" the form to the API using the addPlayers mutation from the API */}
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={addPuppyName}
            onChange={(e) => setAddPuppyName(e.target.value)}
          />
        </label>
        <label>
          Breed
          <input
            value={addPuppyBreed}
            onChange={(e) => setAddPuppyBreed(e.target.value)}
          />
        </label>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={addPuppyStatus}
          onChange={(e) => setAddPuppyStatus(e.target.value)}
        >
          <option value="field">Field</option>
          <option value="bench">Bench</option>
        </select>
        <label>
          Image URL
          <input
            value={addPuppyPic}
            onChange={(e) => setAddPuppyPic(e.target.value)}
          />
        </label>
        <label>
          Team
          <input
            value={addPuppyTeam}
            onChange={(e) => setAddPuppyTeam(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>

      {/* Map through the data array and generate a div for each player. The below maps through the API looks for the object first and then displays the object if it is available. */}
      {data?.data.players.map((player) => {
        return (
          // Use the player's ID as the key for this div
          <div key={player.id} className="player-card">
            <img className="player-image" src={`${player.imageUrl}`} />
            <div className="player-details">
              <h2> {player.name} </h2>

              <p> Breed: {player.breed} </p>

              <p> Status: {player.status} </p>

              <button name="playerinfo" onClick={handleClick} id={player.id}>View Player Info</button>
              <button name="deleteplayer" onClick={handleDelete} id={player.id}>
                Delete Player
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Export the component so it can be imported and used in other files
export default Players;
