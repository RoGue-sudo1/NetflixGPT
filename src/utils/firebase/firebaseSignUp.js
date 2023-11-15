import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "./firebase";
import { addUser } from "../store/slices/userSlice";


function firebaseSignUp  (
    { setErrorMessage,dispatch },
    name, 
    email,
    password
  ){
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
  
        updateProfile(auth.currentUser, {
          displayName: name
         
        })
          .then(() => {
            const { uid, displayName, email } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
           
            
          })
          .catch((error) => {
            setErrorMessage(`Profile updation - ${error.code + error.message}`)
          });
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  }

  export default firebaseSignUp
  






