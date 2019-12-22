import React from "react";
import VideoCard from "../video.card/video.card";
import "./video.list.css";

const VideoList = props => {
  return (
    <div className="video-card-list">
      {props.videos.map(videoEl => {
        return (
          <div>
            <VideoCard
              title={videoEl.title}
              subtitle={videoEl.subtitle}
              thumbnail={videoEl.thumbnail}
              onClick={() => props.handleSelectVideo(videoEl.url)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
