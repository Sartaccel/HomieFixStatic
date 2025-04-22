import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../styles/Join.css';
import worker from '../assets/join-worker.svg';
import location from '../assets/location.svg';
import arrow from '../assets/Vector 1.svg';
import arow from '../assets/Vector 2.svg';
import arrow1 from '../assets/arrow1.svg';
import arrow2 from "../assets/arrow.svg";
import rightArrow from '../assets/right.svg';
import leftArrow from '../assets/left.svg';
import drop from "../assets/Vector 77.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

const services = [
  "Home appliances",
  "Electrician",
  "Plumbing",
  "Carpentry",
  "Vehicle Service",
  "Cleaning",
  "CCTV",
];

const JoinHomieFix = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    fullName: "",
    phoneNumber: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    // Show modal if register parameter is true
    if (searchParams.get('register') === 'true') {
      setShowModal(true);
    }
  }, [searchParams]);

  const handleClose = () => {
    setShowModal(false);
    setApiError(null);
    setSuccessMessage(null);
    // Remove the register parameter when closing modal
    navigate('/join', { replace: true });
  };

  const handleShow = () => setShowModal(true);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setFormData({...formData, service});
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedService) {
      alert("Please select a service");
      return;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);
    setApiError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('https://admin.homiefix.in/api/partner/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service: formData.service,
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("API Response:", data);
      
      setSuccessMessage("Your application has been submitted successfully!");
      
      // Reset form
      setFormData({
        service: "",
        fullName: "",
        phoneNumber: ""
      });
      setSelectedService("");
      
      // Close modal after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setApiError("An error occurred while submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleArrowClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="container mt-md-5 pt-md-5">
        {/* Header Arrow - Mobile Only */}
        <div className="row top-0 m-0 p-0 d-block d-md-none">
          <div className="d-flex align-items-center" style={{position:'fixed',zIndex:'1010'}}>
            <img
              src={arrow2}
              alt="Arrow Icon"
              className="me-1"
              style={{ width: "34px" }}
              onClick={handleArrowClick}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="row pt-5 pt-md-0">
          {/* Image - Moves to top on mobile */}
          <div className="col-md-4 order-md-2">
            <img src={worker} alt="Worker" className="img-fluid" />
          </div>

          {/* Text Content */}
          <div className="col-md-8 p-md-5 order-md-1 text-center text-md-start mx-auto">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3 mt-5">
              <div className="join-close-btn rounded-circle text-white fw-bold me-1">
                <img src={location} alt="" />
              </div>
              <span className="fs-5" style={{ color: '#1F1F1F', fontWeight: '400' }}>Kanyakumari</span>
            </div>

            <h3 className="fw-semibold mb-2 fs-2">
              Join Homefix – Grow Your Business with Us!
            </h3>
            <p className="col-md-11 mb-4 fs-5 responsive-paragraph" style={{ color: '#6B6B6B' }}>
              Are you a skilled home service professional? Homefix connects you with customers who need reliable services.
              Join our network and get more job opportunities without the hassle of marketing or customer hunting.
            </p>

            <button className="btn btn-outline-primary rounded-pill px-4 apply-btn" onClick={handleShow}>
              Apply Now
            </button>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="d-flex align-items-center px-md-5 mt-5 mb-4">
          <h2 className="h5 mb-0 s1" style={{ fontWeight: 500, color: '#000000' }}>
            How It Works
          </h2>
          <img src={arrow1} alt="" className="ms-2 mt-3 d-md-none" style={{ height: '20px' }} />
        </div>

        {/* Mobile Steps */}
        <div className="d-block d-md-none">
          <div className="mobile-steps-container">
            {/* Step 1 */}
            <div className="mobile-circle-container align-left">
              <div className="circle mobile-circle">
                <div className="circle-number">1</div>
                <h2 className="circle-title">Sign Up</h2>
                <p className="circle-content">Create a profile and provide your qualifications.</p>
              </div>
            </div>
            <div className="arrow-container arrow-right">
              <img src={leftArrow} alt="arrow" className="step-arrow" />
            </div>

            {/* Step 2 */}
            <div className="mobile-circle-container align-right">
              <div className="circle mobile-circle">
                <div className="circle-number">2</div>
                <h2 className="circle-title">Get Verified</h2>
                <p className="circle-content">We review your credentials and background to ensure trust and safety.</p>
              </div>
            </div>
            <div className="arrow-container arrow-left">
              <img src={rightArrow} alt="arrow" className="step-arrow" />
            </div>

            {/* Step 3 */}
            <div className="mobile-circle-container align-left">
              <div className="circle mobile-circle">
                <div className="circle-number">3</div>
                <h2 className="circle-title">Receive Job Requests</h2>
                <p className="circle-content">Accept job requests based on your skills and availability.</p>
              </div>
            </div>
            <div className="arrow-container arrow-right">
              <img src={leftArrow} alt="arrow" className="step-arrow" />
            </div>

            {/* Step 4 */}
            <div className="mobile-circle-container align-right">
              <div className="circle mobile-circle">
                <div className="circle-number">4</div>
                <h2 className="circle-title">Complete the Job</h2>
                <p className="circle-content">Deliver quality service and earn customer ratings.</p>
              </div>
            </div>
            <div className="arrow-container arrow-left">
              <img src={rightArrow} alt="arrow" className="step-arrow" />
            </div>

            {/* Step 5 */}
            <div className="mobile-circle-container align-left">
              <div className="circle mobile-circle">
                <div className="circle-number">5</div>
                <h2 className="circle-title">Get Paid Securely</h2>
                <p className="circle-content">Receive payments directly through our platform.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Steps - Horizontal */}
        <div className='row mt-md-5 gap-3 justify-content-center d-none d-md-flex'>
          <div className="d-flex flex-column align-items-start col-2">
            <div className="circle">
              <div className="circle-number">1</div>
              <h2 className="circle-title">Sign Up</h2>
              <p className="circle-content">Create a profile and provide your <br />qualification.</p>
            </div>
            <div className="w-100 d-flex justify-content-center">
              <img src={arrow} alt="Arrow" width={120} height={120} className="mt-2 mobarrow" style={{ marginLeft: '100px' }} />
            </div>
            <div className='Arrow d-md-none'></div>
          </div>

          <div className="d-flex flex-column align-items-start col-2 " style={{ marginTop: '80px' }}>
            <img src={arow} alt="Arrow" width={120} height={120} className="mt-2 mobarrow1" style={{ marginLeft: '100px' }} />
            <div className="circle c1">
              <div className="circle-number">2</div>
              <h2 className="circle-title">Get Verified</h2>
              <p className="circle-content">We review your credentials and background to ensure trust and safety.</p>
            </div>
            <div className='Arrow1 d-md-none'></div>
          </div>
          <div className="d-flex flex-column align-items-start col-2">
            <div className="circle c2">
              <div className="circle-number">3</div>
              <h2 className="circle-title">Receive Job Requests</h2>
              <p className="circle-content">Accept job requests based on your skills and availability.</p>
            </div>
            <img src={arrow} alt="Arrow" width={120} height={120} className="mt-2 mobarrow2" style={{ marginLeft: '100px' }} />
          </div>
          <div className='Arrow2 d-md-none'></div>

          <div className="d-flex flex-column align-items-start col-2 " style={{ marginTop: '80px' }}>
            <img src={arow} alt="Arrow" width={120} height={120} className="mt-2 mobarrow3" style={{ marginLeft: '100px' }} />
            <div className="circle c3">
              <div className="circle-number">4</div>
              <h2 className="circle-title">Complete The Job</h2>
              <p className="circle-content">Deliver quality service <br /> and earn customer <br /> ratings.</p>
            </div>
            <div className='Arrow3 d-md-none'></div>
          </div>
          <div className="d-flex flex-column align-items-start col-2">
            <div className="circle c4">
              <div className="circle-number">5</div>
              <h2 className="circle-title">Get Paid Securely</h2>
              <p className="circle-content">Receive payments <br /> directly through our <br /> platform.</p>
            </div>
            <div className='Arrow4 d-md-none'></div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal-backdrop">
            <div className="modal-cont">
              <div className="modal-header">
                <h2 className="modal-title">Welcome Partner</h2>
                <button className="modal-close-btn" onClick={handleClose}>
                  &times;
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  {apiError && (
                    <div className="alert alert-danger" role="alert">
                      {apiError}
                    </div>
                  )}
                  {successMessage && (
                    <div className="alert alert-success" role="alert">
                      {successMessage}
                    </div>
                  )}
                  
                  <label htmlFor="service" className="modal-label">Service</label>
                  <div className="mb-3 mt-1 position-relative">
                    <div
                      className="form-control no-focus-border custom-input dropdown-toggle-custom"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className='' style={{color:'black', fontWeight:'400', fontSize:'14px'}}>
                        {selectedService || "Service"}
                      </span>
                      <img src={drop} alt="" className="dropdown-caret" />
                    </div>

                    {isDropdownOpen && (
                      <div className="dropdown-menu-custom mt-2">
                        {services.map((service, index) => (
                          <div key={index}>
                            <div
                              className="dropdown-item-custom"
                              onClick={() => handleServiceSelect(service)}
                            >
                              {service}
                            </div>
                            {index !== services.length - 1 && <hr className="m-0" />}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <label htmlFor="fullName" className="modal-label mt-3">Full name</label>
                  <div className="input-group gap-2 mb-3">
                    <input 
                      className="form-control no-focus-border no-radius" 
                      placeholder="Full name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
          
                  <label htmlFor="phoneNumber" className="modal-label">Phone number</label>
                  <div className="input-group gap-2">
                    <span className="input-group-text no-focus-border no-radius  no-bg">+91</span>
                    <input 
                      className="form-control no-focus-border no-radius" 
                      placeholder="Phone number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      maxLength="10"
                    />
                  </div>
                </div>

                <div className="modal-footer mt-5">
                  <button 
                    className="modal-submit-btn" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer outside container for full width */}
      <Footer />
    </>
  );
}

export default JoinHomieFix;