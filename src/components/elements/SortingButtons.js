import SortDownButton from "./buttons/SortDownButton";
import SortUpButton from "./buttons/SortUpButton";
import classes from "./SortingButtons.module.css";

function SortingButtons(props) {
    return (
        <div className={classes.layout}>
            <div className={classes.buttonSet}>
                <SortDownButton />
                Date
                <SortUpButton />
            </div>
            <div className={classes.buttonSet}>
                <SortDownButton />
                Author
                <SortUpButton />
            </div>    
        </div>
    )
}

export default SortingButtons;