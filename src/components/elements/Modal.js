import classes from './Modal.module.css';

function Modal(props) {
    function cancelHandler() {
      props.onCancel();
    }
  
    return (
      <div className={classes.modal}>
        <p>Winner is {props.winner}!</p>
        <button className={classes.restartBtn} onClick={cancelHandler}>
          Restart
        </button>
      </div>
    );
  }
  
  export default Modal;
  