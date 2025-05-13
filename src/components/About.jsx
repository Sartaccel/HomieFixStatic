import React from 'react';
import { useNavigate } from 'react-router-dom';
import bigLogo from "../assets/bigLogo.jpg";
import "../styles/About.css";
import NavigationBar from './NavigationBar';
import { FaArrowLeftLong } from "react-icons/fa6";
import Footer from './Footer'; 

const About = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Navigate to home
  };

  return (
    <>
    
     <div className="left-arrow1"  onClick={handleBack}>
          <FaArrowLeftLong /> About us
            </div>
    <div className='about' >
     <h6>About us</h6> 
    </div>
    <div className='about-container'>
        <div className="about-content">
          <img src={bigLogo} alt="Logo" className="about-logo" />
          <div className="about-text mt-4">
            <h5>HomieFix - Your Trusted Home Service Platform</h5>
            <p>
              HomieFix is a smart technology platform that connects you with top-rated professionals for all your home service
              needs. From cleaning, plumbing, and electrical repairs to beauty treatments, appliance repair, painting, and more,
              we bring expert services right to your doorstep at a time that suits you.
            </p>
            <p>
              We are committed to delivering high-quality, reliable, and standardized services. To ensure this, we carefully
              select and empower our service professionals with cutting-edge technology, expert training, quality tools,
              financial support, and insurance—helping them succeed while providing you with the best experience.
            </p>
          </div>
        </div>
      </div>
      <div className='vision-container'>
        <h6>Our Vision</h6>
        <p>To revolutionize home services, making them seamless, efficient, and more accessible than ever before.</p>
      </div>
      <br/>
      <br/>
      <br/>
    <Footer/>
    </>
  );
};

export default About;