import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlanTrip from "../pages/plan-a-trip/PlanTrip";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plan-a-trip" element={<PlanTrip />} />
    </Routes>
  );
};

export default Layout;
