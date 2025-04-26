import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Mobile from './Mobile';
import Footer from './Footer';
import Plumber from "./Plumber";
import Electrician from './Electrician';
import Carpentry from './Carpentry';
import CareTaker from './CareTaker';
import HomeAppliance from './HomeAppliance';
import VehicleService from './VehicleService';
import home from "../assets/home.svg";
import mediaimage1 from "../assets/mediaimage1.svg";
import mediaimage from "../assets/mediaimage.jpg";
import plumbinginstallation from "../assets/plumbinginstallation.svg";
import ACRepair from "../assets/ACRepair.svg";
import { FaLocationDot } from "react-icons/fa6";
import { HiArrowTurnRightDown } from "react-icons/hi2";
import appliance from "../assets/appliance.svg";
import vehicle from "../assets/vehicle.svg";
import plumber from "../assets/plumber.svg";
import electrician from "../assets/electrician.svg";
import cleaning from "../assets/cleaning.svg";
import cctv from "../assets/cctv.svg";
import carpent from "../assets/carpent.svg";
import caretaker from "../assets/caretaker.svg";
import man from "../assets/man.jpg";
import tap from "../assets/tap.jpg";
import user from "../assets/user.jpg";
import man2 from "../assets/man2.jpg";
import "../styles/HomePage.css";''
import sheild from "../assets/sheild.svg";
import heart from "../assets/heart.svg";
import rupee from "../assets/rupee.svg";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";








const images = [ACRepair, plumbinginstallation, mediaimage1, home];


const HomePage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);




  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };


    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 4000);


      return () => clearInterval(interval);
    }
  }, [isMobile]);
 


  const handleNavigate = (e) => {
    e.preventDefault();
    console.log("Button clicked!");
    navigate('/services');
  }
  const handleServiceClick = (service) => {
    if (["plumber", "electrician", "carpentry", "home-appliance","vehicleService","caretaker"].includes(service)) {
      setSelectedService(service); // Open modal for selected service
    } else {
      navigate(`/services/${service}`);
    }
  };


  const closeModal = () => {
    setSelectedService(null);
  };
  const handleJoinClick = () => {
    navigate("/join"); // Redirect to Join HomieFix page
  };




  return (
    <>
     
    <main>
    <div className="location-container">
        <div className=" d-flex align-items-center location">
        <FaLocationDot className="location-icon me-2"/>  {/* Blue location icon */}
        <span className='dist'>Kanyakumari</span>
     
        <div className="head mt-4">
          <h2 className="fw-bold">Reliable Home Services at  <span className="fw-bold  your">Your</span><br/>  <span className="fw-bold head2">Fingertips!</span></h2>
        </div >
         <div className="para mt-4">
       <p>Book expert home service professionals in <span className='just'>just a</span><br/><span className='few'>few clicks.</span></p>
        </div>
       
        <button className='btn btn-primary btn-lg px-4 py-2  custom-btn'  style={{ cursor: 'pointer', padding: '10px 20px', backgroundColor: '#0076CE', color: 'white', border: 'none', borderRadius: '5px' }}
        onClick={handleNavigate}>Book a service</button>
        </div>
       
        <div className="image-container" >
          {images.map((img, index) => (
            <img
              key={index}
              src={isMobile ? mediaimage : img}
              alt="home"
              className={`img-fluid custom-mt ${index === currentImage ? "active" : ""}`}
            />
          ))}
        </div>
        </div>
        </main>
        <div className='services-section'>
        <div className='custom'>
          All our Services   <HiArrowTurnRightDown   className="curved-arrow"/>
          </div>
          <div className='services-container'>
          <div className="service-row">
          <div onClick={() => handleServiceClick("home-appliance")}>
    <img src={appliance} alt="appliance" />
    <p>Home Appliance</p>
  </div>
  <div onClick={() => handleServiceClick("vehicleService")}>
    <img src={vehicle} alt="vehicle" />
    <p>Vehicle Service</p>
  </div>
  <div onClick={() => handleServiceClick("plumber")}>
    <img src={plumber} alt="plumber" />
    <p>Plumber</p>
  </div>
  <div onClick={() => handleServiceClick("electrician")}>
    <img src={electrician} alt="electrician" />
    <p>Electrician</p>
  </div>
  <div onClick={() => handleServiceClick("carpentry")}>
    <img src={carpent} alt="carpent" />
    <p>Carpentry</p>
  </div>
  <div onClick={() => navigate('/service/cctv')}>
    <img src={cctv} alt="cctv" />
    <p>CCTV</p>
  </div>
  <div onClick={() => navigate('/service/cleaning')}>
    <img src={cleaning} alt="cleaning" />
    <p>Cleaning</p>
  </div>
  <div onClick={() => handleServiceClick("caretaker")}>
    <img src={caretaker} alt="care" />
    <p>Care Taker</p>
  </div>
         </div>
         </div>
          </div>
          {/* Modal for Services */}
        {selectedService && (
          <div className="modal-overlay">
           <div className={`modal-content ${selectedService === "home-appliance" ? "home-appliance-style" : ""}`}>
              <button className="close-btn" onClick={closeModal}>✖</button>
              {selectedService === "plumber" && <Plumber />}
              {selectedService === "vehicleService" && <VehicleService />}
              {selectedService === "electrician" && <Electrician />}
              {selectedService === "caretaker" && <CareTaker />}
              {selectedService === "carpentry" && <Carpentry />}
              {selectedService === "home-appliance" && <HomeAppliance />}
            </div>
          </div>
        )}
        <div className='text-container1'>
       
        <div className='fw-medium content'>
         <h4 className="heading">Why HomieFix  <HiArrowTurnRightDown className="curved-arrow" /></h4>
         
         <div className='paragraph-container'>
          <div className='column'>
           
            <div className='paragraph'>
              <h5><img src={sheild} alt="sheild" />Trusted & Trained Experts</h5>
              <p>At HomieFix, we vet, train, and certify every professional, ensuring top-quality service while handling all legal requirements for your peace of mind.</p>
            </div>
            <div className='paragraph'>
              <h5><img src={heart} alt="heart" />100% Satisfaction Guarantee</h5>
              <p>Your happiness is our priority! If you're not satisfied with the service, HomieFix is always here to help. Contact us anytime for support or a compensation service.</p>
            </div>
            <div className='paragraph'>
              <h5> <img src={tap} alt="tap" className='icon-style'/>No Supply Hassles</h5>
              <p>With HomieFix, you don't need to worry about cleaning supplies! If needed, our professionals can bring all the necessary cleaning materials, so you can enjoy a hassle-free service.</p>
            </div>
          </div>
          <div className='column'>
            <div className='paragraph'>
              <h5><img src={rupee} alt="rupee" />Pay Securely After Service</h5>
              <p>With HomieFix, you only pay after the job is done. Enjoy secure, hassle-free payments once your service is completed to your satisfaction.</p>
            </div>
            <div className='paragraph'>
              <h5> <img src={user} alt="user" className='icon-style'/>Trusted Professionals</h5>
              <p>At HomieFix, we verify the background of all professionals for your safety and peace of mind.</p>
           
            </div>
          </div>
        </div>
        </div>
        <img src={man} alt="man" className='man'/>
        <img src={man2} alt="man2" className='man mobile-image'/>
      </div>
     <Mobile/>
     <div className='join'>
      <h4>Join HomieFix & Grow Your Business</h4>
      <p>Connect with customers,get more jobs,and build your reputation with HomieFix</p>
      <button onClick={handleJoinClick}>Join HomieFix <LiaLongArrowAltRightSolid /></button>
     </div>
     <Footer/>
    </>
  )
}


export default HomePage;
