import React,{useEffect} from "react";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";



const Header = () => {
  const user=useSelector(store=>store.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
    //unsubscribe when components unmount
    return ()=>unsubscribe();
  },[])
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
        src={LOGO}
        alt="logo"
      />
      {
        user && <div className="flex">
        <img
          className="w-12 h-12 mr-2 rounded-lg"
          src={USER_AVATAR}
          alt="userLogo"
        />
        <button
          className="bg-red-500 p-1 rounded-lg h-12 px-3 text-white"
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
