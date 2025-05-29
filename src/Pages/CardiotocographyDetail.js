// src/Pages/CardiotocographyDetail.js
import React from 'react';
import ctgMain from '../Images/ctg.jpeg';
// import ctg1 from '../Images/ctg-1.jpeg';
// import ctg2 from '../Images/ctg-2.jpeg';
// import ctg3 from '../Images/ctg-3.jpeg'; // Add more if needed

const CardiotocographyDetail = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Cardiotocography – Model: CTG Pro 200</h1>

      {/* Image and Details Side-by-Side */}
      <div style={{ display: 'flex', marginTop: '30px', gap: '30px', flexWrap: 'wrap' }}>
        {/* Left: Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={ctgMain}
            alt="Cardiotocography Device"
            style={{ maxWidth: '300px', width: '100%', borderRadius: '10px', marginLeft: '150px' }}
          />
        </div>

        {/* Right: Details */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2>Precise Fetal Monitoring</h2>
          <p>
            The CTG Pro 200 is a state-of-the-art fetal monitoring device that offers real-time insights into fetal heart rate and uterine contractions.
          </p>
          <ul>
            <li>High-precision dual-probe system</li>
            <li>Large TFT display with touch controls</li>
            <li>Long battery life with portable design</li>
            <li>Automatic printout and data storage</li>
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
          {/* <img src={ctg1} alt="CTG View 1" style={{ width: '200px', borderRadius: '8px' }} />
          <img src={ctg2} alt="CTG View 2" style={{ width: '200px', borderRadius: '8px' }} />
          <img src={ctg3} alt="CTG in Use" style={{ width: '200px', borderRadius: '8px' }} /> */}
        </div>
      </div>
    </div>
  );
};

export default CardiotocographyDetail;
