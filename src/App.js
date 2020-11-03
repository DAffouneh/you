import './App.css';
import {useState,useEffect, version} from 'react';
import Modal from './Modal';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import YouTube from './yyy.png';
const App = () => {
const KEY="AIzaSyAS_wNWe56sv_gmKavD0RM3j8WP8MkPYTE";
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
    <div>
    <div style={{paddingLeft:'55px'}}>
      <Modal  show={show} modalClosed={modalremovalHandler} >
     <SearchBar clickSearchHandeler={searchHandler}></SearchBar>
       <InfiniteScroll
        dataLength={videos.length}
        next={loadMore}
        height={'330px'}
        hasMore={true}
        loader={spinner}
        scrollThreshold={0.9}>
          <div style={{height:'auto', overflow:"visible"}}>
          <VideoList videos={videos}/>  
          </div>

        </InfiniteScroll>
        </Modal>
    </div>
   
    <div>
    <img onClick={ModalShow} src={YouTube} alt="search" style={{
                paddingLeft:'50px',
                height:'50px',
                width:'50px'
            }}>
              
            </img>
    </div>
    </div>



  

  );

}

export default App;

