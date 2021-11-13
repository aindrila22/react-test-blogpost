import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-gray-900 w-full h-screen m-0">
      <div className="w-full flex justify-center items-center">
        <form className="w-1/2 h-full text-white mt-20 px-5 py-5 space-y-10 grid place-items-center bg-gradient-to-r from-gray-800 to-gray-900 ">
          <span className="text-3xl pt-4 text-white">Forgot Password?</span>

          <input
            className="font-medium w-3/4 px-3 ml-3 py-2 bg-gradient-to-r from-gray-800 to-gray-900 border-b-2 border-gray-100 focus:outline-none"
            type="email"
            placeholder="enter email-id"
          />

          <Link
            className="w-1/2 px-10 py-4 bg-blue-800 text-xl font-bold"
            to="/reset-password"
          >
            <button className="w-full  bg-blue-800 " type="submit">
              Send Instructions
            </button>
          </Link>
          <span className="pt-6 pb-4">
            Back to{" "}
            <Link to="/">
              <span className="text-blue-400 cursor-pointer">Login</span>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
