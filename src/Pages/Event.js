import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Pages/style.css';
import eventBanner from '../Images/eventpage.jpg'; // Add this image
// import event1 from '../Images/event1.jpg'; // Add event images
// import event2 from '../Images/event2.jpg';
import Footer from '../Pages/Footer';

const Event = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div style={{ position: 'top', width: '100%', height: '300px', overflow: 'hidden' }}>
        <img
          src={eventBanner}
          alt="Event Banner"
          style={{
            width: '100%',
            height: '90vh',
            objectFit: 'cover',
         objectPosition: 'top', // 👈 ensures top part is shown
            opacity: 0.9,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '2.5rem',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          {/* Events & Highlights */}
        </div>
      </div>

      {/* Event Description */}
      <div style={{ padding: '400px 5%' }} data-aos="fade-up">
        <div
          style={{
            width: '60px',
            height: '6px',
            backgroundColor: 'red',
            borderRadius: '2px',
            marginBottom: '20px',
          }}
        />
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Upcoming & Past Events</h2>
        <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6' }}>
          Stay updated with our latest participation in medical expos, tech conferences, and healthcare summits. 
          We are proud to showcase innovation that transforms patient care and medical diagnostics across India and beyond.
        </p>
      </div>

      {/* Events Gallery */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', padding: '0 5% 60px' }}>
        <div data-aos="fade-right" style={{ flex: '1 1 400px', textAlign: 'center' }}>
          {/* <img
            src={event1}
            alt="Event 1"
            style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <h3 style={{ marginTop: '10px' }}>MedTech Expo 2024</h3>
          <p style={{ color: '#666' }}>New Delhi – February 2024</p>
        </div>
        <div data-aos="fade-left" style={{ flex: '1 1 400px', textAlign: 'center' }}>
          <img
            src={event2}
            alt="Event 2"
            style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          /> */}
          <h3 style={{ marginTop: '10px' }}>International Health Conference</h3>
          <p style={{ color: '#666' }}>Mumbai – October 2023</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Event;
