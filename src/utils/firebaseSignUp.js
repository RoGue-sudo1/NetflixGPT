import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

function firebaseSignUp({setErrorMessage},email,password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      setErrorMessage(errorCode + "-" + errorMessage);
      // ..
    });
}

export default firebaseSignUp;