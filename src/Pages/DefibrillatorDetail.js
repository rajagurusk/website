import React, { useState } from 'react';
import defibMain from '../Images/defibrillator.jpg';
// import defib2 from '../Images/defib2.jpg'; // Add your second defibrillator image
import heroImage from '../Images/defibrilatorpage.jpg'; // ✅ Hero image
import Footer from '../Pages/Footer'; // Adjust the path based on your folder structure



const imageDetails = {
  [defibMain]: {
    heading: 'Defibrillator',
    title: 'Model: MT DF 200',
    // description: 'A portable, advanced defibrillator designed for emergency cardiac care.',
    sections: {
      Feature:[
	'Display : 7-Colour TFT',
	'Display area :150 mm x 90 mm',
'Dimensions : Approx. 275mm (H) x 323mm (W) x 200mm (D) without paddle',
	'Weight : Approx.8 Kgs',
	'Operation : By front Panel keyboard-1-2-3 operation, Encoder Operated on mains & battery',
	'Alarm : User adjustable high & low limit, Audible and visual Alarming',
	'Trend : 24 hrs Graphical and Tabular trend of ECG, Sp02, NIBP',
	'Charge/ Discharge Control : Charge and Shock buttons on front panel and paddles',
	'Battery Backup time : 4 hrs Monitor Mode 3 hrs Defib mode',
	"Operating Temperature (°C) : 5'C to +45°C",
' Storage Temperature (JO : -5°C to +50°C',
' Operating & Storage Humidity (% RH) : Up to 95%'

      ],
    'Mode & Waveform': [
      'Waveform: Biphasic Truncated Exponential',
      'Energy: 2 to 360 Joules in 1J steps selection',
      'Energy Display: Displays selected, charged, and delivered energy',
      'Synchronous Cardioversion: Energy delivery begins within 40ms of the QRS peak',
      'Charging Time: 6 seconds on mains',
      'Paddle Assembly: External paddle assembly with cord',
      'Check Mode: Manual check mode, self-test',
      'Patient Impedance Range: 25 ohm to 150 ohm',
      'Shock Delivery: Through paddle or pads',
      'Event Summary: 750 shock events with 10 seconds of ECG data',
      'Paddles Support: Adult & pediatric paddles',
      'ECG Through: Paddles and pads',
    ],
    'ECG': [
      'Frequency Response: 0.6 Hz to 35 Hz',
      'Patient Isolation: Optical isolation',
      'Lead Selection: Lead I, II, and III',
      'Gain Setting: 0.5, 1.0, and 2.0',
      'CMRR: > 100 dB',
      'Sweep Speed: 12.5, 25.0, 50 mm/sec',
      'ECG Through: 5-lead ECG patient cable',
    ],
    'Printer': [
      'Paper Type: Thermal paper, 50mm width, 10 meters length',
      'Event Printing: 5 sec pre & post ECG with date, time, energy, and mode',
      'ECG in Defib Mode: Prints last 10 sec ECG through paddles',
      'Defib Mode Annotation: Time, Date, Mode, Lead Name, Gain, Sweep Speed',
      'ECG in Monitor Mode: Prints last 10 sec ECG through cable',
      'Monitor Mode Annotation: Time, Date, Electrode, Lead Name, Gain, Sweep Speed',
      'Manual Defib Check: Prints status of Shock, Energy, Date, Time',
      'Self-Test Mode: Prints status of auto-check, battery, date & time',
    ],
    'SpO2 (Optional)': [
      'Range: 0 - 100%',
      'Pulse Rate: Displayed in ECG window when PR is selected',
      'Pulse Beep: Yes, with volume control',
      'PR Range: 10 to 260 bpm (±2 bpm)',
      'Pitch Variation: Based on oxygen saturation',
    ],
    'NIBP (Optional)': [
      'Systolic, Diastolic & MAP Range: 10 - 210 mmHg',
      'Method: Oscillometric',
      'NIBP Interval: User selectable (2 min to 250 min)',
      'Modes: Manual, Auto',
      'Cuff Deflation: Automatic',
      'Safety Limit: Auto deflate if cuff pressure > 280 mmHg',
      'Status Display: "Ready", "Measuring", or "Error"',
      'Patient Type: Adult, Pediatric, Neonatal',
    ],
    'AED Mode (Optional)': [
      'Waveform: Biphasic truncated exponential',
      'AED Shock Series: Energy level 70J',
      'Charge Command: Auto after detecting shockable rhythm',
      'Shock Command: Front panel button',
      'Controls: Analyze',
      'Defibrillation Electrode: Self-adhesive adult pads',
      'Prompts: Extensive voice and text instructions',
    ],
    'Pacer (Optional)': [
      'Waveform: Monophasic',
      'Modes: Demand or Non-Demand',
      'Pulse Current: 10 mA to 150 mA (10 mA steps)',
      'Pulse Duration: 40 ms',
      'Pacing Rate: 70 to 250 ppm (1 ppm steps)',
      'Refractory Period: 740 ms (30–30 ppm), 240 ms (10–150 ppm)',
      'Max Output Voltage: 150 V',
      'Impedance Range: 200 ohm to 1 kΩ',
    ],
    '12-Lead ECG (Optional)': [
      'Simultaneous acquisition of 12 leads',
      'Remote monitoring capability',
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
<div style={{ padding: '0px' }}>
      {/* ✅ Hero Section */}
      <div style={{ height: '600px', width: '100%', position: 'relative', marginBottom: '40px' }}>
  <img
    src={heroImage}
    alt="Hero"
    style={{
      objectFit: 'cover',
      objectPosition: 'center',
      width: '100%',
      height: '100%',
      borderRadius: '10px',
    }}
  />
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '2rem',
      fontWeight: 'bold',
      borderRadius: '10px',
      // backgroundColor: 'rgba(0, 0, 0, 0.4)' // Optional overlay for contrast
    }}
  >
    {/* Portable Ultrasound Machines */}
  </div>
</div>
<div style={{ paddingLeft: '30px' }}>

      <h1>{imageDetails[mainImage]?.heading || 'Defibrillator'}</h1>
</div>
<div
  style={{
    display: 'flex',
    flexDirection: window.innerWidth < 768 ? 'column' : 'row',
    marginTop: '30px',
    gap: '30px',
    flexWrap: 'wrap',
    padding: '0 20px',
  }}
>        {/* Left: Image */}
        <div style={{ padding:'0px 20px' ,flex: '1', minWidth: '300px' }}>
          <img
            src={mainImage}
            alt="Defibrillator"
style={{
  maxWidth: '100%',
  width: '100%',
  borderRadius: '10px',
  objectFit: 'contain',
  display: 'block',
  margin: '0 auto',
}}          />
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
        {/* <h3>Related Products</h3> */}
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
                  <Footer />

    </div>
  );
};

export default DefibrillatorDetail;
