import { useEffect } from "react";


import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import washingmachine from "../assets/washing machine.svg";
import ACimage from "../assets/ACimage.svg";
import microwave from "../assets/microwave.svg";
import TV from "../assets/TV.svg";
import TV1 from "../assets/TV1.jpg";
import waterpurifier from "../assets/waterpurifier.svg";
import waterpurifier1 from "../assets/waterpurifier1.jpg";
import inverter from "../assets/inverter.jpg";
import inverter1 from "../assets/inverter1.jpg";
import fridge from "../assets/fridge.jpg";
import fridge1 from "../assets/fridge1.jpg";
import fan from "../assets/fan.jpg";
import fan1 from "../assets/fan1.jpg";
import geyser from "../assets/geyser.jpg";
import geyser1 from "../assets/geyser1.jpg";
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
import ACimage1 from "../assets/ACimage1.jpg";
import microwave1 from "../assets/microwave1.jpg";
import baby from "../assets/baby.jpg";
import baby1 from "../assets/baby1.jpg";
import mother from "../assets/mother.jpg";
import mother1 from "../assets/mother1.jpg";
import homecare from "../assets/homecare.jpg";
import homecare1 from "../assets/homecare1.jpg";
import physyo from "../assets/physyo.jpg";
import physiotherapy from "../assets/physiotherapy.jpg";
import caring from "../assets/caring.jpg";
import caring1 from "../assets/caring1.jpg";
import washingmachine1 from "../assets/washing machine1.jpg";
import { useLocation } from "react-router-dom";
import Footer from './Footer';
import "../styles/Services.css";


