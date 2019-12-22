import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./dashboard.css";
import Insights from "../insights/insights";
import VideoCardDash from "../../components/video.card.dash/video.card.dash";

const Dashboard = props => {
  // const [videoUrl, setVideoUrl] = useState(null);

  const [viewInsight, setViewInsight] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  return (
    <div className="dashboard">
      {videoUrl ? (
        <Insights videoUrl={videoUrl} />
      ) : (
        <div className="video-card-list">
          {props.videos.map(video => {
            return (
              <div className="card-dash">
                <VideoCardDash
                  title={video.title}
                  subtitle={video.subtitle}
                  thumbnail={video.thumbnail}
                  url={video.url}
                  handleClick={() => setVideoUrl(video.url)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
