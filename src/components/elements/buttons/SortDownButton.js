import classes from "./SortButton.module.css";

function SortDownButton(props) {
  return (
    <button className={classes.button}>
      <i class="bi bi-arrow-down"></i>
    </button>
  );
}

export default SortDownButton;
