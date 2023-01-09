import { useState } from 'react';

import {
  signInWithGooglePopup,
  signInWithGithubPopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const signInWithGithub = async () => {
    await signInWithGithubPopup();
  };

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='signin__container'>
      <h2>Sign In to Manage Your Team</h2>
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
