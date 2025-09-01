import React from "react";
import { Link } from "react-router-dom";


const AudioPlayer = ({ audioSrc, title, artist }) => {
  return (
    <div className="audio-player">
      <audio controls>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="audio-info">
        <h3>{title}</h3>
        <p>
          <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
        </p>
      </div>
    </div>
  );
}


