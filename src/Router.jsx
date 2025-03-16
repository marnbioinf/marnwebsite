import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import DarkLandingPage from "./pages/DarkLandingPage";
import SignIn from "./pages/SignIn";
import ServicesPage from "./pages/ServicesPage";
import ProfilePage from "./pages/ProfilePage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<DarkLandingPage />} />
      {/* Signup Page */}
      <Route path="/signup" element={<SignUp />} />
      {/* Signin Page */}
      <Route path="/signin" element={<SignIn />} />
      {/* Services Page */}
      <Route path="/services" element={<ServicesPage />} />
      {/* Profile Page */}
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRouter;
