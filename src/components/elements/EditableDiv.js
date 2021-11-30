import "bootstrap-icons/font/bootstrap-icons.css";
import classes from "./EditableDiv.module.css";
import { useEffect } from "react";

function EditableDiv(props) {
  const content = props.data.content;
  return (
    <span
      contentEditable={true}
      suppressContentEditableWarning={true}
      className={classes.content}
      onBlur={e => console.log('Text inside div', e.currentTarget.textContent)}
    >
      {content}
    </span>
  );
}

export default EditableDiv;
