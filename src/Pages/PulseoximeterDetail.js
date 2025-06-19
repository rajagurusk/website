// src/Pages/PulseoximeterDetail.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pulseMain from '../Images/pulsetabletop.jpg';
import pulseAlt from '../Images/pulsefinger.jpg'; // Add your second image
// import Footer from '../Pages/Footer'; // Adjust the path based on your folder structure
import FacebookIcon from '../Images/facebook.png';
import TwitterIcon from '../Images/twitter.png';
import LinkedInIcon from '../Images/linkedin.png';
import InstagramIcon from '../Images/instagram.png';
import PulseHeaderImage from '../Images/volumepage1.jpg'; // ✅ Add your hero image



const imageDetails = {
  [pulseMain]: {
    heading: 'Table Top Pulse Oximeter ',
    title: 'Model : MT 01 PLUS',
    // description: 'A compact and precise pulse oximeter designed for both home and clinical use.',
    sections: {
       Feature : [
        'SpO2 range: 1% to 100%',
        'Pulse rate: 20 to 250 bpm',
        'Pulse amplitude: 0.03% to 20%',
      ],
      'Accuracy': [
        'Saturation (SpO2 ± 1 SD): Adult: 70% to 100% ± 2 digits',
        'Neonate: 70% to 100% ± 3 digits',
        'Low perfusion: ± 3 digits for 20 to 250 bpm',
      ],
     ' Electrical': [
        'Power requirements: 100 to 240 VAC, 50/60Hz, 45 VA',
        'Fuse rating: Fast-acting 2A 32VAC/DC and 500mA 32VAC/50DC',
      ],
      'Battery': [
        'Type: Li-ion',
        'Capacity: Minimum of 5 hours with new, fully charged battery',
      ],
      'Environmental': [
        'Operating Temp: 5°C to 40°C (41°F to 104°F)',
        'Storage Temp: –20°C to 60°C (–4°F to 140°F)',
        'Humidity: 15% to 93% non-condensing',
        'Altitude: –170 m to 4877 m (–557 ft to 16,000 ft)',
      ],
      'Physical Characteristics': [
        'Weight: 1.6 kg (3.5 lbs)',
        'Size: 82 H × 255 W × 165 D (mm)',
      ],
      // 'Equipment Compliance': [
      //   'EN ISO 9919:2009, EN ISO 80601-2-61:2011',
      //   'EN IEC 60601-1:2005 & amendments',
      //   'CAN/CSA C22.2 No. 601.1 M90',
      //   'UL 60601-1: 1st edition',
      // ],
      'Equipment Classification': [
        'Electric Shock Protection: Class I (internally powered)',
        'Type BF – Applied part',
        'Ingress Protection: IPX2',
        'Mode: Continuous operation',
      ],
      'Output': [
        'Trend data download',
        'Nurse call capability',
      ],
      'Display': [
        'Pulse amplitude indicator (8-segments)',
        'Visual: Pulse search, charging, SatSeconds, interference',
      ],
      'Alarms': [
        'High/Low saturation and pulse rate',
        'SatSeconds: 10, 25, 50, 100, or OFF',
        'Low battery & sensor off warnings',
        'Sensor disconnect alerts',
      ],
      'Optional Accessories': [
        'Mounting adapter',
        'Interface cables',
        '10 hour battery',
      ],
    },
  },

  
  [pulseAlt]: {
    heading: 'Fingertip Pulse Oximete',
    title: 'Model : MT 100',
    description: 'Upgraded model with Bluetooth support and companion app integration.',
    sections: {
      Feature: [
        'Bluetooth data sync',
        'Alarm for abnormal readings',
        'OLED display with brightness control',
      ],
      'Technical Specification': [
        'MEASUREMENT FEATURES: Displays blood oxygen saturation (SpO2) levels and pulse rate with bright LED screen for easy reading',
 'PORTABLE DESIGN: Compact and lightweight construction makes it perfect for children to carry and use',
'OPERATION: Simple one-button operation with automatic power-off feature after 8 seconds of inactivity',
'DISPLAY CLARITY: Multi-directional display shows readings in different orientations for convenient viewing',
'POWER SOURCE: Operates on 2 AAA batteries (not included) with low battery indicator for timely replacement'
      ]
    },
  },
};

