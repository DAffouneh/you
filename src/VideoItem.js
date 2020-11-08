import React from "react";
import classes from "./VideoItem.module.css";

const VideoItem = ({ video, handleVideoSelect }) => {
  let date = new Date();
  let currentDate = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();
  let display = "";
  let publishTime = video.snippet.publishTime;
  let year = publishTime.substring(0, 4);
  let numberOfYears = currentYear - year;
  let months = publishTime.substring(5, 7);
  let numberOfMounths = currentMonth - months;
  let days = publishTime.substring(8, 10);
  let numberOfDays = currentDate - days;
  if (numberOfYears == 0) {
    if (numberOfMounths == 0) {
      if (numberOfDays == 0) {
        display = <p className={classes.Text}> Today</p>;
      } else {
        if (numberOfDays == 1)
          display = <p className={classes.Text}>{numberOfDays} day ago</p>;
        else display = <p className={classes.Text}>{numberOfDays} days ago</p>;
      }
    } else {
      if (numberOfMounths == 1)
        display = <p className={classes.Text}>{numberOfMounths} month ago</p>;
      else
        display = <p className={classes.Text}>{numberOfMounths} months ago</p>;
    }
  } else {
    if (numberOfYears == 1)
      display = <p className={classes.Text}>{numberOfYears} year ago</p>;
    else display = <p className={classes.Text}>{numberOfYears} years ago</p>;
  }
  return (
    <div
      onClick={() => handleVideoSelect(video)}
      className={classes.VedioContainer}
    >
      <img className={classes.Img} src={video.snippet.thumbnails.medium.url} />
      <div className={classes.Title}>{video.snippet.channelTitle}</div>
      <div className={classes.Year}> {display}</div>
    </div>
  );
};
export default VideoItem;
