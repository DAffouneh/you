import React from "react";
import VideoItem from "./VideoItem";
import classes from "./VideoList.module.css";
const VideoList = ({ videos, handleVideoSelect }) => {
  const videoItems = videos.map((video) => {
    return (
      <div key={video.id.videoId}>
        <VideoItem video={video} handleVideoSelect={handleVideoSelect} />
      </div>
    );
  });
  return (
    <div className={classes.OuterDiv}>
      <div className={classes.InnerDiv}>{videoItems}</div>
    </div>
  );
};
export default VideoList;
