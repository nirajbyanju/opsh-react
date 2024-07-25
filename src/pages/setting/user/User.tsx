import './User.scss'
const User = () => {
  return (
    <div className="flex flex-col items-center  bg-gray-100 w-full">
      <div className="w-full  bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <img
            src="profile_picture_url" // Replace with actual profile picture URL
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">Nag Byaruh</h2>
            <p className="text-sm text-gray-600">Title | Email | Phone</p>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">User ID</label>
              <input
                type="text"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Middle Name</label>
              <input
                type="text"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Marital Status</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Gender</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Country</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">State/Province</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">District</label>
              <input
                type="text"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Local Bodies</label>
              <input
                type="text"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Street Name</label>
              <input
                type="text"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal / Zip Code</label>
              <input
                type="text"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Nationality</label>
              <input
                type="text"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Religion</label>
              <input
                type="text"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Language</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Driving License</label>
              <input
                type="text"
                placeholder="Place holder"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block text-gray-700">Vehicle Type</label>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-700">Two Wheeler</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-700">Four Wheeler</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default User;