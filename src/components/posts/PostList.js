import PostItem from "./PostItem";
import classes from './PostList.module.css';

function PostList(props) {
  return (
    <ul className={classes.list}>
      {props.posts.map((post) => (
        <PostItem
          id={post.key}
          author={post.author}
          date={post.date}
          content={post.content}
        />
      ))}
    </ul>
  );
}

export default PostList;
