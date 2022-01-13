import { useRef } from 'react';
import classes from "./FilterBox.module.css";

function FilterBox(props) {

    const filterRef = useRef();

  function filterHandler(filterMethod) {

    const postBody = filterRef.current.value;

    if (filterRef.length == 0) {
        postBody = " ";
    }

    fetch(`http://localhost:8080/users/filter/${filterMethod}`, {
      method: "POST",
      body: postBody,
      headers: {
        "Content-Type": "application/json",
      },
    })
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
    <div>
      <label>Filter {props.feature} by: </label>
      <input
        type="text"
        onChange={() => {
          filterHandler(props.feature);
        }}
        ref={filterRef}
      ></input>
    </div>
  );
}

export default FilterBox;
