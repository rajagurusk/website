import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
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

const
  Contact = () => {
    const navigate = useNavigate(); // Initialize navigate

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

    const text = await res.text(); // to see raw response
    console.log('Server response:', text);

    // Try parsing only if it's valid JSON
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

        
    
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const containerStyle = {
      position: 'relative',
      width: '100%',
      height: '80vh',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    const imageStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '8px',
      position: 'absolute',
      bottom: '0', // Make the bottom aligned with the container's bottom
      left: '0',
    };

    const textOverlayStyle = {
      position: 'absolute',
      top: '20px',
      left: '25%',
      transform: 'translateX(-50%)',
      color: '#000000',
      fontSize: '32px',
      fontWeight: 'bold',
      zIndex: 2
    };

    const secondTextOverlayStyle = {
      position: 'absolute',
      top: '80px',
      left: '30%',
      transform: 'translateX(-50%)',
      color: '#000000',
      fontSize: '32px',
      fontWeight: 'bold',
      zIndex: 2
    };

    const knowMoreButtonStyle = {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '12px 24px',
      backgroundColor: '#003366',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      zIndex: 3
    };

    const contactHeaderStyle = {
      textAlign: 'left',
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#000000',
      margin: '30px 40px 10px 40px'
    };

    const contactSectionStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 40px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      marginTop: '20px'
    };

    const contactDetailsStyle = {
      flex: 1,
      paddingRight: '40px'
    };

    const contactDetailStyle = {
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: '18px',
      color: '#000000',
      marginBottom: '20px'
    };

    const iconStyle = {
      width: '32px',
      height: '32px',
      marginRight: '12px',
      marginTop: '4px'
    };

    const formStyle = {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '35px'
    };

    const labelStyle = {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#000'
    };

    const inputRowStyle = {
      width: '100%',
      display: 'flex',
      gap: '15px'
    };

    const inputStyle = {
      flex: 1,
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: '100%',
    };

    const textAreaStyle = {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      resize: 'vertical',
      minHeight: '100px'
    };

    const buttonStyle = {
      marginTop: '5px',
      padding: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      backgroundColor: '#007BFF',
      color: '#ffffff',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer'
    };

    // const bottomBannerSection = {
    //   position: 'relative',
    //   marginTop: '60px',
    //   width: '100%',
    //   minHeight: '500px',
    //   backgroundImage: `url(${BottomBanner})`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // };

    // const bannerContentStyle = {
    //   position: 'absolute',
    //   textAlign: 'center',
    //   color: '#fff',
    //   padding: '20px',
    //   width: '90%'
    // };


    return (
      <>
        {/* Top Banner */}
        <div style={containerStyle}>
          <img src={ContactImage} alt="Contact" style={imageStyle} />
          <div style={textOverlayStyle}>ADVANCED SOLUTION FOR EVERY NEED</div>
          <div style={secondTextOverlayStyle}>DELIVERING CARE WITH TRUST AND SPEED</div>
          <div style={{ ...textOverlayStyle, top: '140px', left: '40%' }}>
            TAILORED SOLUTIONS FOR EVERY MEDICAL SPECIALTY

          </div>
          <div style={{ ...secondTextOverlayStyle, top: '200px', left: '45%' }}>
            DESIGNED WITH SAFETY AND COMPLIANCE IN MIND
          </div>
          {/* Know More Button */}
          <button
            style={knowMoreButtonStyle}
            onClick={() => navigate('/about')} // Navigate to About page
          >
            Know More
          </button>
        </div>

        {/* Contact Header */}
        <div style={contactHeaderStyle}>Contact Us</div>

        {/* Contact Form & Details */}
        <div style={contactSectionStyle}>
          <div style={contactDetailsStyle}>
            <div style={contactDetailStyle}>
              <img src={PhoneIcon} alt="Phone" style={iconStyle} />
              <div>+91 80565 63493</div>
            </div>
            <div style={contactDetailStyle}>
              <img src={EmailIcon} alt="Email" style={iconStyle} />
              <div>info@mindronmeditech.com</div>
            </div>
            <div style={contactDetailStyle}>
              <img src={AddressIcon} alt="Address" style={iconStyle} />
              <div>
                Mindron Meditech Private Limited, D 218, Mumbai - Agra Road,<br />
                Industrial Estate, Amrut Nagar, Behind R City Mall,<br />
                Ghatkopar West, Mumbai, Maharashtra 400086
              </div>
            </div>
            <div style={{ position: 'relative', marginTop: '20px', marginLeft: '100px', width: '50%', height: '350px' }}>
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
              {/* Transparent clickable overlay */}
              <a
                href="https://www.google.com/maps/dir//Mindron+Meditech+Private+limited,+D+218,+Mumbai+-+Agra+Hwy,+Industrial+Estate,+Amrut+Nagar,+Ghatkopar+West,+Mumbai,+Maharashtra+400086/@19.10211,72.9114938,17z"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 2,
                  cursor: 'pointer'
                }}
                aria-label="Open in Google Maps"
              />
            </div>




          </div>

          <form style={formStyle} onSubmit={handleSubmit}>
            <div>
              <div style={labelStyle}>Name</div>
              <div style={inputRowStyle}>
                <input
                  name="firstName" // ✅
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
                  name="lastName" // ✅
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
                name="email" // ✅
                type="email"
                placeholder="Email"
                style={inputStyle} required />
            </div>
            <div>
              <div style={labelStyle}>Phone</div>
              <input
                name="phone" // ✅
                type="tel"
                placeholder="Phone"
                style={inputStyle}
                required
                maxLength={10}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/[^0-9]/g, '');
                  e.target.value = cleaned;
                }}
              />

            </div>
            <div>
              <div style={labelStyle}>Message</div>
              <textarea name="message" // ✅
                placeholder="Your Message"
                style={textAreaStyle} required></textarea>
            </div>
            <button type="submit" style={buttonStyle}>Submit</button>
          </form>
        </div>

        {/* Get in Touch Section */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <h3 style={{ fontSize: '30px', fontWeight: 'bold', color: '#000' }}>📞 Get in Touch</h3>
          <p style={{
            fontSize: '24px',
            color: '#333',
            maxWidth: '600px',
            margin: 'auto',
            whiteSpace: 'pre',
            fontFamily: 'inherit',
            lineHeight: '1.6',
            marginLeft: '280px',
          }}>
            {`We’d love to hear from you! Whether you have a question, feedback, or just want to say hello,
                              feel free to reach out to us. Your message is important,
                                  and we will get back to you as soon as possible.`}
          </p>
        </div>

        {/* Social Media Icons Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          marginTop: '60px',
          marginBottom: '20px'
        }}>
          <a href="https://www.facebook.com/mindronmeditech" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" style={{ width: '40px', height: '40px' }} />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FMindron228025" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" style={{ width: '40px', height: '40px' }} />
          </a>
          <a href="https://www.linkedin.com/in/mindronmeditech-705963364" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" style={{ width: '60px', height: '60px' }} />
          </a>
          <a href="https://www.instagram.com/mindronmeditech/#" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" style={{ width: '40px', height: '40px' }} />
          </a>
        </div>

        {/* Scroll to Top Button */}
        <button onClick={scrollToTop} style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '12px 16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          borderRadius: '50%',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
        }}>
          ↑
        </button>

        {/* Bottom Banner Section */}
        <div style={{
          backgroundColor: '#003366', padding: '40px 5%', color: '#fff', overflowX: 'auto'  // add horizontal scroll if needed
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '40px'
          }}>
            {[
              {
                title: 'Products',
                items: [
                  'ECG (Electrocardiograph)',
                  'BPL Monitor',
                  'Pathology',
                  'Defibrillator',
                  'Syringe Infusion Pump',
                  'Volumetric Infusion Pump',
                  'Baby Warmer',
                  'Suction Machine',
                  'Pulse Oximeter',
                  'Echo Ultrasound']
              },
              {
                title: 'Solutions',
                items: [
                  'Hospitalwide Solution', 'Emergency Care', 'Critical Care',
                  'Perioperative Care', 'Medical Imaging', 'Laboratory Diagnostics', 'Minimally Invasive Surgery'
                ]
              },
              {
                title: 'Resource Center',
                items: [
                  'Training and Education', 'Patient Monitoring Accessories', 'Customer Contact Center',
                  'Media Center', 'Events & Activities', 'Customer Stories', 'News', 'Blog', 'Press'
                ]
              },
              {
                title: 'About Us',
                items: [
                  'Purpose', 'Perspective', 'Our Business', 'History',
                  'Our Culture', 'ESG', 'Investor Relations', 'Virtual Tour with Mindray', 'Covid-19 Response'
                ]
              },
              {
                title: 'Contact Information',
                items: ['Contact Us', 'Join Us']
              }
            ].map((section, index) => (
              <div key={index} style={{
                flex: '0 0 auto',
                minWidth: '160px',
                paddingLeft: '20px'
              }}>
                <div><strong>{section.title}</strong></div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: '10px',
                        color: '#ffffff',
                        cursor:
                          item === 'Contact Us' ||
                            item === 'Join Us' ||
                            item === 'Purpose' ||
                            item === 'Perspective' ||
                            item === 'Our Business' ||
                            item === 'Business'
                            ? 'pointer'
                            : 'default'
                      }}
                      onClick={() => {
                        if (item === 'Contact Us' || item === 'Join Us') {
                          navigate('/contact');
                          window.scrollTo({ top: 600, behavior: 'smooth' });
                        } else if (
                          item === 'Purpose' ||
                          item === 'Perspective' ||
                          item === 'Our Business' ||
                          item === 'Business'
                        ) {
                          const sectionKey = item.toLowerCase().replace(/\s+/g, '');
                          navigate('/about', { state: { scrollTo: sectionKey } });
                          window.scrollTo({ top: 600, behavior: 'smooth' })
                        }
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Secondary Footer */}
            <div style={{
              backgroundColor: '#001933',
              color: '#fff',
              padding: '40px 5%',
              marginLeft: '-6%',
              marginRight: '-20%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              fontSize: '16px',
              width: '111.5%',
              boxSizing: 'border-box'
            }}>
              {/* Left Side */}
              <div style={{ flex: '1', minWidth: '300px', lineHeight: '1.8' }}>
                <p style={{ margin: '5px 0' }}>📞 <strong>+91 80565 63493</strong></p>
                <p style={{ margin: '5px 0' }}>✉️ <strong>info@mindronmeditech.com</strong></p>
                <p style={{ margin: '5px 0' }}>© 2025 MindronMediTech India Pvt. Ltd. All rights reserved.</p>
              </div>

              {/* Right Side */}
              <div style={{ flex: '1', minWidth: '300px', textAlign: 'right' }}>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Follow us on</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginTop: '10px' }}>
                  <a href="https://www.facebook.com/mindronmeditech" target="_blank" rel="noopener noreferrer">
                    <img src={FacebookIcon} alt="Facebook" style={{ width: '32px', height: '32px' }} />
                  </a>
                  <a href="https://x.com/i/flow/login?redirect_after_login=%2FMindron228025" target="_blank" rel="noopener noreferrer">
                    <img src={TwitterIcon} alt="Twitter" style={{ width: '32px', height: '32px' }} />
                  </a>
                  <a href="https://www.linkedin.com/in/mindronmeditech-705963364" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn" style={{ width: '36px', height: '36px' }} />
                  </a>
                  <a href="https://www.instagram.com/mindronmeditech/#" target="_blank" rel="noopener noreferrer">
                    <img src={InstagramIcon} alt="Instagram" style={{ width: '32px', height: '32px' }} />
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
