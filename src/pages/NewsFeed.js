import { useState, useEffect } from "react";
import PostList from "../components/posts/PostList";
import FilterBox from '../components/elements/FilterBox';
import SortingButtons from "../components/elements/SortingButtons";

function NewsFeed() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

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
      <SortingButtons setLoadedPosts={setLoadedPosts} />
      <FilterBox feature={"content"} setLoadedPosts={setLoadedPosts} />
      <PostList posts={loadedPosts} />
    </div>
  );
}

export default NewsFeed;
