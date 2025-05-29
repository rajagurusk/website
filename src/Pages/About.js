import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/style.css';
import AboutBanner from '../Images/aboutus.jpg';
import PurposeImage from '../Images/purpose.jpg';
import PerspectiveImage from '../Images/perspective.jpg';
import BusinessImage from '../Images/business.jpg';
import FacebookIcon from '../Images/facebook.png';
import TwitterIcon from '../Images/twitter.png';
import LinkedInIcon from '../Images/linkedin.png';
import InstagramIcon from '../Images/instagram.png';

const About = () => {
  const navigate = useNavigate();

//   const handleProductClick = (productName) => {
//   navigate('/products/:id', { state: { productName } });
// };
  
  const purposeRef = useRef(null);
  const perspectiveRef = useRef(null);
  const businessRef = useRef(null);

  const containerStyle = {
    position: 'relative', width: '100%', height: '80vh', backgroundColor: '#f9f9f9',
    display: 'flex', justifyContent: 'center', alignItems: 'center'
  };

  const imageStyle = {
    width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', position: 'absolute', bottom: '0', left: '0'
  };

  const textOverlayStyle = {
    position: 'absolute', top: '20px', right: '5%', color: '#000000', fontSize: '32px', fontWeight: 'bold', zIndex: 2, textAlign: 'right', lineHeight: '1.6'
  };

  const secondTextOverlayStyle = {
    position: 'absolute', top: '150px', right: '12%', color: '#000000', fontSize: '32px', fontWeight: 'bold', zIndex: 2, textAlign: 'right', lineHeight: '1.6'
  };

  const buttonStyle = {
    position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', padding: '12px 24px', backgroundColor: '#003366', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer', zIndex: 3
  };



  const scrollToSection = (section) => {
    if (section === 'Purpose') purposeRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'Perspective') perspectiveRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'Business') businessRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header Image Section */}
      <div style={containerStyle}>
        <img src={AboutBanner} alt="About Us" style={imageStyle} />
        <div style={textOverlayStyle}>
          AT MINDRON MEDITECH, WE DELIVER ADVANCED MEDICAL <br />
          SOLUTIONS THAT REDEFINE CLINICAL EXCELLENCE.
        </div>
        <div style={secondTextOverlayStyle}>
          OUR MISSION IS CLEAR: TO SUPPORT CAREGIVERS <br />
          WITH RELIABLE TECHNOLOGY AND UNMATCHED SERVICE.
        </div>
        <button style={buttonStyle} onClick={() => navigate('/contact')}>
          Contact Us
        </button>
      </div>

      {/* Navigation Text Section */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%', textAlign: 'center' }}>
          {['Purpose', 'Perspective', 'Business'].map((item, index) => (
            <div
              key={index}
              className="text-item"
              onClick={() => scrollToSection(item)}
              style={{
                cursor: 'pointer', fontSize: '24px', fontWeight: '', color: '#003366',
                padding: '10px', marginRight: index < 2 ? '1.5rem' : '0', position: 'relative'
              }}
            >
              {item}
              <div className="arrow"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Purpose Section */}
      <div ref={purposeRef} style={{ marginTop: '40px', padding: '0 10%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ width: '60px', height: '6px', backgroundColor: 'red', marginBottom: '8px' }}></div>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#003366', margin: 0 }}>Purpose</h2>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginTop: '24px', padding: '0 10%', flexWrap: 'wrap' }}>
        <img src={PurposeImage} alt="Purpose Illustration" style={{ width: '30%', minWidth: '200px', borderRadius: '8px' }} />
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '28px', color: '#333', lineHeight: '1.6', maxWidth: '100%' }}>
            <strong>At Mindron Meditech, our purpose</strong> is to empower healthcare professionals by
            delivering cutting-edge medical technologies. We believe that every innovation
            should be driven by real clinical needs and designed for maximum patient benefit.
          </p>
        </div>
      </div>

      {/* Perspective Section */}
      <div ref={perspectiveRef} style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginTop: '60px', padding: '0 10%', flexWrap: 'wrap' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ width: '60px', height: '6px', backgroundColor: 'red', marginBottom: '8px' }}></div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#003366', margin: 0 }}>Perspective</h2>
          </div>
          <p style={{ fontSize: '24px', color: '#333', lineHeight: '1.8', maxWidth: '100%', fontWeight: '500', marginTop: '16px' }}>
            Our perspective is rooted in a deep understanding of clinical challenges. We continuously
            evolve with the changing landscape of medical needs and technology to provide adaptive
            and forward-thinking solutions that improve lives.
          </p>
        </div>
        <img src={PerspectiveImage} alt="Perspective Illustration" style={{ width: '40%', minWidth: '250px', borderRadius: '8px' }} />
      </div>

      {/* Business Section */}
      <div ref={businessRef} style={{ marginTop: '60px', padding: '0 10%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ width: '60px', height: '6px', backgroundColor: 'red', marginBottom: '8px' }}></div>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#003366', margin: 0 }}>Business</h2>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginTop: '24px', padding: '0 10%', flexWrap: 'wrap' }}>
        <img src={BusinessImage} alt="Business Illustration" style={{ width: '40%', minWidth: '200px', borderRadius: '8px' }} />
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '26px', color: '#333', lineHeight: '1.6', maxWidth: '100%' }}>
            <strong>Our business strategy</strong> is grounded in innovation, trust, and long-term partnerships.
            At Mindron Meditech, we focus on scalable solutions that meet global healthcare demands
            while maintaining the highest standards of quality and regulatory compliance.
          </p>
        </div>
      </div>

      {/* Bottom Banner Section */}
      <div style={{
        backgroundColor: '#003366', padding: '20px 5% 40px 5%', color: '#fff', marginTop: '60px', overflowX: 'auto'  // add horizontal scroll if needed
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
                'Echo Ultrasound'
              ]

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
                      const productMap = {
                        'ECG (Electrocardiograph)': 'ecg',
                        'BPL Monitor': 'bpl-monitor',
                        'Pathology': 'pathology',
                        'Defibrillator': 'defibrillator',
                        'Syringe Infusion Pump': 'syringe-infusion-pump',
                        'Volumetric Infusion Pump': 'volumetric-infusion-pump',
                        'Baby Warmer': 'baby-warmer',
                        'Suction Machine': 'suction-machine',
                        'Pulse Oximeter': 'pulse-oximeter',
                        'Echo Ultrasound': 'echo-ultrasound'
                      };

                      if (productMap[item]) {
                        navigate(`/productdetail/${productMap[item]}`);
                      }
                      else if (item === 'Contact Us' || item === 'Join Us') {
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
        </div>
      </div>

      {/* Secondary Footer */}
      <div style={{
        backgroundColor: '#001933',
        color: '#fff',
        padding: '40px 10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize: '16px',
        width: '100%',
        boxSizing: 'border-box'
      }}>

        {/* Left Side */}
        <div style={{ flex: '1', minWidth: '250px', lineHeight: '1.8' }}>
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


      {/* CSS styles */}
      <style>
        {`
          .text-item {
            position: relative;
            display: inline-block;
          }
          .text-item::after {
            content: '';
            display: block;
            width: 0%;
            height: 2px;
            background-color: #003366;
            transition: width 0.3s ease;
            position: absolute;
            bottom: -5px;
            left: 0;
          }
          .text-item:hover::after {
            width: 100%;
          }
          .arrow {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 20px;
            color: #003366;
            transition: opacity 0.3s ease;
            opacity: 0;
          }
          .text-item:hover .arrow {
            opacity: 1;
          }
        `
        
        
        }
      </style>
    </div>
  );
};
export default About;
