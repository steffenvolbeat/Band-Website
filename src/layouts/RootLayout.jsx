import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
//import Skiplinks from "../components/ui/Skiplinks";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header>
        <NavBar />
      </header>
      <main id="main" className="p-6 md:p-10">
        <Outlet />
      </main>
        <Footer />
    </div>
  );
}
