import React from 'react';
const VideoItem =({video})=>
{  

    return (
         <div style={{display:'flex', flexDirection:'column',flexWrap:'wrap', justifyContent:'space-between' 
        }}>
              <img style={{height:'150px',width:'150px'}} src={video.snippet.thumbnails.medium.url}/>
              <div 
              style={{
              width: '150px',
              fontSize: '12px',
              whiteSpace: 'nowraps', 
              height: '30px', 
              textOverflow: 'ellipsis', 
              border:'1px solid #ffffff'
             }}>{video.snippet.description}</div>
        </div>
      
    );
}
export default VideoItem;