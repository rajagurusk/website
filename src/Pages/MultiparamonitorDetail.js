import React, { useState } from 'react';
import monitorMain from '../Images/multiparamonitor.jpeg';
import monitorAlt from '../Images/multilowend.jpeg'; // Add your second image here

const imageDetails = {
  [monitorMain]: {
    heading: 'Multipara Monitor (High End) ',
    title: 'Model: MT 70 Plus',
    description:
      'The MT 70 Plus Multipara Monitor is designed for high-precision, real-time monitoring of critical patient vitals, supporting better clinical decisions.',
    sections: {
      Features: [
        'Large HD touchscreen display',
        'ECG, SpO2, NIBP, RESP, and TEMP monitoring',
        'Data storage and USB export',
        'Battery backup for mobility',
      ],
      Specifications: [
        'Screen Size: 12.1 inches',
        'Battery Backup: 4 hours',
        'Ports: USB, Ethernet',
        'Mounting: Wall/Trolley Compatible',
      ],
    },
  },
  [monitorAlt]: {
    heading: 'Multipara Monitor (Low End) ',
    title: 'Model: MT 60 Eco',
    description:
      'The MT 60 Eco is an affordable and portable patient monitor designed for small clinics and home use.',
    sections: {
      Features: [
        'Bright LED screen',
        'SpO2 and NIBP only',
        'Compact and lightweight',
        'USB Charging',
      ],
      Specifications: [
        'Screen Size: 8 inches',
        'Battery Backup: 2 hours',
        'Input: 100–240V AC',
      ],
    },
  },
};

const MultiparamonitorDetail = () => {
  const allImages = [monitorMain, monitorAlt];
  const [mainImage, setMainImage] = useState(monitorMain);
  const [relatedImages, setRelatedImages] = useState(allImages.filter((img) => img !== monitorMain));
  const [activeSection, setActiveSection] = useState('Features');

  const handleImageClick = (clickedImage) => {
    setMainImage(clickedImage);
    setRelatedImages(allImages.filter((img) => img !== clickedImage));
    setActiveSection('Features'); // reset to default section
  };

  return (
    <div style={{ padding: '100px' }}>
      <h1>{imageDetails[mainImage]?.heading}</h1>

      <div style={{ display: 'flex', marginTop: '30px', gap: '30px', flexWrap: 'wrap' }}>
        {/* Left: Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={mainImage}
            alt="Multipara Monitor"
            style={{ maxWidth: '400px', width: '100%', borderRadius: '10px', marginLeft: '120px' }}
          />
        </div>

        {/* Right: Details */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2>{imageDetails[mainImage]?.title}</h2>
          <p>{imageDetails[mainImage]?.description}</p>

          {/* Tabs */}
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
      <div style={{ marginTop: '50px' }}>
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
            <img
              key={index}
              src={img}
              alt={`Related ${index}`}
              style={{
                width: '200px',
                borderRadius: '8px',
                cursor: 'pointer',
                border: '2px solid #ccc',
              }}
              onClick={() => handleImageClick(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiparamonitorDetail;
