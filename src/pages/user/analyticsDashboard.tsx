import { RiPencilLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const analyticsDashboard = () => {
    return (
        <div className="p-8">
            <div className="mb-8">

                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-opsh-primary/5">
                            <th className="p-4 font-medium text-sm text-center">Name</th>
                            <th className="p-4 font-medium text-sm text-center">UserCode</th>
                            <th className="p-4 font-medium text-sm text-center">Email</th>
                            <th className="p-4 font-medium text-sm text-center">Role</th>
                            <th className="p-4 font-medium text-sm text-center">Status</th>
                            <th className="p-4 font-medium text-sm text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                            <td className="p-4 text-center text-sm border-b flex items-center justify-center">
                                <div className="border-primary border-2 rounded-full w-8 h-8 overflow-hidden mr-2">
                                    <img src="/src/assets/auth/sildingImg.png" alt="profile-image" className="rounded-full w-full h-full object-cover" />
                                </div>
                                <div>
                                    Niraj Byanju
                                </div>
                            </td>

                            <td className="p-4 text-center text-sm border-b">opsh-2024-01</td>
                            <td className="p-4 text-center text-sm border-b">nirajbyanju1234@GMAIL.COM</td>
                            <td className="p-4 text-center text-sm border-b">adminstration</td>
                            <td className="p-4 text-center text-sm border-b">Active</td>

                            <td className="p-4 border-b text-center">
                                <div className="flex space-x-2 justify-center">
                                    <button className="p-2 rounded text-xl"><RiPencilLine /></button>
                                    <button className="p-2 rounded text-xl"><MdOutlineRemoveRedEye /></button>
                                    <button className="p-2 rounded text-xl"><RiDeleteBin5Line /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default analyticsDashboard