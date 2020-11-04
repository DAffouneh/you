import React from 'react';
import VideoItem from './VideoItem'
const VideoList = ({videos})=>
{
    const videoItems= videos.map((video)=>{

        return<div key={video.id.videoId}><VideoItem video={video}/></div> 
    });
    return (
        <div style={{display:'block'}}>
            <div  style={{display:'flex',flexDirection:'row',flexWrap:'wrap', justifyContent:'space-between' }}>
            {videoItems}
        </div>
        </div>
        
    );
    
}
export default VideoList;