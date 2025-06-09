// src/Pages/AhaDetail.js
import React from 'react';
import ahaMain from '../Images/AHA.jpeg';
// import aha1 from '../Images/aha-1.jpeg';
// import aha2 from '../Images/aha-2.jpeg';
// import aha3 from '../Images/aha-3.jpeg'; // Add more if needed

const AhaDetail = () => {
  return (
    <div style={{ padding: '80px' }}>
      <h1>Auto Hematology Analyzer – Model: AHA-X5</h1>

      {/* Image and Details Side-by-Side */}
      <div style={{ display: 'flex', marginTop: '30px', gap: '30px', flexWrap: 'wrap' }}>
        {/* Left: Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={ahaMain}
            alt="Auto Hematology Analyzer"
            style={{ maxWidth: '300px', width: '100%', borderRadius: '10px', marginLeft: '120px' }}
          />
        </div>

        {/* Right: Details */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2>Efficient & Accurate Blood Analysis</h2>
          <p>
            The AHA-X5 Auto Hematology Analyzer provides high-speed and high-accuracy blood cell counting and differentiation, essential for diagnostic labs.
          </p>
          <ul>
            <li>3-part WBC differential</li>
            <li>60 samples/hour throughput</li>
            <li>Touchscreen operation</li>
            <li>Compact and user-friendly design</li>
          </ul>
        </div>
      </div>

      {/* Related Images Section */}
      <div style={{ marginTop: '50px' }}>
        <h3>Related Images</h3>
        <div style={{
          display: 'flex',
          gap: '20px',
          marginTop: '20px',
          overflowX: 'auto',
          paddingBottom: '10px'
        }}>
          {/* <img src={aha1} alt="Analyzer View 1" style={{ width: '200px', borderRadius: '8px' }} />
          <img src={aha2} alt="Analyzer View 2" style={{ width: '200px', borderRadius: '8px' }} />
          <img src={aha3} alt="Analyzer In Use" style={{ width: '200px', borderRadius: '8px' }} /> */}
        </div>
      </div>
    </div>
  );
};

export default AhaDetail;
