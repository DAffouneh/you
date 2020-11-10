import React from "react";
import classes from "./VideoDetail.module.css";
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }
  console.log(video);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
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
