import PostForm from "../components/PostForm";

function CreatePost() {
  function newPostHandler(postData) {
      
  }

  return (
    <div>
      <h1>Create Post</h1>
      <PostForm onNewPost={newPostHandler} />
    </div>
  );
}

export default CreatePost;
