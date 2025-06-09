// src/Pages/CardiotocographyDetail.js
import React, { useState } from 'react';
import ctgMain from '../Images/ctg.jpeg';

const imageDetails = {
  [ctgMain]: {
    heading: 'Cardiotocography',
    title: 'Model: CTG Pro 200',
    description:
      'The CTG Pro 200 is a state-of-the-art fetal monitoring device that offers real-time insights into fetal heart rate and uterine contractions.',
    sections: {
      Features: [
        'High-precision dual-probe system',
        'Large TFT display with touch controls',
        'Long battery life with portable design',
        'Automatic printout and data storage',
      ],
    },
  },
};

const CardiotocographyDetail = () => {
  const [activeSection, setActiveSection] = useState('Features');

  return (
    <div style={{ padding: '90px' }}>
      <h1>{imageDetails[ctgMain].heading} </h1> 
      {/* – {imageDetails[ctgMain].title */}
      <div style={{ display: 'flex', marginTop: '30px', gap: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={ctgMain}
            alt="CTG Device"
            style={{ maxWidth: '300px', width: '100%', borderRadius: '10px', marginLeft: '150px' }}
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
    </div>
  );
};

export default CardiotocographyDetail;
