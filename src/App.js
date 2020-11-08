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
  const KEY = "AIzaSyCZa0nWUFbK1wvzcoTnrsQ6E0QEwjg06ng";
  const [pageToken, setPageToken] = useState("CAoQAA");
  const [videos, setVideos] = useState([]);
  const [term, setTerm] = useState("");
  const [show, setShow] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

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
  };

  const modalremovalHandler = () => {
    setShow(false);
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const spinner = <Spinner></Spinner>;
  return (
    <div className={classes.OuterDiv}>
      <Modal
        style={{ borderRadius: 100 }}
        show={show}
        modalClosed={modalremovalHandler}
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
      <div style={{ marginLeft: "34px", marginTop: "3px" }}>
        <img
          onClick={ModalShow}
          src={YouTube}
          alt="search"
          className={classes.Img}
        ></img>
      </div>
      <VideoDetail video={selectedVideo} />
    </div>
  );
};

export default App;
