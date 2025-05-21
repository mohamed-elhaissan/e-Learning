import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";




const LoginPage = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="p-14  rounded-2xl  ">
        <form className="flex  flex-col gap-2 ">
          <h1 className="text-4xl text-center">Good to See You Again!</h1>
          <p className="text-gray-500 text-center mb-10">
            Dont have an account ?{" "}
            <Link className="text-black" to={"/register"}>
              Register{" "}
            </Link>
          </p>
          <div className="flex flex-col mb-3 ">
            <label htmlFor="email" className="text-[#949494]">
              Email
            </label>
            <input
            onChange={(e )=>{
              setEmail(e.target.value)
            }}
              type="email"
              id="email"
              className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[var(--main-purple)]"
              name="email"
              required
              placeholder="Enter your email..."
            />
          </div>
          <div className="flex flex-col mb-4 ">
            <label htmlFor="email" className="text-[#949494]">
              Passsword
            </label>
            <input
            onChange={(e )=>{
              setPassword(e.target.value)
            }}
              type="password"
              id="email"
              className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[var(--main-purple)]"
              name="password"
              required
              placeholder="Enter your password..."
            />
          </div>
         
          <motion.button
            whileTap={{ scale: 0.8 }}
            className=" bg-[#C3C3C3] hover:bg-[var(--main-purple)] transition-all hover:text-white duration-300 cursor-pointer rounded-full px-3 py-3 mt-5"
          >
            Login
          </motion.button>
          <div>
            <p className="text-gray-500 text-center mt-4">
              By signing up, you agree to our{" "}
              <Link className="text-black" to={"/terms"}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link className="text-black" to={"/privacy"}>
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
