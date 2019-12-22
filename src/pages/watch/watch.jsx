import React, { Fragment, useState } from "react";
import VideoArea from "../../components/video.area/video.area";
import VideoList from "../../components/video.list/video.list";
import CaptureToggle from "../../components/captureToggle/captureToggle";

const Watch = props => {
  const [currentVideo, setCurrentVideo] = useState(props.videos[0]);

  return (
    <Fragment>
      <VideoArea video={currentVideo} />
      <VideoList videos={props.videos} handleSelectVideo={setCurrentVideo} />
    </Fragment>
  );
};

export default Watch;
