import "./auth.scss";
import AuthSidebar from '../../components/auth/AuthSidebar';
import { Login } from '../../types/auth/loginTypes';
import { loginValidationSchema } from '../../validations/auth/login';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useAuthStore from '../../stores/auth/AuthStore';
const Forget = () => {
    const navigate = useNavigate();
    const authStore = useAuthStore();
    const [loading, setLoading] = useState(false);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
    } = useForm<Login>({
      resolver: yupResolver(loginValidationSchema),
    });
  
    const onSubmit: SubmitHandler<Login> = async (data: Login) => {
      setLoading(true);
      try {
        const response = await authStore.login(data);
        setLoading(false);
        if (response.success) {
          navigate('/dashboard');
        }
      } catch (error: any) {
        setLoading(false);
        const errorData = error.error;
        if (errorData?.validationErrors) {
          Object.keys(errorData.validationErrors).forEach((field) => {
            const fieldErrors = errorData.validationErrors[field];
            if (fieldErrors && fieldErrors[0]) {
              setError(field as keyof Login, {
                type: 'manual',
                message: fieldErrors[0],
              });
            }
          });
        } else {
          setError('general', {
            type: 'manual',
            message: error.message || 'An error occurred',
          });
        }
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
          <h2 className="text-3xl font-bold mb-4 text-opsh-primary">Recover Password</h2>
          <p className="text-gray-400 mb-6">Please enter your email address to recover</p>
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
              Enter your email address
            </label>
            <div className="text-red-500 text-sm">
              {errors.email?.message}
            </div>
          </div>
          <button className="w-full mt-3 bg-blue-600 text-white py-3 rounded-lg bg-opsh-secondary hover:bg-opsh-primary" type="submit" disabled={loading}>
            {loading ? 'Recovering ...' : 'Recover Password'}
          </button>
          
        </form>
      </div>
    </div>
  </div>
  )
}

export default Forget