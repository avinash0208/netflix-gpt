import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, PHOTO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="w-full absolute px-4 bg-gradient-to-r from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={NETFLIX_LOGO}
        alt="logo"
      ></img>
      {user && (
        <div className="flex">
          <img
            className="w-12 h-12 items-center"
            src={PHOTO_URL}
            alt="user-icon"
          ></img>
          <button onClick={handleSignOut} className="font-bold">
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
