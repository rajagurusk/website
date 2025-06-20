import React, { useState, useEffect, useLayoutEffect } from 'react';
import monitorMain from '../Images/multiparamonitor.jpg';
import monitorAlt from '../Images/multilowend.jpg';
import image2 from '../Images/multihigh2.jpeg';
import heroImage from '../Images/multimonitorpage.jpg';
import Footer from '../Pages/Footer';

const imageDetails = {
  [monitorMain]: {
    heading: 'Multipara Monitor (High End) ',
    title: 'Model: MT 70 Plus',
    images: [monitorMain, image2],
    description:
      "The monitor is applicable for clinical monitoring in operating room, postoperative observation room, ICU/CCU ward, emergency room, etc. of adult, pediatric and neonate. The patient's vital parameters (ECG (including ST-segment measurement and arrhythmia analysis), RESP, SpO2, PR, NIBP, TEMP, IBP and CO2, etc.) can be monitored. Monitored information can be displayed, reviewed, printed and stored.",
    sections: {
      Features: [
        '15/17.3" high-definition touch screen design, easy and convenient to operate, elegant and concise in appearance.',
        'Independent physiological and technical alarm function, convenient for medical staff to quickly know patient’s condition.',
        'Luminous “ON / OFF” button design, convenient to operate at night.',
        'Modular design for flexible expansion and upgrades, meeting department-specific requirements.',
        'Supports dynamic hot-plugging parameter module – plug-and-play without restarting.',
        'High-performance processor for stable and fast information processing.',
        'Rapid patient info input; quick switching between adult, pediatric, and neonate modes.',
        '23 arrhythmia, full-lead ST-segment, pacing analysis, and rich calculations (drug, hemodynamics, renal function, etc.).',
        'Waveform freezing, holographic waveform storage & review.',
        'Automatic data storage during power failure.',
        'HDMI interface for additional display.',
        'Built-in detachable lithium battery ensures uninterrupted monitoring.',
        'Fanless design for noiseless and low-power operation.',
        '3-channel built-in recorder (optional).',
        'Connects to Central Monitoring System via WiFi or Wired network.',
        'Standby mode – useful for ICU, reduces workload and enhances patient rest.',
      ],
    },
  },
  [monitorAlt]: {
    heading: 'Multipara Monitor (Low End) ',
    title: 'Model: MT 60 ',
    description:
      'The monitor has abundant functions that can be used for clinical monitoring with adult, pediatric and neonate. Users may select different parameter configuration according to different requirements. The monitor, power supplied by 100 V-240 V - 50 HZ/60 Hz, adopts 12.1" color TFT displaying real time date and waveform. It can synchronously display eight-channel waveform and full monitoring parameters equipped with an optional 48mm thermal recorder. The monitor can be connected to the central monitoring system via wire or wireless network to form a network monitoring system.This device can monitor such parameters as ECG, RESP, NIBP, Sp02, and dual-channel TEMP, etc. It integrates parameter measurement module, display and recorder in one device to form a compact and portable equipment. Its replaceable internal battery brings lot of convenient for patient moving',
    sections: {
      Features: [
        'Standard parameters: ECG, RESP, SpO2, PR, NIBP, dual channel TEMP',
        'ECG: Heart rate (HR), ECG waveform, Arrhythmia analysis, ST-segment analysis',
        'RESP: Respiration rate (RR), Respiration waveform',
        'SpO2: Oxygen saturation (SpO2), Plethysmogram (PLETH) waveform',
        'Pulse Rate (PR): Displayed with bar graph',
        'NIBP: Systolic pressure (SYS), Diastolic pressure (DIA), Mean pressure (MEAN)',
        'TEMP: T1, T2, TD',
        'IBP (optional): CH1 - SYS, DIA, MAP; CH2 - SYS, DIA, MAP',
        'CO2 (optional): EtCO2, InsCO2 (Inspired Minimum CO2), AwRR (Airway Respiration Rate)',
        'Additional functions: Audible and visual alarms, trend data storage and output',
        'NIBP measurement with alarm event marking',
        'Drug concentration calculation',
      ],
      Functions: [
        '12.1" TFT color LCD with multi-language interface (English, French, German, Italian, Dutch, Russian, Portuguese, Turkish, Spanish [EU & MX], Polish, Romanian, Kazakh, Czech, Traditional Chinese, Bulgarian, Chinese, Ukrainian)',
        'Fanless design: quiet, energy-saving, and clean, reducing the possibility of cross-infection',
        'All-round monitoring for adult, pediatric, and neonate patients',
        'Standard interface options: oxygen graph, trend graph, large character interface, and bed view for easy observation',
        'Simple operation using keys and knobs',
        'Maximum 8-channel waveform synchronous display',
        'Display 7-lead ECG waveform on one screen, with cascade ECG waveform option',
        'Digital SpO2 technology with anti-motion and anti-ambient light interference; works under weak perfusion',
        'Heart Rate Variability (HRV) analysis function',
        'NIBP measurement modes: Manual, AUTO, STAT, with storage for 4800 readings',
        'Review of 71 alarm events for all parameters and 60 arrhythmia alarm events',
        'Drug concentration calculator and titration table functions',
        'One-touch trend graph printing',
        'Connectivity to Central Monitoring System via 3G, Wi-Fi, or wired mode',
        'Operates on AC/DC power with a built-in rechargeable lithium battery for uninterrupted monitoring'

      ],
    },
  },
};


