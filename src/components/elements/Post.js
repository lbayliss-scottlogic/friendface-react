import classes from './Post.module.css';

function Post(props) {
    return <div className={classes.post}>{props.children}</div>
}

export default Post;