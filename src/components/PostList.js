import PostItem from "./PostItem";

function PostList(props) {
  return (
    <ul>
      {props.posts.map((post) => (
        <PostItem author={post.author} />
      ))}
    </ul>
  );
}

export default PostList;
