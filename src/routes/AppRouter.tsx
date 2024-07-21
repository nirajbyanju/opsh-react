import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  LoginPage  from '../pages/auth/LoginPage';
import Registration from '../pages/auth/Registration';
import Dashboard from '../pages/auth/Dashboard';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Registration />} />
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter