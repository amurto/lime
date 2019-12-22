import React, { useState } from "react";
import VideoPlayer from "react-video-markers";
import Graph from "../../components/graph/graph";

const Insights = props => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);

  console.log(props);

  const handlePlay = () => {
    setIsPlaying(true);
    console.log("played");
  };

  const handlePause = () => {
    setIsPlaying(false);
    console.log("paused");
  };

  const handleVolume = vol => {
    setVolume(vol);
  };

  return (
    <div>
      <VideoPlayer
        url={props.videoUrl}
        isPlaying={isPlaying}
        volume={volume}
        onPlay={handlePlay}
        onPause={handlePause}
        onVolume={handleVolume}
      />
      <Graph />
    </div>
  );
};

export default Insights;
