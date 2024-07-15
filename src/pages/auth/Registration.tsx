import React, { useState } from 'react';
import axios from 'axios';

import AuthSidebar from '../../components/auth/AuthSidebar';
import helloImage from '@/assets/auth/hello.avif';
import './auth.scss';

const Registration: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        phoneNumber: '',
        password: '',
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (formData.password !== formData.c_password) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('https://back.opportunitiessharing.com/register', formData);
            console.log(response.data);
            // Handle successful registration (e.g., redirect to login)
        } catch (err) {
            console.error(err);
            setError("Registration failed. Please try again.");
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
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 mt-5 flex items-center gap-4 relative">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full border-2 rounded-lg border-opsh-darkgrey block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-black dark:focus:border-blue-500 focus:outline-none peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="firstName"
                                    className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
                                >
                                    First Name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full border-2 rounded-lg border-opsh-darkgrey block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="lastName"
                                    className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
                                >
                                    Last Name
                                </label>
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="userName"
                                value={formData.userName}
                                onChange={handleChange}
                                className="w-full border-2 rounded-lg border-opsh-darkgrey block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="userName"
                                className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
                            >
                                User Name
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-2 rounded-lg border-opsh-darkgrey block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="email"
                                className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
                            >
                                Email
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full border-2 rounded-lg border-opsh-darkgrey block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-dark dark:focus:border-blue-500 focus:outline-none peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="phoneNumber"
                                className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
                            >
                                Phone Number
                            </label>
                        </div>
                        <div className="mb-4 flex items-center gap-4 relative">
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full border-2 rounded-lg border-opsh-darkgrey block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-black dark:focus:border-blue-500 focus:outline-none peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="password"
                                    className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="c_password"
                                    value={formData.c_password}
                                    onChange={handleChange}
                                    className="w-full border-2 rounded-lg border-opsh-darkgrey block py-3.5 ps-6 pe-0 text-sm text-gray-900 bg-transparent focus:bg-white appearance-none dark:text-black dark:focus:border-blue-500 focus:outline-none peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="c_password"
                                    className="z-10 absolute text-md bg-white text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:translate-x-5 peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-2 rtl:peer-focus:left-auto"
                                >
                                    Confirm Password
                                </label>
                            </div>
                        </div>
                        {error && (
                            <div className="text-red-500 text-sm mb-4">
                                {error}
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full py-3 bg-opsh-primary text-white rounded-lg text-sm font-bold hover:bg-opsh-secondary"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
