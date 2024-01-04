import "./index.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ServicesPage,
  ContactPage,
  MembersShipsPage,
  RegisterPage,
  LoginPage
} from "./pages/index";

const App = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/memberships" element={<MembersShipsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
