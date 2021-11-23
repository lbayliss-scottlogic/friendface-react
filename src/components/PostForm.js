import classes from './PostForm.module.css'

function PostForm() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="author-field" onSubmit={submitHandler}>Author:</label>
        <input type="text" required id="author-field" autoComplete='off' />
      </div>
      <div className={classes.control} >
        <label htmlFor="date-field">Date:</label>
        <input type="date" required id="date-field" />
      </div>
      <div className={classes.control} >
        <label htmlFor="content-field">Content:</label>
        <textarea required id="content-field" rows="4" />
      </div>
      <div className={classes.actions}>
        <button id="submit-btn">Submit</button>
      </div>
    </form>
  );
}

export default PostForm;
