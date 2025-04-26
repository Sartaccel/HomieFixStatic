import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Navbar.css';
import logo from '../assets/Logo.svg';
import search from '../assets/search.svg';
import close from '../assets/close.svg';
import mob from '../assets/mobtog.svg';

const services = ["'AC Repair'", "'CCTV Repair'", "'Door Repair'"];
const mobileServiceCategories = [
  "Home appliance",
  "Electrician",
  "Carpentry",
  "Plumbing"
];

const NavigationBar = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const inputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const location = useLocation();

  const isRouteActive = (path) => location.pathname === path; 

  useEffect(() => {
    if (isActive) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
        setFade(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [isActive]);

  const handleInputFocus = () => setIsActive(true);
  const handleMobileInputFocus = () => setIsActive(true);

  const handleCloseClick = (e) => {
    e.preventDefault();
    setInputValue('');
    setIsActive(false);
    setShowMobileSearch(false);
    if (document.activeElement === inputRef.current) inputRef.current.blur();
    if (document.activeElement === mobileInputRef.current) mobileInputRef.current.blur();
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setIsActive(true);
    inputRef.current.focus();
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-4">
        <div className="container">
          {!showMobileSearch && (
            <div className="d-flex align-items-center">
              <Link to="/">
                <img src={logo} alt="Logo" className="navbar-logo" />
              </Link>
            </div>
          )}

          <div className="d-flex align-items-center d-lg-none">
            {!showMobileSearch ? (
              <button className="mobile-search-btn me-3" onClick={toggleMobileSearch}>
                <img src={search} alt="search" className="mobile-search-icon" />
              </button>
            ) : (
              <div className="mobile-search-container position-relative w-100 ps-3">
                <input
                  ref={mobileInputRef}
                  type="text"
                  className="mobile-search-input pe-5"
                  aria-label="Search Services"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={handleMobileInputFocus}
                />
                {!isActive && !inputValue && (
                 <span className="mobile-rotating-combo position-absolute d-flex align-items-center gap-2">
                 <img src={search} alt="search icon" className="explore-search-icon" />
                 <span className="text-muted">Explore</span>
                 <span className={`mobile-rotating-text ${fade ? '' : 'fade-out'}`}>
                   {services[serviceIndex]}
                 </span>
               </span>
               
                )}

                <button type="button" className="close-button" onClick={handleCloseClick}>
                  <img src={close} alt="close" className="close-icon" />
                </button>
              </div>
            )}

            {!showMobileSearch && (
              <button
                className="mobile-toggle-btn navbar-toggler p-0"
                type="button"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <img src={close} alt="close" className="close-icon" />
                ) : (
                  <img src={mob} alt="menu" />
                )}
              </button>
            )}
          </div>

          <div className="collapse navbar-collapse font d-lg-flex" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item">
                <Link to="/about" className={`nav-link ${isRouteActive('/about') ? 'active-nav-link' : ''}`}>
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className={`nav-link ${isRouteActive('/services') ? 'active-nav-link' : ''}`}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/join" className={`nav-link ${isRouteActive('/join') ? 'active-nav-link' : ''}`}>
                  Join HomieFix
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={`nav-link ${isRouteActive('/contact') ? 'active-nav-link' : ''}`}>
                  Contact us
                </Link>
              </li>
            </ul>

            <div className="d-none d-lg-flex">
              <div className="desktop-search-container input-group position-relative">
                <input
                  ref={inputRef}
                  type="text"
                  className="desktop-search-input form-control"
                  placeholder={isActive ? "" : "Explore "}
                  aria-label="Search Services"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={handleInputFocus}
                />
                {!isActive && (
                  <span className={`rotating-text ${fade ? '' : 'fade-out'}`}>
                    {services[serviceIndex]}
                  </span>
                )}
                <button
                  type="button"
                  className="search-toggle-btn"
                  onClick={isActive || inputValue ? handleCloseClick : handleSearchClick}
                >
                  {(isActive || inputValue) ? (
                    <img src={close} alt="close" className="close-icon" />
                  ) : (
                    <img src={search} alt="search" className="search-icon" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="mobile-menu-dropdown d-lg-none" style={{borderRadius:'20px',padding:'25px'}}>
              <ul className="navbar-nav">
                <li className="nav-item border-bottom">
                  <Link to="/about" className={`nav-link mobile-menu-item px-4 ${isRouteActive('/about') ? 'active-nav-link' : ''}`} onClick={toggleMenu}>
                    About us
                  </Link>
                </li>
                <li className="nav-item border-bottom">
                  <Link to="/services" className={`nav-link mobile-menu-item px-4 ${isRouteActive('/services') ? 'active-nav-link' : ''}`} onClick={toggleMenu}>
                    Services
                  </Link>
                </li>
                <li className="nav-item border-bottom">
                  <Link to="/join" className={`nav-link mobile-menu-item px-4 ${isRouteActive('/join') ? 'active-nav-link' : ''}`} onClick={toggleMenu}>
                    Join HomieFix
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className={`nav-link mobile-menu-item px-4 ${isRouteActive('/contact') ? 'active-nav-link' : ''}`} onClick={toggleMenu}>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {showMobileSearch && (
            <div className="mobile-search-results d-lg-none">
              <div className="service-categories">
                <div className="d-flex flex-column gap-1 ps-3">
                  {mobileServiceCategories.map((category, index) => (
                    <button key={index} className="service-category-btn">
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
