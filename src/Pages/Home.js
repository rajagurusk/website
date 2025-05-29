import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🔹 Import useNavigate
import ProductDetail from '../Pages/ProductDetail';
import '../Pages/style.css';

import Image1 from '../Images/home1.jpg';
import Image2 from '../Images/home2.jpg';
import Image3 from '../Images/home3.jpg';
import Image4 from '../Images/home4.jpg';
import WhatsNewImage from '../Images/doctor.jpg'; // 🔹 Import the "What's New" image
import FacebookIcon from '../Images/facebook.png';
import TwitterIcon from '../Images/twitter.png';
import LinkedInIcon from '../Images/linkedin.png';
import InstagramIcon from '../Images/instagram.png';
import Product1 from '../Images/BPL MULTIPARA MONITOR.png';
import Product2 from '../Images/pulse oximeter.png';
import Product3 from '../Images/syringe infusion pump.png';
import Product4 from '../Images/baby warmer.png';
import Product5 from '../Images/defibrillator.png';


const Home = () => {
  const images = [Image1, Image2, Image3, Image4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // 🔹 Initialize navigate

   const products = [
    {
      id: 1,
      name: 'Defibrillator',
      image: Product5,
      description: 'High-quality defibrillator for emergency cardiac care...',
      // Add other fields as needed for your ProductDetail.js
    },
    {
      id: 2,
      name: 'Pulse Oximeter',
      image: Product2,
      description: 'Accurate pulse oximeter for monitoring blood oxygen levels...',
    },
    {
      id: 3,
      name: 'Syringe Infusion Pump',
      image: Product3,
      description: 'Reliable infusion pump for controlled medication delivery...',
    },
    {
      id: 4,
      name: 'Baby Warmer',
      image: Product4,
      description: 'Safe baby warmer for neonatal care...',
    },
    {
      id: 5,
      name: 'BPL Multipara Monitor',
      image: Product1,
      description: 'Multipara monitor with advanced features...',
    }
  ];
 const handleImageClick = (clickedImg) => {
    const index = ProductDetail.findIndex(p => p.image === clickedImg);
    if (index !== -1) {
      navigate(`/products:id/${index}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Click handler to navigate to ProductDetail with product data
  const handleProductClick = (product) => {
    navigate('/productdetail', { state: { product } });
  };
  

  const headerStyle = {
    width: '100%',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    transition: 'opacity 1s ease-in-out'
  };

  const indicatorWrapperStyle = {
    position: 'absolute',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
    zIndex: 2
  };

  const indicatorStyle = (active) => ({
    width: '30px',
    height: '4px',
    backgroundColor: active ? 'red' : '#ccc',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  });

  const overlayTextStyle = {
    position: 'absolute',
    top: '60%',
    left: '5%',
    transform: 'translateY(-50%)',
    color: '#FF8b28',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    zIndex: 2
  };

  const overlayRightTextStyle = {
    position: 'absolute',
    top: '50%',
    right: '5%',
    transform: 'translateY(-50%)',
    color: '#000',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    zIndex: 2,
    textAlign: 'right'
  };

  const overlayTopLeftTextStyle = {
    position: 'absolute',
    top: '10%',
    left: '5%',
    color: '#6395EE',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    zIndex: 2
  };

  const overlayBottomCenterTextStyle = {
    position: 'absolute',
    bottom: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#000',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    zIndex: 2,
    textAlign: 'center'
  };

  const learnMoreButtonStyle = {
    position: 'absolute',
    top: '80%',
    left: '5%',
    transform: 'translateY(-50%)',
    zIndex: 2
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div>
      <div style={headerStyle}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={imageStyle}
        />

        {currentIndex === 0 && (
          <div style={overlayBottomCenterTextStyle}>
            Transforming Diagnostics into Decisions
          </div>
        )}
        {currentIndex === 1 && (
          <div style={overlayTextStyle}>
            Smart Devices,<br />Safer Lives.
          </div>
        )}
        {currentIndex === 2 && (
          <div style={overlayTopLeftTextStyle}>
            Advanced Medical Devices You Can Trust
          </div>
        )}
        {currentIndex === 3 && (
          <div style={overlayRightTextStyle}>
            Empowering Healthcare<br />with Innovation
          </div>
        )}

        <div style={learnMoreButtonStyle}>
          <button style={buttonStyle}>Learn More</button>
        </div>

        <div style={indicatorWrapperStyle}>
          {images.map((_, index) => (
            <div
              key={index}
              style={indicatorStyle(index === currentIndex)}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div style={{ padding: '40px 5%', textAlign: 'left' }}>
        <div style={{
          width: '60px',
          height: '6px',
          flexWrap: 'wrap', // helps on smaller screens

          backgroundColor: 'red',
          borderRadius: '2px',
          marginBottom: '10px'
        }} />
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Products</h2>
        <p style={{ fontSize: '1.5rem', color: '#555' }}>
          Discover our cutting-edge products designed to make<br /> healthcare safer, smarter,and more efficient-empowering <br />
          medical professionals with innovative technology,<br />
          improving patient outcomes, and shaping<br /> the future of healthcare.
        </p>
        <button
          style={{
            marginTop: '20px',
            padding: '10px 24px',
            backgroundColor: '#001F54',
            color: '#fff',
            border: '2px solid #001F54',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#fff';
            e.target.style.color = '#001F54';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#001F54';
            e.target.style.color = '#fff';
          }}
          onClick={() => navigate('/product')} // 🔹 Navigate to Products
        >
          Explore More
        </button>
         {/* Replace your product image map with this: */}
      <div style={{
        marginLeft: '625px',
        marginTop: '-300px',
        flex: '1 1 45%',
        paddingTop: '10px',
        padding: '10px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        display: 'flex',
        gap: '20px',
        scrollSnapType: 'x mandatory',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {products.map((product) => (
          <img
            key={product.id}
            src={product.image}
            alt={product.name}
            onClick={() => handleProductClick(product)}
            style={{
              width: '300px',
              height: '300px',
              flex: '0 0 auto',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              scrollSnapAlign: 'start',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>





        <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center' }}>
          <img
            src={WhatsNewImage}
            alt="What's New"
            style={{ width: '38%', borderRadius: '10px' }}
          />
          <div style={{ marginLeft: '20px', marginTop: '-10px', flex: 1 }}>
            <h2 style={{ fontSize: '2rem', margin: 0 }}>What's New</h2>

            <div style={{
              maxHeight: '320px', // Show around 2 items (adjust as needed)
              overflowY: 'auto',
              paddingRight: '10px',
              marginTop: '20px',
              scrollbarWidth: 'none',        // Firefox
              msOverflowStyle: 'none'        // IE 10+
            }}>
              {/* ECG */}
              <div
                style={{
                  fontSize: '1.5rem',
                  color: '#001F54',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginBottom: '10px'
                }}
                onClick={() => navigate('/product')}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                ➜ ECG (Electrocardiograph)
              </div>
              <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.0' }}>
                With advanced signal processing and user-friendly interfaces, <strong>Mindron Meditech’s ECG</strong> solutions empower healthcare professionals to make informed decisions swiftly.
              </p>

              {/* UCG */}
              <div
                style={{
                  fontSize: '1.5rem',
                  color: '#001F54',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginTop: '20px'
                }}
                onClick={() => navigate('/product')}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                ➜ UCG (Ultrasound cardiography)
              </div>
              <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '10px', lineHeight: '1.0' }}>
                Our UCG machines provide real-time imaging and precise cardiac monitoring to assist clinicians in accurate diagnoses.
              </p>

              {/* Multipara Monitor */}
              <div
                style={{
                  fontSize: '1.5rem',
                  color: '#001F54',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginTop: '20px'
                }}
                onClick={() => navigate('/product')}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                ➜ Multipara Monitor (High end)
              </div>
              <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '10px', lineHeight: '1.6' }}>
                Our Multipara Monitors combine precision and ease of use, offering real-time tracking of vital signs including ECG, SPO2, NIBP, and temperature, designed for both ICU and mobile applications.
              </p>
            </div>
          </div>


        </div>


        {/* About Us Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          padding: '40px 1%',
          flexWrap: 'wrap'
        }}>
          {/* Text on the Left */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div style={{
              width: '60px',
              height: '6px',
              backgroundColor: 'red',
              borderRadius: '2px',
              marginBottom: '10px'
            }} />

            <h2 style={{
              fontSize: '2rem',
              marginBottom: '10px',
              fontWeight: 'bold',
              color: '#003366'
            }}>
              About Us
            </h2>

            <p style={{
              fontSize: '1.5rem',
              color: '#555',
              lineHeight: '1.5',
              fontWeight: 'normal'
            }}>
              At Mindron Meditech, we are committed to enhancing healthcare outcomes through innovation and excellence.
              Our team of experts is dedicated to delivering reliable, cutting-edge medical devices that healthcare professionals trust.
              We prioritize patient safety, product quality, and regulatory compliance in everything we do.
              By combining advanced technology with user-centric design, we aim to simplify clinical workflows and improve diagnostic accuracy.
            </p>

            <button
              style={{
                marginTop: '20px',
                padding: '10px 24px',
                backgroundColor: '#001F54',
                color: '#fff',
                border: '2px solid #001F54',
                borderRadius: '5px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = '#001F54';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#001F54';
                e.target.style.color = '#fff';
              }}
              onClick={() => navigate('/about')}
            >
              Explore More
            </button>
          </div>

          {/* Image on the Right */}
          <img
            src={require('../Images/aboutushome.jpg')}
            alt="About Us"
            style={{
              width: '40%',
              minWidth: '250px',
              borderRadius: '10px',
              objectFit: 'cover'
            }}
          />
        </div>


        {/* Bottom Banner Section */}
        <div style={{
          backgroundColor: '#003366', padding: '40px 5.8%', color: '#fff', overflowX: 'auto',
          width: '100%',
          marginLeft: 'calc(-50vw + 50%)', // pull left to align full width
          marginRight: 'calc(-50vw + 50%)',// pull right to align full width
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
                paddingLeft: '10px'
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
          </div>
        </div>

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
  );
};

export default Home;
