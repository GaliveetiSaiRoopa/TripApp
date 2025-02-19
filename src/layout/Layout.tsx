import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlanTrip from "../pages/plan-a-trip/PlanTrip";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
