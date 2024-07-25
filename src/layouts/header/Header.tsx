import React from 'react';
import { IoNotificationsOutline, IoReorderThreeOutline } from "react-icons/io5";
import { GrChat } from "react-icons/gr";
import sildingImg from '../../assets/auth/sildingImg.png';

interface HeaderProps {
    isExpand: boolean;
    setIsExpand: (isExpand: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isExpand, setIsExpand }) => {
    return (
        <header className="bg-white shadow-md">
            <div className="flex items-center justify-between p-4">
                <div className="flex gap-3" style={{ width: '500px' }}>
                    <button
                        className='p-1 text-gray-600 hover:bg-gray-100 rounded-md'
                        onClick={() => setIsExpand(!isExpand)}
                    >
                        <IoReorderThreeOutline className='text-4xl' />
                    </button>
                    <form className="flex items-center w-full">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search branch name..." required />
                        </div>
                        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                </div>

                <div className="flex items-center space-x-4">
                    <button className='p-2 text-gray-600 hover:bg-gray-100 rounded-md'><IoNotificationsOutline className='text-2xl' /></button>
                    <button className='p-2 text-gray-600 hover:bg-gray-100 rounded-md'><GrChat className='text-2xl' /></button>
                    <div className='flex flex-row gap-4'>
                        <div>
                            <span className='block text-sm font-medium text-opsh-primary'>Niraj Byanju</span>
                            <span className='block text-xs text-opsh-grey'>Administration</span>
                        </div>
                        <div className='border-opsh-primary border-2 rounded-full w-10 h-10'>
                            <img src={sildingImg} alt="profile-image" className="rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