const PulseoximeterDetail = () => {
  const allImages = [pulseMain, pulseAlt];//
  const [mainImage, setMainImage] = useState(pulseMain);
  const [relatedImages, setRelatedImages] = useState(allImages.filter(img => img !== pulseMain));
  const [activeSection, setActiveSection] = useState('Feature');
  const navigate = useNavigate(); // ✅ Define it here

  const handleImageClick = (clickedImage) => {
    setMainImage(clickedImage);
    setRelatedImages(allImages.filter(img => img !== clickedImage));
    setActiveSection('Feature');
  };

  return (
    
 <div style={{ padding: '10px' }}>
      
      {/* ✅ Hero/Header Section */}
      <div style={{
        position: 'relative',
        width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
        height: '600px',
        backgroundImage: `url(${PulseHeaderImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0 0 20px 20px'
      }}>
        {/* <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '60px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '20px 30px',
          borderRadius: '12px'
        }}> */}
          {/* <h1 style={{ color: '#fff', margin: 0, fontSize: '2.5rem' }}>Pulse Oximeter</h1>
          <p style={{ color: '#eee', marginTop: '8px', fontSize: '1.1rem' }}>
            Accurate monitoring for SpO2 & Pulse in clinical and home settings.
          </p> */}
        {/* </div> */}
      </div>
            <h1>{imageDetails[mainImage]?.heading || 'Pulse Oximeter'}</h1>

<div
  style={{
    display: 'flex',
    flexDirection: window.innerWidth < 768 ? 'column' : 'row',
    marginTop: '30px',
    gap: '30px',
    flexWrap: 'wrap',
    padding: '0 20px',
  }}
>           {/* Left: Image */}
        <div style={{ padding: '0px 20px', flex: '1', minWidth: '300px' }}>
          <img
            src={mainImage}
            alt="Pulse Oximeter"
style={{
  maxWidth: '100%',
  width: '100%',
  borderRadius: '10px',
  objectFit: 'contain',
  display: 'block',
  margin: '0 auto',
}}
          />
        </div>

        {/* Right: Details */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2>{imageDetails[mainImage]?.title}</h2>
          <p>{imageDetails[mainImage]?.description}</p>

          {/* Section Tabs */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
            {Object.keys(imageDetails[mainImage]?.sections || {}).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  border: activeSection === section ? '2px solid #007BFF' : '1px solid #ccc',
                  backgroundColor: activeSection === section ? '#e6f0ff' : '#fff',
                  cursor: 'pointer',
                }}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Section Content */}
          <ul>
            {(imageDetails[mainImage]?.sections?.[activeSection] || []).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related Products */}
       <div style={{ marginTop: '50px', paddingLeft: '30px' }}>
  <h3>Related Products</h3>
  <div
    style={{
      display: 'flex',
      gap: '20px',
      marginTop: '20px',
      overflowX: 'auto',
      paddingBottom: '10px',
    }}
  >
    {relatedImages.map((img, index) => (
      <div
        key={index}
        style={{
          textAlign: 'center',
          minWidth: '200px',
          flexShrink: 0,
        }}
      >
        <img
          src={img}
          alt={`Related ${index}`}
          style={{
            width: '200px',
            borderRadius: '8px',
            cursor: 'pointer',
            border: '2px solid #ccc',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          onClick={() => handleImageClick(img)}
        />
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#333' }}>
  {imageDetails[img]?.heading || `Product ${index + 1}`}
</p>

      </div>
    ))}
  </div>
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
    justifyContent: 'center', // center columns
            gap: '300px'
          }}>
          {[
            {
              title: 'Products',
              items: [
                'ECG (Electrocardiograph)',
                'Multipara Monitor',
                'Cardiotocography',
                'Auto Hematology Analyzer',
                'Magnetic Resonance Pancreatography',
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
                          item === 'Business' ||
                          item === 'ECG (Electrocardiograph)' ||
                          item === 'Multipara Monitor' ||
                          item === 'Cardiotocography' ||
                          item === 'Auto Hematology Analyzer' ||
                          item === 'Magnetic Resonance Pancreatography' ||
                          item === 'Portable Ultrasound Machine '
                          // item === 'ECG (Electrocardiograph)' ||
                          // item === 'BPL Monitor' ||
                          // item === 'Pathology' ||
                          // item === 'Defibrillator' ||
                          // item === 'Syringe Infusion Pump' ||
                          // item === 'Volumetric Infusion Pump' ||
                          // item === 'Baby Warmer' ||
                          // item === 'Suction Machine' ||
                          // item === 'Pulse Oximeter' ||
                          // item === 'Echo Ultrasound'
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
                        // 'ECG (Electrocardiograph)': '/products/ecg',
                        // 'BPL Monitor': '/products/bplmonitor',
                        // 'Pathology': '/products/pathology',
                        // 'Defibrillator': '/products/defibrillator',
                        // 'Syringe Infusion Pump': '/products/syringeInfusionpump',
                        // 'Volumetric Infusion Pump': '/products/volumericInfusionpump',
                        // 'Baby Warmer': '/products/babywarmer',
                        // 'Suction Machine': '/products/suctionmachine',
                        // 'Pulse Oximeter': '/products/pulseoximeter',
                        // 'Echo Ultrasound': '/products/ecoultrasound',
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
  padding: '45px 80px 50px 100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  fontSize: '16px',
  width: '100vw',
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  boxSizing: 'border-box',
  overflowX: 'hidden',
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
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FMindron228025" target="_blank" rel="noopener noreferrer">
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
    </div>
  );
};

export default PulseoximeterDetail;
