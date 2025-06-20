import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '../Images/facebook.png';
import TwitterIcon from '../Images/twitter.png';
import LinkedInIcon from '../Images/linkedin.png';
import InstagramIcon from '../Images/instagram.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    const productMap = {
      'ECG (Electrocardiograph)': '/products/ecg',
      'Multipara Monitor': '/products/multiparamonitor',
      'Portable Ultrasound Machine': '/products/portableultrasoundmachine',
      'Cardiotocography': '/products/cardiotocography',
      'Auto Hematology Analyzer': '/products/autohematologyanalyzer',
      'Magnetic Resonance Pancreatography': '/products/mrp',
    };

    if (productMap[item]) {
      navigate(productMap[item]);
    } else if (item === 'Contact Us' || item === 'Join Us') {
      navigate('/contact');
      window.scrollTo({ top: 600, behavior: 'smooth' });
    } else if (
      item === 'About' ||
      item === 'Our Mission' ||
      item === 'Vision'
    ) {
      const sectionKey = item.toLowerCase().replace(/\s+/g, '');
      navigate('/about', { state: { scrollTo: sectionKey } });
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }
  };

  const sections = [
    {
      title: 'Products',
      items: [
        'ECG (Electrocardiograph)',
        'Multipara Monitor',
        'Cardiotocography',
        'Auto Hematology Analyzer',
        'Portable Ultrasound Machine'
      ]
    },

    {
      title: 'About Us',
      items: [
        'About', 'Our Mission', 'Vision'
      ]
    },
    {
      title: 'Contact Information',
      items: ['Contact Us', 'Join Us']
    }
  ];

  return (
    <>
      {/* Bottom Banner Section */}
      <div style={{
        backgroundColor: '#003366', padding: '20px 5% 40px 5%', color: '#fff', marginTop: '60px', overflowX: 'auto'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '40px'
        }}>
          {sections.map((section, index) => (
            <div key={index} style={{ flex: '0 0 auto', minWidth: '160px', paddingLeft: '20px' }}>
              <div><strong>{section.title}</strong></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => handleClick(item)}
                    style={{
                      marginBottom: '10px',
                      color: '#ffffff',
                      cursor: [
                        'Contact Us', 'Join Us', 'About',
                        'Our Mission',
                        'Vision', 'Business',
                        'ECG (Electrocardiograph)', 'Multipara Monitor', 'Cardiotocography',
                        'Auto Hematology Analyzer', 'Portable Ultrasound Machine'
                      ].includes(item) ? 'pointer' : 'default'
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Footer */}
      <div style={{
        backgroundColor: '#001933',
        color: '#fff',
        padding: '40px 10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize: '16px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ flex: '1', minWidth: '250px', lineHeight: '1.8' }}>
          <p style={{ margin: '5px 0' }}>📞 <strong>022 4516 6539</strong></p>
          <p style={{ margin: '5px 0' }}>✉️ <strong>info@mindronmeditech.com</strong></p>
          <p style={{ margin: '5px 0' }}>© 2025 MindronMediTech India Pvt. Ltd. All rights reserved.</p>
        </div>
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'right' }}>
          <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Follow us on</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginTop: '10px' }}>
            <a href="https://www.facebook.com/mindronmeditech" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" style={{ width: '32px', height: '32px' }} />
            </a>
            <a href="https://twitter.com/Mindrommtech" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" style={{ width: '32px', height: '32px' }} />
            </a>
            <a href="https://www.linkedin.com/in/mindron-meditech-53b2b9370/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" style={{ width: '36px', height: '36px' }} />
            </a>
            <a href="https://www.instagram.com/mindronmeditech/#" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" style={{ width: '32px', height: '32px' }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
