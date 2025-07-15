import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pump1 from '../Images/syringeinjection.jpeg';
import pump2 from '../Images/volumeinjection.jpeg';
import HeaderImage from '../Images/injectionpage.jpg';

import FacebookIcon from '../Images/facebook.png';
import TwitterIcon from '../Images/twitter.png';
import LinkedInIcon from '../Images/linkedin.png';
import InstagramIcon from '../Images/instagram.png';


const imageDetails = {
  [pump1]: {
    heading: 'Syringe Infusion Pump',
    title: 'Model : MT 40',
    // description: 'Advanced infusion pump with real-time flow control and safety features.',
    sections: {
      Feature: [
        'Auto-lock Screen: Prevents operation errors',
        'Dual CPU: Guarantees safer work',
        'History Record Cassette: Stores up to 2000 records',
        'Pressure Monitoring: 3 adjustable pressure levels',
        'System Self-test: Monitors alarm, volume, pressure, air bubbles on startup',
      ],
      'Easier Operation': [
        'Portable design with brand-new appearance',
        'Clear information via LCD and LED screens',
        'Triple-Assemblage design',
        'One-key Rotary Knob with user-friendly interface',
        'Allows multi-pump combinations to save space',
        'One-key to start simple mode injection',
      ],
      'Safer Design': [
        'Dual-CPU ensures safety with motor driver IC from Germany and Japan',
        'Low noise & vibration',
        'Compatible with WEGO and DOUBLE-DOVE syringes',
        'Accurate drug delivery after calibration',
        'Smart drug library available',
        'Auto syringe recognition: 10ml, 20ml, 30ml, 50ml, 60ml',
        'Voice alarms + legible warning texts',
      ],

      'Technical Specification': [
        'Weight: 2.0kg',
        'CPU: Single CPU',
        'Syringe Size: 10, 20, 30, 50/60 ml',
        'Automatic syringe size recognization: Support',
        'Infusion Modes: Rate Mode, Time Mode, Body Weight Mode, Drug Library Mode, Loading Dose Mode',
        'Rate Range: 0.1 - 1500 ml/h',
        'Rate Increment: 0.1 ml/h',
        'Mechanical Accuracy: ±2%',
        'Operational Accuracy: ±2%',
        'Purge/Bolus Rate: 10ml: 0.1–300ml/h, 20ml: 0.1–600ml/h, 30ml: 0.1–900ml/h, 50/60ml: up to 1500ml/h',
        'Alarm Display: Audible and Visible',
        'Alarm Volume: 3 levels (High, Mid, Low)',
        'Occlusion Units: kPa / bar / psi',
        'Occlusion Range: Low: 50kPa, Mid: 80kPa, High: 110kPa',
        'LCD Display: Blue LCD',
        'Input Interface: Keypad',
        'Battery Type: Rechargeable Lithium-ion polymer battery',
        'Battery Life: >10 hrs at 5ml/h',
        'Charging Time: ≤ 5 hrs (Open status)',
        'Drug Library: Editable, 5 drug entries',
        'Database Capacity: 1000',
        'IP Level: IPX3',
        'Micro Mode: Support',
        'Automatic Keypad Lock: Optional',
        'Nurse Call: Optional',
        'Wireless LAN / IrDA: Optional',
      ],
    },
  },
  [pump2]: {
    heading: 'Volumetric Infusion Pump',
    title: 'Model : MT 50',
    // description: 'Compact model ideal for home and field care with essential features.',
    sections: {
      'Basic Parameters': [
        'Case Material: PBT+PC',
        'Screen: 2.8 inch color TFT screen',
        'Infusion Mode: ml/h (include Rate mode, Time mode, Body weight, Drip, Micro)',
        'Accuracy: ±5%',
        'Flow Rate Range: 0.1-1200ml/h (min. increment 0.01ml/h)',
        'VTBI: 0-9999.99 ml',
        'KVO: 0-5ml/h adjustable (min. increment 0.01ml/h)',
        'Bolus Rate: 0.1-1200ml/h (programmed & manual bolus available)',
        'Occlusion Level: 4 levels selectable (150mmHg – 900mmHg)',
        'Interface: DB15 multi-functional interface',
        'Wireless: WiFi (optional)',
        'Alarm Type: Multiple types including occlusion, air bubble, empty chamber, battery low, system errors, etc.',
      ],
      Feature: [
        'Titration: Change flow rate without stopping infusion',
        'Reset total volume: Without stopping infusion',
        'Reset occlusion & air bubble level: Without stopping infusion',
        'Last Therapy: Stores last settings for rapid reuse',
        'Drug Library: No less than 30 drugs',
        'Anti-Bolus: Auto pressure drop to reduce impact post-occlusion',
        'Purge: Remove air bubble',
        'Screen Lock: Avoid misoperation',
        'Standby Mode: Time adjustable',
        'Micro Mode: Safe max infusion limit',
        'DPS: Real-time pressure graph & values',
        'Bubble Detector: Adjustable (Single & accumulated in 15min)',
        'Brightness, Alarm Volume: Adjustable',
        'History Record: Over 2000 entries',
      ],
      'Power Source': [
        'AC Power: 110V-240V, 50/60Hz',
        'External DC Power: 10-16V',
        'Battery: 2600mAh, 5–10 hrs depending on model',
      ],
      Others: [
        'Classification: Class I, CF',
        'Standard: CE; EN1789:2014 (Ambulance)',
        'Waterproof: IP44',
        'Dimension: 138(L)*131.5(W)*90(H) mm',
        'Weight: Approx. 1.5kg (Pole clamp included)',
      ],
    },
  },
};

