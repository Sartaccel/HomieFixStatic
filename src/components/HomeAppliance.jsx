import React from "react";
import { Link } from 'react-router-dom';
import ACimage from "../assets/ACimage.jpg";
import ACimage1 from "../assets/ACimage1.jpg";
import microwave from "../assets/microwave.jpg";
import microwave1 from "../assets/microwave1.jpg";
import washingmachine from "../assets/washing machine.jpg";
import washingmachine1 from "../assets/washing machine1.jpg";
import TV from "../assets/TV.jpg";
import TV1 from "../assets/TV1.jpg";
import waterpurifier from "../assets/waterpurifier.jpg";
import waterpurifier1 from "../assets/waterpurifier1.jpg";
import inverter from "../assets/inverter.jpg";
import inverter1 from "../assets/inverter1.jpg";
import fridge from "../assets/fridge.jpg";
import fridge1 from "../assets/fridge1.jpg";
import fan from "../assets/fan.jpg";
import fan1 from "../assets/fan1.jpg";
import geyser from "../assets/geyser.jpg";
import geyser1 from "../assets/geyser1.jpg";
import "../styles/Service.css";

const HomeAppliance = () => {
  return (
    <>
      
      <div className="service-page home-appliance">
  <h2  className="fixed-heading">Home Appliance</h2>
  <div className="grid-container1">
   <Link to="/service-details" state={{ 
       image: ACimage1,
       title: 'AC Repair and Service', 
       description: [
         "We begin by conducting a detailed inspection of your AC unit, checking for any issues",
         "Fix cooling problems and leaks",
         "Clean the unit for efficient operation"
       ]
     }}>
               <div  className="service-card">
                 <img src={ACimage} alt="AC" />
                 <p>AC</p>
               </div>
               </Link>
   <Link to="/service-details" state={{ 
       image: microwave1,
       title: 'Microwave  Service', 
       description: [
         "Install microwaves,ensuring proper setup and safe operation",
         "Fix issues such as heating problems,malfunctioning buttons,or power failures.",
         "Clean and inspect microwaves to maintain optimal performance."
       ]
     }}> <div className="service-card"><img src={microwave} alt="Microwave" className="service-img" /><p>Microwave</p></div></Link>
    <Link to="/service-details" state={{ 
      image: washingmachine1,
       title: 'Washing Machine  Service', 
       description: [
         "Install washing machines,ensuring proper connections and functionality",
         "Fix issues such as drainage problems or motor malfunctions.",
         "Clean and inspect washing machines to ensure efficient performance."
       ]
     }}> <div className="service-card"><img src={washingmachine} alt="Washing Machine" className="service-img" /><p>Washing Machine</p></div></Link>
    <Link to="/service-details" state={{ 
      image: TV1,
     title: 'TV    Service', 
     description: [
       "We install televisions,ensuring proper setup and connection.",
       "Fix issues like screen malfunctions,sound problems,or connectivity issues.",
       "Clean and inspect televisions to maintain clear display and sound quality."
     ]
   }}><div className="service-card"><img src={TV} alt="TV" className="service-img" /><p>TV</p></div></Link> 
     <Link to="/service-details" state={{ 
      image: waterpurifier1,
     title: 'Water Purifier   Service', 
     description: [
       "We install water purifiers to ensure safe and clean drinking water.",
       "Fix issues like poor water quality or malfunctioning filters.",
       "Clean and replace filters to maintain the purifiers efficiency."
     ]
   }}> <div className="service-card"><img src={waterpurifier} alt="Water Purifier" className="service-img" /><p>Water Purifier</p></div></Link>
     <Link to="/service-details" state={{ 
       image: inverter1,
      title: 'Inverter and stabilizers   Service', 
      description: [
        "We install inverters and stabilizers to protect appliances from power fluctuations.",
        "Fix issues such as faulty inverters or malfunctioning stabilizers.",
        "We check and maintain inverters and stabilizers to ensure reliable performance."
      ]
    }}><div className="service-card"><img src={inverter} alt="Inverter" className="service-img" /><p>Inverter</p></div></Link>
    <Link to="/service-details" state={{ 
      image: fridge1,
     title: 'Fridge  Service', 
     description: [
       "We install refrigerators,ensuring proper placement and functioning.",
       "Fix issues such as cooling problems or faulty electrical components.",
       "We clean and inspect fridges to ensure smooth operation."
     ]
   }}> <div className="service-card"><img src={fridge} alt="Fridge" className="service-img" /><p>Fridge</p></div></Link>
   <Link to="/service-details" state={{ 
    image: fan1,
   title: 'Fan   Service', 
   description: [
     "We install ceiling and wall fans securely for optimal airflow.",
     "Fix issues such as wobbling or irregular speed.",
     "We clean and inspect fans to ensure smooth operation."
   ]
 }}>   <div className="service-card"><img src={fan} alt="Fan" className="service-img" /><p>Fan</p></div></Link>
    <Link to="/service-details" state={{ 
      image: geyser1,
     title: 'Geyser   Service', 
     description: [
       "We install geysers for safe and reliable heating.",
       "We repair leaks and restore hot water supply.",
       "We maintain geysers with routine checks and cleaning."
     ]
   }}><div className="service-card"><img src={geyser} alt="Geyser" className="service-img" /><p>Geyser</p></div></Link> 
  </div>
</div>

      
    </>
  );
};

export default HomeAppliance;