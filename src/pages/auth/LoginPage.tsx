import "./auth.scss";
import { FcGoogle } from "react-icons/fc";
import { FiMail } from "react-icons/fi";
import { TiLockClosedOutline } from "react-icons/ti";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import AuthSidebar from '../../components/auth/AuthSidebar';
import { Link } from 'react-router-dom';

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
          <div className="relative mb-4">
              <input
                type="text"
                
                id="userName"
                className={`w-full border-2 rounded-lg  'border-red-500' : 'border-opsh-darkgrey'
                 block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer`}
                placeholder=" "
              />
              <label
                htmlFor="userName"
                className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
              >
                User Name
              </label>
              
                <div className="text-red-500 text-sm"></div>
             
            </div>

              <div className="relative">
                <input
                  type="password"
                 
                  id="password"
                  className={`w-full border-2 rounded-lg 
                    'border-red-500' : 'border-opsh-darkgrey'
                   block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer`}
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
                >
                  Passwords
                </label>
                
                <div className="text-red-500 text-sm"></div>
            
              </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg bg-opsh-secondary hover:bg-opsh-primary" type="submit">
              Log In
            </button>
            <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-800">
                Registration
              </Link>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

