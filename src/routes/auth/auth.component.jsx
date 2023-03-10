import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import useScrollToTop from '../../custom-hooks/useScrollToTop';

import './auth.styles.scss';

// sign in and sign up components will be at auth route
export default function Auth() {

  useScrollToTop();
  
  return (
    <div className='auth__container'>
      <SignIn/>
      <SignUp/>
    </div>
  )
}
