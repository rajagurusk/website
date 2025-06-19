import React, { useRef, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // 🔹 Import useNavigate

import '../Pages/style.css';

import ProductHeaderImage from '../Images/productpage.jpg'; // header
import ECGImage from '../Images/ecg1.jpg';
import UCGImage from '../Images/ucg1.png';
import MultiParaImage from '../Images/multiparamonitor.jpg';
import BPLMULTIPARAMONITOR from '../Images/BPL MULTIPARA MONITOR.png';
import Pathology from '../Images/pathology.png';
import Defibrillator from '../Images/defibrillator.jpg';
import SyringeInfusionPump from '../Images/syringeinjection.jpeg';
import VolumericInfusionPump from '../Images/volumeinjection.png';
// import WardBed from '../Images/ward bed.png';
import BabyWarmer from '../Images/baby warmer.png';
import SuctionMachine from '../Images/suctionmachine.png';
import PulseOximeter from '../Images/pulsetabletop.jpg';
import EcoUltrasound from '../Images/eco-ultrasound.png';
// import OTTable from '../Images/ottable.png';
import Cardiotocography from '../Images/ctg.jpg';
import AutoHematologyAnalyzer from '../Images/AHA.jpg';
import MrpDetail from '../Images/mrp6000.jpg';
import PortableUltrasoundMachine from '../Images/Portable Ultrasound Machine.jpg';
import OTT from '../Images/ott.jpg'

import FacebookIcon from '../Images/facebook.png';
import TwitterIcon from '../Images/twitter.png';
import LinkedInIcon from '../Images/linkedin.png';
import InstagramIcon from '../Images/instagram.png';



const products = [
                  {name:'Color Dopplers & Ultrasound ',img:PortableUltrasoundMachine,path:'/products/portableultrasoundmachine'},
  { name: 'ECG Machine', img: ECGImage, path: '/products/ecg' },
  // { name: 'UCG (Ultrasound Cardiography)', img: UCGImage,path:'/products/ucg' },
  { name: 'Multiparameter Monitor', img: MultiParaImage,path:'/products/multiparamonitor' },
  // { name: 'BPL Monitor', img: BPLMULTIPARAMONITOR ,path:'/products/bplmonitor'},
  // { name: 'Pathology', img: Pathology ,path:'/products/pathology'},
  // { name: 'Volumetric Infusion Pump', img: VolumericInfusionPump,path:'/products/volumericInfusionpump' },
  // // { name: 'Ward Bed', img: WardBed },
  // { name: 'Baby Warmer', img: BabyWarmer,path:'/products/babywarmer' },
  // { name: 'Suction Machine', img: SuctionMachine ,path:'/products/suctionmachine' },
  // { name: 'Echo Ultrasound', img: EcoUltrasound ,path:'/products/ecoultrasound'},
  // { name: 'OT Table', img: OTTable },
  {name:'Cardiotocography',img:Cardiotocography,path:'/products/cardiotocography'} ,
    {name:'Auto Hematology Analyzer',img:AutoHematologyAnalyzer,path:'/products/autohematologyanalyzer'},
      { name: 'Defibrillator', img: Defibrillator ,path:'/products/defibrillator'},
        { name: 'Pulse Oximeter', img: PulseOximeter,path:'/products/pulseoximeter' },
          { name: 'Infusion Pump', img: SyringeInfusionPump,path:'/products/syringeInfusionpump' },
                    { name: 'General OT Table', img: OTT,path:'/products/ott' },




        // {name:'Magnetic Resonance Pancreatography (MRP 6000) ',img:MrpDetail,path:'/products/mrp'},


];




const Product = () => {
  const contentRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate(); // 🔹 Initialize navigate

  

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '80vh',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',  overflow: 'hidden',

  };

  const imageStyle = {
      width: '100%',
      height: '100%',
  objectfit: 'cover',
      borderRadius: '8px',
          opacity: 0.9, // This makes image 40% visible (adjust as needed)
      position: 'absolute',
      bottom: '0', // Make the bottom aligned with the container's bottom
      left: '0',

    };

  const overlayStyle = {
    position: 'absolute',
    color: '#000',
    fontSize: '32px',
    fontWeight: 'bold',
    zIndex: 2,
    textAlign: 'center',
    width: '100%'
  };

  const buttonStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '12px 24px',
    backgroundColor: '#003366',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    zIndex: 3
  };

  const boxStyle = {
  maxWidth: '1400px',
  margin: '40px auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px'
};

  const nameStyle = {
    fontSize: '1.2rem',
    color: '#000',
    padding: '8px'
  };

  const imgHoverStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  };

  return (
    <>
<div className="header-container" style={containerStyle}>
        <img src={ProductHeaderImage} alt="Product Header" style={imageStyle} />
              <button style={buttonStyle} onClick={scrollToContent}>
          View More
        </button>
      </div>

      <div ref={contentRef} />
<div className="product-grid-container">

<div
  className="product-grid"
  style={{
    padding: '60px 50px 60px 50px', // top, right, bottom, left
    
  }}
>  {products.map((p, index) => (
    <Link to={p.path} key={index} style={{ textDecoration: 'none' }}>
      <div className="product-card">
        <div style={{ padding: '10px' }}>
          <img
            src={p.img}
            alt={p.name}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'contain'
            }}
          />
        </div>

        <div
          className="product-name-bar"
          style={{
            backgroundColor: '#001f4d',
            color: '#fff',
            padding: '10px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          <span>{p.name}</span>
        </div>
      </div>
    </Link>
  ))}
</div>

<style>
  {`
  @media (max-width: 768px) {
    .header-container {
      height: 30vh !important;
    }
  }
    .product-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* Default for desktop */
      gap: 16px;
      padding: 16px;
    }

    @media (max-width: 768px) {
      .product-grid {
        grid-template-columns: repeat(2, 1fr); /* Mobile view */
      }
    }

    .product-card {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      background-color: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .product-card:hover {
      transform: scale(1.05);
    }

    .product-name-bar {
      background-color: #001f4d;
      color: #fff;
      padding: 10px;
      text-align: center;
      font-weight: bold;
    }
  `}
</style>

      {/* Bottom Banner Section */}
      <div style={{
        backgroundColor: '#003366',
        padding: '40px 5%',
        color: '#fff',
        overflowX: 'auto'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '40px'
        }}>
          {[
            {
              title: 'Products',
              items: [
                'ECG (Electrocardiograph)',
                'Multipara Monitor',
              'Cardiotocography',
                  'Auto Hematology Analyzer',
                  // 'Magnetic Resonance Pancreatography',
                  'Portable Ultrasound Machine '
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
          ].map((section, index) => (
            <div key={index} style={{
              flex: '0 0 auto',
              minWidth: '160px',
              paddingLeft: '10px'
            }}>
              <div><strong>{section.title}</strong></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: '10px',
                      color: '#ffffff',
                      cursor:
                        item === 'Contact Us' ||
                          item === 'Join Us' ||
                           item === 'About' ||
                          item === 'Our Mission' ||
                          item === 'Vision' ||
                          item === 'Business' ||
                          item === 'Business'||
                          item === 'ECG (Electrocardiograph)' ||
                            item==='Multipara Monitor'||
                            item === 'Cardiotocography' ||
                            item === 'Auto Hematology Analyzer' ||
                            item === 'Magnetic Resonance Pancreatography' ||
                            item === 'Portable Ultrasound Machine '
                            // item === 'BPL Monitor' ||
                            // item === 'Pathology' ||
                            // item === 'Defibrillator' ||
                            // item === 'Syringe Infusion Pump' ||
                            // item === 'Volumetric Infusion Pump' ||
                            // item === 'Baby Warmer' ||
                            // item === 'Suction Machine' ||
                            // item === 'Pulse Oximeter' ||
                            // item === 'Echo Ultrasound'
                          ? 'pointer'
                          : 'default'
                    }}
                    onClick={() => {
                       const productMap = {
                        'ECG (Electrocardiograph)': '/products/ecg',
                          'Multipara Monitor':'/products/multiparamonitor',
                          'Portable Ultrasound Machine': '/products/portableultrasoundmachine',
                          'Cardiotocography':'/products/cardiotocography',
                          'Auto Hematology Analyzer':'/products/autohematologyanalyzer',
                          // 'Magnetic Resonance Pancreatography':'/products/mrp',
                          'PortableUltrasoundMachine':'/products/portableultrasoundmachine',
                          // 'ECG (Electrocardiograph)': '/products/ecg',
                          // 'BPL Monitor': '/products/bplmonitor',
                          // 'Pathology': '/products/pathology',
                          // 'Defibrillator': '/products/defibrillator',
                          // 'Syringe Infusion Pump': '/products/syringeInfusionpump',
                          // 'Volumetric Infusion Pump': '/products/volumericInfusionpump',
                          // 'Baby Warmer': '/products/babywarmer',
                          // 'Suction Machine': '/products/suctionmachine',
                          // 'Pulse Oximeter': '/products/pulseoximeter',
                          // 'Echo Ultrasound': '/products/ecoultrasound',
                        };
                        if (productMap[item]) {
                          navigate(`${productMap[item]}`);
                        }
                     else if (item === 'Contact Us' || item === 'Join Us') {
                        navigate('/contact');
                        window.scrollTo({ top: 600, behavior: 'smooth' });
                      } else if (
                        item === 'About' ||
                        item === 'Our Mission' ||
                        item === 'Vision' 
                      ) {
                        const sectionKey = item.toLowerCase().replace(/\s+/g, '');
                        navigate('/about', { state: { scrollTo: sectionKey } });
                        window.scrollTo({ top: 600, behavior: 'smooth' })
                      }
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
        padding: '30px 5%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}>
        {/* Left */}
        <div style={{ lineHeight: '1.8' }}>
          <p>📞 <strong>022 4516 6539</strong></p>
          <p>✉️ <strong>info@mindronmeditech.com</strong></p>
          <p>© 2025 MindronMediTech India Pvt. Ltd. All rights reserved.</p>
        </div>
        {/* Right */}
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontWeight: 'bold' }}>Follow us on</p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px', justifyContent: 'flex-end' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" style={{ width: '32px', height: '32px' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" style={{ width: '32px', height: '32px' }} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" style={{ width: '32px', height: '32px' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" style={{ width: '32px', height: '32px' }} />
            </a>
          </div>
        </div>
      </div>
</div>

    </>
  );
};

export default Product;
