import React from "react";

const VideoTitle = ({ title, overview }) => {
  const changeOverView = (overview) => {
    let maxLength = 200;
    let truncatedStr =
    overview.length > maxLength ? overview.substring(0, maxLength) + "..." : overview;
    return truncatedStr;
  };
  return (
    <div className="w-screen aspect-video pt-[10%] px-28 absolute text-white bg-black bg-opacity-20">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 w-1/3 text-lg">{changeOverView(overview)}</p>
      <div className="">
        <button className="bg-white p-4 text-xl text-black px-12 rounded-md hover:bg-opacity-0">
          ▶️ Play
        </button>
        <button className="bg-gray-500 p-4 text-xl text-white px-12 rounded-md mx-6 bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
