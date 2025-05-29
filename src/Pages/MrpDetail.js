// src/Pages/MrpDetail.js
import React from 'react';
import mrpMain from '../Images/mrp6000.jpeg';
// import mrp1 from '../Images/mrp1.jpeg';
// import mrp2 from '../Images/mrp2.jpeg';
// import mrp3 from '../Images/mrp3.jpeg'; // Add more if needed

const MrpDetail = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Magnetic Resonance Pancreatography (MRP 6000)</h1>

      {/* Image and Details Side-by-Side */}
      <div style={{ display: 'flex', marginTop: '30px', gap: '30px', flexWrap: 'wrap' }}>
        {/* Left: Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={mrpMain}
            alt="MRP Device"
            style={{ maxWidth: '300px', width: '100%', borderRadius: '10px', marginLeft: '150px' }}
          />
        </div>

        {/* Right: Details */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2>High-Resolution Pancreatic Imaging</h2>
          <p>
            The MRP 6000 offers exceptional imaging clarity and diagnostic accuracy for pancreatic and biliary tract evaluations.
          </p>
          <ul>
            <li>Non-invasive magnetic resonance technology</li>
            <li>Advanced contrast resolution</li>
            <li>Real-time imaging capabilities</li>
            <li>Compact and patient-friendly design</li>
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
          {/* <img src={mrp1} alt="MRP View 1" style={{ width: '200px', borderRadius: '8px' }} />
          <img src={mrp2} alt="MRP View 2" style={{ width: '200px', borderRadius: '8px' }} />
          <img src={mrp3} alt="MRP in Use" style={{ width: '200px', borderRadius: '8px' }} /> */}
        </div>
      </div>
    </div>
  );
};

export default MrpDetail;
