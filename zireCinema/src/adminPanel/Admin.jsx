import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import UsersAdmin from "./pages/UsersAdmin";
import SignInAdmin from "./pages/SignInAdmin";

const Admin = () => {
  let { userId } = useParams();
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignInAdmin />} />
        <Route path=":userId" element={<UsersAdmin />} />
      </Routes>
    </div>
  );
};

export default Admin;
