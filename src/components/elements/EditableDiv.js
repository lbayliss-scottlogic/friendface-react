import "bootstrap-icons/font/bootstrap-icons.css";
import classes from "./EditableDiv.module.css";

function EditableDiv(props) {
  function editPostHandler(postData) {
    fetch(
      `https://friendface-react-default-rtdb.europe-west1.firebasedatabase.app/posts/${props.data.id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // TODO: Feedback to the user that the post change was successful .then() ?
  }
  return (
    <span
      contentEditable={true}
      suppressContentEditableWarning={true}
      className={classes.content}
      onBlur={(e) => editPostHandler({ content: e.currentTarget.textContent })}
    >
      {props.data.content}
    </span>
  );
}

export default EditableDiv;
