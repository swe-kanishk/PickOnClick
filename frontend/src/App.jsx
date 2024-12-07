import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import GetStarted from "./pages/GetStarted";
import UserProtectedWraapper from "./pages/UserProtectedWraapper";
import UserLogout from "./pages/UserLogout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route
          path="/home"
          element={
            <UserProtectedWraapper>
              <Home />
            </UserProtectedWraapper>
          }
        />
        <Route
          path="/logout"
          element={
            <UserProtectedWraapper>
              <UserLogout />
            </UserProtectedWraapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
