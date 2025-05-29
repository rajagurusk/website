// src/Pages/MultiparamonitorDetail.js
import React from 'react';
import monitorMain from '../Images/multiparamonitor.jpeg';
// import monitor1 from '../Images/monitor-1.jpg';
// import monitor2 from '../Images/monitor-2.jpg';
// import monitor3 from '../Images/monitor-3.jpg'; // Add more if needed

const MultiparamonitorDetail = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Multipara Monitor — Model: MT 70 Plus</h1>

      {/* Image and Details Side-by-Side */}
      <div style={{ display: 'flex', marginTop: '30px', gap: '30px', flexWrap: 'wrap' }}>
        {/* Left: Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={monitorMain}
            alt="Multipara Monitor"
            style={{ maxWidth: '300px', width: '100%', borderRadius: '10px',marginLeft: '120px' }}
          />
        </div>

        {/* Right: Details */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2>Comprehensive Patient Monitoring</h2>
          <p>
            The MT 70 Plus Multipara Monitor is designed for high-precision, real-time monitoring of critical patient vitals, supporting better clinical decisions.
          </p>
          <ul>
            <li>Large HD touchscreen display</li>
            <li>ECG, SpO2, NIBP, RESP, and TEMP monitoring</li>
            <li>Data storage and USB export</li>
            <li>Battery backup for mobility</li>
          </ul>
        </div>
      </div>

      {/* Related Images Section */}
      <div style={{ marginTop: '50px' }}>
        <h3>Related Images</h3>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
            overflowX: 'auto',
            paddingBottom: '10px'
          }}
        >
          {/* <img src={monitor1} alt="Monitor View 1" style={{ width: '200px', borderRadius: '8px' }} />
          <img src={monitor2} alt="Monitor View 2" style={{ width: '200px', borderRadius: '8px' }} />
          <img src={monitor3} alt="Monitor in Use" style={{ width: '200px', borderRadius: '8px' }} /> */}
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default MultiparamonitorDetail;
