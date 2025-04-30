import React, { useState, useRef, useEffect } from 'react';
import circle from '../assets/quick-circle.svg';
import drop from '../assets/Vector 77.svg';
import '../styles/QuickOrder.css';
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

const QuickOrder = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("Service");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        serviceName: "",
        name: '',
        phone: '',
        date: '',
        location: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const popupRef = useRef(null);
    const chatbotRef = useRef(null);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
        if (!isPopupOpen) {
            setSubmitSuccess(false);
            setPhoneError('');
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

    const handlePhoneChange = (e) => {
        const input = e.target.value;
        // Allow only digits and limit to 10 characters
        const numbersOnly = input.replace(/\D/g, '').slice(0, 10);
        setFormData(prev => ({ ...prev, phone: numbersOnly }));
        
        // Clear error when user starts typing
        if (phoneError && numbersOnly.length > 0) {
            setPhoneError('');
        }
    };

    const validatePhone = () => {
        if (formData.phone.length !== 10) {
            setPhoneError('Phone number must be 10 digits');
            return false;
        }
        setPhoneError('');
        return true;
    };

    const handleNameChange = (e) => {
        const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
        setFormData(prev => ({ ...prev, name: value }));
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate >= today) {
            setFormData(prev => ({ ...prev, date: e.target.value }));
        }
    };

    const getMinDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate phone number first
        if (!validatePhone()) {
            return;
        }
        
        // Additional validation
        if (!formData.name || formData.name.trim().length < 2) {
            alert('Please enter a valid name (at least 2 characters)');
            return;
        }
        
        if (!formData.date) {
            alert('Please select a valid date');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await api.post('/website-booking/add', {
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
                serviceName: "",
                name: '',
                phone: '',
                date: '',
                location: ''
            });
            setSelectedService("Service");
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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

        if (isPopupOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPopupOpen]);

    return (
        <>
            <div className="quick-order-chatbot" onClick={togglePopup} ref={chatbotRef}>
                <img src={circle} alt="Quick Order" className="chatbot-img" />
            </div>

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
                                        <div className="position-relative service-mob" style={{ width: '51%' }}>
                                            <div
                                                className="line service-mob dropdown-toggle-custom"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '0 10px',
                                                    cursor: 'pointer',
                                                    height: '30px'
                                                }}
                                            >
                                                <span style={{
                                                    color: selectedService === "Service" ? '#C3C3C3' : '#000'
                                                }}>
                                                    {selectedService}
                                                </span>
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
                                                                    cursor: 'pointer',
                                                                    color: '#000'
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
                                        <div style={{ width: '51%' }}>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handlePhoneChange}
                                                onBlur={validatePhone}
                                                placeholder='Ph No'
                                                className='line'
                                                required
                                                maxLength="10"
                                                pattern="\d{10}"
                                                title="Please enter exactly 10 digits"
                                            />
                                            {phoneError && <div className="error-message" style={{ color: 'red', fontSize: '12px' }}>{phoneError}</div>}
                                        </div>
                                    </div>
                                    <div className="form-field d-flex">
                                        <label className="field-label">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleNameChange}
                                            placeholder='name'
                                            className='line'
                                            required
                                            pattern="[a-zA-Z\s]+"
                                            title="Please enter only letters"
                                        />
                                    </div>
                                    <div className="form-field d-flex">
                                        <label className="field-label">Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleDateChange}
                                            className='line date-input'
                                            required
                                            min={getMinDate()}
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