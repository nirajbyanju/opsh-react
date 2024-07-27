import { MdChevronRight } from "react-icons/md";
const profile = () => {
    return (
        <div className="w-full mx-auto bg-white p-4 sm:p-6 lg:px-10 rounded-lg shadow">
            <div className="flex flex-col sm:flex-row items-center mb-4">
                <h2 className="text-bse font-medium text-opsh-primary">Basic Informations</h2>
                <hr className="border-t-2 border-opsh-primary flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
            </div>
            <form>
                <div className="mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-normal text-opsh-darkgrey">User ID</label>
                            <input type="text" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
                                <option>Mr.</option>
                                <option>Mrs.</option>
                                <option>Ms.</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input type="text" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                            <input type="text" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date of Birth (A.D.)</label>
                            <input type="date" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                            <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
                                <option>Select</option>
                                <option>Single</option>
                                <option>Married</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gender</label>
                            <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="tel" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row items-center mb-4">
                        <h2 className="text-bse font-medium text-opsh-primary">Location Information</h2>
                        <hr className="border-t-2 border-opsh-primary flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country</label>
                            <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
                                <option>Select</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">State / Province</label>
                            <input type="text" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">District</label>
                            <input type="text" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Local Bodies</label>
                            <input type="text" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Street Name</label>
                            <input type="text" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Postal / Zip Code</label>
                            <input type="text" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row items-center mb-4">
                        <h2 className="text-bse font-medium text-opsh-primary">Additional Information</h2>
                        <hr className="border-t-2 border-opsh-primary flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nationality</label>
                            <input type="text" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Religion</label>
                            <input type="text" placeholder="Placeholder" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Language</label>
                            <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
                                <option>Select</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Driving License</label>
                            <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
                                <option>Select</option>
                            </select>
                        </div>
                        <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex items-center space-x-4">
                            <label className="block text-sm font-medium text-gray-700">Two Wheeler</label>
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                            <label className="block text-sm font-medium text-gray-700">Four Wheeler</label>
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-5">
                    <button type="button" className="px-4 py-2 bg-opsh-danger text-white rounded hover:bg-red-700">Cancel & Skip</button>
                    <button type="submit" className="px-5 py-2 flex items-center gap-1 bg-opsh-success text-white rounded hover:bg-green-700">Next <MdChevronRight className=" text-2xl" /></button>
                </div>
            </form>
        </div>
    )
}

export default profile
