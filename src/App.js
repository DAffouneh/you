import { useState, useEffect } from "react";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import axios from "axios";
import VideoList from "./VideoList";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import YouTube from "./youtube.png";
import classes from "./App.module.css";
import VideoDetail from "./VideoDetail";
const App = () => {
  const KEY = "AIzaSyDqQSbO1h5yrwt4vvl5C1XKOCweE86t294";
  const [pageToken, setPageToken] = useState("CAoQAA");
  const [videos, setVideos] = useState([]);
  const [term, setTerm] = useState("");
  const [show, setShow] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    searchHandler(term);
  }, []);

  const searchHandler = (termFromSearchBar) => {
    setVideos([]);
    setTerm(termFromSearchBar);
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&order=viewCount&pageToken=${pageToken}&q=${termFromSearchBar}&type=video&key=${KEY}`
      )
      .then((res) => {
        setPageToken(res.data.nextPageToken);
        setVideos([...res.data.items]);
      });
  };

  const loadMore = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&order=viewCount&pageToken=${pageToken}&q=${term}&type=video&key=${KEY}`
      )
      .then((res) => {
        setPageToken(res.data.nextPageToken);
        setVideos([...videos, ...res.data.items]);
      
      });
  };

  const ModalShow = () => {
    setShow(!show);
    setShowVideo(false);
  };

  const modalremovalHandler = () => {
    setShow(false);
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setShowVideo(true);
  };

  const spinner = <Spinner></Spinner>;
  let display = null;
  if (showVideo) {
    display = (
      <div className={classes.VideoDiv}>
        <VideoDetail video={selectedVideo} />
      </div>
    );
  } else {
    display = (
      <Modal
        show={show}
        modalClosed={modalremovalHandler}
      >
        <div>
          <SearchBar
            clickSearchHandeler={searchHandler}
            term={term}
          ></SearchBar>
        </div>

        <InfiniteScroll
          dataLength={videos.length}
          next={loadMore}
          height={"250px"}
          hasMore={true}
          loader={spinner}
          scrollThreshold={0.9}
          className={classes.Scroll}
        >
          <VideoList videos={videos} handleVideoSelect={handleVideoSelect} />
        </InfiniteScroll>
      </Modal>
    );
  }
  return (
    <div className={classes.OuterDiv}>
      {display}
      <div className={classes.ImgDiv}>
        <img
          onClick={ModalShow}
          src={YouTube}
          alt="search"
          className={classes.Img}
        ></img>
      </div>
    </div>
  );
};
export default App;
