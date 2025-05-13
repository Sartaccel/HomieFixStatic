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
import api from '../Api';

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
  const [formErrors, setFormErrors] = useState({
    service: "",
    fullName: "",
    phoneNumber: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

    if (searchParams.get('register') === 'true') {
      setShowModal(true);
    }

    const img = new Image();
    img.src = worker;
    img.onload = () => setImageLoaded(true);
  }, [searchParams]);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      service: "",
      fullName: "",
      phoneNumber: ""
    };

    if (!selectedService) {
      newErrors.service = "Please select a service";
      valid = false;
    }

    const nameRegex = /^[a-zA-Z\s']+$/;
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      valid = false;
    } else if (!nameRegex.test(formData.fullName)) {
      newErrors.fullName = "Name should only contain letters, spaces, and apostrophes";
      valid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name should be at least 2 characters";
      valid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleClose = () => {
    setShowModal(false);
    setApiError(null);
    setSuccessMessage(null);
    setFormErrors({
      service: "",
      fullName: "",
      phoneNumber: ""
    });
    navigate('/join', { replace: true });
  };

  const handleShow = () => {
    setShowModal(true);
    // Reset form state when showing modal
    setFormData({
      service: "",
      fullName: "",
      phoneNumber: ""
    });
    setSelectedService("");
    setFormErrors({
      service: "",
      fullName: "",
      phoneNumber: ""
    });
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setFormData({...formData, service});
    setFormErrors({...formErrors, service: ""});
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'fullName') {
      if (!/^[a-zA-Z\s']*$/.test(value)) return;
    }
    
    if (name === 'phoneNumber') {
      if (!/^\d*$/.test(value) && value !== '') return;
      if (value.length > 10) return;
    }
    
    setFormData({...formData, [name]: value});
    if (formErrors[name]) {
      setFormErrors({...formErrors, [name]: ""});
    }
  };

  const checkExistingNumber = async (phoneNumber) => {
    try {
      const response = await api.get(`/partner/check?phoneNumber=${phoneNumber}`);
      return response.data.exists;
    } catch (error) {
      console.error("Error checking phone number:", error);
      // For mobile, we might want to handle network errors differently
      if (isMobile && error.message.includes('Network Error')) {
        setApiError("Please check your internet connection and try again");
      }
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Important for mobile touch events
    
    // Prevent double submission on mobile
    if (isSubmitting) return;
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setApiError(null); // Clear previous errors
    
    try {
      const numberExists = await checkExistingNumber(formData.phoneNumber);
      if (numberExists) {
        setFormErrors({
          ...formErrors,
          phoneNumber: "This phone number is already registered"
        });
        setIsSubmitting(false);
        return;
      }

      // Added timeout for mobile to ensure proper request handling
      const response = await Promise.race([
        api.post('/partner/add', {
          service: formData.service,
          fullName: formData.fullName.trim(),
          phoneNumber: formData.phoneNumber
        }),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout')), 15000)
        )
      ]);

      console.log("API Response:", response.data);
      setSuccessMessage("Your application has been submitted successfully!");
      
      // Reset form
      setFormData({
        service: "",
        fullName: "",
        phoneNumber: ""
      });
      setSelectedService("");
      setFormErrors({
        service: "",
        fullName: "",
        phoneNumber: ""
      });
      
      setTimeout(() => {
        handleClose();
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      let errorMessage = "An error occurred while submitting your application. Please try again.";
      
      if (error.message === 'Request timeout') {
        errorMessage = "The request took too long. Please check your internet connection and try again.";
      } else if (error.response) {
        // Handle specific API errors
        errorMessage = error.response.data.message || errorMessage;
      }
      
      setApiError(errorMessage);
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
            <img 
              src={worker} 
              alt="Worker" 
              className="img-fluid" 
              loading="eager"
              style={{
                opacity: imageLoaded ? 1 : 0,
                transition: 'opacity 0.5s ease-in',
                width: '100%',
                height: 'auto'
              }}
            />
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
            <p className="col-md-11 mb-4 responsive-paragraph" style={{ color: '#6B6B6B',fontSize:'115%' }}>
              Are you a skilled home service professional? Homefix connects you with customers who need reliable services.
              Join our network and get more job opportunities without the hassle of marketing or customer hunting.
            </p>

            <button 
              className="btn btn-outline-primary rounded-pill px-4 apply-btn" 
              onClick={handleShow}
              style={{ touchAction: 'manipulation' }} // Improve touch responsiveness
            >
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
                      className={`form-control no-focus-border custom-input dropdown-toggle-custom ${formErrors.service ? 'is-invalid' : ''}`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      style={{ touchAction: 'manipulation' }}
                    >
                      <span className='' style={{color:'black', fontWeight:'400', fontSize:'14px'}}>
                        {selectedService || "Service"}
                      </span>
                      <img src={drop} alt="" className="dropdown-caret" />
                    </div>
                    {formErrors.service && (
                      <div className="text-danger small mt-1">{formErrors.service}</div>
                    )}

                    {isDropdownOpen && (
                      <div className="dropdown-menu-custom mt-2">
                        {services.map((service, index) => (
                          <div key={index}>
                            <div
                              className="dropdown-item-custom"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleServiceSelect(service);
                              }}
                              style={{ touchAction: 'manipulation' }}
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
                      className={`form-control no-focus-border no-radius ${formErrors.fullName ? 'is-invalid' : ''}`} 
                      placeholder="Full name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      style={{ touchAction: 'manipulation' }}
                    />
                  </div>
                  {formErrors.fullName && (
                    <div className="text-danger small mb-2">{formErrors.fullName}</div>
                  )}
          
                  <label htmlFor="phoneNumber" className="modal-label">Phone number</label>
                  <div className="input-group gap-2">
                    <span className="input-group-text no-focus-border no-radius no-bg">+91</span>
                    <input 
                      className={`form-control no-focus-border no-radius ${formErrors.phoneNumber ? 'is-invalid' : ''}`} 
                      placeholder="Phone number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      maxLength="10"
                      inputMode="numeric" // Better mobile keyboard
                      style={{ touchAction: 'manipulation' }}
                    />
                  </div>
                  {formErrors.phoneNumber && (
                    <div className="text-danger small mt-1">{formErrors.phoneNumber}</div>
                  )}
                </div>

                <div className="modal-footer mt-5">
                  <button 
                    className="modal-submit-btn" 
                    type="submit"
                    disabled={isSubmitting}
                    style={{ touchAction: 'manipulation' }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default JoinHomieFix;