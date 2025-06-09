import React, { useState } from 'react';
import defibMain from '../Images/defibrillator.jpeg';
// import defib2 from '../Images/defib2.jpg'; // Add your second defibrillator image

const imageDetails = {
  [defibMain]: {
    heading: 'Defibrillator',
    title: 'Model: MT Defib 100',
    description: 'A portable, advanced defibrillator designed for emergency cardiac care.',
    sections: {
      Feature: [
        'Biphasic waveform',
        'Battery & AC power support',
        'Audible alarms',
        'Large screen display',
      ],
      'Technical Specification': [
        'Energy: 200J max',
        'Charging Time: <5 seconds',
        'Display: 7-inch LCD',
      ],
      'Standard Package': [
        'Main Unit',
        'Adult Pads',
        'Battery Pack',
        'User Manual',
      ],
    },
  },

  // [defib2]: {
  //   heading: 'Defibrillator - MT AED 200',
  //   title: 'Model: MT AED 200',
  //   description: 'Compact and automatic external defibrillator suitable for field use.',
  //   sections: {
  //     Feature: [
  //       'Fully automated shock delivery',
  //       'Audio-visual prompts',
  //       'Pediatric mode',
  //     ],
  //     'Technical Specification': [
  //       'Battery Life: 5 years standby',
  //       'Shock Energy: 150J',
  //       'Water Resistance: IP55',
  //     ],
  //     'Optional Accessories': [
  //       'Wall mount',
  //       'Extra pads',
  //     ],
  //   },
  // },
};

const DefibrillatorDetail = () => {
  const allImages = [defibMain];//, defib2
  const [mainImage, setMainImage] = useState(defibMain);
  const [relatedImages, setRelatedImages] = useState(allImages.filter(img => img !== defibMain));
  const [activeSection, setActiveSection] = useState('Feature');

  const handleImageClick = (clickedImage) => {
    setMainImage(clickedImage);
    setRelatedImages(allImages.filter(img => img !== clickedImage));
    setActiveSection('Feature');
  };

  return (
    <div style={{ padding: '100px' }}>
      <h1>{imageDetails[mainImage]?.heading || 'Defibrillator'}</h1>

      <div style={{ display: 'flex', marginTop: '30px', gap: '30px', flexWrap: 'wrap' }}>
        {/* Left: Image */}
        <div style={{ padding:'0px 20px' ,flex: '1', minWidth: '300px' }}>
          <img
            src={mainImage}
            alt="Defibrillator"
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

      {/* Related Products */}
      <div style={{ marginTop: '50px' }}>
        <h3>Related Products</h3>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px', overflowX: 'auto', paddingBottom: '10px' }}>
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

export default DefibrillatorDetail;
