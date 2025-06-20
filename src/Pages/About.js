import AOS from 'aos';
import { useState, useLayoutEffect } from 'react';
import 'aos/dist/aos.css';
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/style.css';
import AboutBanner from '../Images/aboutus.jpg';
import FacebookIcon from '../Images/facebook.png';
import TwitterIcon from '../Images/twitter.png';
import LinkedInIcon from '../Images/linkedin.png';
import InstagramIcon from '../Images/instagram.png';


const About = () => {
  const navigate = useNavigate();
const [isMobile, setIsMobile] = useState(false);

useLayoutEffect(() => {
  setIsMobile(window.innerWidth <= 768);
}, []);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const purposeRef = useRef(null);
  const perspectiveRef = useRef(null);
  const businessRef = useRef(null);

  const containerStyle = {
    position: 'relative',
    width: '100%',
height: isMobile ? '30vh' : '90vh',
minHeight: isMobile ? '30vh' : '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    minHeight: isMobile ? '30vh' : '400px',
    // maxHeight: '100vh',
  };
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectfit: 'contain',
    opacity: 0.9,
    borderRadius: '8px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    zIndex: 1,

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
      <div className="header-container" style={containerStyle}>
        <img src={AboutBanner} alt="About Us" style={imageStyle} />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: isMobile ? '20px' : '50px',
            transform: 'translateY(-50%)',
            color: 'black',
            fontSize: isMobile ? '20px' : '46px',
            fontWeight: 'bold',
            maxWidth: isMobile ? '90%' : '400px',
            lineHeight: '1.4',
            zIndex: 2,
          }}
        >
          Welcome To<br />
          Mindron Meditech<br /> Private Limited
        </div>
      </div>

      <div style={{ padding: '40px 10%' , fontFamily: 'sans-serif' }}>
        {/* About */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '60px', height: '6px', backgroundColor: 'red', marginBottom: '8px' }}></div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#003366', margin: 0 }}>About</h2>
          <p data-aos="fade-right" data-aos-duration="1000" style={{ fontSize: '18px', color: '#333', lineHeight: '1.6', marginTop: '12px' }}>
            <strong>Mindron Meditech Pvt. Ltd.</strong> is a growing Indian medical device manufacturer and an innovation-driven healthcare technology company based in Mumbai, India. With years of experience in the industry, we are committed to delivering safe, reliable, and forward-thinking innovative solutions for the healthcare sectors.<br />

            Authorized by the Central Drugs Standard Control Organisation (CDSCO) & ISO, we have steadily built a reputation as a trusted partner in medical technology. Today, we proudly support a wide network of clients including hospitals, clinics, diagnostic centres, and healthcare professionals with products.    </p>
        </div>

        {/* Mission */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '40px', height: '6px', backgroundColor: 'red', marginBottom: '8px' }}></div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#003366', margin: 0 }}>Our Mission</h2>
          <p data-aos="fade-right" data-aos-duration="1000" style={{ fontSize: '18px', color: '#333', lineHeight: '1.6', marginTop: '12px' }}>
            <strong>At Mindron Meditech</strong>, our mission is to empower healthcare providers with advanced, affordable, and reliable diagnostic technologies. We are committed to designing and manufacturing high-quality medical equipment that enhance clinical accuracy and improve patient outcomes.
          </p>
        </div>

        {/* Vision */}
        <div>
          <div style={{ width: '60px', height: '6px', backgroundColor: 'red', marginBottom: '8px' }}></div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#003366', margin: 0 }}>Vision</h2>
          <p data-aos="fade-right" data-aos-duration="1000" style={{ fontSize: '18px', color: '#333', lineHeight: '1.6', marginTop: '12px' }}>
            To become a trusted global name in medical technology by delivering innovative, precise diagnostic solutions that elevate healthcare standards and make advanced care accessible to every healthcare provider.
          </p>
        </div>
      </div>
      <div style={{ padding: '0 10%', marginTop: '40px' }}>
        {/* Section 3: R&D Excellence */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '45px', height: '6px', backgroundColor: 'red', marginBottom: '8px' }}></div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#003366' }}>R&D Excellence</h2>
          <p data-aos="fade-right" data-aos-duration="1000" style={{ fontSize: '18px', color: '#333', lineHeight: '1.6', marginTop: '12px' }}>
            We are actively engaged in research and development for ICU and NICU product, supporting the ‘Make in India’ initiative and contributing to the nation’s self-reliance in critical medical technology.</p>  </div>

        {/* Section 4: Our Achievements */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '45px', height: '6px', backgroundColor: 'red', marginBottom: '8px' }}></div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#003366' }}>Our Achievements</h2>
          <p data-aos="fade-right" data-aos-duration="1000" style={{ fontSize: '18px', color: '#333', lineHeight: '1.6', marginTop: '12px' }}>
            At Mindron Meditech, our growth is marked by a series of proud milestones in regulatory excellence.    </p>
          <ul data-aos="fade-right" data-aos-duration="1000" style={{ fontSize: '18px', color: '#333', lineHeight: '1.8', marginTop: '12px', paddingLeft: '20px' }}>
            <li>DPIIT-Certified Startup – Government of India</li>
            <li>ISO 13485 Certified – Recognized for consistent quality Management system</li>
            <li>CE Marked – Meeting global safety and performance standards</li>
            <li>CDSCO Approved – Compliant with India’s medical device regulations</li>
            {/* <li>Make in India Aligned – Promoting domestic innovation and production</li> */}
          </ul>

        </div>

        {/* Section 5: Why Choose Us */}
        <div>
          <div style={{ width: '45px', height: '6px', backgroundColor: 'red', marginBottom: '8px' }}></div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#003366' }}>What Drives Us</h2>
          <p data-aos="fade-right" data-aos-duration="1000" style={{ fontSize: '18px', color: '#333', lineHeight: '1.6', marginTop: '12px' }}>
            We are committed to promoting ‘Made in India’ products and building a self-reliant medical device industry. Our goal is to develop and deliver high-quality medical technologies made in India, serving both local and global healthcare needs. With a focus on innovation and purpose, we aim to make India a trusted source for reliable and affordable medical solutions.    </p>
        </div>
      </div>

      {/* ✅ Now add Investor Section BELOW */}
      <div style={{ padding: '0 10%', marginBottom: '40px' }}>
        {/* Investor Heading */}
        <div style={{ width: '40px', height: '6px', backgroundColor: 'red', marginBottom: '8px' }}></div>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#003366', margin: 0 }}>
          Investment Partner
        </h2>

        {/* Row layout: Image Left, Text Right */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          {/* Image */}
          <img
            src={require('../Images/investor.jpg')} // replace with actual path
            alt="Investor"
            style={{
              width: '20%',
              minWidth: '200px',
              borderRadius: '12px',
              objectFit: 'cover',
            }}
          />

          {/* Text Section */}
          <div style={{ flex: 1 }}>
            {/* Name Heading */}
            <h3 data-aos="fade-right" data-aos-duration="1000" style={{ fontSize: '20px', fontWeight: 'bold', color: '#003366', margin: '0 0 12px 0' }}>
              Mr. Paresh Mangukiya
            </h3>

            {/* Description */}
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{ fontSize: '18px', color: '#333', lineHeight: '1.6', marginTop: 0 }}
            >
