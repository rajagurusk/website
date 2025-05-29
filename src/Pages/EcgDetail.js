import React from 'react';
import ecgMain from '../Images/ecg1.jpeg';
// import ecg1 from '../images/ecg-1.jpg';
// import ecg2 from '../images/ecg-2.jpg';
// import ecg3 from '../images/ecg-3.jpg'; // Add more if needed

const EcgDetail = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h1>ECG (Electrocardiograph) Model : MT ECG 120</h1>

      {/* Image and Details Side-by-Side */}
      <div style={{ display: 'flex', marginTop: '30px', gap: '30px', flexWrap: 'wrap' }}>
        {/* Left: Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={ecgMain}
            alt="ECG Device"
style={{ maxWidth: '400px', width: '100%', borderRadius: '10px',marginLeft: '120px' }}
          />
        </div>

        {/* Right: Details */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2>Advanced Cardiac Monitoring</h2>
          <p>
            Our cutting-edge ECG system delivers accurate and real-time heart monitoring to help medical professionals diagnose conditions quickly and efficiently.
          </p>
          <ul>
            <li>12-lead diagnostic capability</li>
            <li>Wireless data syncing</li>
            <li>Compact touchscreen interface</li>
            <li>Rechargeable and portable</li>
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
          {/* <img src={ecg1} alt="ECG View 1" style={{ width: '200px', borderRadius: '8px' }} />
          <img src={ecg2} alt="ECG View 2" style={{ width: '200px', borderRadius: '8px' }} />
          <img src={ecg3} alt="ECG in Use" style={{ width: '200px', borderRadius: '8px' }} /> */}
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default EcgDetail;
