import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const name=useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const [errMessage, setErrMessage] = useState(null);
  const [isSignIn, setIsSign] = useState(true);
  function toggleSignInForm() {
    setIsSign(!isSignIn);
  }
  function handleButtonClick() {
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);
    if (message) return;
    //sign in and sign up logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user=userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/51470664?v=4"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          //   const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("browse")
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    }
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-pic"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 p-8 text-white flex flex-col bg-opacity-80"
      >
        <h1 className="font-bold text-2xl m-2 mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full rounded-sm bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-2 m-2 w-full rounded-sm bg-gray-600"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full rounded-sm bg-gray-600"
          ref={password}
        />
        <p className="p-2 m-2 text-red-600 font-bold">{errMessage}</p>
        <button
          className="p-2 m-2 bg-red-700 w-full rounded-sm mt-6"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 m-2 mt-6 cursor-pointer" onClick={toggleSignInForm}>
          <u>
            {isSignIn
              ? "New to Netflix? Sign up now"
              : "Already a member ? Sign In"}
          </u>
        </p>
      </form>
    </div>
  );
};

export default Login;
