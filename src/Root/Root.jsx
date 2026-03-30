import React from "react";
import Navbar from "../components/Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Shared/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[50vh]">    
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
