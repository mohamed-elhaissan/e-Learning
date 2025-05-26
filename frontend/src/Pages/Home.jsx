import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { useState } from "react";
import shape1 from "../assets/shape_14.svg";
import shape2 from "../assets/3d-1.svg";
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <header className="flex justify-between mx-10 items-center p-4 ">
        <h1 className="text-3xl font-semibold">E-learning</h1>
        <div className="flex items-center">
          <Link
            to="/login"
            className=" hover:underline hover:text-[var(--main-purple)]"
          >
            Login
          </Link>
          <Link
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            to="/register"
            className="bg-black relative overflow-hidden text-white rounded-full py-2 px-4 ml-4"
          >
            <span className="flex items-center relative text-white  z-10">
              Sign up
              <motion.span
                initial={{ scale: 0 }}
                animate={isHovered ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.1 }}
              >
                <GoPlus />
              </motion.span>
            </span>
            <motion.span
              initial={{ y: "100%" }}
              animate={isHovered ? { y: "-80%" } : { y: "100%" }}
              transition={{ duration: 0.3 }}
              className="block w-full h-[300%] absolute   left-0 top-[50%] rounded-t-full z-0 bg-[var(--main-purple)]  "
            ></motion.span>
          </Link>
        </div>
      </header>
      <section className="h-screen flex justify-center items-center ">
        <h2 className="text-7xl font-semibold  w-full flex items-center justify-center ">
            <img src={shape2}/>
          Unlock the{" "}
          <span className=" mx-2 flex flex-col mt-2 text-[var(--main-purple)] ">
            Future <img className="block w-full " src={shape1} />
          </span>{" "}
          of education
        </h2>
      </section>
    </div>
  );
};

export default Home;
