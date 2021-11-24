import { useNavigate } from "react-router-dom";

import PostForm from "../components/posts/PostForm";

function CreatePost() {
  const navigate = useNavigate();

  function newPostHandler(postData) {
    fetch(
      "https://friendface-react-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
      {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate('/');
    });
  }

  return (
    <div>
      <h1>Create Post</h1>
      <PostForm onNewPost={newPostHandler} />
    </div>
  );
}

export default CreatePost;
