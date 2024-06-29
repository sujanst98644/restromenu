import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main className="flex flex-col justify-center items-center bg-[#EEF7FF] h-screen">
      <Link className="self-start m-5 text-3xl text-green-700" to="/restromenu">
        <FaChevronLeft />
      </Link>
      <div className="flex flex-row h-5/6 justify-center space-x-10 m-24 items-center">
        <div className="flex flex-col w-80 space-y-2 items-center">
          <div className="border-2 p-7 w-80">
            <form className="space-y-2 flex flex-col items-center">
              <div className="flex items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/Burger.png`}
                  alt="logo"
                  className="h-14"
                />
                <p className="font-bold font-sora hover:scale-110 text-black">
                  CRUNCHY
                </p>
              </div>
              <input
                type="text"
                className=" bg-gray-200 rounded p-2 text-xs w-4/5"
                placeholder="Phone number, Username or email"
              />
              <input
                type="text"
                className=" bg-gray-200 rounded p-2 text-xs w-4/5"
                placeholder="password"
              />
              <button className="p-2 text-white bg-blue-500 rounded-xl w-1/2">
                Log in
              </button>
            </form>
            <div className="flex flex-col items-center space-y-3">
              <p>OR</p>
              <Link to="#" className=" text-blue-600 font-semibold">
                Log in with Facebook
              </Link>
              <Link to="#" className=" text-blue-600">
                forgot password?
              </Link>
            </div>
          </div>
          <div className="w-80 border-2 p-7">
            <p>
              Don't have an account?{" "}
              <Link className="text-blue-500 font-semibold" to='#'>Sign up</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Signup;
