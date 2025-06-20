// src/Pages/CardiotocographyDetail.js
import React, { useState, useEffect, useLayoutEffect } from 'react';
import ctgMain from '../Images/ctg.jpg';
import heroImage from '../Images/ctgpage.jpg';
import Footer from '../Pages/Footer';

const imageDetails = {
  [ctgMain]: {
    heading: 'Cardiotocography',
    title: 'Model: MT FD 150',
    description:
      'Fetal Monitor can real-time acquire FHR, TOCO and FMOV,which can provide reference data for clinical use. It can be used individually or connected with central monitoring system in obstetrical department to form a network monitoring system.',
    sections: {
      Features: [
        'Compact design: can be placed horizontally or mounted on the wall',
        'Color LCD with 60° foldable/convertible screen',
        'Clear display of monitoring curves and data',
        'Normal FHR range area marking (120 BPM ~ 160 BPM)',
        'Manual recording for fetal movement',
        'Alarm for abnormal FHR',
        'Real-time monitoring for continuous 24 hours',
        'Stores, plays back, and prints monitoring curve for up to 12 hours',
        'Optional interface languages available',
        'Optional twins monitoring support',
        '9-crystal broad beam transducer',
        'Extra long-life, high-resolution built-in thermal printer',
        'Built-in RJ45 port for communication with central monitoring system',
        'FHR analysis includes: Short-Term Variation, Signal Loss, Basal Heart Rate, Acceleration/Deceleration, High Episode, Low Episode',
        'In-built thermal printer',
        '8" foldable LCD display screen',
        'FHR range: 50–240 bpm'
      ],
    },
  },
};
const CardiotocographyDetail = () => {
  const [activeSection, setActiveSection] = useState('Features');
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
    objectFit: 'fill',
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
          {/* Portable Ultrasound Machines */}
        </div>
      </div>
      <div style={{ paddingLeft: '30px' }}>

        <h1>{imageDetails[ctgMain].heading} </h1>
      </div>
      {/* – {imageDetails[ctgMain].title */}
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
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={ctgMain}
            alt="CTG Device"
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

        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2>{imageDetails[ctgMain].title}</h2>
          <p>{imageDetails[ctgMain].description}</p>

          {/* Section Tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
            {Object.keys(imageDetails[ctgMain].sections).map((section) => (
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
            {imageDetails[ctgMain].sections[activeSection]?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default CardiotocographyDetail;
