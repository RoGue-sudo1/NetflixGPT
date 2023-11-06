import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

function Header() {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleSignOutButtonClicked = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    
      <div className=" absolute px-12 bg-gradient-to-b from-black w-full z-10 flex justify-between">
        <img
          className="w-44 py-4 "
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
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
