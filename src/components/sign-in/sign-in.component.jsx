import { useState } from 'react';

import {
  signInWithGooglePopup,
  signInWithGithubPopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

// default values for useState
const defaultFormFields = {
  email: '',
  password: '',
};

// sign in component
const SignIn = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // reset fields to empty
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // sign in with google
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  // sign in with github
  const signInWithGithub = async () => {
    await signInWithGithubPopup();
  };

  // handle form submits, prevent reloading the page first then connect to firebase
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();

    } catch (error) {

      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password or Email');
          break;
        case 'auth/user-not-found':
          alert('No User Associated With This Email');
          break;
        default:
          console.log(error);
      }

    }
  };

  // all fields changes are recorded to useState
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='signin__container'>
      <h2>Sign In</h2>
      <span>Sign In with your Email and Password or Use a Gmail or Github Account</span>

      <div className='signin__btns-container'>

        <button className='signin__btns google-signin' type='button' onClick={signInWithGoogle}>
          Google Sign In
        </button>

        <button className='signin__btns github-signin' type='button' onClick={signInWithGithub}>
          Github Sign In
        </button>

      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='signin__btns-container'>
          <button className='signin__btns' type='submit'>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
