import React, { useState, useRef } from 'react';
import './Carousel.css'
const Carousel = ({ items }) => {

  const[id, setId] = useState(0);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);
  // const sliderRef = useRef(null);

  // const handleMouseDown = (event) => {
  //   setIsDragging(true);
  //   setStartX(event.pageX - sliderRef.current.offsetLeft);
  //   setScrollLeft(sliderRef.current.scrollLeft);
  // };

  // const handleMouseMove = (event) => {
  //   if (!isDragging) return;
  //   const x = event.pageX - sliderRef.current.offsetLeft;
  //   const distance = x - startX;
  //   sliderRef.current.scrollLeft = scrollLeft - distance;
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  // };

    const next =  () => {
      setId(id+1);
    }

    const prev = () => {
      setId(id-1);
    }
    const prevClass = id === 0 ? ' text-[#DAC2B1] ml-[20px]' : ' text-dark-font hover:text-dark-bg ml-[20px]';
    const nextClass = id === items.length-1 ? ' text-[#DAC2B1] ml-[20px]' : ' text-dark-font hover:text-dark-bg ml-[20px]'; 

    return (
      <div className='py-12 max-w-[1280px] lg:flex lg:max-h-[600] lg:flex-row-reverse lg:flex-wrap lg:justify-between content-center m-auto'>
        <div className='lg:w-[50%] px-5'>
          <img src={items[id].image} alt=""/>
        </div>
        <div className='lg:w-[50%] px-5 md:pl-40'>
          <p className="md:text-right md:w-full text-dark-font">
            {items[id].text}
          </p>
          <div className='flex mt-3'>
            <div className='self-end'>
              <div className="flex justify-between pb-2">
                <div className="">
                  <button className="flex-grow px-2" onClick={id === 0 ? null : prev }><p className={prevClass}>{'< '+' PREV '}</p></button>
                </div>
                <p className="text-dark-font"> {"  |  "}</p>
                <div className="page-button-next px-2">
                  <button className="flex-grow" onClick={id === items.length-1 ? null : next}><p className={nextClass}>{' NEXT '+' >'}</p></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Carousel;