// src/Pages/PortableUltrasoundMachineDetail.js
import React from 'react';
import ultrasoundMain from '../Images/Portable Ultrasound Machine.jpeg';
// import us1 from '../Images/us1.jpeg';
// import us2 from '../Images/us2.jpeg';
// import us3 from '../Images/us3.jpeg'; // Add more if needed

const PortableUltrasoundMachineDetail = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h1>
        Portable Ultrasound Machine <br />
        Model - MM CD 200
      </h1>

      {/* Image and Details Side-by-Side */}
      <div style={{ display: 'flex', marginTop: '30px', gap: '30px', flexWrap: 'wrap' }}>
        {/* Left: Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={ultrasoundMain}
            alt="Ultrasound Machine"
            style={{ maxWidth: '300px', width: '100%', borderRadius: '10px', marginLeft: '150px' }}
          />
        </div>

        {/* Right: Details */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2>Efficient & Portable Imaging Solution</h2>
          <p>
            The MM CD 200 is designed for easy mobility while delivering high-resolution ultrasound imaging across a range of clinical settings.
          </p>
          <ul>
            <li>High-frequency transducer compatibility</li>
            <li>Lightweight and battery-operated</li>
            <li>Color Doppler imaging support</li>
            <li>Ideal for emergency and bedside use</li>
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
          {/* <img src={us1} alt="Ultrasound View 1" style={{ width: '200px', borderRadius: '8px' }} />
          <img src={us2} alt="Ultrasound View 2" style={{ width: '200px', borderRadius: '8px' }} />
          <img src={us3} alt="Ultrasound in Use" style={{ width: '200px', borderRadius: '8px' }} /> */}
        </div>
      </div>
    </div>
  );
};

export default PortableUltrasoundMachineDetail;
