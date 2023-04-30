import classes from './Auth.module.css';
import { useState, useRef } from 'react';
import {  useDispatch } from 'react-redux';
import { authActions } from '../store';

const Auth = props => {
  const dispatch = useDispatch();
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [error, setError] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const emailChangeHandler = event => {
    const emailValue = event.target.value;
    const isEmailValid = emailValue.trim().length !== '';

    setEmailIsValid(isEmailValid);
  };

  const passwordChangeHandler = event => {
    const passwordValue = event.target.value;
    const isPasswordValid = passwordValue.trim().length > 6;

    setPasswordIsValid(isPasswordValid);
  };

  const submitHandler = event => {
    event.preventDefault();

    if (emailIsValid && passwordIsValid) {
      dispatch(authActions.login());
    } else {
      setError(true);
    }
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} onChange={emailChangeHandler}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef} onChange={passwordChangeHandler}/>
          </div>
          {error && <p>Please make sure your details are correct.</p>}
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
