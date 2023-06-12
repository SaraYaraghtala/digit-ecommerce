import React from "react";
import UserIcon from "../../assets/user.svg";

const Login = () => {
  return (
    <div className="flex items-center pl-3 w-1/6 h-12 ">
      <div className="border border-solid border-pink-300 h-full flex items-center w-5/6 rounded-lg pl-3">
        <img className="h-[70%]" src={UserIcon} alt="" />
        <a href="#" className="mx-3">Login</a> | <a className="mx-3" href="#">Rejester</a>
      </div>
    </div>
  );
};

export default Login;
