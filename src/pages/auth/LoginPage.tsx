import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import sildingImg from '@/assets/auth/sildingImg.png';
import "./auth.scss";
import { FcGoogle } from "react-icons/fc";
import { FiMail } from "react-icons/fi";
import { TiLockClosedOutline } from "react-icons/ti";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const LoginPage = () => {

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div style={{ backgroundColor: '#E1E6F2' }} className="relative w-full md:w-1/3 flex-col items-center justify-center p-10 hidden md:flex xs:hidden">
        <div className="w-full max-w-xs text-center relative">
          <div className="relative">
            <Carousel
              className="relative w-full flex flex-row justify-center"
              infiniteLoop
              emulateTouch={true}
              showArrows={false}
              interval={3000}
              showThumbs={false}
              showStatus={false}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img src={sildingImg} className="block w-full h-full object-cover" alt="Slide" />
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <img src={sildingImg} className="block w-full h-full object-cover" alt="Slide" />
              </div>
              <div className="relative overflow-hidden rounded-lg ">
                <img src={sildingImg} className="block w-full h-full object-cover" alt="Slide" />
              </div>
              <div className="relative overflow-hidden rounded-lg ">
                <img src={sildingImg} className="block w-full h-full object-cover" alt="Slide" />
              </div>
            </Carousel>
          </div>
          <h1 className="text-4xl font-semibold mt-20 mb-4 text-opsh-primary">Welcome</h1>
          <p className="text-sm text-gray-600 font-medium">We welcome you to our interactive learning and training platform.</p>
        </div>
        <p className="text-sm font-medium text-gray-600 mt-2 absolute bottom-10 right-10 absolute">Version 0.1.00</p>
      </div>
      {/* Right Side */}
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-10">
        <div className="w-full max-w-md">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-opsh-primary">Welcome back!</h2>
            <p className="text-gray-400 mb-6">Strive for Greatness, Embrace the Journey!</p>
          </div>
          <div className="mb-4">
            <button className="w-full py-4 rounded-lg bg-gray-300 flex justify-centre items-center">
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
            <FiMail className="text-2xl mb-2 ms-4 text-gray-600 absolute left-0 top-4" />
            <input
              className=" w-full bg-gray-300 h-15 px-12 py-4 border rounded-lg"
              type="email"
              id="email"
              placeholder="Email or Login ID"
            />
          </div>
            <div className="mb-4 flex items-center relative">
              <TiLockClosedOutline className="text-3xl ms-4 absolute left-0 top-5 text-gray-600" />
              <input
                className="w-full welcome bg-gray-300 h-15 px-12 mt-2 py-4 border rounded-lg"
                type="password"
                id="password"
                placeholder="Password"
              />
              <MdOutlineRemoveRedEye className="text-2xl ms-4 absolute right-5 top-7 text-gray-600" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-opsh-primary font-medium">Remember Me</span>
              </label>
              <a href="#" className="text-opsh-primary font-medium">Forgot Password?</a>
            </div>
            <button className="w-full bg-blue-600 text-white py-4 rounded-lg bg-opsh-secondary hover:bg-opsh-primary" type="submit">
              Log In
            </button>
            <div className="w-full bg-blue-600 text-white py-4 rounded-lg bg-white border-2 border-gray-400 mt-4">
              <p className="text-center text-gray-500 font-regular">Don't have an account? <a href="#" className="text-opsh-primary font-medium">Sign Up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

