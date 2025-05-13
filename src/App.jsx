import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";
import JoinHomieFix from "./components/JoinHomieFix";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import HomeAppliance from "./components/HomeAppliance";
import Electrician from "./components/Electrician";
import Plumber from "./components/Plumber";
import Cleaning from "./components/Cleaning";
import Cctv from "./components/Cctv";
import VehicleService from "./components/VehicleService";
import Carpentry from "./components/Carpentry";
import CareTaker from "./components/CareTaker";
import QuickOrder from "./components/QuickOrder";
import NavigationBar from "./components/NavigationBar";
import Terms from "./components/Terms";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
        <ScrollToTop />
      <NavigationBar />
      <QuickOrder />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/service/cleaning" element={<Cleaning />} />
        <Route path="/service/cctv" element={<Cctv />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<JoinHomieFix />} />
        <Route path="/services/:home-appliance" element={<HomeAppliance />} />
        <Route path="/services/:electrician" element={<Electrician />} />
        <Route path="/services/:plumber" element={<Plumber />} />
        <Route path="/services/:caretaker" element={<CareTaker />} />
        <Route path="/services/:vehicleService" element={<VehicleService />} />
        <Route path="/services/:carpentry" element={<Carpentry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
