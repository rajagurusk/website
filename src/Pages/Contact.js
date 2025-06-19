import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/style.css';

import ContactImage from '../Images/contact.jpg';
import PhoneIcon from '../Images/phone.png';
import EmailIcon from '../Images/email.png';
import AddressIcon from '../Images/address.png';
import ExtraImage from '../Images/leftcontact.png';
import BottomBanner from '../Images/footerbanner.png';
import FacebookIcon from '../Images/facebook.png';
import TwitterIcon from '../Images/twitter.png';
import LinkedInIcon from '../Images/linkedin.png';
import InstagramIcon from '../Images/instagram.png';

const Contact = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const text = await res.text();
      console.log('Server response:', text);

      try {
        const json = JSON.parse(text);
        if (json.success) {
          alert('✅ Message sent successfully!');
          e.target.reset();
        } else {
          alert(`❌ Error: ${json.error || 'Unknown error'}`);
        }
      } catch (parseErr) {
        console.error('JSON parse error:', parseErr);
        alert('❌ Unexpected server response');
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert("❌ Something went wrong while submitting the form.");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mobile-responsive styles
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: isMobile ? '50vh' : '80vh',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

     const imageStyle = {
      width: '100%',
      height: '100%',
      objectfit: 'contain',
      borderRadius: '8px',
      position: 'absolute',
      bottom: '0', // Make the bottom aligned with the container's bottom
      left: '0',
    };

  const knowMoreButtonStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: isMobile ? '8px 16px' : '12px 24px',
    backgroundColor: '#003366',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: isMobile ? '14px' : '16px',
    cursor: 'pointer',
    zIndex: 3
  };

  const contactHeaderStyle = {
    textAlign: 'left',
    fontSize: isMobile ? '20px' : '28px',
    fontWeight: 'bold',
    color: '#003366',
    margin: isMobile ? '20px 20px 10px 20px' : '30px 40px 10px 40px'
  };

  const contactSectionStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    padding: isMobile ? '20px 20px' : '20px 40px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    marginTop: '20px',
    gap: isMobile ? '30px' : '0'
  };

  const contactDetailsStyle = {
    flex: 1,
    paddingRight: isMobile ? '0' : '40px'
  };

  const contactDetailStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: isMobile ? '16px' : '18px',
    color: '#000000',
    marginBottom: '20px'
  };

  const iconStyle = {
    width: isMobile ? '24px' : '32px',
    height: isMobile ? '24px' : '32px',
    marginRight: '12px',
    marginTop: '4px'
  };

  const formContainerStyle = {
    padding: isMobile ? '20px 0' : '30px 10%',
    marginTop: isMobile ? '0' : '-120px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
    maxWidth: isMobile ? '100%' : '900px',
    margin: '0 auto',
    padding: isMobile ? '0 10px' : '0 20px',
  };

  const labelStyle = {
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#000'
  };

  const inputRowStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    flexWrap: 'wrap',
    gap: '15px'
  };

  const inputStyle = {
    flex: 1,
    padding: isMobile ? '12px' : '10px',
    fontSize: isMobile ? '14px' : '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    minWidth: isMobile ? '100%' : 'auto'
  };

  const textAreaStyle = {
    width: '100%',
    padding: isMobile ? '12px' : '10px',
    fontSize: isMobile ? '14px' : '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'vertical',
    minHeight: isMobile ? '80px' : '100px'
  };

  const buttonStyle = {
    marginTop: '5px',
    padding: isMobile ? '14px' : '12px',
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 'bold',
    backgroundColor: '#003366',
    color: '#ffffff',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer'
  };

  const mapContainerStyle = {
    position: 'relative',
    marginTop: '20px',
    marginLeft: isMobile ? '0' : '100px',
    width: isMobile ? '100%' : '65%',
    height: isMobile ? '200px' : '300px'
  };

  const worldMapContainerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: isMobile ? '100%' : '1000px',
    margin: isMobile ? '30px auto' : '50px auto',
    borderRadius: '8px',
    overflow: 'hidden'
  };

  const worldMapImageStyle = {
    width: '100%',
    height: isMobile ? '300px' : '500px',
    objectFit: 'contain',
    transform: isMobile ? 'scaleX(1)' : 'scaleX(1.5)',
    transformOrigin: 'center',
    marginTop: isMobile ? '0' : '-50px',
    display: 'block',
  };

  const markerStyle = {
    width: isMobile ? '8px' : '12px',
    height: isMobile ? '8px' : '12px',
    backgroundColor: 'red',
    borderRadius: '50%',
    border: '2px solid white',
    marginBottom: '4px'
  };

  const labelStyles = {
    color: '#003366',
    fontSize: isMobile ? '10px' : '12px',
    backgroundColor: 'white',
    padding: '2px 4px',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
  };

  const footerStyle = {
    backgroundColor: '#003366',
    padding: isMobile ? '20px 5%' : '40px 5%',
    color: '#fff',
    overflowX: 'auto',
    gap: isMobile ? '20px' : '50px'
  };

  const footerContentStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: isMobile ? '20px' : '40px'
  };

  const locationInfoStyle = {
    flex: '0 0 100%',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '15px' : '20px',
    paddingLeft: isMobile ? '0' : '20px'
  };

  const locationCardStyle = {
    minWidth: isMobile ? '100%' : '220px',
    color: '#ffffff',
    lineHeight: '1.5',
    fontSize: isMobile ? '12px' : '14px',
    marginBottom: isMobile ? '15px' : '0'
  };

  const secondaryFooterStyle = {
    backgroundColor: '#001933',
    color: '#fff',
    padding: isMobile ? '20px 5%' : '40px 5%',
    marginLeft: isMobile ? '-5%' : '-6%',
    marginRight: isMobile ? '-5%' : '-20%',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'flex-start' : 'center',
    flexWrap: 'wrap',
    fontSize: isMobile ? '14px' : '16px',
    width: isMobile ? '110%' : '111.5%',
    boxSizing: 'border-box',
    gap: isMobile ? '20px' : '0'
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: isMobile ? 'flex-start' : 'flex-end',
    gap: isMobile ? '15px' : '20px',
    marginTop: '10px'
  };

  const socialIconStyle = {
    width: isMobile ? '28px' : '32px',
    height: isMobile ? '28px' : '32px'
  };

  return (
    <>
      {/* Top Banner */}
      <div style={containerStyle}>
        <img src={ContactImage} alt="Contact" style={imageStyle} />
        <button
          style={knowMoreButtonStyle}
          onClick={() => navigate('/about')}
        >
          Know More
        </button>
      </div>

      {/* Contact Header */}
      <div style={contactHeaderStyle}>Corporate Headquarter</div>

      {/* Contact Form & Details */}
      <div style={contactSectionStyle}>
        <div style={contactDetailsStyle}>
          <div style={contactDetailStyle}>
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src={PhoneIcon}
              alt="Phone"
              style={iconStyle}
            />
            <div data-aos="fade-right" data-aos-duration="1000">
              022 4516 6539 <br /> +91 86559 72632 <br />+91 86559 72633
            </div>
          </div>
          <div style={contactDetailStyle}>
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src={EmailIcon}
              alt="Email"
              style={iconStyle}
            />
            <div data-aos="fade-right" data-aos-duration="1000">
              info@mindronmeditech.com
            </div>
          </div>
          <div style={contactDetailStyle}>
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src={AddressIcon}
              alt="Address"
              style={iconStyle}
            />
            <div data-aos="fade-right" data-aos-duration="1000">
  <strong>Mindron Meditech Private Limited</strong><br />
  <span style={{ fontSize: '15px' }}>
    Unit No. 218, 2nd Floor, D Block, Agra Road Industrial Premises Co-op. Society Ltd., Amrut Nagar Road, Ghatkopar West, Mumbai - 400086, India
  </span>
</div>


          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            style={mapContainerStyle}
          >
            <iframe
              title="Mindron Meditech Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.126400966925!2d72.9114937749781!3d19.10210998210786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c782963cbc57%3A0xe3a4a8bd76446b13!2sMindron%20Meditech%20Private%20limited!5e0!3m2!1sen!2sin!4v1747806779929!5m2!1sen!2sin"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                border: 0
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://www.google.com/maps/dir//Mindron+Meditech+Private+limited,+D+218,+Mumbai+-+Agra+Hwy,+Industrial+Estate,+Amrut+Nagar,+Ghatkopar+West,+Mumbai,+Maharashtra+400086/@19.10211,72.9114938,17z"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '90%',
                zIndex: 2,
                cursor: 'pointer'
              }}
              aria-label="Open in Google Maps"
            />
          </div>
        </div>

        <div style={formContainerStyle}>
          <div style={contactHeaderStyle}>Get in Touch</div>
          <div style={{
            width: '100%',
            maxWidth: isMobile ? '100%' : '600px',
            margin: '0 auto',
            padding: isMobile ? '0' : '10px',
            boxSizing: 'border-box'
          }}>
            <form style={formStyle} onSubmit={handleSubmit}>
              <div>
                <div style={labelStyle}>Name</div>
                <div style={inputRowStyle}>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    style={inputStyle}
                    required
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/[^A-Za-z\s]/g, '');
                      e.target.value = cleaned;
                    }}
                  />
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    style={inputStyle}
                    required
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/[^A-Za-z\s]/g, '');
                      e.target.value = cleaned;
                    }}
                  />
                </div>
              </div>
              <div>
                <div style={labelStyle}>Email</div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  style={inputStyle}
                  required
                />
              </div>
              <div>
                <div style={labelStyle}>Phone</div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  style={inputStyle}
                  required
                  pattern="[0-9]{10}"
                  title="Phone number must be exactly 10 digits"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                  }}
                />
              </div>
              <div>
                <div style={labelStyle}>Message</div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  style={textAreaStyle}
                  required
                ></textarea>
              </div>
              <button type="submit" style={buttonStyle}>Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* World Map with Location Markers */}
      <div style={worldMapContainerStyle}>
        <div style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          height: isMobile ? '300px' : '500px'
        }}>
          <img
            src={require('../Images/worldmap.png')}
            alt="World Map"
            style={worldMapImageStyle}
          />

          {/* Markers with responsive positioning */}
          <a
            href="https://www.google.com/maps/place/Mindron+Meditech+Private+limited/@19.10211,72.9114938,17z"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              top: isMobile ? '55%' : '47%',
              left: isMobile ? '68%' : '66%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
            }}
            title="Open Mumbai in Google Maps"
          >
            <div style={markerStyle} />
            <span style={labelStyles}>Mumbai</span>
          </a>

          <a
            href="https://www.google.com/maps/place/Mukut+Tower,+Kursi+Hwy,+Sector+2,+Vikas+Nagar,+Lucknow,+Uttar+Pradesh+226022/@26.8949152,80.9505442,17z"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              top: isMobile ? '48%' : '41%',
              left: isMobile ? '67%' : '65%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <span style={labelStyles}>Lucknow</span>
            <div style={markerStyle} />
          </a>

          <a
            href="https://www.google.com/maps/place/Hart+Avenue+Plaza/@22.2979489,114.17162,17z"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              top: isMobile ? '45%' : '39%',
              left: isMobile ? '85%' : '80%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <span style={labelStyles}>Hong Kong</span>
            <div style={markerStyle} />
          </a>

          <a
            href="https://www.google.com/maps/place/20+W+47th+St+f+1500,+New+York,+NY+10036,+USA/@40.7564821,-73.9873631,17z"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              top: isMobile ? '35%' : '30%',
              left: isMobile ? '25%' : '22%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <span style={labelStyles}>New York</span>
            <div style={markerStyle} />
          </a>
        </div>
      </div>

      {/* Bottom Banner Section */}
      <div style={footerStyle}>
        <div style={footerContentStyle}>
          <div style={locationInfoStyle}>
            {[
              {
                title: 'India - Mumbai',
                address: `D 218, Mumbai - Agra Road,
Industrial Estate, Amrut Nagar,
 Behind R City Mall,
Ghatkopar West, Mumbai, Maharashtra 400086`,
                phones: ['022 4516 6539', ' +91 86559 72631'],
              },
              {
                title: 'India - Lucknow',
                address: `Office No. 404 ,4th floor,Mukut Tower,
       Kursi Rd,  Sector 2, 
       Vikas Nagar, Lucknow, Uttar Pradesh 226022`,
                phones: [' +91 86559 72632', '+91 86559 72633'],
              },
              {
                title: 'USA - New York',
                address: `20 West. 47th Street, 15/F., Suite 1500,
New York, NY 10036, USA.`,
                phones: ['(001) 212-354-4400', '(001) +917 7535253', '(001) 212-354-4408'],
              },
              {
                title: 'Hong Kong ',
                address: `Room 706, 7/F, Hart Avenue Plaza,
5-9 Hart Avenue, Tsim Sha Tsui,Kowloon, Hong Kong`,
                phones: ['(852) 2766 2008', '(852) 66443807 / (852) 67676220', '(852) 2766 2040'],
              }
            ].map((loc, index) => (
              <div key={index} style={locationCardStyle}>
                <strong>{loc.title}</strong><br />
                {loc.address.split('\n').map((line, i) => (
                  <React.Fragment key={i}>{line}<br /></React.Fragment>
                ))}
                {loc.phones.map((phone, i) => (
                  <div key={i}>📞 {phone}</div>
                ))}
              </div>
            ))}
          </div>

          {/* Secondary Footer */}
          <div style={secondaryFooterStyle}>
            <div style={{ flex: '1', minWidth: isMobile ? '100%' : '300px', lineHeight: '1.8' }}>
              <p style={{ margin: '5px 0' }}>📞 <strong>022 4516 6539</strong></p>
              <p style={{ margin: '5px 0' }}>✉️ <strong>info@mindronmeditech.com</strong></p>
              <p style={{ margin: '5px 0' }}>© 2025 MindronMediTech India Pvt. Ltd. All rights reserved.</p>
            </div>

            <div style={{ flex: '1', minWidth: isMobile ? '100%' : '300px', textAlign: isMobile ? 'left' : 'right' }}>
              <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Follow us on</p>
              <div style={socialIconsStyle}>
                <a href="https://www.facebook.com/mindronmeditech" target="_blank" rel="noopener noreferrer">
                  <img src={FacebookIcon} alt="Facebook" style={socialIconStyle} />
                </a>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2FMindron228025" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterIcon} alt="Twitter" style={socialIconStyle} />
                </a>
                <a href="https://www.linkedin.com/in/mindron-meditech-53b2b9370/" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedInIcon} alt="LinkedIn" style={{ ...socialIconStyle, width: isMobile ? '32px' : '36px', height: isMobile ? '32px' : '36px' }} />
                </a>
                <a href="https://www.instagram.com/mindronmeditech/#" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramIcon} alt="Instagram" style={socialIconStyle} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;