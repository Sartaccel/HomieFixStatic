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
    const [formError, setFormError] = useState('');
    const [dateError, setDateError] = useState('');
    const popupRef = useRef(null);
    const chatbotRef = useRef(null);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
        if (!isPopupOpen) {
            setSubmitSuccess(false);
            setPhoneError('');
            setFormError('');
            setDateError('');
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
        if (formError) setFormError('');
    };

    const handlePhoneChange = (e) => {
        const input = e.target.value;
        const numbersOnly = input.replace(/\D/g, '').slice(0, 10);
        setFormData(prev => ({ ...prev, phone: numbersOnly }));
        if (phoneError) setPhoneError('');
        if (formError) setFormError('');
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
        if (formError) setFormError('');
    };

    const handleDateChange = (e) => {
        const inputValue = e.target.value;
        
        // Check if the input matches YYYY-MM-DD format with exactly 4-digit year
        const dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
        
        if (inputValue && !dateRegex.test(inputValue)) {
            setDateError('Please use YYYY-MM-DD format');
            return;
        }

        // Additional validation for the date
        if (inputValue) {
            const dateObj = new Date(inputValue);
            if (isNaN(dateObj.getTime())) {
                setDateError('Please enter a valid date');
                return;
            }
        }

        setDateError('');
        setFormData(prev => ({ ...prev, date: inputValue }));
        if (formError) setFormError('');
    };

    const getMinDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const validateForm = () => {
        if (selectedService === "Service" || !formData.serviceName) {
            setFormError('Please select a service');
            return false;
        }
        
        if (!validatePhone()) {
            return false;
        }
        
        if (!formData.name || formData.name.trim().length < 2) {
            setFormError('Please enter a valid name (at least 2 characters)');
            return false;
        }
        
        if (!formData.date) {
            setFormError('Please select a date');
            return false;
        }

        if (dateError) {
            setFormError('Please enter a valid date');
            return false;
        }

        if (!formData.location || formData.location.trim().length < 3) {
            setFormError('Please enter a valid location');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setFormError('');

        try {
            const payload = {
                serviceName: formData.serviceName,
                name: formData.name.trim(),
                phone: formData.phone,
                date: formData.date,
                location: formData.location.trim()
            };

            const response = await api.post('/website-booking/add', payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                timeout: 10000
            });

            if (response.status === 200 || response.status === 201) {
                setSubmitSuccess(true);
                setFormData({
                    serviceName: "",
                    name: '',
                    phone: '',
                    date: '',
                    location: ''
                });
                setSelectedService("Service");
            } else {
                throw new Error(response.data?.message || 'Submission failed');
            }
        } catch (error) {
            let errorMsg = 'Failed to submit. Please try again.';
            
            if (error.response) {
                errorMsg = error.response.data?.message || 
                         `Server error: ${error.response.status}`;
            } else if (error.request) {
                errorMsg = 'Network error. Please check your connection.';
            } else if (error.message && error.message.includes('timeout')) {
                errorMsg = 'Request timeout. Please try again.';
            }
            
            setFormError(errorMsg);
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

    useEffect(() => {
        const handleTouchOutside = (event) => {
            if (isPopupOpen &&
                popupRef.current &&
                !popupRef.current.contains(event.target) &&
                chatbotRef.current &&
                !chatbotRef.current.contains(event.target)) {
                setIsPopupOpen(false);
            }
        };

        if (isPopupOpen) {
            document.addEventListener('touchstart', handleTouchOutside);
        }

        return () => {
            document.removeEventListener('touchstart', handleTouchOutside);
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
                                    type="button"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <div className="popup-content">
                                <form onSubmit={handleSubmit} noValidate>
                                    {formError && (
                                        <div className="error-message mb-2 text-center" style={{ color: 'red', fontSize: '14px' }}>
                                            {formError}
                                        </div>
                                    )}
                                    <div className="form-field d-flex">
                                        <label className="field-label">Service</label>
                                        <div className="position-relative service-mob" style={{ width: '60%' }}>
                                            <div
                                                className="main-line service-mob dropdown-toggle-custom"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '0 10px',
                                                    cursor: 'pointer',
                                                    height: '30px',
                                                    border: '1px solid #C9C9C9',
                                                    borderRadius: '3px'
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
                                        <div style={{ width: '60%' }}>
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
                                                style={{
                                                    width: '100%',
                                                    border: phoneError ? '1px solid red' : '1px solid #C9C9C9',
                                                    borderRadius: '3px',
                                                }}
                                            />
                                            {phoneError && <div className="error-message" style={{ color: 'red', fontSize: '12px' }}>{phoneError}</div>}
                                        </div>
                                    </div>
                                    <div className="form-field d-flex">
                                        <label className="field-label">Name</label>
                                        <div style={{ width: '60%' }}>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleNameChange}
                                                placeholder='Name'
                                                className='line'
                                                required
                                                minLength="2"
                                                style={{
                                                    width: '100%',
                                                    border: '1px solid #C9C9C9',
                                                    borderRadius: '3px',
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-field d-flex">
                                        <label className="field-label">Date</label>
                                        <div style={{ width: '60%' }}>
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleDateChange}
                                                onBlur={(e) => {
                                                    if (e.target.value && !/^\d{4}-\d{2}-\d{2}$/.test(e.target.value)) {
                                                        setDateError('Please use YYYY-MM-DD format');
                                                    }
                                                }}
                                                className='lined'
                                                required
                                                min={getMinDate()}
                                                style={{
                                                    width: '100%',
                                                    border: dateError ? '1px solid red' : '1px solid #C9C9C9',
                                                    borderRadius: '3px',
                                                }}
                                            />
                                            {dateError && (
                                                <div className="error-message" style={{ color: 'red', fontSize: '12px' }}>
                                                    {dateError}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-field d-flex">
                                        <label className="field-label">Location</label>
                                        <div style={{ width: '60%' }}>
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleInputChange}
                                                placeholder='Location'
                                                className='line'
                                                required
                                                minLength="3"
                                                style={{
                                                    width: '100%',
                                                    border: '1px solid #C9C9C9',
                                                    borderRadius: '3px',
                                                }}
                                            />
                                        </div>
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