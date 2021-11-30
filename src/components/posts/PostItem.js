import classes from "./PostItem.module.css";
import Post from "../elements/Post";
import LikeButton from "../elements/LikeButton";
import EditableDiv from '../elements/EditableDiv';

function PostItem(props) {
  return (
    <Post>
      <div className={classes.containerHeader}>
        <span className={classes.author}>{props.author}</span>
        <span>{props.likes}</span>
        <LikeButton id={props.id} />
      </div>
      <div className={classes.containerContent}>
        <EditableDiv id="edit" data={props}/>
        <span className={classes.date}>{props.date}</span>
      </div>
    </Post>
  );
}

export default PostItem;
