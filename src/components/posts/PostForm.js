import { useRef } from 'react';
import classes from './PostForm.module.css'

function PostForm(props) {
  const authorInputRef = useRef();
  const dateInputRef = useRef();
  const contentInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    function idGenerator() {
      var S4 = function() {
         return (((1+Math.random())*0x10000)|0);
      };
      return (S4()+S4()+S4()+S4());
  }

    const postData = {
      author: authorInputRef.current.value,
      date: dateInputRef.current.value,
      content: contentInputRef.current.value,
      likes: 0,
      id: idGenerator()
    };

    props.onNewPost(postData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="author-field" onSubmit={submitHandler}>Author:</label>
        <input type="text" required id="author-field" autoComplete='off' ref={authorInputRef} />
      </div>
      <div className={classes.control} >
        <label htmlFor="date-field">Date:</label>
        <input type="date" required id="date-field" ref={dateInputRef} />
      </div>
      <div className={classes.control} >
        <label htmlFor="content-field">Content:</label>
        <textarea required id="content-field" rows="4" ref={contentInputRef}/>
      </div>
      <div className={classes.actions}>
        <button id="submit-btn">Submit</button>
      </div>
    </form>
  );
}

export default PostForm;
