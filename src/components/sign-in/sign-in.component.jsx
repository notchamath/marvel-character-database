import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

export default function SignIn() {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  }

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>with google</button>
    </>
  )
}
