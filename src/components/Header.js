import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);

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
    <div className="w-full absolute px-4 py-2 bg-gradient-to-r from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      {user && 
        <div className="flex">
          <img
            className="w-12 h-12 items-center"
            src="https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABT6fj-TQr96bOSWenVxHUk87pLXZGb2M2amVmT_XIjJtbcUlPkkccU2n4x71XmrTlRfeQ-W3eNS3f0ZjTsECutMWOyH0aM4.png?r=f5d"
            alt="user-icon"
          ></img>
          <button onClick={handleSignOut} className="font-bold">
            (Sign out)
          </button>
        </div>
      }
    </div>
  );
};

export default Header;
