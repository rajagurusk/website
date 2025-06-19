import React, { useState } from 'react';
import ultrasoundMain from '../Images/Portable Ultrasound Machine.jpg';
import ultrasoundAlt from '../Images/USG.jpg'; // Add your second product image here
import heroImage from '../Images/ultrahero.jpg'; // ✅ Hero image
import Footer from '../Pages/Footer'; // Adjust the path based on your folder structure



const imageDetails = {
  [ultrasoundMain]: {
    heading: ' Ultrasound Scanning Machine (Portable Series)',
    title: 'Model - MM CD 200',
    // description:
    //   'The MM CD 200 is designed for easy mobility while delivering high-resolution ultrasound imaging across a range of clinical settings.',
    // sections: {
    // Feature: [
    //   'High-frequency transducer compatibility',
    //   'Lightweight and battery-operated',
    //   'Color Doppler imaging support',
    //   'Ideal for emergency and bedside use',
    // ],
    sections: {
      Feature: [
        'TAI Tissue Adaptive Imaging',
        'eSRI Adaptive Speckle Reduction Imaging',
        'Frequency Compounding Imaging',
        'Adaptive Spatial Compounding Imaging',
        'Harmonic Imaging',
        'B mode Auto Optimization',
        'Digital Multi-Beam forming',
        'Trapezoid Imaging',
        'Adaptive Doppler imaging',
        'Spectrum Enhancement',
        'B Steer',
        'Digital Zoom',
        'Auto Doppler trace',
        'B-mode',
        'M-mode',
        'Color Doppler',
        'PDI/DPDI',
        'PW Doppler',
        'CW Doppler'
      ],
      'Dimensions and Weight)': [
        'Dimension: 375 mm×380 mm×58 mm',
        'Net Weight (No Battery): 4.2kg (1 transducer port)',
        'Net Weight (1 battery): 4.65 kg (1 transducer port)'
      ],
      'Display': [
        '15.6’’ high resolution LCD monitor',
        'Resolution: 1920 x 1080',
        'Image Size: 1040 780',
        'Open angle: 0° - 180°',
        'Magnetic latch closure',
        'Built-in stereo speaker',
        'Brightness and Contrast adjustable',
        'Touch Screen',
        '10.1” Touch screen',
        'Gesture-control',
        'Virtual TGC sliders',
        'Support QWERTY keyboard for text input',
        'Brightness adjustable'

      ],
      // 'Advanced Technique and Features': [
      //   'TAI Tissue Adaptive Imaging',
      //   'eSRI Adaptive Speckle Reduction Imaging',
      //   'Frequency Compounding Imaging',
      //   'Adaptive Spatial Compounding Imaging',
      //   'Harmonic Imaging',
      //   'B mode Auto Optimization',
      //   'Digital Multi-Beam forming',
      //   'Trapezoid Imaging',
      //   'Adaptive Doppler imaging',
      //   'Spectrum Enhancement',
      //   'B Steer',
      //   'Digital Zoom',
      //   'Auto Doppler trace'

      // ],
      // 'Imaging Modes': [
      //   'B-mode',
      //   'M-mode',
      //   'Color Doppler',
      //   'PDI/DPDI',
      //   'PW Doppler',
      //   'CW Doppler'
      // ],
    },
  },
  [ultrasoundAlt]: {
    heading: 'Ultrasound Scanning Machine (Trolley Based)',
    title: 'Model - MM CD 100',
    // description:
    //   'A compact ultrasound solution with advanced imaging modes, perfect for rural and critical care environments.',
    sections: {
      Feature: [
        'eLearn instruction tool for basic scanning and nerve blocks',
        'High-performance integrated audio speaker',
        '6 transducer holders integrated with the control panel',
        'Front and rear handles for easy mobility'
      ],
      'System Ergonomic Design': [
        'Interactive back-lighting',
        '5 active transducer ports',
        'Touch screen configurable user interface',
        '20° tiltable touch screen',
        'Control panel with electronic lift (20 cm) and ±90° left/right swivel',
        'Articulating arm for flexible positioning',
        'Display monitor with ±180° left/right swivel',
        'Tiltable display monitor',
        'Retractable physical keyboard with targeted down-lighting',
        '8-segment physical TGC sliders',
        'Rear storage tray'
      ],
      'User Interface': [
        'Interactive back-lighting',
        'Plastic and rubber hard keys provide tactile feedback',
        'Programmable store keys',
        'Physical trackball for precise control',
        'Electronic lift up/down: 20 cm',
        'Left/right swivel: ±90°',
        '8-segment TGC sliders',
        'Retractable keyboard with targeted down-lighting',
        'Probe temperature monitoring: patient reference temperature (PAT) and transducer tip temperature (TIP)'
      ],
      'Imaging Modes': [
        'B-mode',
        'M-mode',
        'Anatomic M-mode (1/2/3-line AMM and Curved AMM)',
        'Color M mode',
        'Color Doppler',
        'Velocity-based Color Doppler',
        'PDI (Power Doppler Imaging)',
        'DPDI (Directional Power Doppler Imaging)',
        'Pw Doppler',
        'CW Doppler (Continuous Wave Doppler)',
        'B + CW (Update)',
        'B/C(PDI or DPDI) + CW (Update)',
        'B + TVI | Dual Live',
        'B + TVD (Updated)',
        'B + TVD | Duplex',
        'B + TVI + TVD (Updated)',
        'B + TVI + TVD (Triplex)',
        'B + TVM',
        'B + E'
      ],
      'Touch Screen': [
        '14" touch screen (resolution 1920 x 1080)',
        '20° tiltable display',
        'Gesture-control support',
        'User-configurable UI',
        '5 user-defined touch screen keys',
        'Supports visual Chinese and English QWERTY keyboard and French AZERTY keyboard for text input',
        'Adjustable brightness'
      ],
      'System Architecture': [
        'Physical Channels  128',
        'Digital Channels  ≤5529600',
        'Gray Scale  256',
        'Beam Forming Processor  8 beams',
        'Memory',
        'Hard Drive  i5 with 6 cores 32GB',
        'Operating System  ITB SSD 64 bit Linux',
        'System Boot-up About 50s',
        'Boot-up from Sleep   About 3s',
        'Shutdown  18s'
      ],
    },
  },
};

