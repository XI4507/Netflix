import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSign] = useState(true);
  function toggleSignInForm() {
    setIsSign(!isSignIn);
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
      <form className="rounded-lg absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 p-8 text-white flex flex-col bg-opacity-80">
        <h1 className="font-bold text-2xl m-2 mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {
            !isSignIn && <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full rounded-sm bg-gray-600"
          />
        }
        <input
          type="text"
          placeholder="Email address"
          className="p-2 m-2 w-full rounded-sm bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full rounded-sm bg-gray-600"
        />
        <button className="p-2 m-2 bg-red-700 w-full rounded-sm mt-6">
        {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 m-2 mt-6 cursor-pointer" onClick={toggleSignInForm}>
        <u>{isSignIn ? "New to Netflix? Sign up" : "Already a member ?"}</u>
        </p>
      </form>
    </div>
  );
};

export default Login;
