import React, { useState } from 'react';
import ultrasoundMain from '../Images/Portable Ultrasound Machine.jpeg';
// import ultrasoundAlt from '../Images/us2.jpeg'; // Add your second product image here

const imageDetails = {
  [ultrasoundMain]: {
    heading: ' Ultrasound Scanning Machine (Portable Series)',
    title: 'Model - MM CD 200',
    description:
      'The MM CD 200 is designed for easy mobility while delivering high-resolution ultrasound imaging across a range of clinical settings.',
    sections: {
      Feature: [
        'High-frequency transducer compatibility',
        'Lightweight and battery-operated',
        'Color Doppler imaging support',
        'Ideal for emergency and bedside use',
      ],
      'Technical Specification': [
        'Imaging Modes: B, M, Color Doppler',
        'Display: 12" LED',
        'Battery Life: 4+ hours',
      ],
      'Optional Accessories': [
        'Carrying case',
        'External probe options',
      ],
    },
  },
  // [ultrasoundAlt]: {
  //   heading: 'Portable Ultrasound Machine',
  //   title: 'Model - MM CD 300',
  //   description:
  //     'A compact ultrasound solution with advanced imaging modes, perfect for rural and critical care environments.',
  //   sections: {
  //     Feature: [
  //       'Touchscreen interface',
  //       'Wireless image sharing',
  //       'Dual probe support',
  //       'Rechargeable battery',
  //     ],
  //     'Technical Specification': [
  //       'Transducer Frequency: 2.5 - 10 MHz',
  //       'Display: 10.1" HD',
  //       'Battery Life: 6 hours',
  //     ],
  //     'Optional Accessories': [
  //       'Vehicle charger',
  //       'Wall mounting kit',
  //     ],
  //   },
  // },
};

const PortableUltrasoundMachineDetail = () => {
  const allImages = [ultrasoundMain];//, ultrasoundAlt
  const [mainImage, setMainImage] = useState(ultrasoundMain);
  const [relatedImages, setRelatedImages] = useState(allImages.filter((img) => img !== ultrasoundMain));
  const [activeSection, setActiveSection] = useState('Feature');

  const handleImageClick = (clickedImage) => {
    setMainImage(clickedImage);
    setRelatedImages(allImages.filter((img) => img !== clickedImage));
    setActiveSection('Feature'); // reset on change
  };

  return (
    <div style={{ padding: '80px' }}>
      <h1>{imageDetails[mainImage]?.heading}</h1>

      <div style={{ display: 'flex', marginTop: '30px', gap: '30px', flexWrap: 'wrap' }}>
        {/* Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={mainImage}
            alt="Ultrasound"
            style={{
              maxWidth: '350px',
              width: '100%',
              borderRadius: '10px',
              marginLeft: '120px',
            }}
          />
        </div>

        {/* Details */}
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

export default PortableUltrasoundMachineDetail;