We are backed by a seasoned investor with a strong presence in the Metal, Real Estate, diamond manufacturing, and hospitality sectors. With decades of experience, they bring deep industry insight, strategic guidance, and a proven track record of driving global growth. Their extensive network, financial strength, and commitment to innovation enable us to scale efficiently and seize new opportunities across markets. Aligned with our vision for excellence and sustainability, they are a trusted and valued partner in our journey toward long-term success.               </p>
          </div>
        </div>


        {/* CEO Section */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', padding: '40px 10%', flexWrap: 'wrap-reverse', paddingLeft: '10px' }}>
          {/* Text Left */}
          <div style={{ flex: '1 1 60%', minWidth: '280px' }}>
            <div style={{ width: '45px', height: '6px', backgroundColor: 'red', marginBottom: '8px' }}></div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#003366', margin: 0 }}>CEO</h2>

            {/* CEO Name Heading */}
            <h3 data-aos="fade-right" data-aos-duration="1000" style={{ fontSize: '20px', fontWeight: 'bold', color: '#003366', margin: '8px 0' }}>
              Mr. Rohit Bhanushali    </h3>
            {/* Paragraph */}
            <p data-aos="fade-right" data-aos-duration="1000" style={{ fontSize: '18px', color: '#333', lineHeight: '1.6', marginTop: '12px' }}>
Our CEO is a visionary leader who has been instrumental in driving Mindron Meditech’s success, achieving significant milestones including DPIIT, ISO, CE, and CDSCO certifications. With a passion for innovation and excellence, he continues to propel our growth and expand our global impact. Backed by years of industry experience, he brings strategic foresight, operational excellence, and a deep understanding of healthcare technology. His leadership fosters a culture of integrity, continuous improvement, and customer-centric innovation, positioning Mindron Meditech as a trusted name in the medical device industry.              </p>  </div>

          {/* Image Right */}
          <div style={{ flex: '1 1 35%', minWidth: '220px', marginLeft: 'auto', maxWidth: '50px' }}>
            <img
              src={require('../Images/ceo.jpg')} // Replace with your actual image path
              alt="CEO"
              style={{
                width: '600px',
                height: '350px',       // Set desired height
                maxWidth: '250px',
                borderRadius: '12px',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>



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
      {/* Bottom Banner Section//'20px 5% 40px 5%' */}
      <div style={{
        backgroundColor: '#003366', padding: '0', color: '#fff', margin: '0',marginTop: '60px', overflowX: 'auto'  // add horizontal scroll if needed
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
                          item === 'About' ||
                          item === 'Our Mission' ||
                          item === 'Vision' ||
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
            <a href="https://www.instagram.com/mindronmeditech/" target="_blank" rel="noopener noreferrer">
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
