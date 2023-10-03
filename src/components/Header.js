import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {
  const user=useSelector(store=>store.user)
  const navigate=useNavigate()
  function handleSignOUt() {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
          navigate("/error")
      });
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black  w-full z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {
        user && <div className="flex">
        <img
          className="w-12 h-12 mr-2 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLdBi-6E-AZXjbibXO1-2gadf_kNvIF7sne07OYDdkyrrNq_JRmHMaubMviC_6leXfLI&usqp=CAU"
          alt="userLogo"
        />
        <button
          className="bg-red-700 p-1 rounded-lg h-12 px-3 text-white"
          onClick={handleSignOUt}
        >
          sign out
        </button>
      </div>
      }
    </div>
  );
};

export default Header;
