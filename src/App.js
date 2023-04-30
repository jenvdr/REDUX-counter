import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.authentication.isAuthenticated);

  return (
    <Fragment>
      <Header isAuth={isAuth} />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
