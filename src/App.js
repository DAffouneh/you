import {useState,useEffect, version} from 'react';
import Modal from './Modal';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import YouTube from './youtube.png';
import classes from './App.module.css';
const App = () => {
const KEY="AIzaSyCrcW78RTPEvZkIHjv83vVbfg44ikhAFgw";
const[pageToken,setPageToken]=useState("CAoQAA");
const[videos,setVideos]=useState([]);
const[term,setTerm]=useState("");
const[show,setShow]=useState(false);
const[more,setMore]=useState(true);


  useEffect ( () => {
   searchHandler(term);
      },[])
    
  
const searchHandler = (termFromSearchBar)=>
{
    console.log("hiiiii")
    console.log(pageToken);
    setTerm(termFromSearchBar);
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&order=viewCount&pageToken=${pageToken}&q=${termFromSearchBar}&type=video&key=${KEY}`)
    .then(res => {
    setPageToken(res.data.nextPageToken);
    setVideos([...videos,...res.data.items])
    console.log(res)
    console.log(pageToken);
  })
  
 
};

const loadMore = ()=>
{
  console.log("bashar")
  setTimeout(()=>{
    searchHandler(term);

  },1500)
 
}

const ModalShow =()=>
{
  setShow(!show)
}

const modalremovalHandler =()=>
{
  setShow(false)

}
const spinner= <Spinner></Spinner>
  return (
    <div className={classes.OuterDiv}> 
    <div className={classes.InnerDiv}>

      <Modal  show={show} modalClosed={modalremovalHandler} >
     <SearchBar clickSearchHandeler={searchHandler}></SearchBar>
       <InfiniteScroll
        dataLength={videos.length}
        next={loadMore}
        height={'270px'}
        hasMore={true}
        loader={spinner}
        scrollThreshold={0.9}
        className={classes.Scroll}
        >
          <VideoList videos={videos}/>  
       

        </InfiniteScroll>
        </Modal>

    </div>
   
    <div style={{marginTop:'30px'}}>
    <img onClick={ModalShow} src={YouTube} alt="search" className={classes.Img}>
              
            </img>
    </div>
    </div>



  

  );

}

export default App;

