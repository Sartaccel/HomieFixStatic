import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import NavigationBar from './NavigationBar';
import acicon from "../assets/acicon.jpg";
import playstore from "../assets/playstore.jpg";
import { PiPhoneCallFill } from "react-icons/pi";
import "../styles/ServiceDetails.css";
import Footer from './Footer';


const ServiceDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, title, description } = location.state || {};

  const handleBack = () => {
    navigate('/services'); 
  };
  
  return (
    <>
    <div className="left-arrow"  onClick={handleBack}>
      <FaArrowLeftLong />  Services  
        </div>
      <div className='AC-container'>
     
         <div className="left-arrowac" >
         <span className="arrow-icon" onClick={() => navigate('/services')}style={{ cursor: 'pointer' }}>
      <FaArrowLeftLong />
    </span>
          <span className='repair'>{title} </span> 
        </div>
       
         <div className="ac-section">
         <div className="left-content">
         <img src={image} alt={title} className='ac' />
         
    <div className='acicon-container'>
    <div className='icon-title'>
    <img src={acicon} alt="acicon"   className='acicon'    />
    <h5>Disclaimer</h5>
     </div>
      <p className='please'>
        Please note that the final price may vary <br/>based on additional services such as part <br/>replacement,
        purchasing new components,<br/> etc.
      </p>
      </div>
    </div>
    <div className="vertical-line"></div>
    <div className="right-content">
  <div className="what-we-do">
    <h5>What we do ?</h5>
   
      <ul>
              {description?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
  </div>

  <div className="service-info">
    <h5>Service Charge <span className='rupee'>₹500</span></h5>
    <div className='contact-row'>
  <div className='info-column  call-playstore-row'>
    <div className='call-section'>
      <div className='booking-label'>Call for book</div>
      <div className='call-box'>
        <PiPhoneCallFill className="call-icon" />
        <span className='call'>9042812257</span>
      </div>
    </div>

    <div className='playstore'>
      <div className='app'>Book using mobile app</div>
      <a
        href="https://play.google.com/store/apps/details?id=com.homiefix.homiefix_application"

        target="_blank"
        rel="noopener noreferrer"
        className="playstore-link"
      >
        <img src={playstore} alt="Play Store" className="playstore-img" />
      </a>
    </div>
  </div>
</div>

    
   </div>
</div>
</div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<Footer/>
    </>
  )
}

export default ServiceDetails;