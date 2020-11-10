import { useState } from "react";
import Search from "./search.png";
import classes from "./SearchBar.module.css";
import Cancel from "./cancel.png";
const SearchBar = (props) => {
  const [term, setTerm] = useState(props.term);
  // const [Iterm, setTerm] = useState("Tap to search...");
  const changeHandel = (event) => {
    setTerm(event.target.value);
  };
  const clickHandel = (event) => {
    event.preventDefault();
    props.clickSearchHandeler(term);
  };
  const deleteSearchValue = () => {
    setTerm("");
  };
  let cancel = null;
  console.log(term);
  if (term !== "") {
    cancel = (
      <img
        src={Cancel}
        className={classes.CancelImg}
        onClick={deleteSearchValue}
      ></img>
    );
  }

  let url = false;
  if (`^term?https?:\/\/[-_.!~*'()a-zA-Z0-9;\/?:\@&=+\$,%#]+$`) {
    url = true;
  }
  console.log(url);
  return (
    <div className={classes.Div}>
      <div className={classes.InnerDiv}>
        <img src={Search} className={classes.SearchImg}></img>
        <input
          className={classes.Input}
          type="text"
          placeholder={"Tap to search..."}
          value={term}
          onChange={changeHandel}
        ></input>
        {cancel}
      </div>
      <div>
        <button className={classes.Button} onClick={clickHandel}>
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
