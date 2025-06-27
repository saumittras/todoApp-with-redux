import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/NavsBar";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>

      <footer className="footer"></footer>
    </div>
  );
};

export default Layout;
