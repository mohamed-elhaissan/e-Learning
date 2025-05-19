import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
} from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
export const RegisterPage = () => {
    const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="p-14   w-1/3">
        <form className="flex  flex-col gap-2 ">
          <h1 className="text-3xl text-center">Create an account</h1>
          <p className="text-gray-500 text-center mb-10">
            Already have an account ?{" "}
            <Link className="text-black" to={"nowere"}>
              Log in{" "}
            </Link>
          </p>

          <div className="flex mb-10 flex-col items-center  w-full">
            <div className="flex  items-center justify-center  w-full ">
              <PiNumberCircleOneFill className="text-xl  mb-2" />
              <div className="w-1/3 bg-[#C3C3C3] h-[1px] rounded-full" />

              <PiNumberCircleTwoFill className="text-xl text-[#C3C3C3] mb-2" />
              <div className="w-1/3 bg-[#C3C3C3] h-[1px] rounded-full" />
              <PiNumberCircleThreeFill className="text-xl text-[#C3C3C3] mb-2" />
            </div>

            <div className="flex  items-center justify-between   w-full ">
              <span className="text-sm">Enter your Email</span>

              <span className="text-sm">Enter your name</span>
              <span className="text-sm">Create your password</span>
            </div>
          </div>

          <div className="flex flex-col mb-1  ">
            <label htmlFor="email" className="text-[#949494] mb-1">
              What's your email ?{" "}
            </label>
            <input
              type="email"
              className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[var(--main-purple)]"
              name="email"
              required
              placeholder="Enter your email address..."
            />
          </div>

          <button className=" bg-[#C3C3C3] rounded-full px-3 py-3 mt-5">
            Next
          </button>
          <div className="mt-10">
            <div className="flex items-center justify-center gap-5">
              <div className="w-1/3 bg-[#C3C3C3] h-[1px] rounded-full" />
              <span>OR</span>

              <div className="w-1/3 bg-[#C3C3C3] h-[1px] rounded-full" />
            </div>
            <div className="flex justify-center items-center gap-5 ">
              <button className="rounded-full border text-sm flex transition-all duration-300 hover:bg-gradient-to-r hover:from-[#4285F4] hover:via-[#34A853] hover:via-[#FBBC05] hover:to-[#EA4335] hover:text-white px-3 py-3 mt-5">
                <span className="text-[#333]">Sign up with Google</span>
                <FaGoogle className="text-xl ml-2" />
              </button>
              <motion.button 
              onMouseEnter={() => setIsFacebookHovered(true)}
              onMouseLeave={() => setIsFacebookHovered(false)}
              className=" rounded-full border text-sm flex transition-all duration-300 hover:bg-[#1877F2] hover:text-white px-3 py-3 mt-5">
                <p className="text-[#333]">Sign up with Facebook</p>
                <FaFacebookF className="text-xl ml-2" />
                <div>
                    
                </div>
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
