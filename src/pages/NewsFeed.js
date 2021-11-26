import { useState, useEffect } from "react";
import PostList from "../components/PostList";

function NewsFeed() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://friendface-react-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
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
      <PostList posts={loadedPosts} />
    </div>
  );
}

export default NewsFeed;
