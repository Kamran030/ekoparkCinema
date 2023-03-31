import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Userpages/Home/Home";
import AboutUs from "../Userpages/aboutUs/AboutUs";
import Admin from "../adminPanel/Admin";

const Dashboard = () => {
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default Dashboard;
