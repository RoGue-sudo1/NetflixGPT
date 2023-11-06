import React, { useRef, useState } from "react";
import { checkValidationData } from "../utils/validate";
import Header from "./Header";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitButtonClicked = (e) => {
    e.preventDefault();
    setErrorMessage(checkValidationData(email.current.value, password.current.value));
  };

  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute  ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg_image"
        />
      </div>
      <form className="absolute p-12 bg-black  w-3/12 my-36 mx-auto left-0 right-0 rounded-md bg-opacity-80 ">
        <h1 className="font-bold text-3xl text-white my-5 ">
          {isSignIn ? "Sign In" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 bg-gray-800 w-full rounded-lg text-white"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 my-2 bg-gray-800 w-full rounded-lg text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 bg-gray-800 w-full rounded-lg text-white"
        />
        <p className="text-red-700 font-bold">{errorMessage}</p>
        <button
          className="p-2 my-4 rounded-lg font-bold text-white text-lg bg-red-600 w-full cursor-pointer"
          onClick={handleSubmitButtonClicked}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <span className="text-gray-400">
          {isSignIn ? "New to Netflix?" : "Already a user?"}
        </span>
        <span
          className="text-white cursor-pointer "
          onClick={handleSignInToggle}
        >
          {isSignIn ? " Sign up now" : "Sign in now"}
        </span>
      </form>
    </div>
  );
}

export default Login;
