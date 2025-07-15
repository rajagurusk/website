import React, { useState, useEffect, useLayoutEffect } from 'react';
import ecgMain from '../Images/ecg18.jpeg';
import ecg1 from '../Images/mrp6000.jpeg';
import ecg2 from '../Images/ecg60.jpeg';
import ecg3 from '../Images/ecg1.jpeg';
import heroImage from '../Images/ecgproduct.jpg';
import Footer from '../Pages/Footer';

const imageDetails = {
  

  [ecg2]: {
    heading: '3 Channel ECG Machine',
    title: 'Model: MT ECG 30',
    // description: 'Easy-to-carry ECG with USB compatibility and intuitive interface.',
    sections: {
      Feature: [
        'Sync collection for 12-lead ECG, adopts digital signal processing technology for high-quality ECG waveform via power frequency, baseline, and EMG filters.',
        'Displays 1/3/6/12-lead ECG, print mode, sensitivity, paper speed, and filter state on one screen for easier comparison-based diagnosis.',
        'Multiple printing modes and formats: manual, auto 4x3, auto 3x4+1, auto 3x4, auto 2x6+1, auto 2x6, with adjustable waveform length and timed print function to suit various needs.',
        'Features auto-analysis and auto-diagnosis for routine ECG parameters, reducing doctors’ workload.',
        'Built-in memory allows easy review and case statistics by the doctor.',
        'Optional ECG-Sync software allows USB2.0 connection to PC for real-time data analysis, report printing, and uploading stored cases from the device.',
        'Dual power support: AC/DC and built-in rechargeable lithium battery, ideal for home visits and portable use.'
      ]
    },
  },
  [ecg1]: {
    heading: '6 Channel ECG Machine',
    title: 'Model: MT ECG 60',
    // description: 'Our cutting-edge ECG system delivers accurate and real-time heart monitoring...',
    sections: {
      Feature: [
        "Adopt 7'' high-resolution color LCD, operate by touch screen and function buttons, convenient to use.",
        "Sync collection for 12-lead ECG, support routine 12-lead and Cabrera-lead waveform display. Get high-quality ECG waveform via AC filter, DFT filter, EMG filter and Low-pass Filter of ECG signal.",
        "Display 3/6/12-lead ECG waveform, print mode, sensitivity, paper speed, filter status, etc. on one screen, convenient for contrastively diagnosing.",
        "Power supply: AC/DC (which can adapt AC 50/60Hz), with built-in rechargeable lithium battery, charging circuit, perfect over-current and over-voltage protection circuit.",
        "Support for auto 1×12, auto 2×6, auto 2×6+1, auto 3×4, auto 3×4+1, auto 4×3, auto 4×3+1, auto 6×2, auto 6×2+1, rhythm 7, rhythm 6, rhythm 5, rhythm 4, rhythm 3, rhythm 2 and manual modes.",
        "Printed content includes time, calibration signal, filter status and patient information. You can configure waveform length, output parameters, diagnosis, QRS overlap, histogram, trend chart, interval list, and enable timed print.",
        "With auto-measurement and auto-interpretation for routine ECG parameters: HR, PR interval, P Duration, QRS Duration, T Duration, QT/QTc interval, P/QRS/T Axis, R(V5), S(V1), and R(V5)+S(V1), along with diagnostic conclusion.",
        "Rhythm lead can be freely selected for convenient observation of abnormal heart rhythms.",
        "Patient clinical info (ID, Name, Age, Sex, Height, Weight, etc.) can be entered directly.",
        "Built-in memory stores up to 1000 cases (3s case format), convenient for review and statistics.",
        "Optimized DC mode offers up to 10-hour standby, over 3-hour continuous printing, or 1000 ECG waveforms (3s cases).",
        "Multi-language support: Chinese, English, Turkish, Portuguese, German, Russian, Kazakh, etc. for interface and reports.",
        "Supports external printer and USB storage device connection."
      ]
    },
  },
  [ecgMain]: {
    heading: '18 Channel ECG Machine',
    title: 'Model: MT ECG 180',
    description: 'The device is an electrocardiograph which can collect 18-lead ECG signal simultaneously and print ECG waveform with thermal printing system. It features in, recording and displaying ECG waveform in auto / manual mode; measuring, analyzing and diagnosing ECG waveform parameters automatically; prompting for "Lead off" and "Lack of paper"; built-in lithium battery, AC / DC; selecting rhythm lead freely to observe abnormal heart rhythm; case database management.',
    sections: {
      Feature: [
        'Display with 1280×800 dots 10.1 inch high resolution color LCD, operate either by touch screen or function buttons, which is convenient and quick.',
        'Sync collection for 18-lead ECG, support for 18-lead and Cabrera-lead waveform display, adopt digital signal processing technology and get high-quality ECG via power frequency filter, baseline filter, EMG filter and Low-pass Filter for ECG signals.',
        'Display of 3/6/12/18-lead ECG waveform on one screen, and HR value, print mode, sensitivity, paper speed, filter state, clock, battery level, background gridlines, measured data and interpretation information, etc.',
        'Prompting function for lead-off and overload, system working state.',
        'The device can be powered either by AC or DC (can adapt to 50/60Hz AC frequency), with built-in rechargeable lithium battery and charging circuit, perfect battery overcurrent and overvoltage protection circuit.',
        'In optimal DC state, up to 10-hour standby time, continuous print more than 3-hour, record up to 1000 ECG waveform (commonly, it is 3s case), which meets the requirements of visiting a patient at home and body examination.',
        'Built-in thermal printer, support for Auto M*N, Auto M*N+1, Auto M*N+2, Auto M*N+3, rhythm M line, manual and other printing modes and formats.',
        'Printed content includes time, paper speed, sensitivity, calibration signal, name of lead, filter state and patient\'s information.',
        'Information including printed waveform length, output measurement parameter, diagnostic conclusion, superposition QRS waveform, histogram, trend chart and interval list, can be set.',
        'With time print function and auto arrhythmia print function, which meets different requirements.',
        'Functions of auto-measurement and auto-interpretation for routine ECG parameters.',
        'Provides measurement results and auto-diagnosis conclusion for HR, PR Interval, P Duration, QRS Duration, T Duration, QT/QTc Interval, P/QRS/T Axis, R(V5), S(V1), R(V5)+S(V1) amplitude, Cornell Index, etc.',
        'The built-in large-capacity memory can store at least 4000 medical records, making it easy for doctors to review medical records and statistical information.',
        'Historical medical records can be reviewed, inquired, modified, transmitted, printed, lead correction, exported to other electronic file formats (dat, pdf, xml, bmp, jpeg, png etc.).',
        'Multi-language interface and report. Full touch screen with buttons operation, built-in virtual keyboard.',
        'With Wi-Fi wireless communication function. With functions of LAN, USB cable transmission. Automatically upload cases, download reports and print them.',
        'Supports external USB standard keyboard, mouse, scanner, printer.'
      ]



    },
  },
  [ecg3]: {
    heading: '12 Channel ECG Machine',
    title: 'Model: MT ECG 120',
    // description: 'Our cutting-edge ECG system delivers accurate and real-time heart monitoring...',
    sections: {
      Feature: [
        'Colorful HD Display screen: The 10.1-inch full fit color touch screen with a resolution of up to 1280×800 provides users with good visual effects, richer display content, clearer waveforms, and more reliable results.',
        'Touch + Button Operation: The button + touch combination realizes fast, intuitive and concise operation, allowing users to experience a true "what you want is what you get" interface. Soft silicone buttons provide a comfortable touch.',
        'Powerful Data Management: Built-in large-capacity memory can store at least 4000 medical records. Supports export in various electronic file formats with a convenient and fast operation interface.',
        'Ergonomic Handle Design: Optimized handle offers better grip and user comfort.',
        'External Equipment Support: Compatible with external USB keyboard, mouse, barcode scanner, printer, ID card reader, etc.',
        'High Precision Measurement: Offers 24-bit sampling accuracy and 32kHz sampling frequency, delivering more accurate waveforms and reliable analysis results.',
      ],
    },
  },
};


