// src/Pages/CardiotocographyDetail.js
import React, { useState } from 'react';
import ottMain from '../Images/ott.jpg';
import heroImage from '../Images/ottpage.jpg'; // ✅ Hero image
import Footer from './Footer'; // Adjust the path based on your folder structure


const imageDetails = {
    [ottMain]: {
        heading: 'General OT Table ',
        title: 'Model:(MM OTX 500)',
        // description:
        //     'The CTG Pro 200 is a state-of-the-art fetal monitoring device that offers real-time insights into fetal heart rate and uterine contractions.',
        sections: {
            Feature: [
                'Electro Manual drives with noiseless, jerk less and smooth positioning',
                'Table positions i.e. Height adjustment. Trendelenburg, Reverse Trendelenburg, Lateral Tilt, Back Section/Chair Position, Flex-Reflex are controlled by dual operations i.e. Corded Handset & Manual Override with graphical incons',
                'Zero Position to make table neutral by simply pressing 0 positioning button',
                'Safety key to block motor system in critical operations. Table top is divided into S sections providing numerous articulation possibilities',
                'Radiolucent table top with C-ARM & X-RAY compatibility over the entire length of the table',
                'No cross bar on the table top making it very suitable for fluoroscopy',
                'Offset column provide unrestricted access of C-ARM',
                'Integrated weight compensation by manual adjustment of the head and leg sections',
                'Non-corrosive stainless steel 304G construction including table top frames, accessories rail, base cover and column telescopic covers',
            ],
            'Technical Constraints': [
                'Top Dimension: L1980 x W533 mm',
                'Height Adjustment with Pad: 750 mm - 1050 mm',
                'Trendelenburg / Reverse Trendelenburg: 30° / 25°',
                'Lateral Tilt Left / Right: 20° / 20°',
                'Kidney Elevator: 150 mm',
                'Back Rest (Upward / Downward): 80° / 25°',
                'Leg Rest (Upward / Downward): 15° / 90°',
                'Head Rest (Upward / Downward): 25° / 90°',
                'Power Supply: 24V DC',
                'Patient Weight Capacity: 200 Kgs (1440 lbs)',
            ],
            'Standard Features': [
                'An antibacterial conductive decompressed mattress protects against bedsores that may occur during a long operation, and facilitates cleaning after an operation',
                'Manual Override as secondary power source for operations in case of electrical operation failure.',
            ],
        },
    },
};

const OTTdetail = () => {
    const [activeSection, setActiveSection] = useState('Feature');

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

                <h1>{imageDetails[ottMain].heading} </h1>
            </div>
            {/* – {imageDetails[ctgMain].title */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                    marginTop: '30px',
                    gap: '30px',
                    flexWrap: 'wrap',
                    padding: '0 20px',
                }}
            >
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <img
                        src={ottMain}
                        alt="CTG Device"
                        style={{
                            maxWidth: '100%',
                            width: '100%',
                            borderRadius: '10px',
                            objectFit: 'contain',
                            display: 'block',
                            margin: '0 auto',
                        }}
                    />
                </div>

                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h2>{imageDetails[ottMain].title}</h2>
                    <p>{imageDetails[ottMain].description}</p>

                    {/* Section Tabs */}
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
                        {Object.keys(imageDetails[ottMain].sections).map((section) => (
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

                    <ul>
                        {imageDetails[ottMain].sections[activeSection]?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default OTTdetail;
