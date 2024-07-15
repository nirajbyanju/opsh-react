import "./auth.scss";
import { FcGoogle } from "react-icons/fc";
import { FiMail } from "react-icons/fi";
import { TiLockClosedOutline } from "react-icons/ti";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import AuthSidebar from '../../components/auth/AuthSidebar';

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <AuthSidebar />
      {/* Right Side */}
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-10">
        <div className="w-full max-w-md">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-opsh-primary">Welcome back!</h2>
            <p className="text-gray-400 mb-6">Strive for Greatness, Treasure every part of the Journey!</p>
          </div>
          <div className="mb-4">
            <button className="w-full py-2 rounded-lg bg-opsh-background flex justify-centre items-center">
              <FcGoogle className="text-3xl ms-4"/>
              <span className="ms-5 font-medium text-gray-500">Sign in with Google</span>
            </button>
          </div>
          <div className="relative">  
            <div className="relative flex items-center">
              <div className="relative flex items-center justify-center w-full py-4">
                <div className="absolute left-0 bg-gray-300 w-1/2 h-px transform -translate-y-1/2"></div>
                <p className="relative z-10 text-gray-400 bg-white px-2">or login with login</p>
                <div className="absolute right-0 bg-gray-300 w-1/2 h-px transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>

          <form>
          <div className="mb-4 flex items-center  relative">
            <FiMail className="text-2xl mb-2 ms-4 text-opsh-secondary absolute left-0 top-3" />
            <input
              className=" w-full bg-opsh-background h-15 px-12 py-3 border rounded-lg"
              type="email"
              id="email"
              placeholder="Email or Login ID"
            />
          </div>
            <div className="mb-4 flex items-center relative">
              <TiLockClosedOutline className="text-3xl ms-4 absolute left-0 top-4 text-opsh-secondary" />
              <input
                className="w-full welcome bg-opsh-background h-15 px-12 mt-2 py-3 border rounded-lg"
                type="password"
                id="password"
                placeholder="Password"
              />
              <MdOutlineRemoveRedEye className="text-2xl ms-4 absolute right-5 top-6 text-opsh-secondary" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-opsh-primary font-medium">Remember Me</span>
              </label>
              <a href="#" className="text-opsh-primary font-medium">Forgot Password?</a>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg bg-opsh-secondary hover:bg-opsh-primary" type="submit">
              Log In
            </button>
            <div className="w-full bg-blue-600 text-white py-3 rounded-lg bg-white border-2 border-gray-400 mt-4">
              <p className="text-center text-gray-500 font-regular">Don't have an account? <a href="#" className="text-opsh-primary font-medium">Sign Up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

