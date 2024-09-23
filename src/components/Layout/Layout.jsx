import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Layout.scss";
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <div className="sidebarWrapper">
          <Sidebar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
