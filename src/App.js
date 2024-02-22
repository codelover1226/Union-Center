import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wrapper } from './components/Wrapper';
import Header from './components/Header';
import Home from './pages/home';
import Footer from './components/Footer';
import withSplashScreen from './components/SplashScreen/withSplashScreen';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  )
}

export default withSplashScreen(App);  