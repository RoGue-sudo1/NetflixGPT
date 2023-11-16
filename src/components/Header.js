import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { netflixLogo, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase/firebase";
import { changeLanguage } from "../utils/store/slices/configSlice";
import { toggleGptSearch } from "../utils/store/slices/gptSlice";
import { removeMovieSearchResult } from "../utils/store/slices/moviesSlice";
import { addUser, removeUser } from "../utils/store/slices/userSlice";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function Header() {
  const user = useSelector((store) => store.user);
  const [menu, setMenu] = useState(true);
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
    dispatch(removeMovieSearchResult());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleMenuButtonClicked = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <div className=" absolute px-4 md:px-12 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img className=" w-20 md:w-32 py-4 " src={netflixLogo} alt="logo" />
      {user && (
        <>
          <div className="md:hidden">
            {menu ? (
              <CiMenuBurger
                className="text-white mt-4 text-2xl"
                onClick={handleMenuButtonClicked}
              />
            ) : (
              <div className="">
              <div>
              <IoClose className="text-white mt-4  text-2xl" onClick={handleMenuButtonClicked} />
              </div>
              <div className="absolute right-3 p-2 rounded-lg z-20  bg-gray-800 ">
              <div className="">
                <ul className="text-white  ">
                  <li onClick={handleGptSearchButton} className="leading-9" >{gptSearchShow ? "Home" : "GPT Search"}</li>
                  <hr className="text-white "/>
                  <li onClick={handleSignOutButtonClicked} className="leading-9">Sign Out</li>
                </ul>
              </div>
              </div>
              </div>
            )}
          </div>
          <div className="max-sm:hidden">
            {gptSearchShow && (
              <select
                className="m-3 p-2 text-white bg-gray-800 rounded-lg"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-purple-500 font-bold text-white p-3 mr-3 rounded-md"
              onClick={handleGptSearchButton}
            >
              {gptSearchShow ? "Home" : "GPT Search"}
            </button>
            <button
              className="font-bold text-white bg-red-700 my-4 rounded-md p-3 "
              onClick={handleSignOutButtonClicked}
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
