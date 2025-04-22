import React from "react";
import { Link } from 'react-router-dom';
import baby from "../assets/baby.jpg";
import baby1 from "../assets/baby1.jpg";
import mother from "../assets/mother.jpg";
import mother1 from "../assets/mother1.jpg";
import caring from "../assets/caring.jpg";
import caring1 from "../assets/caring1.jpg";
import physiotherapy from "../assets/physiotherapy.jpg";
import homecare from "../assets/homecare.jpg";
import homecare1 from "../assets/homecare1.jpg";
import "../styles/Service.css";

const CareTaker = () => {
  return (
    <>
    
      <div className="service-page">
        <h2>Care Taker</h2>
        <div className="grid-container1">
        <Link to="/service-details" state={{ 
   image: baby1,
  title: 'Child Care   Service', 
  description: [
    "We ensure a secure environment with constant supervision.",
    "We engage children in educational and enjoyable activities.",
    "We prepare healthy meals to support their growth."
  ]
}}>   <div><img src={baby} alt="Child Care" /><p>Child Care</p></div></Link>
       <Link to="/service-details" state={{ 
   image: physiotherapy,
  title: 'Physiotherapy   Service', 
  description: [
    "We enhance movement,strenth and balance to aid recovery from surgeries or injuries.",
    "We help manage chronic conditions like arthritis by reducing pain and improving daily function.",
    "We customize treatment plans to meet your needs,ensuring effective therapy at home."
  ]
}}>  <div><img src={physiotherapy} alt="Physiotherapy" /><p>Physiotherapy</p></div></Link> 
       <Link to="/service-details" state={{ 
   image: mother1,
  title: 'Old Age Care   Service', 
  description: [
    "We assist with daily activities like bathing,dressing and grooming to ensure comfort and dignity.",
    "We provide timely medication reminders and monitor health conditions to maintain well-being.",
    "We engage in social interactions to reduce loneliness and enhance quality of life"
  ]
}}>   <div><img src={mother} alt="Old Age care" /><p>Old Age Care</p></div></Link> 
         <Link to="/service-details" state={{ 
   image: caring1,
  title: ' Companion Support', 
  description: [
    "We provide meaningful companionship to alleviate loneliness and promote mental well-being.",
    "We help with light housekeeping,meal preparation and errands to support independent living.",
    "We offer transportation to appointments and social events,keeping seniors active and connected ."
  ]
}}> <div><img src={caring} alt="Companion Support" /><p>Companion Support</p></div></Link> 
        <Link to="/service-details" state={{ 
   image: homecare1,
  title: 'Home Nurse   Service', 
  description: [
    "We create personalized healthcare plans tailored to each individuals needs and preferences.",
    "We administer medications,perform wound care and monitor health conditions effectively.",
    "We assist with physical therapy and recovery processes to restore independence."
  ]
}}>   <div><img src={homecare} alt="Home Nursing" /><p>Home Nursing</p></div></Link> 
        </div>
      </div>
      
    </>
  );
};

export default CareTaker;