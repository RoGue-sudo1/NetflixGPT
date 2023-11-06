import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";

function firebaseSignUp  (
    { setErrorMessage, navigate, setisSignInForm },
    email,
    password
  ){
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
  
        // updateProfile(user, {
        //   displayName: "Jane Q. User",
        //   photoURL: "https://example.com/jane-q-user/profile.jpg",
        // })
        //   .then(() => {
        //     // Profile updated!
        //     // ...
        //   })
        //   .catch((error) => {
        //     // An error occurred
        //     // ...
        //   });
        setisSignInForm(true);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  }

  export default firebaseSignUp
  






