import classes from "./PostItem.module.css";
import Post from "../elements/Post";
import LikeButton from "../elements/LikeButton";
import EditableBox from '../elements/EditableBox';

function PostItem(props) {
  return (
    <Post>
      <div className={classes.containerHeader}>
        <span className={classes.author}>{props.author}</span>
        <span>{props.likes}</span>
        <LikeButton id={props.id}/>
      </div>
      <div className={classes.containerContent}>
        <EditableBox data={props}/>
        <span className={classes.date}>{props.date.split(' ')[0]}</span>
      </div>
    </Post>
  );
}

export default PostItem;
