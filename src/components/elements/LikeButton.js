import classes from "./LikeButton.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function LikeButton(props) {
  return (
    <button className={classes.like}>
      <i class="bi bi-hand-thumbs-up"></i>
    </button>
  );
}

export default LikeButton;
