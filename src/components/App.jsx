import React, { useState } from "react";
import MusicTable from "./MusicTable/MusicTable";
import SongForm from "./SongForm/SongForm";
import FilterBar from "./FilterBar/FilterBar";
import "./App.css";
import axios from "axios";
// import EditSong from "./EditSong";

const App = (props) => {
  const [songs, setSongs] = useState([]);
  const [toggle, setToggle] = useState();


  const getAllSongs = async() =>{
    let response = await axios.get('http://127.0.0.1:8000/music/')
    setSongs(response.data)
  }

  const getSongs = (songs) => {
    setSongs(songs);
  };
  const newSong = () => {
    setToggle(!toggle);
  };

  return (
    <div className="main">
      <h1> Music Library </h1>
      <SongForm getSongs={getSongs} newSong={newSong} />
      <p/>
      <FilterBar songs={songs} getAllSongs={getAllSongs} />
      <MusicTable toggle={toggle} songs={songs} getAllSongs={getAllSongs} />
    </div>
  );
};
export default App;
