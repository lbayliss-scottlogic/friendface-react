import { useState, useEffect } from "react";
import PostList from "../components/posts/PostList";
import FilterBox from '../components/elements/FilterBox';
import SortingButtons from "../components/elements/SortingButtons";
import MoreOptionsButton from "../components/elements/buttons/MoreOptionsButton";
import classes from './NewsFeed.module.css';

function NewsFeed() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  const [sortMethod, setSortMethod] = useState("author");

  useEffect(() => {
    fetch(
      "http://localhost:8080/users/getUserPosts"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const posts = [];
        for (const key in data) {
            const post = {
                id: key,
                ...data[key]
            }
            posts.push(post);
        }
      setIsLoading(false);
      setLoadedPosts(posts);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>News Feed</h1>
      <div className={classes.filterSort}>
        <FilterBox feature={"content"} setLoadedPosts={setLoadedPosts} />
        <SortingButtons className={classes.sortingButtons} sortMethod={sortMethod} setLoadedPosts={setLoadedPosts} />
      </div>
      <MoreOptionsButton setSortMethod={setSortMethod} />
      <hr></hr>
      <PostList posts={loadedPosts} />
    </div>
  );
}

export default NewsFeed;
