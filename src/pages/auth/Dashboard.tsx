
const Dashboard = () => {
  return (
    <div>
        <main className="p-6">
        <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 bg-white rounded-md shadow-md">
            <h2 className="text-sm font-medium text-gray-500">Vacancy</h2>
            <p className="text-xl font-semibold text-gray-800">16</p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h2 className="text-sm font-medium text-gray-500">Opportunity</h2>
            <p className="text-xl font-semibold text-gray-800">244</p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h2 className="text-sm font-medium text-gray-500">Lesson</h2>
            <p className="text-xl font-semibold text-gray-800">58</p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h2 className="text-sm font-medium text-gray-500">User</h2>
            <p className="text-xl font-semibold text-gray-800">600</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-md shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Performance Graph</h2>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-600 bg-gray-100 rounded-md">10 Jan, 2023 - 5 Jan, 2024</button>
              <button className="p-2 text-gray-600 bg-gray-100 rounded-md">Filter by Lesson</button>
            </div>
          </div>
          <canvas id="performanceGraph"></canvas>
        </div>

        <div className="p-6 mt-6 bg-white rounded-md shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Success Rates</h2>
            <button className="p-2 text-gray-600 bg-gray-100 rounded-md">Filter by Lesson</button>
          </div>
          <div className="flex items-center justify-between">
            <canvas id="successRates"></canvas>
            <div className="w-48 p-4 bg-gray-100 rounded-md">
              <p className="text-sm font-medium text-gray-500">Above 70% scores</p>
              <p className="text-xl font-semibold text-gray-800">75%</p>
              <p className="text-sm font-medium text-gray-500">Below 70% scores</p>
              <p className="text-xl font-semibold text-gray-800">25%</p>
            </div>
          </div>
        </div>

        <div className="p-6 mt-6 bg-white rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Calendar</h2>
        </div>
      </main>
    </div>
  )
}

export default Dashboard