const SyringeInfusionpumpDetail = () => {
  const allImages = [pump1, pump2];
  const [mainImage, setMainImage] = useState(pump1);
  const [relatedImages, setRelatedImages] = useState(allImages.filter(img => img !== pump1));
  const [activeSection, setActiveSection] = useState('Feature');
  const navigate = useNavigate(); // ✅ Define it here


  const handleImageClick = (clickedImage) => {
    setMainImage(clickedImage);
    setRelatedImages(allImages.filter((img) => img !== clickedImage));
    setActiveSection('Feature');
  };

  return (
    <div>
      <img
        src={HeaderImage}
        alt="Header"
        style={{
          width: '100%',
          maxHeight: '600px',
        }}
      />



      <div style={{ padding: '80px' , fontFamily: 'sans-serif' }}>
        <h1>{imageDetails[mainImage]?.heading}</h1>

        <div
          style={{
            display: 'flex',
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            marginTop: '30px',
            gap: '30px',
            flexWrap: 'wrap',
            padding: '0 20px',
          }}
        >           <div style={{ flex: '1', minWidth: '300px' }}>
            <img
              src={mainImage}
              alt="Infusion Pump"
              style={{ maxWidth: '400px', width: '100%', borderRadius: '10px' }}
            />
          </div>

          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2>{imageDetails[mainImage]?.title}</h2>
            <p>{imageDetails[mainImage]?.description}</p>

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

            <ul>
              {(imageDetails[mainImage]?.sections?.[activeSection] || []).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

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

        <div
          style={{
            backgroundColor: '#003366',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            marginTop: '60px',
            overflowX: 'hidden',
          }}
        >
          {/* INNER container for padding & content layout */}
          <div
            style={{
              padding: '40px 5.8%',
              color: '#fff',
              maxWidth: '1400px',
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              gap: '300px'
            }}
          >
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
                            item === 'Business' ||
                            item === 'ECG (Electrocardiograph)' ||
                            item === 'Multipara Monitor' ||
                            item === 'Cardiotocography' ||
                            item === 'Auto Hematology Analyzer' ||
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
      </div>
    </div>
  );
};

export default SyringeInfusionpumpDetail;
