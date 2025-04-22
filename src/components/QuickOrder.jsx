import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import circle from '../assets/quick-circle.svg';
import drop from '../assets/Vector 77.svg';
import '../styles/QuickOrder.css';

const services = [
    "Home appliances",
    "Electrician",
    "Plumbing",
    "Carpentry",
    "Vehicle Service",
    "Cleaning",
    "CCTV",
];

const QuickOrder = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("Ac Repair");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        serviceName: "Ac Repair",
        name: '',
        phone: '',
        date: '',
        location: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const popupRef = useRef(null);
    const chatbotRef = useRef(null);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
        if (!isPopupOpen) {
            setSubmitSuccess(false);
        }
    };

    const handleServiceSelect = (service) => {
        setSelectedService(service);
        setFormData(prev => ({ ...prev, serviceName: service }));
        setIsDropdownOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
     
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await axios.post('https://admin.homiefix.in/api/website-booking/add', {
                serviceName: formData.serviceName,
                name: formData.name,
                phone: formData.phone,
                date: formData.date,
                location: formData.location
            });
            
            console.log('Submission successful', response.data);
            setSubmitSuccess(true);
            // Reset form
            setFormData({
                serviceName: "Ac Repair",
                name: '',
                phone: '',
                date: '',
                location: ''
            });
            setSelectedService("Ac Repair");
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isPopupOpen && 
                popupRef.current && 
                !popupRef.current.contains(event.target) &&
                chatbotRef.current &&
                !chatbotRef.current.contains(event.target)) {
                setIsPopupOpen(false);
            }
        };

        // Add event listener when popup is open
        if (isPopupOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Clean up the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPopupOpen]);

    return (
        <>
            {/* Chatbot button */}
            <div className="quick-order-chatbot" onClick={togglePopup} ref={chatbotRef}>
                <img src={circle} alt="Quick Order" className="chatbot-img" />
            </div>

            {/* Popup positioned near the chatbot */}
            {isPopupOpen && (
                <div className="popup-container" ref={popupRef} style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '20px',
                    zIndex: '10000'
                }}>
                    <div className="service-booking-popup p-4 pb-5">
                        <div className="popup-header">Service Booking</div>
                        {submitSuccess ? (
                            <div className="success-message p-3 text-center">
                                <p>Your booking has been submitted successfully!</p>
                                <button 
                                    className="popup-submit"
                                    onClick={togglePopup}
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <div className="popup-content">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-field d-flex">
                                        <label className="field-label">Service</label>
                                        {/* Custom Dropdown */}
                                        <div className="position-relative service-mob " style={{ width: '51%' }}>
                                            <div
                                                className="line service-mob dropdown-toggle-custom"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '0 10px',
                                                    cursor: 'pointer',
                                                    color: selectedService ? "#000" : "#C3C3C3",
                                                    height: '30px'
                                                }}
                                            >
                                                <span>{selectedService}</span>
                                                <img src={drop} alt="" className="dropdown-caret" style={{ width: '12px' }} />
                                            </div>

                                            {isDropdownOpen && (
                                                <div className="dropdown-menu-custom mt-1" style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: 0,
                                                    right: 0,
                                                    zIndex: 1000,
                                                    backgroundColor: 'white',
                                                    border: '1px solid #ced4da',
                                                    borderRadius: '4px',
                                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                                }}>
                                                    {services.map((service, index) => (
                                                        <div key={index}>
                                                            <div
                                                                className="dropdown-item-custom"
                                                                onClick={() => handleServiceSelect(service)}
                                                                style={{
                                                                    padding: '8px 12px',
                                                                    cursor: 'pointer'
                                                                }}
                                                            >
                                                                {service}
                                                            </div>
                                                            {index !== services.length - 1 && <hr className="m-0" />}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-field d-flex">
                                        <label className="field-label">Ph No</label>
                                        <input 
                                            type="text" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder='phone number' 
                                            className='line' 
                                            required
                                        />
                                    </div>
                                    <div className="form-field d-flex">
                                        <label className="field-label">Name</label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder='name' 
                                            className='line' 
                                            required
                                        />
                                    </div>
                                    <div className="form-field d-flex">
                                        <label className="field-label">Date</label>
                                        <input 
                                            type="date" 
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            placeholder='24-02-2025' 
                                            className='line' 
                                            required
                                            
                                        />
                                    </div>
                                    <div className="form-field d-flex">
                                        <label className="field-label">Location</label>
                                        <input 
                                            type="text" 
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            placeholder='location' 
                                            className='line' 
                                            required
                                            
                                        />
                                    </div>
                                    <button 
                                        className="popup-submit" 
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                    <div className="popup-arrow"></div>
                </div>
            )}
        </>
    );
};

export default QuickOrder;