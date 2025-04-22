import React from 'react'
import Footer from './Footer';

const Terms = () => {
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
        }}>Terms and Conditions</h1>
        
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
            Welcome to HomieFix!
          </h2>
          <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
            By using the HomieFix application and its services, you agree to the following detailed terms and conditions. Please read these conditions carefully before accessing the app or making any bookings.
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
            1. Eligibility
          </h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>1.1</span>
              <span style={{ marginLeft: '25px' }}>Age Requirement: You must be 18 years or older to use HomieFix services.</span>
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>1.2</span>
              <span style={{ marginLeft: '25px' }}>Legal Compliance: Users are required to comply with all applicable laws and regulations when using the app.</span>
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
            2. Account Management
          </h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>2.1</span>
              <span style={{ marginLeft: '25px' }}>Accurate Information: Users must provide accurate details during registration and booking.</span>
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>2.2</span>
              <span style={{ marginLeft: '25px' }}>Account Security: You are responsible for safeguarding your login credentials. HomieFix will not be liable for unauthorized account access due to user negligence.</span>
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
            3. Service Usage
          </h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>3.1</span>
              <span style={{ marginLeft: '25px' }}>Booking Services: Services must be booked via the HomieFix app. Accurate details regarding the nature and location of the service are essential.</span>
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>3.2</span>
              <span style={{ marginLeft: '25px' }}>Service Availability: Service availability is subject to location, technician schedules, and other operational factors.</span>
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
            4. Payments
          </h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>4.1</span>
              <span style={{ marginLeft: '25px' }}>Cash After Service (COS): All payments must be made in cash upon completion of the service. However, you can make payments by scanning the provided QR code.</span>
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>4.2</span>
              <span style={{ marginLeft: '25px' }}>Pricing Transparency: Service costs will be communicated during the booking process. The final amount must be paid in full to the technician at the time of service completion.</span>
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>4.3</span>
              <span style={{ marginLeft: '25px' }}>Non-payment Policy: Non-payment may result in restrictions on future bookings or legal action.</span>
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
            5. No Refund policy
          </h2>
          <p style={{ marginBottom: '15px', lineHeight: '1.6', paddingLeft: '15px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0 }}>5.1</span>
            <span style={{ marginLeft: '25px' }}>Final Bookings: Once a service provider is assigned by HomieFix, it is non-refundable. Please review all details before confirming. For any assistance, our team is ready to help.</span>
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
            6. Liability and Service Quality
          </h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>6.1</span>
              <span style={{ marginLeft: '25px' }}>Technician Expertise: HomieFix technicians are vetted and trained to deliver professional services.</span>
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>6.2</span>
              <span style={{ marginLeft: '25px' }}>Limitations of Liability: HomieFix will not be responsible for incorrect service details provided by the user or misuse of the service.</span>
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
            7. Data Privacy and Security
          </h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>7.1</span>
              <span style={{ marginLeft: '25px' }}>User Data: HomieFix collects and stores data in accordance with its Privacy Policy, ensuring user confidentiality.</span>
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>7.2</span>
              <span style={{ marginLeft: '25px' }}>Third-party Access: User data will not be shared with third parties without consent, except as required by law.</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 style={{ color: '#001D33', marginBottom: '15px', fontSize: '20px' }}>
            Contact Information
          </h2>
          <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
            For questions or assistance, reach out to us at:
            <br />
            Email: contact@homiefix.in
            <br />
            Phone: +91 9042812257
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;