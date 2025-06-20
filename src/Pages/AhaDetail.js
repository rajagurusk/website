import React, { useState, useEffect, useLayoutEffect } from 'react';
import ahaMain from '../Images/AHA.jpg';
import aha1 from '../Images/AHA1.jpg';
import heroImage from '../Images/hampage.jpg';
import Footer from '../Pages/Footer';


const imageDetails = {
  [ahaMain]: {
    heading: 'Auto Hematology Analyzer Part 5',
    title: 'Model: MMT HAM 500',
    description: 'The Automatic Hematology Analyzer is an in vitro diagnostic device that used for quantitative analysis of blood cells in medical laboratories, and it can realize three classifications of the count results of white blood cells. This analyzer is a clinical inspection instrument for screening. When making a clinical judgment based on the analysis results, the doctor should take the clinical examination results or other test results into consideration. This analyzer is suitable for the detection of white blood cells, red blood cells, platelets, hemoglobin and other parameters and counting of white blood cells into three classifications.',
    sections: {
      Feature: [
        'Automatic storage of test results with review and print functionality for all parameters',
        'Color touch screen displaying all parameters and histograms on the same screen',
        'Supports external devices: mouse, keyboard, and printer',
        'Five optical reference ranges: newborn, children, adult women, adult men, and general use',
        'Multiple clogging elimination methods: high-pressure burning jewel hole, high-pressure reverse rinsing, and soaking',
        'Automatic cleaning of sample probe',
        'External projector or display screen supported via VGA interface',
        'Chinese and English system languages available',
        'Built-in thermal printer, supports serial port and other printing methods',
        'Includes quality control and calibration management functions',
        'Hemoglobin measurement using cyanide-free SFT method (environmentally friendly)',
        'Floating boundary algorithm and histogram abnormal prompt functionality'
      ],
    },
  },
  [aha1]: {
    heading: 'Auto Hematology Analyzer Part 3',
    title: 'Model: MMT HAM 300',
    // description: 'Visual from side angle showing compact structure.',
    sections: {
      Feature: [
        'Only needs 2 reagents',
        'Sample consumed ≤20uL',
        '60 samples per hour',
        'Whole blood & pre-diluted sampling modes',
        'Built-in printer & external support',
        'USB & LAN ports with HL7 protocol',
      ],
      'Technical Specification': [
        'Voltage: AC 100V~240V, 50/60Hz',
        'Rated Power: 120VA',
        'Electric impedance method and Colorimetry',
        'Up to 21 reportable parameters',
      ],
      'Display & Operation': [
        '10.4” colorful touchscreen',
        'Resolution: 800×600',
        '10° tilt screen for better viewing',
        'User-friendly UI and fault alerts',
      ],
      'Performance': [
        'WBC Precision: <2.0%',
        'RBC Precision: <1.5%',
        'HGB Precision: <1.5%',
        'Contamination Rate: <0.5% - 1%',
      ],
      'Environment & Calibration': [
        'Working Temp: 10°C–35°C',
        'Humidity: 20%–85%',
        'Manual & Auto-calibration',
        'Quality Control: L-J graph, X-B',
      ],
    },
  },
};

const AhaDetail = () => {
  const allImages = [ahaMain, aha1];
  const [mainImage, setMainImage] = useState(ahaMain);
  const [relatedImages, setRelatedImages] = useState(allImages.filter(img => img !== ahaMain));
  const [activeSection, setActiveSection] = useState('Feature');

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
    setRelatedImages(allImages.filter(img => img !== clickedImage));
    setActiveSection('Feature');
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

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold',
            borderRadius: '10px',
          }}
        >
          {/* Auto Hematology Analyzer */}
        </div>
      </div>
      <div style={{ paddingLeft: '30px' }}>
        <h1>{imageDetails[mainImage]?.heading || 'Auto Hematology Analyzer'}</h1>
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
      >        {/* Left: Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={mainImage}
            alt="AHA Device"
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

export default AhaDetail;
