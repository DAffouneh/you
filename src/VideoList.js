import React from 'react';
import VideoItem from './VideoItem'
const VideoList = ({videos})=>
{
    const videoItems= videos.map((video)=>{
        return <VideoItem key={video.id.videoId} video={video}/>
    });
    return (
        <div style={{display:'block'}}>
            <div  style={{display:'flex',flexDirection:'row',flexWrap:'wrap', justifyContent:'space-between', }}>
            {videoItems}
        </div>
        </div>
        
    );
    
}
export default VideoList;