import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import PlanTrip from "../pages/plan-a-trip/PlanTrip";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/plan-a-trip" element={<PlanTrip />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
