import React from "react";
import { Link } from 'react-router-dom';
import battery from "../assets/battery.jpg";
import battery1 from "../assets/battery1.jpg";
import wash from "../assets/wash.jpg";
import wash1 from "../assets/wash1.jpg";
import painting from "../assets/painting.jpg";
import painting1 from "../assets/painting1.jpg";
import wheel from "../assets/wheel.jpg";
import wheel1 from "../assets/wheel1.jpg";
import carAc from "../assets/carAc.jpg";
import carAc1 from "../assets/carAc1.jpg";
import blueman from "../assets/blueman.jpg";
import blueman1 from "../assets/blueman1.jpg";
import "../styles/Service.css";

const VehicleService = () => {
  return (
    <>
     
      <div className="service-page">
        <h2>Vehicle </h2>
        <div className="grid-container1">
        <Link to="/service-details" state={{ 
   image: battery1,
  title: 'Battery   Service', 
  description: [
    "We install new batteries and ensure proper connections.",
    "We test and replace weak or faulty batteries.",
    "We maintain battery performance for reliable vehicle operation."
  ]
}}>     <div><img src={battery} alt="Battery" /><p>Battery</p></div></Link>
      <Link to="/service-details" state={{ 
        image: wash1,
       title: 'Water Wash   Service', 
       description: [
         "We provide exterior cleaning to remove dirt and grime.",
         "We clean interiors for a fresh and htgienic environment.",
         "We offer detailed washing for a spotless finish."
       ]
     }}>   <div><img src={wash} alt="Wash" /><p>Wash</p></div></Link>  
       <Link to="/service-details" state={{ 
          image: painting1,
         title: 'Denting and Painting   Service', 
         description: [
           "We repair dents and scratches to restore the vehicle's look.",
           "We provide high-quality painting for a smooth finish.",
           "We ensure long-lasting results with durable materials."
         ]
       }}>  <div><img src={painting} alt="Painting" /><p>Painting</p></div></Link> 
        <Link to="/service-details" state={{ 
           image: wheel1,
          title: 'Wheel   Service', 
          description: [
            "We align and balance wheels for smooth driving.",
            "We repair or replace damaged tires.",
            "We check tire pressure and condition for safety."
          ]
        }}> <div><img src={wheel} alt="Wheel" /><p>Wheel</p></div></Link> 
        <Link to="/service-details" state={{ 
           image: carAc1,
          title: 'Car AC   Service', 
          description: [
            "We inspect and repair AC systems for efficient cooling.",
            "We refill refrigerants and fix leaks.",
            "We maintain AC performance for a comfortable ride."
          ]
        }}> <div><img src={carAc} alt="Car AC" /><p>Car AC</p></div></Link> 
       <Link to="/service-details" state={{ 
          image: blueman1,
         title: 'Vehicle Checkup   Service', 
         description: [
           "We inspect the vehicle thoroughly for mechanical and electrical issues.",
           "We diagnose potential problems to prevent breakdowns.",
           "We ensure the vehicle is in optimal working condition."
         ]
       }}>   <div><img src={blueman} alt="Vehicle Check" /><p>Vehicle Check</p></div></Link>
        </div>
      </div>
     
    </>
  );
};

export default VehicleService;