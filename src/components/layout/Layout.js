import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <header className={classes.friendFaceHeader}>FriendFace</header>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
