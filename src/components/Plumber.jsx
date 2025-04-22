import React from "react";
import { Link } from 'react-router-dom';
import washbasin from "../assets/washbasin.jpg";
import washbasin1 from "../assets/washbasin1.jpg";
import toilet from "../assets/toilet.jpg";
import toilet1 from "../assets/toilet1.jpg";
import tap1 from "../assets/tap1.jpg";
import tapimage from "../assets/tapimage.jpg";
import blockage from "../assets/blockage.jpg";
import blockage1 from "../assets/blockage1.jpg";
import shower from "../assets/shower.jpg";
import shower1 from "../assets/shower1.jpg";
import motor from "../assets/motor.jpg";
import motor1 from "../assets/motor1.jpg";

import "../styles/Service.css";

const Plumber = () => {
  return (
    <>
      <div className="service-page">
        <h2>Plumber </h2>
        <div className="grid-container1">
        <Link to="/service-details" state={{ 
   image: washbasin1,
  title: 'Wash Basin Installation   Service', 
  description: [
    "We install wash basins securely and ensure proper connections.",
    "We clear blockages for smooth water flow.",
    "We repair or replace faulty fittings."
  ]
}}>
          <div >
            <img src={washbasin} alt="Washbasin" className="service-img" />
            <p>Washbasin</p>
          </div></Link>
           <Link to="/service-details" state={{ 
             image: toilet1,
            title: 'Toilet   Service', 
            description: [
              "We install toilets with secure fittings and connections.",
              "We repair leaks,flush systems and other issues.",
              "We unclog blocked toilets to restore."
            ]
          }}>
          <div >
            <img src={toilet} alt="Toilet" className="service-img" />
            <p>Toilet</p>
          </div></Link>
          <Link to="/service-details" state={{ 
             image: tapimage,
            title: 'Tap   Service', 
            description: [
              "We install taps and pipes with precision for smooth water flow.",
              "We repair leaks and replace damaged pipes or fittings.",
              "We inspect and maintain plumbing systems for efficiency."
            ]
          }}>
          <div >
            <img src={tap1} alt="Tap" className="service-img" />
            <p>Tap</p>
          </div></Link>
          <Link to="/service-details" state={{ 
             image: blockage1,
            title: 'Blockage Removal   Service', 
            description: [
              "We ensure proper connections.",
              "We clear blockages for smooth  water flow.",
              "We repair or replace faulty fittings."
            ]
          }}>
          <div >
            <img src={blockage} alt="Blockage" className="service-img" />
            <p>Blockage</p>
          </div></Link>
           <Link to="/service-details" state={{ 
             image: shower1,
            title: 'Shower   Service', 
            description: [
              "We install new shower systems with accurate fittings.",
              "We fix leaks or damaged shower components.",
              "We ensure proper water pressure and functionality."
            ]
          }}>
          <div>
            <img src={shower} alt="Shower" className="service-img" />
            <p>Shower</p>
          </div></Link>
           <Link to="/service-details" state={{ 
             image: motor1,
            title: 'Motor and Water Tank   Service', 
            description: [
              "We install tanks and motors for reliable water storage and flow.",
              "We fix leaks,motor failures and connection issues.",
              "We service tanks and motors to ensure smooth operation."
            ]
          }}>
          <div >
            <img src={motor} alt="Motor & Water Tank" className="service-img" />
            <p>Motor & Water Tank</p>
          </div></Link>
        </div>
      </div>
    </>
  );
};

export default Plumber;