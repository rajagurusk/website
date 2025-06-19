// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Event from './Pages/Event'; // adjust path

// import ProductDetail from './Pages/ProductDetail';
import EcgDetail from './Pages/EcgDetail';
import UcgDetail from './Pages/UcgDetail';
import MultiparamonitorDetail from './Pages/MultiparamonitorDetail';
import BplmonitorDetail from './Pages/BplmonitorDetail';
import PathologyDetail from './Pages/PathologyDetail';
import DefibrillatorDetail from './Pages/DefibrillatorDetail';
import SyringeInfusionpumpDetail from './Pages/SyringeInfusionpumpDetail';
import VolumericInfusionpumpDetail from './Pages/VolumericInfusionpumpDetail';
import BabywarmerDetail from './Pages/BabywarmerDetail';
import SuctionmachineDetail from './Pages/SuctionmachineDetail';
import PulseoximeterDetail from './Pages/PulseoximeterDetail';
import EcoultrasoundDetail from './Pages/EcoultrasoundDetail';
import CardiotocographyDetail from './Pages/CardiotocographyDetail';
import AhaDetail from './Pages/AhaDetail';
import MrpDetail from './Pages/MrpDetail';
import PortableUltrasoundMachineDetail from './Pages/PortableUltrasoundMachineDetail';
import ScrollToTop from './Components/ScrollToTop'; // adjust path accordingly
import OTTdetail from './Pages/OTTdetail';



function App() {
  return (
    <Router>
      <Navbar />
            <ScrollToTop /> {/* 👈 Add this line here */}

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Event />} />
          {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
          <Route path="/products/ecg" element={<EcgDetail />} />
          <Route path="/products/ucg" element={<UcgDetail />} />
          <Route path="/products/multiparamonitor" element={<MultiparamonitorDetail />} />
          <Route path="/products/bplmonitor" element={<BplmonitorDetail />} />
          <Route path="/products/pathology" element={<PathologyDetail />} />
          <Route path="/products/defibrillator" element={<DefibrillatorDetail />} />
          <Route path="/products/syringeInfusionpump" element={<SyringeInfusionpumpDetail />} />
          <Route path="/products/volumericInfusionpump" element={<VolumericInfusionpumpDetail />} />
          <Route path="/products/babywarmer" element={<BabywarmerDetail />} />
          <Route path="/products/suctionmachine" element={<SuctionmachineDetail />} />
          <Route path="/products/pulseoximeter" element={<PulseoximeterDetail />} />
          <Route path="/products/ecoultrasound" element={<EcoultrasoundDetail />} />
          <Route path="/products/cardiotocography" element={<CardiotocographyDetail />} />
          <Route path="/products/autohematologyanalyzer" element={<AhaDetail />} />
          <Route path="/products/mrp" element={<MrpDetail />} />
          <Route path="/products/portableultrasoundmachine" element={<PortableUltrasoundMachineDetail />} />
          <Route path="/products/ott" element={<OTTdetail />} />






        </Routes>
      </div>
    </Router>
  );
}

export default App;
