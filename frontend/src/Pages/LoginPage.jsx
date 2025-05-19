import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="p-14 border rounded-2xl border-gray-300 shadow-lg bg-white">
        <form className="flex  flex-col gap-2 ">
          <h1 className="text-4xl text-center">Good to See You Again!</h1>
          <p className="text-gray-500 text-center mb-10">
            Dont have an account ? <Link className="text-black" to={"nowere"}>Log in </Link>
          </p>
          <div className="flex flex-col mb-3 ">
            <label htmlFor="email" className="text-[#949494]">Email</label>
            <input
              type="email"
              id="email"
              className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[var(--main-purple)]"
              name="email"
              required
              placeholder="Enter your email..."
            />
          </div>
          <div className="flex flex-col mb-4 ">
            <label htmlFor="email" className="text-[#949494]">Passsword</label>
            <input
              type="password"
              id="email"
              className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[var(--main-purple)]"
              name="password"
              required
              placeholder="Enter your password..."
            />
          </div>
          <div>
            <input
              type="checkbox"
            />
            <label htmlFor="remember" className="text-[#949494] ml-3">Remember me</label>
          </div>
          <button className=" bg-[#C3C3C3] rounded-full px-3 py-3 ">Login</button>
          <div>
            <p className="text-gray-500 text-center mt-4">
              By signing up, you agree to our{" "}
              <Link className="text-black" to={"nowere"}>Terms of Service</Link> and{" "}
              <Link className="text-black" to={"nowere"}>Privacy Policy</Link>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
