import classes from "./LikeButton.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import LikesContext from "../store/Likes";
import { useContext } from "react";

function LikeButton(props) {
  const likeContext = useContext(LikesContext);

  const postIsLiked = likeContext.isLiked(props.id);

  function toggleLikeHandler() {
    postIsLiked ? likeContext.removeLike(props.id) : likeContext.addLike({ id: props.id });
  }
  
  return (
    <button onClick={toggleLikeHandler} className={classes.like}>
      <i class={postIsLiked ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up"}/>
    </button>
  );
}

export default LikeButton;