const MultiparamonitorDetail = () => {
  const allImages = [monitorMain, monitorAlt];
  const [mainImage, setMainImage] = useState(monitorMain);
  const [relatedImages, setRelatedImages] = useState(allImages.filter((img) => img !== monitorMain));
  const [activeSection, setActiveSection] = useState('Features');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProduct = imageDetails[mainImage];
  const productImages = currentProduct.images || [mainImage];
  const currentImageSrc = productImages[currentImageIndex];
const [isMobile, setIsMobile] = useState(false);

useLayoutEffect(() => {
  const checkWidth = () => setIsMobile(window.innerWidth <= 768);
  checkWidth(); // runs before paint
}, []);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  const handleImageClick = (clickedImage) => {
    setMainImage(clickedImage);
    setRelatedImages(allImages.filter((img) => img !== clickedImage));
    setActiveSection('Features');
    setCurrentImageIndex(0);
  };

  return (
    <div style={{ padding: '0px', fontFamily: 'sans-serif'  }}>
      {/* ✅ Hero Section */}
<div
  style={{
    height: isMobile ? '30vh' : '90vh',
    width: '100%',
    position: 'relative',
    marginBottom: '40px',
    borderRadius: '10px',
    overflow: 'hidden',
  }}
>
       <img
  src={heroImage}
  alt="Hero"
  style={{
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    height: '100%',
    display: 'block',
  }}
/>

      </div>

      <div style={{ paddingLeft: '30px' }}>
        <h1>{currentProduct?.heading}</h1>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          marginTop: '30px',
          gap: '30px',
          flexWrap: 'wrap',
          padding: '0 20px',
        }}
      >
        {/* Left: Image + arrows */}
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)}
            style={{
              fontSize: '20px',
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              cursor: 'pointer',
              backgroundColor: '#fff',
            }}
          >
            ←
          </button>
          <img
            src={currentImageSrc}
            alt="Multipara Monitor"
            style={{
              maxWidth: '100%',
              width: '100%',
              maxHeight: '400px',
              borderRadius: '10px',
              objectFit: 'contain',
            }}
          />
          <button
            onClick={() => setCurrentImageIndex((prev) => (prev + 1) % productImages.length)}
            style={{
              fontSize: '20px',
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              cursor: 'pointer',
              backgroundColor: '#fff',
            }}
          >
            →
          </button>
        </div>

        {/* Right: Details */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2>{currentProduct?.title}</h2>
          <p>{currentProduct?.description}</p>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
            {Object.keys(currentProduct?.sections || {}).map((section) => (
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
            {(currentProduct?.sections?.[activeSection] || []).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related Images Section */}
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

      <Footer />
    </div>
  );
};

export default MultiparamonitorDetail;
