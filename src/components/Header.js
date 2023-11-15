import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { netflixLogo, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase/firebase";
import { changeLanguage } from "../utils/store/slices/configSlice";
import { toggleGptSearch } from "../utils/store/slices/gptSlice";
import { removeMovieSearchResult } from "../utils/store/slices/moviesSlice";
import { addUser, removeUser } from "../utils/store/slices/userSlice";

function Header() {
  const user = useSelector((store) => store.user);
  const gptSearchShow = useSelector((store) => store.gpt.gptSearchShow);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribing when componenets unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOutButtonClicked = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchButton = () => {
    dispatch(toggleGptSearch());
    dispatch(removeMovieSearchResult())
  };

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value))

  }

  return (
    <div className=" absolute px-12 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img className="w-44 py-4 " src={netflixLogo} alt="logo" />
      {user && (
        <div>
          {gptSearchShow && (
            <select className="m-3 p-2 text-white bg-gray-800 rounded-lg" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-500 font-bold text-white p-3 mr-3 rounded-md"
            onClick={handleGptSearchButton}
          >
            {gptSearchShow ? "Home Page" : "GPT Search"}
          </button>
          <button
            className="font-bold text-white bg-red-700 my-4 rounded-md p-3 "
            onClick={handleSignOutButtonClicked}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
