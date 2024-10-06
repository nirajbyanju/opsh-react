import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from 'react-router-dom';
import { useState } from "react";

const MainLayout: React.FC = () => {
  const [isExpand, setIsExpand] = useState(true);
  return (
    <div className="flex flex-row h-screen">
  <div className="">
  <Sidebar isExpand={isExpand} setIsExpand={setIsExpand} />
  </div>
  <div className="flex flex-col overflow-auto flex-1">
    <div className="">
    <Header isExpand={isExpand} setIsExpand={setIsExpand} />
    </div>
    <main className="flex-1">
      <Outlet />
    </main>
    <div className="mt-2">
      <Footer />
    </div>
  </div>
</div>

  );
};

export default MainLayout;
