import React from 'react';
import Footer from './Footer';

const PrivacyPolicy = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }}>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                flex: '1'
            }}>
                <h1 style={{
                    color: '#001D33',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    fontSize: '28px'
                }}>Privacy Policy</h1>

                <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
                        1. Information We Collect
                    </h2>
                    <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                        We collect the following types of information to provide and improve our services:
                    </p>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
                        <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0 }}>-</span>
                            <span style={{ marginLeft: '15px' }}>Personal Information: Name, contact number, address, and service details.</span>
                        </li>
                        <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0 }}>-</span>
                            <span style={{ marginLeft: '15px' }}>Usage Data: App activity, service history, and interactions for analytics and user experience enhancement.</span>
                        </li>
                    </ul>
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
                        2. How We Use Your Information
                    </h2>
                    <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                        We use your data to:
                    </p>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
                        <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0 }}>-</span>
                            <span style={{ marginLeft: '15px' }}>Process bookings and deliver services efficiently.</span>
                        </li>
                        <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0 }}>-</span>
                            <span style={{ marginLeft: '15px' }}>Send service updates, offers, and feedback requests.</span>
                        </li>
                        <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0 }}>-</span>
                            <span style={{ marginLeft: '15px' }}>Improve app performance and provide a better user experience.</span>
                        </li>
                    </ul>
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
                        3. Data Sharing & Disclosure
                    </h2>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
                        <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0 }}>-</span>
                            <span style={{ marginLeft: '15px' }}>We share necessary details with service technicians for appointment fulfillment.</span>
                        </li>
                        <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0 }}>-</span>
                            <span style={{ marginLeft: '15px' }}>We do not sell or share your data with third parties, except when required by law.</span>
                        </li>
                    </ul>
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
                        4. Data Security
                    </h2>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
                        <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0 }}>-</span>
                            <span style={{ marginLeft: '15px' }}>We implement advanced encryption and security measures to protect your data.</span>
                        </li>
                        <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0 }}>-</span>
                            <span style={{ marginLeft: '15px' }}>Regular audits are conducted to ensure data integrity and safeguard user privacy.</span>
                        </li>
                    </ul>
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
                        5. User Rights
                    </h2>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
                        <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0 }}>-</span>
                            <span style={{ marginLeft: '15px' }}>You can access, update, or delete your personal information within the app settings.</span>
                        </li>
                        <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0 }}>-</span>
                            <span style={{ marginLeft: '15px' }}>Users can opt-out of non-essential communications at any time.</span>
                        </li>
                    </ul>
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
                        6. Updates to This Policy
                    </h2>
                    <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                        We may update this Privacy Policy periodically. Changes will be reflected in the app, and continued use signifies acceptance of the revised policy.
                    </p>
                </div>

                <div>
                    <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
                        7. Contact Us
                    </h2>
                    <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
        For any questions or concerns regarding this Privacy Policy, contact us at{' '}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@homiefix.in">contact@homiefix.in</a>
    </p>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;