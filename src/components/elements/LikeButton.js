import classes from "./LikeButton.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import LikesContext from "../store/Likes";
import { useContext } from "react";

function LikeButton(props) {
  const likeContext = useContext(LikesContext);

  const postIsLiked = likeContext.isLiked(props.id);

  function toggleLikeHandler() {
    if (postIsLiked) {
      likeContext.removeLike(props.id);
    } else {
      likeContext.addLike({
        id: props.id,
      });
    }
  }
  
  return (
    <button onClick={toggleLikeHandler} className={classes.like}>
      {postIsLiked ? <i class="bi bi-hand-thumbs-up-fill"></i> : <i class="bi bi-hand-thumbs-up"></i>}
    </button>
  );
}

export default LikeButton;
