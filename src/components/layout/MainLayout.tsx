import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import "../../style/style.css";
import Topbar from "../shared/Topbar";

const MainLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-[#212121]">
          <Sidebar />
        </div>
        <div id="main-layout" className="col-span-9">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
