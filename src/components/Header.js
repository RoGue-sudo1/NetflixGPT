import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { netflixLogo } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
   
    //Unsubscribing when componenets unmounts
    return ()=>unsubscribe()
  }, []);


  const handleSignOutButtonClicked = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    
      <div className=" absolute px-12 bg-gradient-to-b from-black w-full z-10 flex justify-between">
        <img
          className="w-44 py-4 "
          src={netflixLogo}
          alt="logo"
        />
         {user && (
        <div className="font-bold text-white bg-red-700 my-4 rounded-md ">
          <button className="p-2 " onClick={handleSignOutButtonClicked}>Sign Out</button>
        </div>
      )}
      </div>
     
    
  );
}

export default Header;
