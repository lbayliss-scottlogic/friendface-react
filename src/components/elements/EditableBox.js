import "bootstrap-icons/font/bootstrap-icons.css";
import classes from "./EditableBox.module.css";
import { useRef } from 'react';

function EditableBox(props) {
  const contentRef = useRef();
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
    ).then(() => {
      contentRef.current.className += ' fade-in';
    });
  }
  return (
    <span
    ref={contentRef}
      contentEditable={true}
      suppressContentEditableWarning={true}
      className={classes.content}
      onBlur={(e) => editPostHandler({ content: e.currentTarget.textContent })}
    >
      {props.data.content}
    </span>
  );
}

export default EditableBox;