const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  const handleBack = () => {
    navigate('/'); // Navigate to home
  };


  return (
    <>

      <div className="left-arrow" onClick={handleBack}>
        <FaArrowLeftLong /> All Services
      </div>
      <div className='services-appliance'>

        <div className='home-appliance mt-3'>
          <h4>Home Appliance</h4>

          {/* First Row - 6 Items */}
          <div className="grid-container">
            <Link to="/service-details" state={{
              image: ACimage1,
              title: 'AC Repair and Service',
              description: [
                "We begin by conducting a detailed inspection of your AC unit, checking for any issues",
                "Fix cooling problems and leaks",
                "Clean the unit for efficient operation"
              ]
            }}>
              <div>
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
            }}>
              <div>
                <img src={microwave} alt="Microwave" />
                <p>Microwave</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: washingmachine1,
              title: 'Washing Machine  Service',
              description: [
                "Install washing machines,ensuring proper connections and functionality",
                "Fix issues such as drainage problems or motor malfunctions.",
                "Clean and inspect washing machines to ensure efficient performance."
              ]
            }}>
              <div>
                <img src={washingmachine} alt="Washing Machine" />
                <p>Washing Machine</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: TV1,
              title: 'TV    Service',
              description: [
                "We install televisions,ensuring proper setup and connection.",
                "Fix issues like screen malfunctions,sound problems,or connectivity issues.",
                "Clean and inspect televisions to maintain clear display and sound quality."
              ]
            }}>
              <div>
                <img src={TV} alt="TV" />
                <p>TV</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: waterpurifier1,
              title: 'Water Purifier   Service',
              description: [
                "We install water purifiers to ensure safe and clean drinking water.",
                "Fix issues like poor water quality or malfunctioning filters.",
                "Clean and replace filters to maintain the purifiers efficiency."
              ]
            }}>
              <div>
                <img src={waterpurifier} alt="Water Purifier" />
                <p>Water Purifier</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: inverter1,
              title: 'Inverter and stabilizers   Service',
              description: [
                "We install inverters and stabilizers to protect appliances from power fluctuations.",
                "Fix issues such as faulty inverters or malfunctioning stabilizers.",
                "We check and maintain inverters and stabilizers to ensure reliable performance."
              ]
            }}>
              <div>
                <img src={inverter} alt="Inverter & Stabilizers" />
                <p >Inverter & Stabilizers</p>
              </div>
            </Link>
          </div>


          {/* Second Row - 3 Items */}
          <div className="grid-container">
            <Link to="/service-details" state={{
              image: fridge1,
              title: 'Fridge  Service',
              description: [
                "We install refrigerators,ensuring proper placement and functioning.",
                "Fix issues such as cooling problems or faulty electrical components.",
                "We clean and inspect fridges to ensure smooth operation."
              ]
            }}>
              <div>
                <img src={fridge} alt="Fridge" />
                <p>Fridge</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: fan1,
              title: 'Fan   Service',
              description: [
                "We install ceiling and wall fans securely for optimal airflow.",
                "Fix issues such as wobbling or irregular speed.",
                "We clean and inspect fans to ensure smooth operation."
              ]
            }}>
              <div>
                <img src={fan} alt="Fan" />
                <p>Fan</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: geyser1,
              title: 'Geyser   Service',
              description: [
                "We install geysers for safe and reliable heating.",
                "We repair leaks and restore hot water supply.",
                "We maintain geysers with routine checks and cleaning."
              ]
            }}>
              <div>
                <img src={geyser} alt="Geyser" />
                <p>Geyser</p>
              </div>
            </Link>
          </div>


        </div>
        <div className='Electrician'>
          <h4>Electrician</h4>
          <div className="grid-container">
            <Link to="/service-details" state={{
              image: switchsocket1,
              title: 'Switch & Socket   Service',
              description: [
                "We securely install switches and sockets to ensure reliable power access.",
                "We replace damaged or outdated switches and sockets for safe usage .",
                "We customize installations based on your home or office layout."
              ]
            }}>
              <div>
                <img src={switchsocket} alt="" /><p>Switch & Socket</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: wiring1,
              title: 'Wiring   Service',
              description: [
                "We install new wiring systems with a focus on safety and efficiency.",
                "We repair faulty wiring to eliminate hazards and restore functionality.",
                "We upgrade old wiring to meet modern standards and improve performance."
              ]
            }}>
              <div>
                <img src={wiring} alt="" /><p>wiring</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: doorbell1,
              title: 'doorbell   Service',
              description: [
                "We install doorbell with secure wiring and proper placement.",
                "We repair faulty doorbells and fix wiring issues.",
                "We maintain and upgrade doorbell systems for consistent performance."
              ]
            }}>
              <div>
                <img src={doorbell} alt="" /><p>doorbell</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: MCB1,
              title: 'MCB and Submeter   Service',
              description: [
                "We install MCBs to protect your electrical circuits from overloads.",
                "We set up submeters to help monitor and manage electricity usage.",
                "We ensure precise and secure installations for reliable performance."
              ]
            }}>
              <div>
                <img src={MCB} alt="" /><p>MCB</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: light1,
              title: 'Light/Wall Light   Service',
              description: [
                "We install lighting fixtuers with safe wiring and optimal placement.",
                "We repair or replace faulty lights to restore brightness.",
                "We ensure proper setup for efficient and long-lasting lighting."
              ]
            }}>
              <div>
                <img src={light} alt="" /><p>light</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='carpentry'>
          <h4>Carpentry</h4>
          <div className="grid-container">
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
                <img src={bed} alt="" /><p>bed</p>
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
                <img src={cupboard} alt="" /><p>cupboard & drawer</p>
              </div>
            </Link>
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
                <img src={door} alt="" /><p>door</p>
              </div>
            </Link>
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
                <img src={windowimage} alt="window" /><p>windows</p>
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
                <img src={drillimage} alt="drill" /><p>drill&hang</p>
              </div>
            </Link>
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
                <img src={furniture} alt="" /><p>furniture repair</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='plumbing'>
          <h4>Plumbing</h4>
          <div className="grid-container">
            <Link to="/service-details" state={{
              image: washbasin1,
              title: 'Wash Basin Installation   Service',
              description: [
                "We install wash basins securely and ensure proper connections.",
                "We clear blockages for smooth water flow.",
                "We repair or replace faulty fittings."
              ]
            }}>
              <div>
                <img src={washbasin} alt="" /><p>washbasin</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: toilet1,
              title: 'Toilet   Service',
              description: [
                "We install toilets with secure fittings and connections.",
                "We repair leaks,flush systems and other issues.",
                "We unclog blocked toilets to restore."
              ]
            }}>
              <div>
                <img src={toilet} alt="" /><p>toilet</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: tapimage,
              title: 'Tap   Service',
              description: [
                "We install taps and pipes with precision for smooth water flow.",
                "We repair leaks and replace damaged pipes or fittings.",
                "We inspect and maintain plumbing systems for efficiency."
              ]
            }}>
              <div>
                <img src={tap1} alt="" /><p>tap</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: blockage1,
              title: 'Blockage Removal   Service',
              description: [
                "We ensure proper connections.",
                "We clear blockages for smooth  water flow.",
                "We repair or replace faulty fittings."
              ]
            }}>
              <div>
                <img src={blockage} alt="" /><p>blockage</p>
              </div>
            </Link>
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
                <img src={shower} alt="" /><p>shower</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: motor1,
              title: 'Motor and Water Tank   Service',
              description: [
                "We install tanks and motors for reliable water storage and flow.",
                "We fix leaks,motor failures and connection issues.",
                "We service tanks and motors to ensure smooth operation."
              ]
            }}>
              <div>
                <img src={motor} alt="" /><p>motor & watertank</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='vehicles'>
          <h4>Vehicles Service</h4>
          <div className="grid-container">
            <Link to="/service-details" state={{
              image: battery1,
              title: 'Battery   Service',
              description: [
                "We install new batteries and ensure proper connections.",
                "We test and replace weak or faulty batteries.",
                "We maintain battery performance for reliable vehicle operation."
              ]
            }}>
              <div>
                <img src={battery} alt="" /><p>battery</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: wash1,
              title: 'Water Wash   Service',
              description: [
                "We provide exterior cleaning to remove dirt and grime.",
                "We clean interiors for a fresh and htgienic environment.",
                "We offer detailed washing for a spotless finish."
              ]
            }}>
              <div>
                <img src={wash} alt="" /><p>wash</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: painting1,
              title: 'Denting and Painting   Service',
              description: [
                "We repair dents and scratches to restore the vehicle's look.",
                "We provide high-quality painting for a smooth finish.",
                "We ensure long-lasting results with durable materials."
              ]
            }}>
              <div>
                <img src={painting} alt="" /><p>painting</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: wheel1,
              title: 'Wheel   Service',
              description: [
                "We align and balance wheels for smooth driving.",
                "We repair or replace damaged tires.",
                "We check tire pressure and condition for safety."
              ]
            }}>
              <div>
                <img src={wheel} alt="" /><p>wheel</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: carAc1,
              title: 'Car AC   Service',
              description: [
                "We inspect and repair AC systems for efficient cooling.",
                "We refill refrigerants and fix leaks.",
                "We maintain AC performance for a comfortable ride."
              ]
            }}>
              <div>
                <img src={carAc} alt="" /><p>car AC</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: blueman1,
              title: 'Vehicle Checkup   Service',
              description: [
                "We inspect the vehicle thoroughly for mechanical and electrical issues.",
                "We diagnose potential problems to prevent breakdowns.",
                "We ensure the vehicle is in optimal working condition."
              ]
            }}>
              <div>
                <img src={blueman} alt="" /><p>Vehicle Check</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='caretaker'>
          <h4>Care Taker</h4>
          <div className="grid-container">
            <Link to="/service-details" state={{
              image: baby1,
              title: 'Child Care   Service',
              description: [
                "We ensure a secure environment with constant supervision.",
                "We engage children in educational and enjoyable activities.",
                "We prepare healthy meals to support their growth."
              ]
            }}>
              <div>
                <img src={baby} alt="" /><p>Child Care</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: physiotherapy,
              title: 'Physiotherapy   Service',
              description: [
                "We enhance movement,strenth and balance to aid recovery from surgeries or injuries.",
                "We help manage chronic conditions like arthritis by reducing pain and improving daily function.",
                "We customize treatment plans to meet your needs,ensuring effective therapy at home."
              ]
            }}>
              <div>
                <img src={physyo} alt="" /><p>Physiotherapy</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: mother1,
              title: 'Old Age Care   Service',
              description: [
                "We assist with daily activities like bathing,dressing and grooming to ensure comfort and dignity.",
                "We provide timely medication reminders and monitor health conditions to maintain well-being.",
                "We engage in social interactions to reduce loneliness and enhance quality of life"
              ]
            }}>
              <div>
                <img src={mother} alt="" /><p>Old Age Care</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: caring1,
              title: ' Companion Support',
              description: [
                "We provide meaningful companionship to alleviate loneliness and promote mental well-being.",
                "We help with light housekeeping,meal preparation and errands to support independent living.",
                "We offer transportation to appointments and social events,keeping seniors active and connected ."
              ]
            }}>
              <div>
                <img src={caring} alt="" /><p>Companion Support</p>
              </div>
            </Link>
            <Link to="/service-details" state={{
              image: homecare1,
              title: 'Home Nurse   Service',
              description: [
                "We create personalized healthcare plans tailored to each individuals needs and preferences.",
                "We administer medications,perform wound care and monitor health conditions effectively.",
                "We assist with physical therapy and recovery processes to restore independence."
              ]
            }}>
              <div>
                <img src={homecare} alt="" /><p>Home Nursing</p>
              </div>
            </Link>

          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}


export default Services


