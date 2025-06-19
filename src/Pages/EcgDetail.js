import React, { useState } from 'react';
import ecgMain from '../Images/ecg1.jpg';
import ecg1 from '../Images/mrp6000.jpg';
import ecg2 from '../Images/ecg60.jpg';
import ecg3 from '../Images/ecg18.jpg';
import heroImage from '../Images/ecgproduct.jpg'; // ✅ Hero image
import Footer from '../Pages/Footer'; // Adjust the path based on your folder structure


// import fadeImage from '../Images/fade.jpg'; // Unused

const imageDetails = {
  [ecgMain]: {
    heading: '12 Channel ECG Machine',
    title: 'Model: MT ECG 120',
    // description: 'Our cutting-edge ECG system delivers accurate and real-time heart monitoring...',
    sections: {
      // Feature: [
      //   '12-lead diagnostic capability',
      //   'Wireless data syncing',
      //   'Compact touchscreen interface',
      //   'Rechargeable and portable',
      // ],
      // Feature: [
      //   'Sampling Rate: 32000Hz',
      //   'Pace Sample Rate: 32000Hz',
      //   'Frequency Response: 0.01 - 350Hz',
      //   'CMRR: > 130dB',
      //   'Patient Leakage Current: 410pA',
      //   'Input Circuit: < 50pA',
      //   'RTI Peak-to-Valley Value: 150',
      //   'Sensitivity Valve: 20pV',
      //   'DC Bias Voltage Range: ±960mV',
      //   'Calibration Voltage: 1mV',
      //   'A/D Shift: 24 bit',
      //   'Input Impedance: 60 MΩ (10 Hz)',
      //   'Sensitivity: 2.5, 5, 10, 20, 40, Auto mm/mV',
      //   'Paper Speed: 5, 6.25, 10, 12.5, 25, 50 mm/s',
      //   'Recording Mode: Thermal array printer - 8 dot/mm (Vertical), 40 dot/mm (Horizontal at 25mm/s)',
      //   'Paper Type: 2-Fold Paper',
      //   'Paper Size: 112mm × 100mm – 10m',
      //   'Filter Setting: AC: off/50/60Hz, EMG: off/25/35/45/75/100/150/250/350Hz, Baseline Drift: off/0.01/0.05/0.3/0.6Hz',
      //   'Heart Rate Range: 30-350 bpm',
      //   'WiFi Security Standards: WEP, WPA/WPA2 PSK, WPA2-Enterprise / IEEE 802.1x',
      //   'Acquisition Time for ECG: 10 sec',
      //   'Digital Sampling Recording for Pacemaker: 500 sec/channel'
      // ],
      // 'Physical Specification': [
      //   "Equipment Dimensions: 275mm x 203mm x 47.5mm",
      //   "Weight: Without battery: 1.4kg, With battery: 1.6kg",
      //   "Package Size: 400mm x 165mm x 360mm (4.2kg)",
      //   "Monitor Size: 10.4 inch (21.13cm x 15.85cm), Diagonal: 26.42cm",
      //   "Resolution: 1024 x 768 pixels, HD LED",
      //   "Power: AC 100-240V, 50Hz/60Hz, 75VA | DC: Rechargeable Battery",
      //   "Battery: 1900mAh | Backup: 4 hours",
      //   "Charging Time: 90% in ≤ 3h, 100% in ≤ 3.5h",
      //   "Data Storage: >1000 sets, supports SD card and USB",
      //   "Transport Temp: -20°C to +55°C, Humidity: 10–95%, Pressure: 500–1060 hPa",
      //   "Operating Temp: 5–40°C, Humidity: 25–85%, Pressure: 570–1060 hPa",
      // ],
      // 'System Input Output': [
      //   '	1.115132.0/ LAN/ SD Interface',
      // ],
      // 'Standard Package': [
      //   'ECG Machine (with battery)',
      //   'AC-DC adapter',
      //   'Patient Cable',
      //   'Chest Electrodes',
      //   'Limb Electrodes',
      //   'Thermal Printing Paper',
      //   'Power Cord',
      //   'User Manual',

      // ],
      // 'Optional Accessories': [
      //   '	Series Electrodes',
      //   'Thermal Printing Paper',
      //   'SD Memory Card',
      //   'Lithium Battery',
      //   'Workstation Software',
      //   'Trolley',
      //   'Laser Printer',
      //   'Scanner',
      //   'Card Reader',
      //   '	Suitcase',

      // ],
      // 'Advanced Function': [
      //   'External laser printer to output the A4 report',
      //   'Scanner, card reader and other patient information input devices',
      //   '	Wireless WiFi function',
      //   'DICOM function',
      //   'OTc formula: Hodge, Bazett, Fridericia, Framingham',
      //   'Measurement Matrix',
      //   'Average Template',
      //   'R-R histogram, R-R chart',
      //   'Bradycardia and Tachycardia range adjustable',
      //   'Lead System: Standard, Posterior wall, Right chest, Right chest posterior wall, Prey. intercostal space, Next intercostal space, CABRERA, Custom',
      //   'GLASGOW ECG Algorithm can make precise diagnosis according to patient age, gender, racial, taking medicine history, etc., especially for AMI, Ventricular Fibrillation, Ventricular Tachycardia, quarterly Bradycardia, malignant arrhythmia, etc',

      // ],
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
      // 'Packing': [
      //   "Single package size: 32'25'17cm",
      //   'Single gross weight: 2.8 KG',
      //   "8 unit per carton. package size: 54133'75cm, total gross weight 22 KG",

      // ],
      // 'Standard Configuration': [
      //   'Main machine:	1 PC',
      //   'Patient cable:	1 PC',
      //   'Limb electrode	iset (4pcs)',
      //   'Chest electrode:	lset( 6pcs)',
      //   'Power cable:	1 PC',
      //   '8Ornrri2OM recording paper: 1 PC',
      //   'Paper axis:	1 PC',
      //   'Power cord:	1 PC',

      // ],
      // 'Technique Specification': [
      //   'Standard 12 leads',
      //   'Simultaneous 12 leads acquisition t5mVpp',
      //   'Floating; Protection circuit against Defibrillator effect z5OMD <0.05pA',
      //   'Automatic: 3CHx4+1R, 3CHx4, 3CHx2+2CHx3.3CHx2+2CHx3+1R.6CHX2:',
      //   'Manual:	3CH, 2CH. 3CH+1R, 2CH+1R;',
      //   'Rhythm:	Any lead selectable.',
      //   'EMG Filter. 25 Hz / 30 Hz / 40Hz/75 Hz J 100 Hz! 150Hz DFT Fitter: 0.05 Hz/ 0.15 Hz',
      //   'AC Filter: 50 Hz / 60Hz >100dB< 10mA (220V-240V)  0.05Hz-150Hz (-3dB) 2.5mmtmV. 5 mm/mV. 10 mm/mV, 20 mm/mV (erroct5%)',
      //   'Automatic 4.2S <15pVp-p 12.5 mints, 25 mm/s, 50 mm/s',
      //   'Thermal printing system',
      //   'Roll 8Ommx2OM',
      //   'IEC I/CF',
      //   'NormalA0000sps/channel',
      //   'AC: 100-240V. 50/60Hz. 30VA-100VA',
      //   'DC: 14.8V/2200mAh. built-in lithium battery',
      // ],

      // 'Items': [
      //   'Lead',
      //   'Acquisition Mode Measurement Range Input circuit',
      //   'Input Impedance Input circuit current Record mode',
      //   'Filter',
      //   'CMRR',
      //   'Patient leak current Frequency Response Sensitivity',
      //   'Anti-baseline Drift Time constant',
      //   'Noise level',
      //   'Paper speed',
      //   'Recording mode Paper specification Safety Standard',
      //   'Digital Pacemaker rate for spike detection Power Supply',
      // ]

    },
  },
  [ecg1]: {
    heading: '6 Channel ECG Machine',
    title: 'Model: MT ECG 60',
    // description: 'Our cutting-edge ECG system delivers accurate and real-time heart monitoring...',

    // Feature: [
    //   '12-lead diagnostic capability',
    //   'Wireless data syncing',
    //   'Compact touchscreen interface',
    //   'Rechargeable and portable',
    // ],
    sections: {
      // 'Packing': [
      //   "Single package size: 32'25'17cm",
      //   'Single gross weight: 2.8 KG',
      //   "8 unit per carton. package size: 54133'75cm, total gross weight 22 KG",

      // ],
      // 'Standard Configuration': [
      //   'Main machine:	1 PC',
      //   'Patient cable:	1 PC',
      //   'Limb electrode	iset (4pcs)',
      //   'Chest electrode:	lset( 6pcs)',
      //   'Power cable:	1 PC',
      //   '8Ornrri2OM recording paper: 1 PC',
      //   'Paper axis:	1 PC',
      //   'Power cord:	1 PC',

      // ],
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

      // 'Items': [
      //   'Lead',
      //   'Acquisition Mode Measurement Range Input circuit',
      //   'Input Impedance Input circuit current Record mode',
      //   'Filter',
      //   'CMRR',
      //   'Patient leak current Frequency Response Sensitivity',
      //   'Anti-baseline Drift Time constant',
      //   'Noise level',
      //   'Paper speed',
      //   'Recording mode Paper specification Safety Standard',
      //   'Digital Pacemaker rate for spike detection Power Supply',
      // ]
    },
  },
 [ecg3]: {
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
};


const EcgDetail = () => {
  const allImages = [ecgMain, ecg1, ecg2,ecg3];
  const [mainImage, setMainImage] = useState(ecgMain);
  const [relatedImages, setRelatedImages] = useState(allImages.filter(img => img !== ecgMain));
  const [activeSection, setActiveSection] = useState('Feature'); // ✅ Add this back


  const handleImageClick = (clickedImage) => {
    setMainImage(clickedImage);
    setRelatedImages(allImages.filter((img) => img !== clickedImage));
    setActiveSection('Feature'); // reset to default section
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
