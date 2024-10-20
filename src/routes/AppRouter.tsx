import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  LoginPage  from '../pages/auth/LoginPage';
import Registration from '../pages/auth/Registration';
import Dashboard from '../pages/auth/Dashboard';
import MainLayout from '../layouts/mainLayout/MainLayout';
import RequireAuth from '../components/authorize/RequireAuth';
import User from '../pages/setting/user/User';
import LogoutFallback from '../components/authorize/Logout';
import Forget from '../pages/auth/Forget';
import TokenSent from '../pages/auth/TokenSent';
import RolesPermission from '../pages/user/rolesPermission';
import AnalyticsDashboard from '../pages/user/analyticsDashboard';
import VacancyList from '../pages/vacancy/vacancyList';
import VacancyAdd from '../pages/vacancy/vacancyAdd';
import CompanyProfile from '../pages/company/CompanyProfile';
import ProfileList from '@/pages/company/ProfileList';
import EditProfile from '@/pages/company/EditProfile';
import ManageVacancy from '../pages/vacancy/ManageVacancy';
import Shortlisted from '../pages/vacancy/Shortlisted';
import AllApplicants from '../pages/vacancy/AllApplicants';
import CvInfo from '../pages/vacancy/CvInfo';
import Test from '../pages/test';

import CvPortfolio from '../pages/setting/cvPortfolio/CvPortfolio';
import CvInfoAdding from '../pages/setting/cvPortfolio/CvInfo';

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
          <Route path="/analyticsDashboard" element={<AnalyticsDashboard/>}></Route>
          <Route path="/rolesPermission" element={<RolesPermission/>}></Route>

          // vacancy
          <Route path='/vacancylist' element={<VacancyList/>}></Route>
          <Route path='/vacancyAdd' element={<VacancyAdd/>}></Route>
          <Route path='/manageVacancy' element={<ManageVacancy/>}></Route>
          <Route path='/manageVacancy/AllApplicants' element={<AllApplicants/>}></Route>
          <Route path='/shortlisted' element={<Shortlisted/>}></Route>
          <Route path='/cvinfo' element={<CvInfo/>}></Route>

          //company
          <Route path='/companyProfile' element={<ProfileList/>}></Route>
          <Route path='/companyProfile/create' element={<CompanyProfile/>}></Route>
          <Route path='/companyProfile/edit/:id' element={<EditProfile />}></Route>
          
          
          //Settings
          <Route path='/userProfile' element={<User/>}></Route>
          <Route path='/cvProtfolio' element={<CvPortfolio/>} ></Route>
          <Route path='/cvInfoAdding' element={<CvInfoAdding/>} ></Route>

        </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/logout" element={<LogoutFallback />} />
      <Route path="/forget" element={<Forget/>}/>
      <Route path="/tokenSent" element={<TokenSent/>}></Route>
      <Route path="/test" element={<Test/>}></Route>
     
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter