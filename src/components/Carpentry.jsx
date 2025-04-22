import React from "react";
import { Link } from 'react-router-dom';
import bed from "../assets/bed.jpg";
import bed1 from "../assets/bed1.jpg";
import cupboard from "../assets/cupboard.jpg";
import cupboard1 from "../assets/cupboard1.jpg";
import door from "../assets/door.jpg";
import door1 from "../assets/door1.jpg";
import windowimage from "../assets/windowimage.jpg";
import windowimage1 from "../assets/windowimage1.jpg";
import drillimage from "../assets/drillimage.jpg";
import drillimage1 from "../assets/drillimage1.jpg";
import furniture from "../assets/furniture.jpg";
import furniture1 from "../assets/furniture1.jpg";

import "../styles/Service.css";

const Carpentry = () => {
  

  return (
    <>
      
      <div className="service-page">
        <h2>Carpentry</h2>
        <div className="grid-container1">
        <Link to="/service-details" state={{ 
   image: bed1,
  title: 'Bed   Service', 
  description: [
    "We assemble and install beds securely to ensure proper usage.",
    "We repair broken frames, loose joints and fix squeaky parts.",
    "We repair alignment and tightening services to enhance bed durability."
  ]
}}>
          <div>
            <img src={bed} alt="Bed" />
            <p>Bed</p>
          </div>
          </Link>
          <Link to="/service-details" state={{ 
   image: cupboard1,
  title: 'Cupboard & drawer   Service', 
  description: [
    "We install cupboards and drawers with precise alignment for smooth operation.",
    "Fix stuck drawers,broken hinges and other functional issues.",
    "We optimize storage capacity by ensuring proper adjustments and usability."
  ]
}}>
          <div>
            <img src={cupboard} alt="Cupboard" />
            <p>Cupboard & Drawer</p>
          </div></Link>
          <Link to="/service-details" state={{ 
   image: door1,
  title: 'Door   Service', 
  description: [
    "We install doors with perfect alignment and secure fixtures.",
    "We replace or repair door frames,locks and handles for smooth operations.",
    "We ensure doors close properly,preventing drafts and improving security."
  ]
}}>
          <div>
            <img src={door} alt="Door" />
            <p>Door</p>
          </div></Link>
          <Link to="/service-details" state={{ 
   image: windowimage1,
  title: 'Windows   Service', 
  description: [
    "We install windows with proper fitting and secure sealing to prevent leaks.",
    "We repair damaged glass,fix broken frames and restore window functionality.",
    "We improve insulation and ensure windows are durable."
  ]
}}>
          <div>
            <img src={windowimage} alt="Window" />
            <p>Windows</p>
          </div>
          </Link>
          <Link to="/service-details" state={{ 
   image: drillimage1,
  title: 'Drill and Hang   Service', 
  description: [
    "We drill and securely hang shelves,curtains and decorative items.",
    "We fix loose or misaligned wall-mounted installations.",
    "We ensure all items are safely mounted and properly aligned."
  ]
}}>
          <div>
            <img src={drillimage} alt="Drill" />
            <p>Drill & Hang</p>
          </div></Link>
          <Link to="/service-details" state={{ 
   image: furniture1,
  title: 'Furniture Repair   Service', 
  description: [
    "We fix broken furniture parts like legs and joints.",
    "We restore functionality through repairs and reinforcements.",
    "We improve furniture apperance with polishing and adjustments."
  ]
}}>
          <div>
            <img src={furniture} alt="Furniture" />
            <p>Furniture Repair</p>
          </div></Link>
        </div>
      </div>
      
    </>
  );
};

export default Carpentry;