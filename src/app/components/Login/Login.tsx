"use client";

import React, { useState } from "react";
import LoginSidePhoto from "../../../public/spoon-with-rice-grain.jpg";
import {
  EmailOutlined,
  Google,
  LockOpenOutlined,
  PasswordOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";

const Login = () => {
  const [showLogin, setShowLogin] = useState<boolean>(true);

  const handleSignUpLinkClick = () => {
    setShowLogin(false);
  };

  const renderLoginOrSignUp = () => {
    if (showLogin) {
      return (
        <div className="col-span-1 h-3/4 w-3/4 grid content-around justify-center">
          <div>
            <div className="flex justify-center m-4">
              <p className="text-4xl font-bold text-custom-five">FeastFinder</p>
              <SearchIcon className="text-5xl font-bold text-custom-five" />
            </div>

            <div className="flex justify-center m-4">
              <p className="text-lg text-custom-five">Log In</p>
            </div>

            <form className="grid grid-cols-1">
              <div className="flex justify-center items-center">
                <EmailOutlined className="mr-2 text-custom-five" />
                <input
                  className="my-4 p-2 w-full rounded-xl"
                  placeholder="email"
                />
              </div>
              <div className="flex justify-center items-center">
                <LockOpenOutlined className="mr-2 text-custom-five" />
                <input
                  className="my-4 p-2 w-full rounded-xl"
                  placeholder="Password"
                />
              </div>
              <button className="bg-custom-one text-custom-five hover:bg-custom-three hover:text-custom-one my-2 p-2 rounded-xl">
                Login
              </button>
            </form>

            <div className="my-2 text-center text-custom-five hover:cursor-pointer">
              <span>Forgot Username / Password?</span>
            </div>
          </div>
          <div className="text-center text-custom-five">
            <p>
              Don't have an account?{" "}
              <span
                className="underline hover:cursor-pointer text-custom-four"
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-span-1 h-3/4 w-3/4 grid content-around justify-center">
          <div>
            <div className="flex justify-center m-4">
              <p className="text-4xl font-bold text-custom-five">FeastFinder</p>
              <SearchIcon className="text-5xl font-bold text-custom-five" />
            </div>

            <div className="flex justify-center m-4">
              <p className="text-lg text-custom-five">Sign Up</p>
            </div>

            <form className="grid grid-cols-1">
              <div className="flex justify-center items-center">
                <EmailOutlined className="mr-2 text-custom-five" />
                <input
                  className="my-4 p-2 w-full rounded-xl"
                  placeholder="email"
                />
              </div>
              <div className="flex justify-center items-center">
                <LockOpenOutlined className="mr-2 text-custom-five" />
                <input
                  className="my-4 p-2 w-full rounded-xl"
                  placeholder="password"
                />
              </div>
              <div className="flex justify-center items-center">
                <LockOpenOutlined className="mr-2 text-custom-five" />
                <input
                  className="my-4 p-2 w-full rounded-xl"
                  placeholder="confirm password"
                />
              </div>
              <button className="bg-custom-one text-custom-four hover:bg-custom-three hover:text-custom-one my-2 p-2 rounded-xl">
                Sign Up
              </button>
            </form>

            <div className="my-2 text-center text-custom-five">
              <p>
                Already have an account?{" "}
                <span
                  className="underline hover:cursor-pointer text-custom-four"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </span>
              </p>
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-custom-five"></div>
              <span className="flex-shrink mx-4 text-custom-five">or</span>
              <div className="flex-grow border-t border-custom-five"></div>
            </div>

            <div className="my-4">
              <Google className="text-custom-three" />
              <button className="bg-white rounded-lg">
                Sign in with google
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-custom-two grid grid-cols-3 place-items-center">
        {/* Left-side */}
        <div className="col-span-2 w-full">
          <img src={LoginSidePhoto.src} alt="login-side" />
        </div>

        {/* Right-side */}
        {renderLoginOrSignUp()}
      </div>
    </div>
  );
};

export default Login;
