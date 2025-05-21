import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
} from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { post } from "../utility/api";
import { LoadingButton } from "../components/LoadingButton";
import { Toaster, toast } from "sonner";
export const RegisterPage = () => {
  const [registerSteps, setRegisterSteps] = useState(1);
  const [isCompleted, setIsCompleted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (registerSteps < 3) {
      setRegisterSteps((prev) => prev + 1);
    } else {
      post("/v1/register", formData)
        .then((response) => {
          console.log("good ! ", response);
        })
        .catch((er) => {
          if (er.response?.data?.error) {
            const validationError = er.response.data.error;
            Object.entries(validationError).forEach(([field, message]) => {
              toast.error(message);
            });
          }
        });
    }
    setIsLoading(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <Toaster position="top-right" richColors />
      <div className="p-14   w-1/3">
        <form className="flex  flex-col gap-2 " onSubmit={handleLogin}>
          <h1 className="text-3xl text-center">Create an account</h1>
          <p className="text-gray-500 text-center mb-10">
            Already have an account ?{" "}
            <Link className="text-black" to={"nowere"}>
              Log in{" "}
            </Link>
          </p>

          <div className="flex mb-10 flex-col items-center  w-full">
            <div className="flex  items-center justify-center  w-full ">
              <PiNumberCircleOneFill className="text-xl text-[var(--main-purple)]  mb-2" />
              <div className="w-1/3 bg-[#C3C3C3] h-[1px] rounded-full" />

              <PiNumberCircleTwoFill
                className={`text-xl ${
                  registerSteps >= 2
                    ? "text-[var(--main-purple)]"
                    : "text-[#C3C3C3]"
                } mb-2`}
              />
              <div className={`w-1/3 bg-[#C3C3C3] h-[1px] rounded-full`} />
              <PiNumberCircleThreeFill
                className={`text-xl ${
                  registerSteps == 3
                    ? "text-[var(--main-purple)]"
                    : "text-[#C3C3C3]"
                } mb-2`}
              />
            </div>

            <div className="flex  items-center justify-between   w-full ">
              <span className="text-sm">Enter your Email</span>

              <span className="text-sm">Enter your name</span>
              <span className="text-sm">Create your password</span>
            </div>
          </div>
          {stepsContent
            .filter((item) => item.step == registerSteps)
            .map((item) => (
              <div key={item.step} className="flex flex-col mb-1  ">
                <motion.label
                  initial={{
                    x: -20,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  htmlFor="email"
                  className="text-[#949494] mb-1"
                >
                  {item.label}
                </motion.label>
                <motion.input
                  initial={{
                    x: -20,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: 20,
                  }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    delay: 0.1,
                  }}
                  required
                  type={item.type}
                  onChange={handleChange}
                  className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[var(--main-purple)]"
                  name={item.name}
                  placeholder={item.placeholder}
                />
              </div>
            ))}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className=" bg-[#C3C3C3] hover:bg-[var(--main-purple)] transition-all hover:text-white duration-300 cursor-pointer rounded-full px-3 py-3 mt-5"
          >
            {isLoading ? <LoadingButton /> : "Next"}
          </motion.button>
          <span
            onClick={() => {
              if (registerSteps != 0) {
                setRegisterSteps((prev) => prev - 1);
              }
            }}
            className="text-center cursor-pointer text-[var(--main-purple)]"
          >
            Prev
          </span>
          <div className="mt-10">
            <div className="flex items-center justify-center gap-5">
              <div className="w-1/3 bg-[#C3C3C3] h-[1px] rounded-full" />
              <span>OR</span>

              <div className="w-1/3 bg-[#C3C3C3] h-[1px] rounded-full" />
            </div>
            <div className="flex justify-center items-center gap-5 ">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="rounded-full border text-sm cursor-pointer flex justify-center items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#4285F4] hover:via-[#34A853] hover:via-[#FBBC05] hover:to-[#EA4335] hover:text-white px-3 py-3 mt-5"
              >
                <FaGoogle className="text-xl ml-2" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className=" rounded-full overflow-hidden cursor-pointer border text-sm flex transition-all duration-300 hover:bg-[#1877F2] hover:text-white px-3 py-3 mt-5"
              >
                <FaFacebookF className="text-xl ml-2" />
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const stepsContent = [
  {
    step: 1,
    label: "What's your email?",
    name: "email",
    type: "email",
    placeholder: "Enter your email address...",
  },
  {
    step: 2,
    label: "What's your name?",
    name: "name",
    type: "text",
    placeholder: "Enter your name...",
  },
  {
    step: 3,
    label: "Create your password",
    name: "password",
    type: "password",
    placeholder: "Enter your password...",
  },
];
