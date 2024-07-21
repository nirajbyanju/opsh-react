import "./auth.scss";
import { FcGoogle } from "react-icons/fc";
import AuthSidebar from '../../components/auth/AuthSidebar';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../apis/auth/auth.api';
import { Login, LoginResponse } from '../../types/auth/login';
import { loginValidationSchema } from '../../validations/auth/login';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Login>({
    resolver: yupResolver(loginValidationSchema),
  });

  const handleErrors = (errorData: any) => {
    if (errorData?.validationErrors) {
      Object.keys(errorData.validationErrors).forEach((field) => {
        const fieldErrors = errorData.validationErrors[field];
        if (fieldErrors?.[0]) {
          setError(field as keyof Login, {
            type: 'manual',
            message: fieldErrors[0],
          });
        }
      });
    } else {
      setError('general', {
        type: 'manual',
        message: errorData?.message || 'An error occurred',
      });
    }
  };

  const onSubmit: SubmitHandler<Login> = async (data) => {
    setLoading(true);
    try {
      const response = await login(data) as LoginResponse;
      if (response.error) {
        handleErrors(response.error);
      } else {
        navigate('/dashboard');
      }
    } catch (error: any) {
      handleErrors(error);
    } finally {
      setLoading(false);
    }
  };

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
            <button className="w-full py-2 rounded-lg bg-opsh-background flex justify-center items-center">
              <FcGoogle className="text-3xl ms-4" />
              <span className="ms-5 font-medium text-gray-500">Sign in with Google</span>
            </button>
          </div>
          <div className="relative">
            <div className="relative flex items-center">
              <div className="relative flex items-center justify-center w-full py-4">
                <div className="absolute left-0 bg-gray-300 w-1/2 h-px transform -translate-y-1/2"></div>
                <p className="relative z-10 text-gray-400 bg-white px-2">or login with email</p>
                <div className="absolute right-0 bg-gray-300 w-1/2 h-px transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`w-full border-2 rounded-lg ${errors.email ? 'border-red-500' : 'border-opsh-darkgrey'} block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer`}
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
              >
                Email
              </label>
              <div className="text-red-500 text-sm">
                {errors.email?.message}
              </div>
            </div>

            <div className="relative mb-4">
              <input
                type="password"
                id="password"
                {...register('password')}
                className={`w-full border-2 rounded-lg ${errors.password ? 'border-red-500' : 'border-opsh-darkgrey'} block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer`}
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
              >
                Password
              </label>
              <div className="text-red-500 text-sm">
                {errors.password?.message}
              </div>
            </div>
            <button
              className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-800">
                  Register
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
