import React from 'react';
import classes from './VideoItem.module.css';

const VideoItem =({video})=>
{  
let publishTime= video.snippet.publishTime;
let year = publishTime.substring(0,4);
let numberOfYears = 2020-year;
if (numberOfYears==0)
{
    numberOfYears=1;

}

    return (
         <div className={classes.VedioContainer}>
              <img className={classes.Img}  src={video.snippet.thumbnails.medium.url}/>
              <div className={classes.Title}>{video.snippet.channelTitle}</div>
             <div className={classes.Years}> <h6>{numberOfYears} Year ago </h6></div>
        </div>
      
    );
}
export default VideoItem;