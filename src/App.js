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
  const KEY = "AIzaSyCW6VcFoF5IRQ-aYB97l-Dw6k5kpKc0X54";
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
    // console.log("hiiiii");
    setTerm(termFromSearchBar);
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&order=viewCount&pageToken=${pageToken}&q=${termFromSearchBar}&type=video&key=${KEY}`
      )
      .then((res) => {
        setPageToken(res.data.nextPageToken);
        setVideos([...videos, ...res.data.items]);
        // console.log(res);
        //  console.log(pageToken);
      });
  };

  const loadMore = () => {
    setTimeout(() => {
      searchHandler(term);
    }, 1500);
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
      <div style={{ marginLeft: "64px", marginBottom: "20px" }}>
        <VideoDetail video={selectedVideo} />
      </div>
    );
  } else {
    display = (
      <Modal
        style={{ borderRadius: 100 }}
        show={show}
        modalClosed={modalremovalHandler}
        video={selectedVideo}
      >
        <SearchBar clickSearchHandeler={searchHandler}></SearchBar>
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

      <div style={{ marginLeft: "34px", marginTop: "3px" }}>
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
