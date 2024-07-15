import Slider from '../../components/slider/Slider';
const AuthSidebar = () => {
  return (
    <div style={{ backgroundColor: '#E1E6F2' }} className="relative w-full md:w-1/3 flex-col items-center justify-center p-10 hidden md:flex xs:hidden">
        <div className="w-full max-w-xs text-center relative">
          <div className="relative">
            <Slider />
          </div>
          <h1 className="text-4xl font-semibold mt-20 mb-4 text-opsh-primary">Welcome</h1>
          <p className="text-sm text-gray-600 font-medium">We welcome you to our interactive learning and training platform.</p>
        </div>
        <p className="text-sm font-medium text-gray-600 mt-2 absolute bottom-10 right-10 absolute">Version 0.1.00</p>
      </div>
  )
}

export default AuthSidebar