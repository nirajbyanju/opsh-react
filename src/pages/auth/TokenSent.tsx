import AuthSidebar from '../../components/auth/AuthSidebar';
const TokenSent = () => {
  return (
    <div className="flex h-screen">
    {/* Left Side */}
    <AuthSidebar />
    {/* Right Side */}
    <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-10">
      <div className="w-full max-w-md">
        <div className='flex flex-col justify-center items-center gap-3'>
          <h2 className="text-2xl font-bold text-opsh-primary">Token Sent to Email</h2>
          <p className="text-gray-400">A special unique token was sent to your email</p>
          <h5 className='text-noramal font-semibold text-opsh-primary'>nirajbyanju@gmail.com</h5>
          <p className="text-gray-400">Please check your email to proceed further.</p>
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default TokenSent