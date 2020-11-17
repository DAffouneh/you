import React from "react";
import classes from "./VideoDetail.module.css";
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <iframe
        className={classes.Frame}
        src={videoSrc}
        allowFullScreen
        title="Video player"
      />
    </div>
  );
};

export default VideoDetail;
