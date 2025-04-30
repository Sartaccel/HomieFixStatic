import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import drop from "../assets/Vector 77.svg";
import arrow from "../assets/arrow.svg";
import "../styles/Contact.css";
import Footer from './Footer';
import api from "../Api";

const services = [
  "Home appliances",
  "Electrician",
  "Plumbing",
  "Carpentry",
  "Vehicle Service",
  "Cleaning",
  "CCTV",
];

const Contact = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateFullName = (name) => {
    if (!name.trim()) {
      return "Full name is required";
    }
    if (/[^a-zA-Z\s]/.test(name)) {
      return "Name should only contain letters";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhoneNumber = (phone) => {
    if (!phone) {
      return "Phone number is required";
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return "Please enter a valid 10-digit phone number";
    }
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) {
      return "Message is required";
    }
    return "";
  };

  const validateForm = () => {
    const errors = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      phoneNumber: validatePhoneNumber(formData.phoneNumber),
      message: validateMessage(formData.message)
    };
    
    setFormErrors(errors);
    
    return Object.values(errors).every(error => error === "");
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setFormData({ ...formData, service });
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Prevent numbers and special chars in fullName
    if (name === "fullName") {
      if (/[^a-zA-Z\s]/.test(value)) return;
    }
    
    // Limit phone number to 10 digits
    if (name === "phoneNumber") {
      if (value.length > 10 || !/^\d*$/.test(value)) return;
    }
    
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedService) {
      toast.warning("Please select a service", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.post("/contact/add", {
        service: selectedService.toLowerCase(),
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phoneNumber: formData.phoneNumber,
        message: formData.message.trim()
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("Response:", response.data);

      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
 
      // Reset form after successful submission
      setFormData({
        service: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
      });
      setSelectedService("");
      setFormErrors({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      let errorMessage = "Error submitting form. Please try again.";
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
      } else if (error.request) {
        errorMessage = "No response from server. Please check your connection.";
      }

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
   
  const handleArrowClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="container p-0 mt-md-4 pb-2">
        <ToastContainer />

        <div className="row bg-white m-0 p-0 w-100 shadow-sm" style={{ position: 'fixed', zIndex: '1010' }}>
          <div className="d-flex align-items-center d-md-none">
            <div className="col-1">
              <img
                src={arrow}
                alt="Arrow Icon"
                className="me-1"
                style={{ width: "24px", cursor: 'pointer' }}
                onClick={handleArrowClick}
              />
            </div>
            <div className="col-10">
              <h1 className="m-3" style={{ fontSize: "22px", fontWeight: "600" }}>
                Contact Us
              </h1>
            </div>
          </div>
        </div>

        <div className="row mob-contact px-3 mt-5 mt-md-0 pt-3 pt-md-0" style={{ marginTop: '60px' }}>
          {/* Left Column */}
          <div className="col-md-6 mb-4 mt-4 bg-light rounded order-2 order-md-1">
            <div className="col-12 p-2 col-md-10 p-md-5">
              <h1 className="mb-4" style={{ fontSize: "22px", fontWeight: "600" }}>
                Contact us
              </h1>
              <p className="heading-content" style={{ fontSize: "16px", width: "100%", fontWeight: "400" }}>
                We're here to help! Whether you have questions, need assistance,
                or want to share feedback, feel free to reach out.
              </p>
              <div className="mb-3 mt-4">
                <p className="mb-3">
                  <img src={mail} alt="Mail Icon" className="me-2" />
                  <a
                    className="text-decoration-none text-black"
                    style={{ fontSize: "16px", fontWeight: "500" }}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@homiefix.in"
                  >
                    contact@homiefix.in
                  </a>
                </p>
                <p className="mb-3">
                  <img src={phone} alt="Phone Icon" className="me-2" />
                  <a
                    className="text-decoration-none text-black"
                    style={{ fontSize: "16px", fontWeight: "500" }}
                    href="tel:7667388372"
                  >
                    9042812257
                  </a>
                </p>
              </div>
              <h2 className="h5 mt-4" style={{ fontSize: "20px" }}>
                Our office addresses
              </h2>
              <div className="mb-3 mt-3">
                <h3 className="h6" style={{ fontSize: "18px" }}>
                  Address
                </h3>
                <p
                  className="mt-3 address1"
                  style={{ fontSize: "16px", fontWeight: "400" }}
                >
                  20C-1C Asaripallam Main Road, 2nd Main St, opposite to Concordia
                  School, Nesamony Nagar, Nagercoil, Tamil Nadu 629001
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6 ps-md-5 order-1 order-md-2" style={{ paddingLeft: "20px" }}>
            <div className="d-md-none my-3">
              <h1 style={{ color: "black", fontWeight: 400, fontSize: "16px" }}>
                Contact Us
              </h1>
            </div>
            <div className="col-12 p-0 col-md-10 p-md-5">
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="service"
                  style={{ color: "black", fontWeight: 400, fontSize: "16px" }}
                >
                  Service
                </label>

                {/* Custom Dropdown */}
                <div className="mb-md-3 mt-md-1 position-relative">
                  <div
                    className="form-control no-focus-border custom-input dropdown-toggle-custom"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span style={{ color: selectedService ? "#000" : "#C3C3C3" }}>
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

                {/* Remaining Form */}
                <div className="form-group my-2">
                  <label className="form-label">Full name</label>
                  <div className="mb-3 mt-0">
                    <input
                      type="text"
                      name="fullName"
                      className={`form-control no-focus-border custom-input ${formErrors.fullName ? 'is-invalid' : ''}`}
                      placeholder="Full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    {formErrors.fullName && (
                      <div className="invalid-feedback d-block">
                        {formErrors.fullName}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email</label>
                  <div className="mb-3 mt-0-">
                    <input
                      type="email"
                      name="email"
                      className={`form-control no-focus-border custom-input ${formErrors.email ? 'is-invalid' : ''}`}
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    {formErrors.email && (
                      <div className="invalid-feedback d-block">
                        {formErrors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Phone number</label>
                  <div className="mb-3 mt-0">
                    <div className="d-flex align-items-start">
                      <span className="me-2 p-2 border" style={{ 
                        color: "#C3C3C3",
                        height: "38px", // Match input height
                        display: "flex",
                        alignItems: "center"
                      }}>
                        +91
                      </span>
                      <div style={{ flex: 1 }}>
                        <input
                          type="tel"
                          name="phoneNumber"
                          className={`form-control no-focus-border custom-input ${formErrors.phoneNumber ? 'is-invalid' : ''}`}
                          placeholder="Phone number"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          maxLength="10"
                          style={{ width: '100%' }}
                        />
                      </div>
                    </div>
                    {formErrors.phoneNumber && (
                      <div className="invalid-feedback d-block mt-1">
                        {formErrors.phoneNumber}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Message</label>
                  <div className="mb-3 mt-0">
                    <textarea
                      className={`form-control no-focus-border meseage-input ${formErrors.message ? 'is-invalid' : ''}`}
                      name="message"
                      rows="4"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                    {formErrors.message && (
                      <div className="invalid-feedback d-block">
                        {formErrors.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group d-flex justify-content-center">
                  <button
                    className="contact-btn btn my-2"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* Footer outside container for full width */}
      <Footer />
    </>
  );
};

export default Contact;