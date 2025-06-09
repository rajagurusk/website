import React, { useState } from 'react';
import ecgMain from '../Images/ecg1.jpeg';
import ecg1 from '../Images/mrp6000.jpeg';
import ecg2 from '../Images/ecg60.jpg'
// import fadeImage from '../Images/fade.jpg'; // Unused

const imageDetails = {
  [ecgMain]: {
    heading: '12 Channel ECG Machine',
    title: 'Model: MT ECG 120',
    description: 'Our cutting-edge ECG system delivers accurate and real-time heart monitoring...',
    sections: {
      Feature: [
        '12-lead diagnostic capability',
        'Wireless data syncing',
        'Compact touchscreen interface',
        'Rechargeable and portable',
      ],
      'Technical Specification': [
        'Sampling Rate: 1000Hz',
        'Frequency Response: 0.05Hz - 150Hz',
        'Input Impedance: >10 MΩ',
      ],
      'Physical Specification': [
        'Weight: 2.5kg',
        'Dimensions: 300mm x 200mm x 80mm',
        'Battery: Lithium-ion 3000mAh',
      ],
      'System Input Output': [
        'USB 2.0',
        'WiFi Connectivity',
        'Bluetooth 5.0',
      ],
      'Standard Package': [
        'Main Unit',
        'ECG Cable',
        'Patient Cable',
        'User Manual',
      ],
      'Optional Accessories': [
        'Trolley Stand',
        'Additional Electrodes',
      ],
      'Advanced Function': [
        'AI-powered arrhythmia detection',
        'Auto-report generation',
      ],
    },
  },

  [ecg1]: {
    heading: '3 Channel ECG Machine',
    title: 'Magnetic Resonance Pancreatography (MRP 6000)',
    description: 'Easy-to-carry ECG with USB compatibility and intuitive interface.',
    sections: {
      Feature: [
        'Lightweight design',
        'Battery backup',
        'USB & SD card support',
        'Smart alerts',
      ],
      'Technical Specification': [
        'Sampling Rate: 500Hz',
        'Battery: 2200mAh',
        'Channels: 3',
      ],
      'Optional Accessories': [
        'Protective Case',
        'Additional Battery',
      ],
    },
  },
  [ecg2]: {
    heading: '6 Channel ECG Machine',
    title: 'Model: MT ECG 60',
    description: 'Our cutting-edge ECG system delivers accurate and real-time heart monitoring...',
    sections: {
      Feature: [
        '12-lead diagnostic capability',
        'Wireless data syncing',
        'Compact touchscreen interface',
        'Rechargeable and portable',
      ],
      'Function': [
        'Sampling Rate: 1000Hz',
        'Frequency Response: 0.05Hz - 150Hz',
        'Input Impedance: >10 MΩ',
      ],
       },
  },
};

const EcgDetail = () => {
  const allImages = [ecgMain, ecg1, ecg2];
const [mainImage, setMainImage] = useState(ecgMain);
const [relatedImages, setRelatedImages] = useState(allImages.filter(img => img !== ecgMain));
const [activeSection, setActiveSection] = useState('Feature'); // ✅ Add this back


  const handleImageClick = (clickedImage) => {
  setMainImage(clickedImage);
  setRelatedImages(allImages.filter((img) => img !== clickedImage));
  setActiveSection('Feature'); // reset to default section
};


  return (
    <div style={{ padding: '100px' }}>
      <h1>{imageDetails[mainImage]?.heading || 'ECG (Electrocardiograph)'}</h1>

      <div style={{ display: 'flex', marginTop: '30px', gap: '30px', flexWrap: 'wrap' }}>
        {/* Left: Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={mainImage}
            alt="ECG Device"
            style={{ maxWidth: '400px', width: '100%', borderRadius: '10px', marginLeft: '120px' }}
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

export default EcgDetail;
