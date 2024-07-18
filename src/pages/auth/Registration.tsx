import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthSidebar from '../../components/auth/AuthSidebar';
import { registration } from '../../apis/auth/auth.api';
import { Registration, RegistrationResponse } from '../../types/auth/registration';
import { registrationValidationSchema } from '../../validations/auth/registration';
import helloImage from '@/assets/auth/hello.avif';
import { Link } from 'react-router-dom';


const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password match

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch, // Function to watch form values
  } = useForm<Registration>({
    resolver: yupResolver(registrationValidationSchema),
  });

  // Watch both 'password' and 'cPassword' fields
  const password = watch('password', '');
  const confirmPassword = watch('cPassword', '');

  // Check if passwords match and update state
  useEffect(() => {
    setPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const onSubmit: SubmitHandler<Registration> = async (data: Registration) => {
    setLoading(true);
    try {
      const response: RegistrationResponse = await registration(data);
      setLoading(false);

      if (response.success) {
        console.log(response);
        console.log('Form submitted successfully');
        navigate('/success');
      } else {
        // Handle error response
        if (response.error) {
          console.log('Error Response:', response.error);

          // Handle validation errors if present
          if (response.error.validationErrors) {
            console.log('Validation Errors:', response.error.validationErrors);
            Object.keys(response.error.validationErrors).forEach((field) => {
              if (response.error?.validationErrors?.[field]?.[0]) {
                setError(field as keyof Registration, {
                  type: 'manual',
                  message: response.error.validationErrors[field][0],
                });
              }
            });
          } else {
            // Handle general error message if validationErrors is not present
            setError('general', {
              type: 'manual',
              message: response.error.message || 'An error occurred',
            });
          }
        }
      }
    } catch (error: any) {
      console.log('Caught Error:', error.error.validationErrors);
      if (error.error.validationErrors) {
        console.log('Validation Errors:', error.error.validationErrors);
        Object.keys(error.error.validationErrors).forEach((field) => {
          if (error.error?.validationErrors?.[field]?.[0]) {
            setError(field as keyof Registration, {
              type: 'manual',
              message: error.error.validationErrors[field][0],
            });
          }
        });
      } else {
        // Handle general error message if validationErrors is not present
        setError('general', {
          type: 'manual',
          message: error.message || 'An error occurred',
        });
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <AuthSidebar />
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-10">
        <div className="w-full max-w-md">
        <div className="flex flex-row items-center">
                        <div>
                            <img src={helloImage} className="w-full h-auto mb-4" alt="Hello" />
                        </div>
                        <div className="relative registration-line">
                            <p className="text-opsh-grey font-medium mb-1">Believe in your Power to Achieve!</p>
                            <h2 className="text-3xl font-bold mb-4 text-opsh-primary">Create an account</h2>
                        </div>
                    </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Form fields */}
            <div className="mb-4 mt-5 flex items-center gap-4 relative">
              <div className="relative w-full">
                <input
                  type="text"
                  {...register('firstName')}
                  id="firstName"
                  className={`w-full border-2 rounded-lg ${
                    errors.firstName ? 'border-red-500' : 'border-opsh-darkgrey'
                  } block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-black dark:focus:border-blue-500 focus:outline-none peer`}
                  placeholder=" "
                />
                <label
                  htmlFor="firstName"
                  className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
                >
                  First Name
                </label>
                {errors.firstName && (
                <div className="text-red-500 text-sm">{errors.firstName.message}</div>
              )}
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  {...register('lastName')}
                  id="lastName"
                  className={`w-full border-2 rounded-lg ${
                    errors.lastName ? 'border-red-500' : 'border-opsh-darkgrey'
                  } block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer`}
                  placeholder=" "
                />
                <label
                  htmlFor="lastName"
                  className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
                >
                  Last Name
                </label>
                {errors.lastName && (
                <div className="text-red-500 text-sm">{errors.lastName.message}</div>
              )}
              </div>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                {...register('userName')}
                id="userName"
                className={`w-full border-2 rounded-lg ${
                  errors.userName ? 'border-red-500' : 'border-opsh-darkgrey'
                } block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer`}
                placeholder=" "
              />
              <label
                htmlFor="userName"
                className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
              >
                User Name
              </label>
              {errors.userName && (
                <div className="text-red-500 text-sm">{errors.userName.message}</div>
              )}
            </div>
            <div className="relative mb-4">
              <input
                type="email"
                {...register('email')}
                id="email"
                className={`w-full border-2 rounded-lg ${
                  errors.email ? 'border-red-500' : 'border-opsh-darkgrey'
                } block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer`}
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
              >
                Email
              </label>
              {errors.email && (
                <div className="text-red-500 text-sm">{errors.email.message}</div>
              )}
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                {...register('phoneNumber')}
                id="phoneNumber"
                className={`w-full border-2 rounded-lg ${
                  errors.phoneNumber ? 'border-red-500' : 'border-opsh-darkgrey'
                } block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer`}
                placeholder=" "
                onKeyDown={(e) => {
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    e.preventDefault(); // Prevent default behavior for arrow keys
                  }
                }}
              />
              <label
                htmlFor="phoneNumber"
                className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
              >
                Phone Number
              </label>
              {errors.phoneNumber && (
                <div className="text-red-500 text-sm">{errors.phoneNumber.message}</div>
              )}
              
            </div>
            <div className="mb-4 mt-5 flex items-center gap-4 relative">
              <div className="relative">
                <input
                  type="password"
                  {...register('password')}
                  id="password"
                  className={`w-full border-2 rounded-lg ${
                    errors.password ? 'border-red-500' : 'border-opsh-darkgrey'
                  } block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer`}
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
                >
                  Password
                </label>
                {errors.password && (
                <div className="text-red-500 text-sm">{errors.password.message}</div>
              )}
              </div>
              <div className="relative">
                <input
                  type="password"
                  {...register('cPassword')}
                  id="cPassword"
                  className={`w-full border-2 rounded-lg ${
                    errors.cPassword ? 'border-red-500' : 'border-opsh-darkgrey'
                  } block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer`}
                  placeholder=" "
                />
                <label
                  htmlFor="cPassword"
                  className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
                >
                  Confirm Password
                </label>
                {errors.cPassword?.message && (
                    <div className="text-red-500 text-sm">{errors.cPassword.message}</div>
                  )}
                  {!passwordsMatch && (
                    <div className="text-red-500 text-sm">Passwords do not match</div>
                  )}

              </div>
            </div>
            <div className="relative mb-4">
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-start ">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-xs text-opsh-primary  font-normal">All your information is collected, stored and processed as per our 
                      data processing guidelines. By signing up on Opsh, you agree to our 
                      Privacy Policy and Terms of Use
                </span>
              </label>
            </div>
            </div>

            {errors.general && (
              <div className="text-red-500 text-sm mb-4">{errors.general.message}</div>
            )}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-opsh-primary hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={loading || !passwordsMatch} // Disable button if passwords don't match
              >
                {loading ? 'Loading...' : 'Registration'}
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-800">
                Login In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
