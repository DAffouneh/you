import React from "react";
import Spinner from "./Spinner";
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
        style={{ height: "314px", width: "550px", margin: "10px" }}
        src={videoSrc}
        allowFullScreen
        title="Video player"
      />
    </div>
  );
};

export default VideoDetail;