const PortableUltrasoundMachineDetail = () => {
  const allImages = [ultrasoundMain, ultrasoundAlt];//
  const [mainImage, setMainImage] = useState(ultrasoundMain);
  const [relatedImages, setRelatedImages] = useState(allImages.filter((img) => img !== ultrasoundMain));
  const [activeSection, setActiveSection] = useState('Feature');

  const handleImageClick = (clickedImage) => {
    setMainImage(clickedImage);
    setRelatedImages(allImages.filter((img) => img !== clickedImage));
    setActiveSection('Feature'); // reset on change
  };

  return (
    <div style={{ padding: '0px', fontFamily: 'Merriweather , sans-serif' }}>
      {/* ✅ Hero Section */}
      <div style={{ height: '600px', width: '100%', position: 'relative', marginBottom: '40px' }}>
        <img
          src={heroImage}
          alt="Hero"
          style={{
            objectFit: 'fill',
            objectPosition: 'bottom',
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
        </div>
      </div>
      <div style={{ paddingLeft: '30px' }}>

        <h1>{imageDetails[mainImage]?.heading}</h1>
      </div>
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
              margin: '0 auto',
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
      <div style={{ marginTop: '50px', paddingLeft: '30px' }}>
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
            <div
              key={index}
              style={{
                textAlign: 'center',
                minWidth: '200px',
                flexShrink: 0,
              }}
            >
              <img
                src={img}
                alt={`Related ${index}`}
                style={{
                  width: '200px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  border: '2px solid #ccc',
                  transition: 'transform 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={() => handleImageClick(img)}
              />
              <p style={{ marginTop: '8px', fontSize: '14px', color: '#333' }}>
                {imageDetails[img]?.heading || `Product ${index + 1}`}
              </p>

            </div>
          ))}
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default PortableUltrasoundMachineDetail;
