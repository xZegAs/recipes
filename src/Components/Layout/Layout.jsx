import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      <SideBar />
      <div className="p-4 sm:ml-64 overflow-hidden min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
