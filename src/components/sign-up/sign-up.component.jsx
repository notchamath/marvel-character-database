import { useState, useContext } from "react";

import{createAuthUserWithEmailAndPassword, createUserDocFromAuth} from '../../utils/firebase/firebase.utils';
import {UserContext} from '../../contexts/user.context';
import FormInput from "../form-input/form-input.component";

import './sign-up.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function SignUp() {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword){
      alert('Passwords do not match');
      return;
    }

    try{
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocFromAuth(user, {displayName});
      setCurrentUser(user);

      resetFormFields();

    } catch (e) {
      if (e.code === 'auth/email-already-in-use'){
        alert('Error: Email already in use');
      } else {
        console.log('User creation error::', e);
      }
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]:value});
  };

  return(
    <div className='signup__container'>
      <h2>Don't have an account?</h2>
      <span>Sign up here</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type="text" 
          required 
          onChange={handleChange} 
          name='displayName' 
          value={displayName} 
        />
        
        <FormInput
          label='Email' 
          type="email" 
          required 
          onChange={handleChange} 
          name='email' 
          value={email} 
        />

        <FormInput
          label='Password' 
          type="password" 
          required 
          onChange={handleChange} 
          name='password' 
          value={password} 
        />

        <FormInput
          label='Confirm Password' 
          type="password" 
          required 
          onChange={handleChange} 
          name='confirmPassword' 
          value={confirmPassword} 
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  ) 
}
