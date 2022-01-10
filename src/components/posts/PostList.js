import PostItem from "./PostItem";
import classes from "./PostList.module.css";

function PostList(props) {
  return (
    <ul className={classes.list}>
      {props.posts.map((post) => (
        <PostItem
          id={post.id}
          author={post.author}
          date={post.date}
          content={post.content}
          liked={post.likes}
        />
      ))}
    </ul>
  );
}

export default PostList;
