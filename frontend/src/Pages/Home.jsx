import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { cubicBezier, motion } from "framer-motion";
import { useState } from "react";
import light from "../assets/light.svg";
import shape3 from "../assets/shap3.svg";
import shape4 from "../assets/Group 134.svg";
import smile from "../assets/smile.svg";
import earth from "../assets/Earth.svg";
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <header className="flex justify-between mx-10 items-center p-4 ">
        <img src={light} className="absolute right-0 z-10 top-0" />
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="h-screen relative bg-black flex-col mb-20 overflow-hidden rounded-4xl mx-10 p-20 flex justify-center items-center "
      >
        <img src={earth} className=" absolute -bottom-1/2 scale-200" alt="" />
        <h2 className="text-9xl  relative w-full h-full justify-center flex flex-col font-bold ">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="self-start text-white  tracking-tight"
          >
            Unlock the
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" self-center  tracking-tight  bg-gradient-to-r from-[var(--main-purple)]  to-purple-600 text-transparent bg-clip-text "
          >
            Future
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className=" self-end  text-white tracking-tight"
          >
            of education
          </motion.span>
        </h2>
      </motion.section>
      <section className=" h-screen flex items-center gap-30 mb-20  flex-col">
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
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
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
      <section
        className="mt-10 bg-black p-20  mx-10 rounded-4xl
       mb-20 relative h-screen flex items-center gap-30  flex-col"
      >
        <h2 className="text-7xl  flex flex-col gap-2 ">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#ACAFBA]"
          >
            Benefits That
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3 text-white"
          >
            Elvate
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[#ACAFBA] flex items-center "
            >
              Your <img src={shape3} alt="" />{" "}
            </motion.span>
          </motion.span>
          <motion.span
          className="text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Teaching <span className="text-[#ACAFBA]">Experience</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            className="text-xs text-white"
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            be The Change
          </motion.span>
        </h2>
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          src={smile}
          className="absolute top-0 left-0 w-80 h-80 object-cover"
          alt="Shape"
        />
      </section>
    </div>
  );
};

export default Home;
