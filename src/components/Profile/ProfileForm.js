import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // optional: Add validation
  
    
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAhdWESPuuX6xbZB901mOMLh8gFiAQSABg', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      history.replace('/');
    })
    // {.then((res) => {
    //   setIsLoading(false);
    //   if (res.ok) {
    //     return res.json();
    //   } else {
    //     return res.json().then((data) => {
    //       let errorMessage = 'Authentication failed!';
    //       // if (data && data.error && data.error.message) {
    //       //   errorMessage = data.error.message;
    //       // }

    //       throw new Error(errorMessage);
    //     });
    //   }
    // })
    // .catch((err) => {
    //   setError(err.message);
    //   setIsLoading(false);
    // });}
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
