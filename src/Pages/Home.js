import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/style.css';

import Image1 from '../Images/home2.png';
import Image2 from '../Images/home1.jpg';
import Image3 from '../Images/home3.jpg';
import Image4 from '../Images/home4.jpg';
import WhatsNewImage from '../Images/doctor.jpg';
import FacebookIcon from '../Images/facebook.png';
import TwitterIcon from '../Images/twitter.png';
import LinkedInIcon from '../Images/linkedin.png';
import InstagramIcon from '../Images/instagram.png';
import Product2 from '../Images/ecg18.jpeg';
import Product3 from '../Images/ctg.jpeg';
import Product4 from '../Images/multiparamonitor.jpeg';
import Product5 from '../Images/USG.jpg';
import Product6 from '../Images/pulsefinger.jpeg'

const Home = () => {
  const images = [Image1, Image2, Image3, Image4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const scrollRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);



  const products = [
    {
      id: 1,
      name: 'Ultrasound Machine',
      image: Product5,
      description: 'High-quality defibrillator for emergency cardiac care...',
      path: '/products/portableultrasoundmachine',
    },
    {
      id: 2,
      name: 'ECG',
      image: Product2,
      description: 'Accurate pulse oximeter for monitoring blood oxygen levels...',
      path: '/products/ecg',

    },
    {
      id: 3,
      name: 'CTG',
      image: Product3,
      description: 'Reliable infusion pump for controlled medication delivery...',
      path: '/products/cardiotocography',
    },
    {
      id: 4,
      name: 'Multipara Monitor',
      image: Product4,
      description: 'Safe baby warmer for neonatal care...',
      path: '/products/multiparamonitor',
    },
    {
      id: 5,
      name: 'Pulse Oximeter',
      image: Product6,
      description: 'Safe baby warmer for neonatal care...',
      path: '/products/pulseoximeter',
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, });
  }, []);
  useEffect(() => {
  document.body.style.overflowX = 'hidden';
  return () => {
    document.body.style.overflowX = 'auto';
  };
}, []);
useEffect(() => {
  document.body.style.overflowX = 'hidden';
}, []);


  // Click handler to navigate to ProductDetail with product data
  const handleProductClick = (product) => {
    navigate('/productdetail', { state: { product } });
  };
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const headerStyle = {
    position: 'relative',
    width: '100%',
    height: isMobile ? 'auto' : '90vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    minHeight: isMobile ? 'auto' : '400px',
    maxHeight: '100vh',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: isMobile ? 'fill' : 'cover',
    opacity: 0.9,
  position: 'relative', // NOT absolute — avoid removing it from layout
    top: 0,
    left: 0,
    zIndex: 1,
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
    zIndex: 2,
    top: '30%',
    left: '10%',
    transform: 'translateY(-50%)',
    color: 'navy blue',
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
    textAlign: 'right',
    objectFit: 'cover',
    objectPosition: 'top',
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
    right: '-20%',
    transform: 'translateX(-50%)',
    color: '#000',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    zIndex: 2,
    textAlign: 'right'
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
<div style={{ position: 'relative', overflow: 'hidden' }}> 
  <div className="header-container" style={headerStyle}>
    <img
      src={images[currentIndex]}
      alt={`Slide ${currentIndex + 1}`}
      style={{
        width: '100%',
  height: isMobile ? 'auto' : '100vh',
        objectFit: 'cover',
        display: 'block'
      }}
    />

    {/* Overlay Texts */}
    {currentIndex === 0 && <div style={overlayBottomCenterTextStyle}></div>}
    {currentIndex === 1 && <div style={overlayTextStyle}></div>}
    {currentIndex === 2 && <div style={overlayTopLeftTextStyle}></div>}
    {currentIndex === 3 && <div style={overlayRightTextStyle}></div>}

    {/* Dot Indicators */}
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
      <div style={{ padding: '40px 5%', textAlign: 'left' }} data-aos="fade-up">
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
          Explore Mindron Meditech’s advanced medical solutions, <br />crafted to make
          healthcare safer, smarter, and more <br />accessible. Our innovations
          empower medical <br />professionals, enhance patient care, and drive<br />
          the future of healthcare through precision, reliability, and<br />
          a commitment to excellence.
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
          onClick={() => navigate('/product')}
        >
          Explore More
        </button>
        {/* Replace your product image map with this: */}
<div
  style={{
    position: 'relative',
    marginTop: isMobile ? '0px' : '-350px', // only shift upward on desktop
    padding: isMobile ? '20px 0' : '30px 0',
  }}
>

          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            style={{
              position: 'absolute',
              top: '50%',
    left: isMobile ? '10px' : 'calc(50% - 20px)', // more left on mobile
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            ◀
          </button>

          {/* Scrollable Products */}
          <div
            ref={scrollRef}
            style={{
              marginLeft: '625px',
              flex: '1 1 45%',
              paddingTop: '10px',
              padding: '10px',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              display: 'flex',
              gap: '20px',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
                  marginLeft: isMobile ? '0' : '625px',  // only shift on desktop

            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id || index}
                onClick={() => navigate(product.path)}
                className="product-card"
                style={{
                  cursor: 'pointer',
                  display: 'inline-block',
                  width: '300px',
                  flex: '0 0 auto',
                  scrollSnapAlign: 'start',
                }}
              >
                <img
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            style={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            ▶
          </button>
        </div>

        <div
          className="whats-new-section"
          style={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {/* Image on the Left (or Top in Mobile) */}
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={WhatsNewImage}
            alt="What's New"
            className="whats-new-image"
            style={{
              width: '38%',
              minWidth: '280px',
              borderRadius: '10px',
            }}
          />

          {/* Text on the Right (or Bottom in Mobile) */}
          <div
            className="whats-new-text"
            style={{
              flex: 1,
              minWidth: '280px',
              marginLeft: '20px',
            }}
          >
            <h2 style={{ fontSize: '2rem', margin: 0 }}>Mindron Insights</h2>

            <div
              style={{
                maxHeight: '280px',
                overflowY: 'scroll',
                paddingRight: '10px',
                marginTop: '20px',

                /* Hide scrollbar for Webkit (Chrome, Safari) */
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              className="scroll-hide"
            >
              <p style={{ fontSize: '20px', marginBottom: '16px', color: '#333' }}>
                <strong style={{ color: '#003366' }}>Certified for Excellence:</strong> Proud to be ISO certified, CE marked, CDSCO approved, and DPIIT-recognized—your trust, our responsibility.
              </p>
              <p style={{ fontSize: '20px', marginBottom: '16px', color: '#333' }}>
                <strong style={{ color: '#003366' }}>R&D:</strong> Sneak peeks into new product development

                Technological advancements at Mindron Labs

                Behind-the-scenes with your engineering or design teams

              </p>
              <p style={{ fontSize: '20px', color: '#333' }}>
                <strong style={{ color: '#003366' }}>    Industry Updates:</strong>
                Recent advancements in medical technology

                New regulations

                Trends in diagnostic equipment
              </p>

              <div className="mobile-product-details">
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div
          style={{
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

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{
                fontSize: '1.5rem',
                color: '#555',
                lineHeight: '1.5',
                fontWeight: 'normal'
              }}>
              <strong>Mindron Meditech Pvt. Ltd.</strong> is a growing Indian medical device manufacturer and an innovation-driven healthcare technology company based in Mumbai, India. With years of experience in the industry, we are committed to delivering safe, reliable, and forward-thinking innovative solutions for the healthcare sectors.<br />
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
            data-aos="fade-left"
            data-aos-duration="1000"
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
        <style>
          {`
    @media (max-width: 768px) {
      .header-container {
        height: 30vh !important;
      }
    }
  `}
        </style>


        {/* Bottom Banner Section */}
        <footer style={{ margin: 0, padding: 0 }}>

        <div style={{
          backgroundColor: '#003366', padding: '40px 5.8%', color: '#fff', overflowX: 'auto',
          width: '100%',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
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
                  'Multipara Monitor',
                  'Cardiotocography',
                  'Auto Hematology Analyzer',
                  'Portable Ultrasound Machine '
                ]
              },
              {
                title: 'About Us',
                items: [
                  'About', 'Our Mission', 'Vision'
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
                            item === 'About' ||
                            item === 'Our Mission' ||
                            item === 'Vision' ||
                            item === 'Business' ||
                            item === 'Business' ||
                            item === 'ECG (Electrocardiograph)' ||
                            item === 'Multipara Monitor' ||
                            item === 'Cardiotocography' ||
                            item === 'Auto Hematology Analyzer' ||
                            item === 'Magnetic Resonance Pancreatography' ||
                            item === 'Portable Ultrasound Machine '
                            ? 'pointer'
                            : 'default'
                      }}
                      onClick={() => {

                        const productMap = {
                          'ECG (Electrocardiograph)': '/products/ecg',
                          'Multipara Monitor': '/products/multiparamonitor',
                          'Portable Ultrasound Machine': '/products/portableultrasoundmachine',
                          'Cardiotocography': '/products/cardiotocography',
                          'Auto Hematology Analyzer': '/products/autohematologyanalyzer',
                          'Magnetic Resonance Pancreatography': '/products/mrp',
                          'Portable Ultrasound Machine': '/products/portableultrasoundmachine',
                        };
                        if (productMap[item]) {
                          navigate(`${productMap[item]}`);
                        }
                        else if (item === 'Contact Us' || item === 'Join Us') {
                          navigate('/contact');
                          window.scrollTo({ top: 600, behavior: 'smooth' });
                        } else if (
                          item === 'About' ||
                          item === 'Our Mission' ||
                          item === 'Vision'
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
          boxSizing: 'border-box',
        }}>
          {/* Left Side */}
          <div style={{ flex: '1', minWidth: '300px', lineHeight: '1.8' }}>
            <p style={{ margin: '5px 0' }}>📞 <strong>022 4516 6539</strong></p>
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
              <a href="https://twitter.com/Mindrommtech" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Twitter" style={{ width: '32px', height: '32px' }} />
              </a>
              <a href="https://www.linkedin.com/in/mindron-meditech-53b2b9370/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" style={{ width: '36px', height: '36px' }} />
              </a>
              <a href="https://www.instagram.com/mindronmeditech/#" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" style={{ width: '32px', height: '32px' }} />
              </a>
            </div>
          </div>
        </div>
</footer>




      </div>
    </div >
  );
};

export default Home;
