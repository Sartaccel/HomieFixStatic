import React from "react";
import { Link } from 'react-router-dom';
import switchsocket from "../assets/switchsocket.png";
import switchsocket1 from "../assets/switchsocket1.png";
import wiring from "../assets/wiring.jpg";
import wiring1 from "../assets/wiring1.jpg";
import doorbell from "../assets/doorbell.jpg";
import doorbell1 from "../assets/doorbell1.jpg";
import MCB from "../assets/MCB.jpg";
import MCB1 from "../assets/MCB1.jpg";
import light from "../assets/light.jpg";
import light1 from "../assets/light1.jpg";
import "../styles/Service.css";

const Electrician = () => {
  return (
    <>
    
      <div className="service-page">
        <h2>Electrician </h2>
        <div className="grid-container1">
        <Link to="/service-details" state={{ 
   image: switchsocket1,
  title: 'Switch & Socket   Service', 
  description: [
    "We securely install switches and sockets to ensure reliable power access.",
    "We replace damaged or outdated switches and sockets for safe usage .",
    "We customize installations based on your home or office layout."
  ]
}}>   <div><img src={switchsocket} alt="Switch & Socket" /><p>Switch & Socket</p></div></Link>
       <Link to="/service-details" state={{ 
         image: wiring1,
        title: 'Wiring   Service', 
        description: [
          "We install new wiring systems with a focus on safety and efficiency.",
          "We repair faulty wiring to eliminate hazards and restore functionality.",
          "We upgrade old wiring to meet modern standards and improve performance."
        ]
      }}>   <div><img src={wiring} alt="Wiring" /><p>Wiring</p></div></Link> 
    <Link to="/service-details" state={{ 
       image: doorbell1,
      title: 'doorbell   Service', 
      description: [
        "We install doorbell with secure wiring and proper placement.",
        "We repair faulty doorbells and fix wiring issues.",
        "We maintain and upgrade doorbell systems for consistent performance."
      ]
    }}>   <div><img src={doorbell} alt="Doorbell" /><p>Doorbell</p></div></Link>   
         <Link to="/service-details" state={{ 
           image: MCB1,
          title: 'MCB and Submeter   Service', 
          description: [
            "We install MCBs to protect your electrical circuits from overloads.",
            "We set up submeters to help monitor and manage electricity usage.",
            "We ensure precise and secure installations for reliable performance."
          ]
        }}> <div><img src={MCB} alt="MCB" /><p>MCB</p></div></Link> 
        <Link to="/service-details" state={{ 
           image: light1,
          title: 'Light/Wall Light   Service', 
          description: [
            "We install lighting fixtuers with safe wiring and optimal placement.",
            "We repair or replace faulty lights to restore brightness.",
            "We ensure proper setup for efficient and long-lasting lighting."
          ]
        }}> <div><img src={light} alt="Light" /><p>Light</p></div></Link> 
        </div>
      </div>
      
    </>
  );
};

export default Electrician;