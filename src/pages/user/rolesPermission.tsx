const rolesPermission = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Male/Female Counts */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Users</h2>
          <div className="flex justify-between mt-4">
            <div className="text-center">
              <div className="text-2xl font-bold">2,450</div>
              <div className="text-sm text-gray-500">Female</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">3,250</div>
              <div className="text-sm text-gray-500">Male</div>
            </div>
          </div>
        </div>

        {/* Male/Female Ratio */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Male/Female Ratio</h2>
          <div className="mt-4">
            {/* Example of a circular progress chart */}
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto">
              <div className="flex justify-center items-center h-full">
                <span className="text-xl font-bold">5350</span>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="text-center">
                <div className="text-xl font-bold">2,500</div>
                <div className="text-sm text-gray-500">Male</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">2,850</div>
                <div className="text-sm text-gray-500">Female</div>
              </div>
            </div>
          </div>
        </div>

        {/* Group & Users */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Group & Users</h2>
          <ul className="mt-4">
            {['Group One', 'Group Two', 'Group Three', 'Group Four'].map((group, index) => (
              <li key={index} className="flex justify-between py-2 border-b">
                <span>{group}</span>
                <span className="text-green-500">18 Users</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Activity List */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Activity List</h2>
          <ul className="mt-4">
            {Array(6).fill('').map((_, index) => (
              <li key={index} className="flex justify-between py-2 border-b">
                <span>KabindraThapa</span>
                <span className={`${index === 5 ? 'text-red-500' : 'text-green-500'}`}>
                  {index === 5 ? 'Active 10 Days Ago' : 'Active 5 Hours Ago'}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Login Status */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Login Status</h2>
          <ul className="mt-4">
            {Array(6).fill('').map((_, index) => (
              <li key={index} className="flex justify-between py-2 border-b">
                <span>KabindraThapa</span>
                <span className={`${index === 5 ? 'text-red-500' : 'text-green-500'}`}>
                  {index === 5 ? 'Active 10 Days Ago' : 'Active 5 Hours Ago'}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Most Engaged */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Most Engaged</h2>
          <ul className="mt-4">
            {Array(7).fill('').map((_, index) => (
              <li key={index} className="flex justify-between py-2 border-b">
                <span>KabindraThapa</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default rolesPermission