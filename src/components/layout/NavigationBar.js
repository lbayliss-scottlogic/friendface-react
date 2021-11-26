import { Link } from 'react-router-dom';

import classes from './NavigationBar.module.css';

function NavigationBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>FriendFace</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>News Feed</Link>
          </li>
          <li>
              <Link to='/create-post'>Create Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
