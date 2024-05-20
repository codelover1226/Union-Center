import React, {useState, useEffect, useRef} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wrapper } from "./components/Wrapper";
import Header from "./components/Header";
import Home from "./pages/home/home";
import Footer from "./components/Footer";
import Amenities from "./pages/amenities/amenities";
import Availability from "./pages/availablity/availablity";
import Contact from "./pages/contact/contact";
import Gallery from "./pages/gallery/gallery";
import Neighborhood from "./pages/neighborhood/neighborhood";
import Residences from "./pages/residences/residences";
import Vision from "./pages/vision/vision";
import ReactScrollToTop from "react-scroll-to-top";
import lightLogo from './assets/img/logo2.png'

function App() {
  const [loading, setLoading] = useState(true);
  const [slideOut, setSlideOut] = useState(false);
  const hasPageBeenRendered = useRef(false);
  useEffect(() => {
    if (!hasPageBeenRendered.current) {
      
      const timer = setTimeout(() => {
        setSlideOut(true);
        setTimeout(() => {
          setLoading(false);
        }, 1200)
      }, 1300);
    }
  }, []);
  return (
    <>
      <div className={`z-[100] h-screen flex items-center justify-center bg-main-bg text-white splash-screen transition-all ${slideOut? 'slide-out-top' : ''} ${!loading? 'hidden': ""}`}>
        <div className='items-center justify-center'>
          <img src={lightLogo} alt='' className={`w-full p-6 md:p-none sm:w-[400px] mx-auto transition-opacity ${slideOut? 'animate-fadeIn' : ''}`}></img>
        </div>
      </div> 
      <BrowserRouter>
        <Wrapper>
          <div className="w-full overflow-hidden absolute z-[0]">
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

            <ReactScrollToTop
              smooth
              className="scroll-to-top-button border-brown-bg bg-main-bg animate-duration hover:bg-brown-bg rounded-full border-[2px]"
              height="22"
            />
            <Footer />
          </div>
        </Wrapper>
      </BrowserRouter>
    </>
    
  );
}

export default App;