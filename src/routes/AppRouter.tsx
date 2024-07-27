import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  LoginPage  from '../pages/auth/LoginPage';
import Registration from '../pages/auth/Registration';
import Dashboard from '../pages/auth/Dashboard';
import MainLayout from '../layouts/mainLayout/MainLayout';
import RequireAuth from '../components/authorize/RequireAuth';
import User from '../pages/setting/user/User';
import LogoutFallback from '../components/authorize/Logout';

const AppRouter = () => {
  const protectedPath = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={protectedPath}>
          <Route index element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/userProfile' element={<User/>}></Route>
        </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/logout" element={<LogoutFallback />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter