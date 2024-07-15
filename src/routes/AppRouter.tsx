import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  LoginPage  from '../pages/auth/LoginPage';
import Registration from '../pages/auth/Registration';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter