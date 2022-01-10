import classes from "./SortButton.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function SortUpButton(props) {
  return (
    <button className={classes.button} onClick={props.sort}>
      <i class="bi bi-arrow-up"></i>
    </button>
  );
}

export default SortUpButton;
