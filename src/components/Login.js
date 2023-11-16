import React, { useRef, useState } from "react";
import { checkValidationData } from "../utils/validate";
import Header from "./Header";
import firebaseSignInValidation from "../utils/firebase/firebaseSignInValidation";
import firebaseSignUp from "../utils/firebase/firebaseSignUp";
import { useDispatch } from "react-redux";
import { loginBgImg } from "../utils/constants";

function Login() {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitButtonClicked = (e) => {
    const message = checkValidationData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message !== null) return;

    //Sign & Signup logic

    if (!isSignInForm) {
      //Signup logic
      firebaseSignUp(
        { setErrorMessage, setisSignInForm, dispatch },
        name.current.value,
        email.current.value,
        password.current.value
      );
    } else {
      firebaseSignInValidation(
        { setErrorMessage },
        email.current.value,
        password.current.value
      );
    }
  };

  const handleSignInToggle = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div >
      <Header />
      <div className="absolute  ">
        <img
          alt="bg_image"
          src={loginBgImg}
          className="h-screen object-cover md:h-full "
        />
      </div>
      <form
        className="absolute p-6 md:p-12 bg-black w-[90%] mt-[42%] md:w-3/12 md:my-36 mx-auto left-0 right-0 rounded-md bg-opacity-80 "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl text-white my-5 ">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
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
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span className="text-gray-400">
          {isSignInForm ? "New to Netflix?" : "Already a user?"}
        </span>
        <span
          className="text-white cursor-pointer "
          onClick={handleSignInToggle}
        >
          {isSignInForm ? " Sign up now" : "Sign in now"}
        </span>
      </form>
    </div>
  );
}

export default Login;
