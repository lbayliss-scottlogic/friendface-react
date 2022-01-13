import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import SortDownButton from "./buttons/SortDownButton";
import SortUpButton from "./buttons/SortUpButton";
import classes from "./SortingButtons.module.css";

function SortingButtons(props) {
  
    function sort(sortMethod) {
        console.log("sorting...");
        fetch(`http://localhost:8080/users/sort/${sortMethod}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const posts = [];
          for (const key in data) {
            const post = {
              id: key,
              ...data[key],
            };
            posts.push(post);
          }
          props.setLoadedPosts(posts);
        });
    }
    

  return (
    <div className={classes.layout}>
      <div className={classes.buttonSet}>
        <SortDownButton sort={() => {sort(`${props.sortMethod}Ascending`)}} />
        <span className={classes.attribute}>{props.sortMethod}</span>
        <SortUpButton sort={() => {sort(`${props.sortMethod}Descending`)}} />
      </div>
    </div>
  );
}

export default SortingButtons;
