import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './auth.styles.scss';

export default function Auth() {
  return (
    <div className='auth__container'>
      <SignIn/>
      <SignUp/>
    </div>
  )
}
