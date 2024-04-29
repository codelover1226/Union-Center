import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wrapper } from "./components/Wrapper";
import Header from "./components/Header";
import Home from "./pages/home/home";
import Footer from "./components/Footer";
import withSplashScreen from "./components/SplashScreen/withSplashScreen";
import Amenities from "./pages/amenities/amenities";
import Availability from "./pages/availablity/availablity";
import Contact from "./pages/contact/contact";
import Gallery from "./pages/gallery/gallery";
import Neighborhood from "./pages/neighborhood/neighborhood";
import Residences from "./pages/residences/residences";
import Vision from "./pages/vision/vision";
import Test from "./pages/test";
import ReactScrollToTop from "react-scroll-to-top";
import { BorderAllRounded } from "@mui/icons-material";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <div className="w-full overflow-hidden">
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
            <Route path="/test" exact element={<Test />} />
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
  );
}

export default withSplashScreen(App);