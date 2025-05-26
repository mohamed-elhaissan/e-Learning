import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { useState } from "react";
import shape1 from "../assets/shape.svg";
import light from "../assets/light.svg";
import shape3 from "../assets/shap3.svg";
import shape4 from "../assets/Group 134.svg";
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <header className="flex justify-between mx-10 items-center p-4 ">
        <img src={light} className="absolute right-0 top-0" />
        <h1 className="text-3xl  bg-gradient-to-r from-[var(--main-purple)] font-semibold to-purple-600 text-transparent bg-clip-text">
          E-learning
        </h1>
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
                {/* E0E5DE
                #8AB7D1 */}
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
      <motion.section
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="h-screen flex-col  flex justify-center items-center "
      >
        <h2 className="text-7xl  relative w-full flex items-center justify-center ">
          Unlock the{" "}
          <span className=" mx-2 flex flex-col mt-2  bg-gradient-to-r from-[var(--main-purple)] font-semibold to-purple-600 text-transparent bg-clip-text ">
            Future <img className="block w-full " src={shape1} />
          </span>{" "}
          of education
        </h2>
      </motion.section>
      <section className=" h-screen flex items-center gap-30  flex-col">
        <h2 className="text-7xl  flex flex-col gap-2 ">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#ACAFBA]"
          >
            We believe
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3"
          >
            in the potential{" "}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[#ACAFBA] flex items-center "
            >
              for <img src={shape3} alt="" />{" "}
            </motion.span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            technology <span className="text-[#ACAFBA]">to reshape the</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            learning experince
          </motion.span>
        </h2>
        <div className="relative flex items-center justify-evenly h-80 mt-30  w-full">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className=" text-2xl bg-[#E9E9EB] w-70 h-70 rounded-full flex flex-col items-center justify-center"
          >
            50+ <span className="text-[#CAC9CE] text-sm">Courses</span>
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className=" text-2xl bg-[#E9E9EB] w-50 h-50 rounded-full flex flex-col items-center justify-center"
          >
            10+ <span className="text-[#CAC9CE] text-sm">Instructors</span>
          </motion.span>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            src={shape4}
            className=" scale-150  w-80 h-80 object-cover"
            alt="Shape"
          />

          <motion.span
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-2xl bg-[#E9E9EB] w-50 h-50 rounded-full flex flex-col items-center justify-center text-center"
          >
            5+{" "}
            <span className="text-[#CAC9CE] text-sm">Years of Experience</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className=" text-2xl bg-[#E9E9EB] w-70 h-70 rounded-full flex flex-col items-center justify-center"
          >
            1000+ <span className="text-[#CAC9CE] text-sm">Students</span>
          </motion.span>
        </div>
      </section>
      <section className="h-screen flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-7xl text-center"
        >
          Join us and start your learning journey today!
        </motion.h2>
      </section>
    </div>
  );
};

export default Home;
