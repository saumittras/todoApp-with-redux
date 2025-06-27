import React from "react";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

const Layout: React.FC = () => {
  return (
    <div>
      <nav className="navbar max-w-full bg-amber-300 py-6">
        <NavBar />
      </nav>
      <main className="main">
        <Outlet />
      </main>

      <footer className="footer"></footer>
    </div>
  );
};

export default Layout;
