import { useNavigate } from "react-router-dom";

import PostForm from "../components/posts/PostForm";

function CreatePost() {
  const navigate = useNavigate();

  function newPostHandler(postData) {

    console.log(JSON.stringify(postData));

    fetch(
      "http://localhost:8080/users/createUserPost",
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
