import classes from "./PostItem.module.css";
import Post from "../elements/Post";

function PostItem(props) {
  return (
    <Post>
      <div className={classes.containerHeader}>
        <span className={classes.author}>{props.author}</span>
      </div>
      <span className={classes.content}>{props.content}</span>
      <span className={classes.date}>{props.date}</span>
    </Post>
  );
}

export default PostItem;