const EcgDetail = () => {
  const allImages = [ecgMain, ecg1, ecg2, ecg3];
  const [mainImage, setMainImage] = useState(ecgMain);
  const [relatedImages, setRelatedImages] = useState(allImages.filter(img => img !== ecgMain));
  const [activeSection, setActiveSection] = useState('Feature'); // ✅ Add this back

const [isMobile, setIsMobile] = useState(false);

useLayoutEffect(() => {
  const checkWidth = () => setIsMobile(window.innerWidth <= 768);
  checkWidth(); // runs before paint
}, []);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  const handleImageClick = (clickedImage) => {
    setMainImage(clickedImage);
    setRelatedImages(allImages.filter((img) => img !== clickedImage));
    setActiveSection('Feature'); // reset to default section
  };


  return (
    <div style={{ padding: '0px' , fontFamily: 'sans-serif' }}>
      {/* ✅ Hero Section */}
<div
  style={{
    height: isMobile ? '30vh' : '90vh',
    width: '100%',
    position: 'relative',
    marginBottom: '40px',
    borderRadius: '10px',
    overflow: 'hidden',
  }}
>
        <img
  src={heroImage}
  alt="Hero"
  style={{
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    height: '100%',
    display: 'block',
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
          }}
        >
          {/* Portable Ultrasound Machines */}
        </div>
      </div>
      <div style={{ paddingLeft: '30px' }}>
        <h1>{imageDetails[mainImage]?.heading || 'ECG (Electrocardiograph)'}</h1>
      </div>

      <div style={{ display: 'flex', marginTop: '30px', gap: '30px', flexWrap: 'wrap' }}>
        {/* Left: Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={mainImage}
            alt="ECG Device"
            style={{ maxWidth: '400px', width: '100%', borderRadius: '10px' }}
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

      {/* Related Images Section */}
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

export default EcgDetail;
