import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from '../assets/Logo.svg';


import "../styles/Footer.css";




const Footer = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {


    navigate('/join?register=true');
  };
  return (
    <footer className="py-4" style={{ fontFamily: "Figtree", color: "#333333", backgroundColor: "#F7F7F7" }}>
      <div className="container mt-5">
        {/* Logo & Vector Images */}

        <div className="row align-items-center mb-4 footer-section">
          <div className="col-md-3 text-center text-md-start footer-logo ">
            <img src={logo} alt="Logo " className="img-fluid" />

          </div>
        </div>

        {/* Footer Links */}

        <div className="row text-center text-md-start ">
          {/* Company Section */}
          <div className="col-md-2 mb-5 footer-section">
            <h5 className="fw-400">Company</h5>
            <ul className=" list-unstyled footer-links " >
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>

          {/* For Customers Section */}
          <div className="col-md-2 mb-3 footer-section">
            <h5 className="fw-400">For Customers</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>

          {/* For Partners Section */}
          <div className="col-md-4 mb-3 mb-md-10 footer-section">
            <h5 className="fw-400">For Partners</h5>
            <ul className="list-unstyled footer-links">
              <li style={{ cursor: 'pointer' }}
                onClick={handleRegisterClick}>Register as a professional</li>
            </ul>

          </div>
          <div className="col-md-2 mb-3 mt-md-2 ms-auto social-links" >
            <h5 className="fw-400">Social links</h5>
            <div className="d-flex justify-content-md-end social-icons gap-3 ">


              <a href="https://www.instagram.com/homiefix.in?igsh=a2loMnp4Y2lpeHhl" target="_blank" rel="noopener noreferrer" >
                <FaInstagram className="" />
              </a>
              <a href="https://www.linkedin.com/company/homiefixindia/" target="_blank" rel="noopener noreferrer" >
                <FaLinkedinIn className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media Links */}

      <hr className="my-4 full-width" />
      {/* Copyright */}
      <div className="text-center ">
        <p className="mb-0 copyright-text">
          © Copyright 2025 <a href="https://enterkeysolutions.com/" target="_blank" rel="noopener noreferrer">Enterkey Solutions</a>. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;