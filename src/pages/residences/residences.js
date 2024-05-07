import React from "react";
import BackgroundIamge1 from './../../assets/img/residenccesBackground1.jpg'
import BackgroundIamge2 from './../../assets/img/residenccesBackground2.jpg'
import BackgroundIamge3 from './../../assets/img/residenccesBackground3.jpg'
import BackgroundIamge4 from './../../assets/img/residenccesBackground4.jpg'
import BackgroundIamge5 from './../../assets/img/residenccesBackground5.jpg'
import BackgroundIamge6 from './../../assets/img/residenccesBackground6.jpg'
import SubBackgroundIamge from './../../assets/img/subbackground.jpg'
import TextImage1 from './../../assets/img/text-image1.jpg'
import TextImage2 from './../../assets/img/text-image2.jpg'
import TextImage3 from './../../assets/img/text-image3.jpg'

export default function Residences() {
  return (
    <div>
      <img src={ BackgroundIamge1} className="inset-0 bg-black opacity-50" alt=""/>
      <div className="px-4 content-center z-10 relative" style={{ backgroundColor: "#153644" }} >
        <div className="content-center py-10">
          <div className="m-auto">
            <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">VISION</p>
          </div>
          <div className="xl:w-[600px] m-auto">
            <p className="text-center font-GTPressura-Light text-4xl text-white px-4">The Huron: Our Vision for Greenpoint’s Newest Condos</p>
          </div>
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/3">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">Rooted in the history of an ever-evolving neighborhood, The Huron is a striking tribute to Greenpoint’s heritage, interweaving past and present through stunning design and inspired creativity.</p>
            </div>
          </div>
        </div>
      </div>
        
      <img src={ BackgroundIamge2} alt="" className="w-full"/>
      
      <div className="px-4 content-center py-10 z-10 relative" style={{ backgroundColor: "#153644" }} >
        <div className="content-center py-12">
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/3">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">As an homage to Huron Street’s history of splendid gardens, the modern, luxury condo’s interiors fuse greenery with timeless materials. The street’s verdant past comes to life as a unique feature of The Huron, with more than 23,000 square feet of private outdoor space spread across more than a third of the residences.</p>
            </div>               
          </div>
        </div>
        <div className="content-center py-12 xl:w-[1280px] m-auto">
          <div className="m-auto mb-10 xl:w-[900px]">
            <p className="text-center font-GTPressura-Light text-4xl text-white px-4">“The interiors are inspired by Greenpoint’s golden age of industrialism and rich history of manufacturing and craftsmanship.”</p>
          </div>
          <div className="flex items-center mt-10">
            <div className="w-auto mx-auto xl:w-1/3">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">MORRIS ADJMI</p>
            </div>
          </div>
          
          <div className="max-w-[1280px] w-full m-auto mt-[90px] sm:flex">
            <div className=" w-full right-0 sm:w-3/5">
              <img src={ TextImage3 } alt=""/>
            </div>
            <div className="w-full sm:w-1/5 left-0 sm:bottom-0">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">Rooted in Greenpoint’s industrial heritage, The Huron is uniquely contemporary, functional, and inspirational. The H shaped two-tower configuration, with its long, linear connected lobby, is reminiscent of a ship with two smoke stacks.</p>
            </div>
          </div>
        </div>
      </div>

      <img src={ BackgroundIamge3} alt=""/>

      <div className="px-4 content-center py-10 z-10 relative" style={{ backgroundColor: "#153644" }} >
        <div className="content-center xl:w-[1280px] m-auto ">
          <div className="max-w-[1280px] w-full m-auto mt-[90px] sm:flex-row-reverse sm:flex">
            <div className=" w-full right-0 sm:w-3/5">
              <img  src={ TextImage3 } alt=""/>
            </div>
            <div className="w-full sm:w-1/5 left-0 sm:bottom-0">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">Rooted in Greenpoint’s industrial heritage, The Huron is uniquely contemporary, functional, and inspirational. The H shaped two-tower configuration, with its long, linear connected lobby, is reminiscent of a ship with two smoke stacks.</p>
            </div>
          </div>
        </div>
        <div className="sm: pb-10">
          <div className="m-auto mb-10 xl:w-[900px]">
            <p className="text-center font-GTPressura-Light text-4xl text-white px-4">“The inset marble waterfall at the islands marries two of nature’s beauties – marble and wood – through craft.”</p>
          </div>
          <div className="flex items-center mt-10">
            <div className="w-auto mx-auto xl:w-1/3">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">LORENZO BELLO, QUADRUM GLOBAL</p>
            </div>               
          </div>
        </div>
      </div>
        
      <img src={ BackgroundIamge4} alt=""/>

      <div className="px-4 content-center py-2 z-10 relative" style={{ backgroundColor: "#153644" }} >
        <div className="content-center xl:w-[900px] m-auto ">
          <div className="max-w-[1280px] w-full m-auto mt-[10px]">
            <div className="w-full md:w-1/3 left-0 sm:bottom-0">
              <p className="text-base font-GTPressura-Bold text-left text-md text-white py-3 ">BEDROOM</p>
              <p className="text-base font-GTPressura-Light text-left text-white py-3 ">Rooted in Greenpoint’s industrial heritage, The Huron is uniquely contemporary, functional, and inspirational. The H shaped two-tower configuration, with its long, linear connected lobby, is reminiscent of a ship with two smoke stacks.</p>
            </div>
            <div className=" w-full right-0 sm:w-auto sm:mb-20">
              <img  src={ TextImage3 } alt=""/>
            </div>
          </div>
        </div>
      </div>

      <img src={ BackgroundIamge5} alt=""/>

      <div className="px-4 content-center z-10 relative" style={{ backgroundColor: "#153644" }} >
        <div className="content-center py-10">
          <div className="m-auto">
            <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">VISION</p>
          </div>
          <div className="xl:w-[600px] m-auto">
            <p className="text-center font-GTPressura-Light text-4xl text-white px-4">The Huron: Our Vision for Greenpoint’s Newest Condos</p>
          </div>
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/3">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">Rooted in the history of an ever-evolving neighborhood, The Huron is a striking tribute to Greenpoint’s heritage, interweaving past and present through stunning design and inspired creativity.</p>
            </div>                    
          </div>
        </div>
      </div>

      <img src={ BackgroundIamge6} alt=""/>

      <div className="px-4 content-center z-10 relative sm:py-32" style={{ backgroundColor: "#153644" }} >
        <div className="content-center py-10">
          <div className="xl:w-[970px] m-auto">
            <p className="text-center font-GTPressura-Light text-5xl text-white px-4">“The large windows perfectly frame endless views of New York City.”</p>
          </div>
          <div className="flex items-center pt-8">
            <div className="w-auto mx-auto xl:w-1/3">
              <p className="text-base font-GTPressura-Light text-center text-white px-4">JARED WHITE, QUADRUM GLOBAL</p>
            </div>                    
          </div>
        </div>
      </div>
    </div>
  )
}