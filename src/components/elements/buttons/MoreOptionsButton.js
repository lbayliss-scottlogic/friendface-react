import { useState } from "react";
import classes from "./MoreOptions.module.css";

function MoreOptionsButton(props) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const moreOptions = (
    <div className={classes.moreOptions}>
      <div className={classes.filters}>
        <h3>Filters</h3>
        <input type="radio" value="author" name="filter"></input>Author<br></br>
        <input type="radio" value="content" name="filter"></input>Content<br></br>
        <input type="radio" value="liked" name="filter"></input>Liked<br></br>
        <input type="radio" value="date" name="filter"></input>Date
      </div>
      <div className={classes.sorters}>
        <h3>Sort</h3>
        <input type="radio" value="author" name="sort" onChange={() => {sortChangeHandler("author")}}></input>Author<br></br>
        <input type="radio" value="content" name="sort" onChange={() => {sortChangeHandler("content-length")}}></input>Content length<br></br>
        <input type="radio" value="liked" name="sort" onChange={() => {sortChangeHandler("likes")}}></input>Likes<br></br>
        <input type="radio" value="date" name="sort"onChange={() => {sortChangeHandler("date")}}></input>Date
      </div>

    </div>
  );

  function sortChangeHandler(sortMethod) {
    props.setSortMethod(sortMethod);
  }

  const toggleOptions = showMoreOptions
    ? "Less options << "
    : "More options >> ";

  return (
    <div>
      <a
        className={classes.showMore}
        onClick={() => {
          setShowMoreOptions(!showMoreOptions);
        }}
      >
        {toggleOptions}
      </a>
      {showMoreOptions && moreOptions}
    </div>
  );
}

export default MoreOptionsButton;
