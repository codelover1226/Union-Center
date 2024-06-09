import React from "react";
import { motion } from 'framer-motion';
import CustomButton from "../../components/Button/CustomButton";
import Image1 from './../../assets/img/1.jpg'
import Image2 from './../../assets/img/2.jpg'
import Image3 from './../../assets/img/3.jpg'
import Image4 from './../../assets/img/4.jpg'
import HomeImage from './../../assets/img/home-1.jpg'
import HomeImage2 from './../../assets/img/home-2.jpg'
import HomeImage5 from './../../assets/img/home-5.jpg'
import lightLogo from './../../assets/img/logo1.png'
import darkLogo from './../../assets/img/logo2.png'
import SVG from './../../assets/img/Union_8.svg'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import InterestsIcon from '@mui/icons-material/Interests';
import FaxIcon from '@mui/icons-material/Fax';

export default function Home() {
    
  return (
      <div>
        <section className="h-screen relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover bg-black opacity-30" style={{ backgroundImage: `url(${HomeImage5})` }}></div>
          <div className="relative z-10 flex items-center justify-center">
            <motion.div initial={{ zIndex: 100, y: -50 }} animate={{ zIndex: 1, y: 0 }} transition={{ duration: 1 }}>
              asdfasdfasd
            </motion.div>
          </div>
        </section>
        <div className="w-full flex absolute top-0 right-0 left-0 h-screen items-center">
          <div className="mx-auto my-6">
            <img 
              alt=""
              src={darkLogo}
              className="xl:mt-[60px] w-full sm:w-[400px] mx-auto px-4"
            />  
            <div className="w-full flex my-6">
              <button className="p-4 my-16 text-center mx-auto border-white rounded-full border-[1px] hover:bg-white uppercase text-white hover:text-main-font animate-duration" > coming soon</button>
            </div>
          </div>
        </div>

        <div className="w-full md:flex-row-reverse md:flex bg-main-bg relative">
          <img alt=""  src={SVG} className="absolute z-0"/>
          <div className="w-full mx-auto bg-gradient-to-tr to-brown-bg flex relative">
            <div className="mx-auto p-6 lg:p-24 content-center">
              <p className="text-dark-font text-[14px] lg:text-[24px]">WHERE INNOVATION MEETS SUSTAINABILITY</p>
              <p className="text-dark-font text-[12px] lg:text-[20px] text-justify">Union Center is a cutting-edge, sustainable building offering 133,000 square feet of flexible space for office and medical use. With a sleek design featuring floor-to-ceiling windows, the building maximizes natural light and energy efficiency. It boasts an eco-friendly all-electric HVAC system, top-tier air purification, and automated three-level parking. The numerous landscaped terraces provide green spaces in the heart of a vibrant downtown hub, ensuring easy accessibility and high visibility. Union Center represents limitless possibilities, where modern comfort meets sustainability for businesses and medical practices.</p>
            </div>
          </div>
          <div className="w-full mx-auto relative z-10">
            <img 
              alt=""
              src={HomeImage2}
              className="lg:m-12 xl:mx-48 xl:w-[400px] z-0"
            />
          </div>
        </div> 


        {/* <div className="w-full">
            <div className="w-full flex py-10">
                <div className="w-full max-w-[1280px] mx-auto lg:flex">
                  <div className="w-full lg:w-[650px] px-6"> */}

        <div className="w-full">
          <div className="w-full bg-main-bg flex pt-10">
            <div className="w-full max-w-[1280px] mx-auto my-6 md:mx-auto">
              <p className="text-brown-bg px-5 my-6 text-lg">Approximately</p>

              <div className="w-full md:flex md:justify-between">
                <div className="w-full md:w-[260px] px-6 md:px-4 mb-2">
                  <p className="text-title-font-1 text-[40px] font-sans">133,000</p>
                  <p className="text-brown-bg text-[16px] font-GTPressura">Square Feet of Prime Class A Office & Medical Space for Sale</p>
                </div>
                <div className="w-[1px] h-24 rotate-[30deg] hidden md:block bg-black" content=""/>
                <div className="w-full md:w-[260px] px-6 md:px-4 mb-2">
                  <p className="text-title-font-1 text-[40px] font-sans">11</p>
                  <p className="text-brown-bg text-[16px] font-GTPressura">Floors of Beautiful Views</p>
                </div>
                <div className="w-[1px] h-24 rotate-[30deg] hidden md:block bg-black" content=""/>
                <div className="w-full md:w-[260px] px-6 md:px-4 mb-2">
                  <p className="text-title-font-1 text-[40px] font-sans">3</p>
                  <p className="text-brown-bg text-[16px] font-GTPressura">Levels of Automated Parking</p>
                </div>
              </div>
              <div className="w-full md:flex md:justify-between my-6">
                <div className="w-full md:w-[260px] px-6 md:px-4 mb-2">
                  <p className="text-title-font-1 text-[40px] font-sans">Air</p>
                  <p className="text-brown-bg text-[16px] font-GTPressura">All Electric HVAC System with Top-Tier Air Purification. </p>
                </div>
                <div className="w-[1px] h-24 rotate-[30deg] hidden md:block bg-black" content=""/>
                <div className="w-full md:w-[260px] px-6 md:px-4 mb-2">
                  <p className="text-title-font-1 text-[40px] font-sans">Sun</p>
                  <p className="text-brown-bg text-[16px] font-GTPressura">Floor to Ceiling Windows to Maximize Natural Sunlight.</p>
                </div>
                <div className="w-[1px] h-24 rotate-[30deg] hidden md:block bg-black" content=""/>
                <div className="w-full md:w-[260px] px-6 md:px-4 mb-2">
                  <p className="text-title-font-1 text-[40px] font-sans">Eco Friendly</p>
                  <p className="text-brown-bg text-[16px] font-GTPressura">Cutting Edge Sustainable Building with Landscaped Terraces. </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full flex py-10">
                <div className="w-full max-w-[1280px] mx-auto lg:flex">
                  <div className="w-full lg:w-[650px] px-6">
                    <p className="text-[50px] text-title-font-2 font-sans leading-[50px] mt-3">BEAUTIFUL FORM. IMPECCABLE FUNCTION.</p>
                  </div>
                  <div className="w-full">
                    <div className="w-full md:w-[640px] my-3 px-6">
                      <p className="text-title-font-2 text-lg uppercase font-sans">UNION CENTER’S HIGH CEILINGS, SOFT LIGHTING, SOOTHING MATERIALS, AND COLUMN-LESS INTERIOR UNIT DESIGN CREATE A SENSE OF OPENNESS, ACHIEVING A TIMELESS AESTHETIC IN A MODERN SPACE.</p>
                    </div>
                    <div className="w-full sm:flex md:my-10 ">
                      <div className="w-full px-6 md:px-auto my-6">
                        <p className="justify-end text-title-font-2 font-sans">The efficiently-arranged office condominium units at Union Center range from approx. 1,360 to 3,070 gross square feet (approx. 126 to 285 square meters), and feature flexible layouts that are easily combined to suit your needs—including selected units with a terrace.</p>
                      </div>
                      <div className="w-full px-6 md:px-auto my-6">
                        <p className="justify-end text-title-font-2 font-sans">Additional amenities, including convenient indoor access to valet parking and adjacent retail, make Union Center the most distinguished choice for office space in Flushing.</p>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="py-10 px-4 content-center md:py-24  z-10 relative" style={{ backgroundColor: "#B68064" }} >
          {/* <div className="absolute top-0 left-0 right-0 bottom-0 opacity-45z-0" style={{ backgroundImage : 'url("./img/banner.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>

          </div> */}
          <div className="relative z-10">
            <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">VISION</p>
            <p className="text-center font-GTPressura-Light text-6xl text-white px-4">Endless</p>
            <p className="text-center font-GTPressura-Light text-6xl text-white pb-7">Horizons</p>
            <div className="flex items-center">
              <div className="w-auto mx-auto xl:w-1/4">
                <p className="text-base font-GTPressura-Light text-center text-white px-4">A graceful masterpiece, a brilliant new lifestyle experience, a true embodiment of the incredible spirit of Flushing.</p>
              </div>        
            </div>
            <div className="content-center">
              <div className="m-auto my-4 flex">
              <button className="p-4 text-center mx-auto border-white rounded-full border-[1px] hover:bg-white uppercase text-white hover:text-main-font animate-duration" >Explore Our Vision</button>
              </div>
            </div>  
          </div>
        </div>

        <section className="h-[50vh] md:h-screen relative">
          <div className="absolute inset-0 bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover " style={{ backgroundImage: `url(${Image1})` }}></div>
            <div className="relative z-10 flex items-center justify-center">
            {/* <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            </motion.div> */}
          </div>
        </section>

        <div className="py-10 px-4 content-center md:py-24 z-10 relative" style={{ backgroundColor: "#153644" }} >
          <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">OFFICE SPACES</p>
          <p className="text-center font-GTPressura-Light text-6xl text-white px-4">Effortlessly Refined</p>
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/4">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">An office that matches your style, where every detail is carefully crafted, framing dramatic views with inspired design, sprawling layouts and outdoor spaces.</p>
            </div>  
          </div>
          <div className="content-center">
            <div className="m-auto my-4 flex">
              <button className="p-4 text-center mx-auto border-white rounded-full border-[1px] hover:bg-white uppercase text-white hover:text-main-font animate-duration" >Explore Our Spaces</button>
            </div>
          </div>  
        </div>

        <section className="h-[50vh] md:h-screen relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover" style={{ backgroundImage: `url(${Image2})` }}></div>
            <div className="relative z-10 flex items-center justify-center">
            {/* <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            </motion.div> */}
          </div>
        </section>
        
        <div className="py-10 px-4 content-center md:py-24 z-10 relative" style={{ backgroundColor: "rgb(182, 128, 100)" }} >
          <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">AMENITIES</p>
          <p className="text-center font-GTPressura-Light text-6xl text-white pb-7">Elevated Office Elegance</p>
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/4">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">Thoughtfully curated and always evolving, with every aspect created to exhilarate and inspire residents with endless possibilities.</p>
            </div>                    
          </div>
          <div className="content-center">
            <div className="m-auto my-4 flex">
              <button className="p-4 text-center mx-auto border-white rounded-full border-[1px] hover:bg-white uppercase text-white hover:text-main-font animate-duration" > Explore Our Amenities</button>
            </div>
          </div>  
        </div>
        
        <section className="h-[50vh] md:h-screen relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover" style={{ backgroundImage: `url(${Image3})` }}></div>
            <div className="relative z-10 flex items-center justify-center">
            {/* <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            </motion.div> */}
          </div>
        </section>
        
        <div className="py-10 px-4 content-center md:py-24 z-10 relative bg-main-bg">
        <p className="text-sm font-GTPressura-Bold text-center text-amber-950 pb-5">NEIGHBORHOOD</p>
          <p className="text-center font-GTPressura-Light text-6xl text-amber-950 pb-7">Deep Roots, New Beat</p>
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/4">
              <p className="text-base font-GTPressura-Light text-center text-amber-950 px-4">Discover a unique opportunity to have an office in an iconic Flushing landmark, with residences ranging from 500-1000 sqft offices.</p>
            </div>                  
          </div>
          <div className="content-center">
            <div className="m-auto my-4 flex">
              <button className="p-4 text-center mx-auto border-white rounded-full border-[1px] hover:bg-white uppercase text-main-font  hover:text-main-font animate-duration" >Explore Flushing</button>
            </div>
          </div>  
        </div>

        <section className="h-[50vh] md:h-screen relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover" style={{ backgroundImage: `url(${Image4})` }}></div>
            <div className="relative z-10 flex items-center justify-center">
            {/* <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            </motion.div> */}
          </div>
        </section>
        
        <div className="py-10 px-4 content-center md:py-24 z-10 relative" style={{ backgroundColor: "#75989C" }} >
          <p className="text-sm font-bold text-center text-white pb-5">CONTACT US</p>
          <p className="text-center font-normal text-6xl text-white px-4">Find Out</p>
          <p className="text-center font-normal text-6xl text-white pb-7">More</p>
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/4">
              <p className="text-base font-light text-center text-white px-4">A graceful masterpiece, a brilliant new lifestyle experience, a true embodiment of the incredible spirit of Flushing.</p>
            </div>                    
          </div>
          <div className="content-center flex">
            <div className="m-auto my-4 flex">
              <button className="p-4 text-center mx-auto border-white rounded-full border-[1px] hover:bg-white uppercase text-white hover:text-main-font animate-duration" >Contact Us For More Information</button>
            </div>
          </div>  
        </div>
      </div>
  )
}