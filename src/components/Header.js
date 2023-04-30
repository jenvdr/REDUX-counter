import classes from './Header.module.css';
import {  useDispatch } from 'react-redux';
import { authActions } from '../store';

const Header = props => {
  const dispatch = useDispatch();
  const isLoggedIn = props.isAuth;

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isLoggedIn &&
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button type="button" onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
};

export default Header;
