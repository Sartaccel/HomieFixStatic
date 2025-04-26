import React from 'react'
import mobile from "../assets/mobile.jpg";
import calender from "../assets/calender.svg";
import bell from "../assets/bell.svg";
import doll from "../assets/doll.svg";
import qrcode from "../assets/qrcode.jpeg";
import playstore from "../assets/playstore.jpg";
import "../styles/Mobile.css";




const Mobile = () => {
  return (
   
    <div className='mobile-container'>
    <div className='content-wrapper'>
      <div className='image'>
        <img src={mobile} alt="mobile" className='mobile'/>
      </div>
      <div className='text-container'>
        <div className='homiefix'>
        <h3>HomieFix is on his mobile phone</h3>
        <p>With the HomieFix mobile app, booking home services has never been easier.<br/> Find trusted professionals, schedule
          appointments, and track your service <br/><span className='req'>requests.</span>
        </p>
        </div>
        <div className='features-grid'>
        <div className='feature'>
        <img src={calender} alt="" className='icon'/>
          <div>
            <h5>Quick and Easy Booking</h5>
            <p>Choose a service, set a time, and confirm instantly.</p>
          </div>
        </div>
        <div className='feature'>
        <img src={bell} alt="" className='icon'/>
          <div>
            <h5>Real-Time Updates</h5>
            <p>Get notifications about your bookings and service status.</p>
          </div>
        </div>
        <div className='feature'>
       <img src={doll} alt="" className='icon'/>
          <div>
            <h5>Trusted Professionals</h5>
            <p>Verified trained experts at your service.</p>
            </div>
          </div>
        </div>
        </div>
    </div>
    <div className='qr-section'>
      <img src={qrcode} alt="qrcode" className='qr'/>
      <div className='playstore'>
      <a href="https://play.google.com/store/apps/details?id=com.homiefix.homiefix_application" target="_blank" rel="noopener noreferrer">
      <img src={playstore} alt="Play Store" className="playstore-img" width={100} />
    </a>
      </div>
    </div>
  </div>
  )
}


export default Mobile

