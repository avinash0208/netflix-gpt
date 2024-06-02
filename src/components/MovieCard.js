import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-32 h-48 mx-2 hover:scale-y-125">
      <img alt="movie-card" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
