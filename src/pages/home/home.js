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

export default function Home() {
    
  return (
      <div>
        <section className="h-[50vh] md:h-screen relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover bg-black opacity-30" style={{ backgroundImage: `url(${HomeImage5})` }}></div>
            <div className="relative z-10 flex items-center justify-center">
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            </motion.div>
          </div>
        </section>
        <div className="w-full flex absolute top-0 right-0 left-0">
          <div className="mx-auto mt-16">
            <img 
              alt=""
              src={darkLogo}
              className="xl:mt-[60px] w-full sm:w-[400px] mb-6 mx-auto px-4"
            />  
            <div className="w-full flex md:mt-[400px]">
              <button className="p-4 text-center mx-auto my-[40px] xl:my-[120px] border-white rounded-full border-[1px] hover:bg-white uppercase text-white hover:text-main-font animate-duaration" > comming soon</button>
            </div>
          </div>
        </div>

        <div className="w-full md:flex-row-reverse md:flex bg-main-bg relative">
          <img alt=""  src={SVG} className="absolute z-0"/>
          <div className="w-full mx-auto bg-gradient-to-l from-brown-bg flex relative">
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

        <div className="py-10 px-4 content-center md:py-36  z-10 relative" style={{ backgroundColor: "#B68064" }} >
          <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">VISION</p>
          <p className="text-center font-GTPressura-Light text-6xl text-white px-4">Endless</p>
          <p className="text-center font-GTPressura-Light text-6xl text-white pb-7">Horizons</p>
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/4">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">A graceful masterpiece, a brilliant new lifestyle experience, a true embodiment of the incredible spirit of Greenpoint.</p>
            </div>        
          </div>
          <div className="content-center">
            <div className="m-auto my-4">
              <CustomButton
                label="EXPLORE OUR VISION"
                width="200px"
                backgroundColor="#B68064"
                fontColor="#F1ECE2"
                outline
                centre
              />
            </div>
          </div>  
        </div>

        <section className="h-[50vh] md:h-screen relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover " style={{ backgroundImage: `url(${Image1})` }}></div>
            <div className="relative z-10 flex items-center justify-center">
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            </motion.div>
          </div>
        </section>

        <div className="py-10 px-4 content-center md:py-36 z-10 relative" style={{ backgroundColor: "#153644" }} >
          <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">RESIDENCES</p>
          <p className="text-center font-GTPressura-Light text-6xl text-white px-4">Effortlessly Refined</p>
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/4">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">A home that matches your style, where every detail is carefully crafted, framing dramatic views with inspired design, sprawling layouts and outdoor spaces.</p>
            </div>  
          </div>
          <div className="content-center">
            <div className="m-auto my-4">
              <CustomButton 
                label="EXPLORE OUR RESIDENCES"
                width="250px"
                backgroundColor="#153644"
                fontColor="#F1ECE2"
                outline
                centre
              />
            </div>
          </div>  
        </div>

        <section className="h-[50vh] md:h-screen relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover" style={{ backgroundImage: `url(${Image2})` }}></div>
            <div className="relative z-10 flex items-center justify-center">
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              {/* Letters for section 1 */}
            </motion.div>
          </div>
        </section>
        
        <div className="py-10 px-4 content-center md:py-36 z-10 relative" style={{ backgroundColor: "#2C2A2B" }} >
          <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">AMENITIES</p>
          <p className="text-center font-GTPressura-Light text-6xl text-white pb-7">Elevated Waterfront Living</p>
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/4">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">Thoughtfully curated and always evolving, with every aspect created to exhilarate and inspire residents with endless possibilities.</p>
            </div>                    
          </div>
          <div className="content-center">
            <div className="m-auto my-4">
              <CustomButton 
                label="EXPLORE OUR AMENTIES"
                width="200px"
                backgroundColor="#2C2A2B"
                fontColor="#F1ECE2"
                outline
                centre
              />
            </div>
          </div>  
        </div>
        
        <section className="h-[50vh] md:h-screen relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover" style={{ backgroundImage: `url(${Image3})` }}></div>
            <div className="relative z-10 flex items-center justify-center">
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              {/* Letters for section 1 */}
            </motion.div>
          </div>
        </section>
        
        <div className="py-10 px-4 content-center md:py-36 z-10 relative bg-main-bg">
        <p className="text-sm font-GTPressura-Bold text-center text-amber-950 pb-5">NEIGHBORHOOD</p>
          <p className="text-center font-GTPressura-Light text-6xl text-amber-950 pb-7">Deep Roots, New Beat</p>
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/4">
              <p className="text-base font-GTPressura-Light text-center text-amber-950 px-4">Discover a unique opportunity to live in an iconic Greenpoint landmark, with residences ranging from studio to four bedrooms, and eight absolutely unique penthouses.</p>
            </div>                  
          </div>
          <div className="content-center">
            <div className="m-auto my-4">
              <CustomButton 
                label="EXPLORE OUR NEIGHBORHOOD"
                width="250px"
                backgroundColor="#F1ECE2"
                fontColor="black"
                outline
                centre
              />
            </div>
          </div>  
        </div>

        <section className="h-[50vh] md:h-screen relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover" style={{ backgroundImage: `url(${Image4})` }}></div>
            <div className="relative z-10 flex items-center justify-center">
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              {/* Letters for section 1 */}
            </motion.div>
          </div>
        </section>
        
        <div className="py-10 px-4 content-center md:py-36 z-10 relative" style={{ backgroundColor: "#75989C" }} >
          <p className="text-sm font-bold text-center text-white pb-5">VISION</p>
          <p className="text-center font-normal text-6xl text-white px-4">Endless</p>
          <p className="text-center font-normal text-6xl text-white pb-7">Horizons</p>
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/4">
              <p className="text-base font-light text-center text-white px-4">A graceful masterpiece, a brilliant new lifestyle experience, a true embodiment of the incredible spirit of Greenpoint.</p>
            </div>                    
          </div>
          <div className="content-center flex">
            <div className="m-auto my-4">
              <CustomButton
                label="CONTACT US FOR MORE INFORMATION"
                width="300px"
                backgroundColor="#75989C"
                fontColor="#F1ECE2"
                outline
              />
            </div>
          </div>  
        </div>
      </div>
  )
}