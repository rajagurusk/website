import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Event from './Pages/Event';

import EcgDetail from './Pages/EcgDetail';
import MultiparamonitorDetail from './Pages/MultiparamonitorDetail';
import DefibrillatorDetail from './Pages/DefibrillatorDetail';
import SyringeInfusionpumpDetail from './Pages/SyringeInfusionpumpDetail';
import PulseoximeterDetail from './Pages/PulseoximeterDetail';
import CardiotocographyDetail from './Pages/CardiotocographyDetail';
import AhaDetail from './Pages/AhaDetail';
import PortableUltrasoundMachineDetail from './Pages/PortableUltrasoundMachineDetail';
import ScrollToTop from './Components/ScrollToTop';
import OTTdetail from './Pages/OTTdetail';



function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Event />} />
          <Route path="/products/ecg" element={<EcgDetail />} />
          <Route path="/products/multiparamonitor" element={<MultiparamonitorDetail />} />
          <Route path="/products/defibrillator" element={<DefibrillatorDetail />} />
          <Route path="/products/syringeInfusionpump" element={<SyringeInfusionpumpDetail />} />
          <Route path="/products/pulseoximeter" element={<PulseoximeterDetail />} />
          <Route path="/products/cardiotocography" element={<CardiotocographyDetail />} />
          <Route path="/products/autohematologyanalyzer" element={<AhaDetail />} />
          <Route path="/products/portableultrasoundmachine" element={<PortableUltrasoundMachineDetail />} />
          <Route path="/products/ott" element={<OTTdetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
