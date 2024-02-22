import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wrapper } from './components/Wrapper';
import Header from './components/Header';
import Home from './pages/home';
import Footer from './components/Footer';
import withSplashScreen from './components/SplashScreen/withSplashScreen';
import Amenities from './pages/amenities';
import Availability from './pages/availablity';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Neighborhood from './pages/neighborhood';
import Residences from './pages/residences';
import Vision from './pages/vision';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/amenities" exact element={<Amenities />} />
          <Route path="/availability" exact element={<Availability />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/neighborhood" exact element={<Neighborhood />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/residences" exact element={<Residences />} />
          <Route path="/vision" exact element={<Vision />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  )
}

export default withSplashScreen(App);  