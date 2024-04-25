import React from "react";
import { motion } from 'framer-motion';
import CustomButton from "../../components/Button/CustomButton";
import Image1 from './../../assets/img/1.jpg'
import Image2 from './../../assets/img/2.jpg'
import Image3 from './../../assets/img/3.jpg'
import Image4 from './../../assets/img/4.jpg'
import HomeImage from './../../assets/img/home-1.jpg'
import HomeImage2 from './../../assets/img/home-2.jpg'
import Banner from './../../assets/img/banner.png'
import lightLogo from './../../assets/img/logo1.jpg'

export default function Home() {
    
  return (
      <div>
        <div className="w-full flex">
          <div className="w-full">
            <div className="sm:flex w-full">
              <div className="w-full sm:w-[100%] pt-16 px-6 bg-gradient-to-br from-brown-bg to-main-bg">
                <div className="w-full flex">
                  <div className="mt-12 mx-auto max-w-[500px]">
                    <img 
                      alt=""
                      src={Banner}
                      className="max-w-[260px] xl:mt-[60px] 2xl:w-[500px] mb-6"
                    />
                    <p className="text-white text-[16px] ">A WORLD-CLASS WORKPLACE</p>
                    <p className="text-white text-[45px] lg:text-[80px]" style={{ textShadow: '10px 10px 15px #000' }}>UNION CENTER</p>
                    <p className="text-white text-[16px] ">LOCATED IN A VIBRANT FLUSHING DOWNTOWN COMMERCIAL HUB</p>
                    <div className="w-full flex">
                      <button className="p-4 text-center mx-auto my-[40px] xl:my-[120px] border-white rounded-full border-[1px] hover:bg-white uppercase text-white hover:text-main-font" style={{ transition: 'background-color 0.3s ease' }}> comming soon</button>
                    </div>
                  </div>
                </div>
                  
                </div>
              <div className="w-full sm:w-[100%] relative">
                {/* <img
                  alt=""
                  src={lightLogo}
                  className="absolute right-4 top-24 z-0 w-[120px]"
                /> */}
                <img
                  alt=""
                  src={HomeImage}
                  className="w-full bg-main-bg 2xl:mt-[-150px] z-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:flex-row-reverse md:flex bg-main-bg">
          <div className="w-full mx-auto bg-gradient-to-l from-brown-bg to-main-bg flex">
            <div className="mx-auto p-6 lg:p-24 content-center">
              <p className="text-dark-font text-[14px] lg:text-[24px]">WHERE INNOVATION MEETS SUSTAINABILITY</p>
              <p className="text-dark-font text-[12px] lg:text-[20px] text-justify">Union Center is a cutting-edge, sustainable building offering 133,000 square feet of flexible space for office and medical use. With a sleek design featuring floor-to-ceiling windows, the building maximizes natural light and energy efficiency. It boasts an eco-friendly all-electric HVAC system, top-tier air purification, and automated three-level parking. The numerous landscaped terraces provide green spaces in the heart of a vibrant downtown hub, ensuring easy accessibility and high visibility. Union Center represents limitless possibilities, where modern comfort meets sustainability for businesses and medical practices.</p>
            </div>
          </div>
          <div className="w-full mx-auto">
            <img 
              alt=""
              src={HomeImage2}
              className="lg:m-12 xl:mx-48 lg:w-[400px]"
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
        
        <div className="py-10 px-4 content-center md:py-36 z-10 relative" style={{ backgroundColor: "#F1ECE2" }} >
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