import classes from "./PostItem.module.css";
import Post from "../elements/Post";
import LikeButton from "../elements/LikeButton";

function PostItem(props) {
  return (
    <Post>
      <div className={classes.containerHeader}>
        <span className={classes.author}>{props.author}</span>
        <span>{props.likes}</span>
        <LikeButton id={props.id}/>
      </div>
      <span className={classes.content}>{props.content}</span>
      <span className={classes.date}>{props.date}</span>
    </Post>
  );
}

export default PostItem;
