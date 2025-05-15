import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../utils/AxiosUtils";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // methode to handle Google login
  const googleLogin = async () => {
    console.log("test");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    setLoading(true); // Disable button during request

    try {
      const response = await request({
        url: "/v1/login",
        method: "POST",
        data: { email, password },
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setStatus({ type: "success", message: "Welcome! Redirecting..." });

      setTimeout(() => navigateTo("/"), 2000);
    } catch (err) {
      setStatus({
        type: "error",
        message: err.response?.data.message || "Login failed",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex   h-screen items-center justify-center bg-gray-100">
      <motion.div
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {/* Google Login Button */}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-gray-600 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@email.com"
            />
          </div>

          {/* Password Field */}
          <div className="relative space-y-1">
            <label className="text-gray-600 text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            <div
              className="absolute right-4 top-[62%] transform -translate-y-1/2 text-xl cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* {showPassword ? <LiaEyeSolid /> : <LiaEyeSlashSolid />} */}
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            className="w-full py-3 flex items-center justify-center gap-3  text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-700 disabled:bg-gray-400"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={loading || status?.type === "success"}
          >
            <motion.span>{loading ? "Loading..." : "Continue"}</motion.span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {/* <FaArrowRightLong /> */}
            </motion.span>
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;

const variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
