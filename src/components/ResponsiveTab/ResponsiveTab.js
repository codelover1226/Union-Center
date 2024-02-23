import React, { useState, useEffect } from 'react'
import CustomTabButton from '../Button/CustomTabButton';
import './ResponsiveTab.css'

const ResponsiveTab = ({data}) => {

    const [buttonWidth, setWidth] = useState(window.innerWidth /  4 -  10);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth /  4 -  10);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup function to remove the event listener when the component unmounts
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [focus, setFocus] = useState(0);
    const showContent = (id) => {
        const item = data.find(item => item.id === focus);
        if (item) {
            return (
                <div className='md:flex max-h-[450px] md:items-center'>
                    <div className='xl:w-4/5 xl:m-auto px-4'>
                        <img src={item.image} className={`max-h-[440px] image-transition ${focus === id ? 'fade-in' : 'fade-out'}`} />
                    </div>
                    <div className='xl:w-1/4'>
                        <div className='border-l border-white border-r-0 border-t-0 border-b-0  px-4'>
                            <div>
                                <p className='text-[#F1ECE2] py-1'>
                                    {item.title}   
                                </p>
                                <p className='text-[#F1ECE2] text-sm py-2'>
                                    {item.text}   
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return null; // Return null if no matching item is found
    }
    
    const handleButtonClick = (id) => {
        setFocus(id);
    };
    return (
        <div className='lg:flex max-w-[1080px] m-auto'>
            <div className='lg:hidden w-full flex'>
                {data.map((button, index) => (
                    <div key={index} className='w-100%'>
                        <CustomTabButton 
                            label={button.name}
                            width={buttonWidth}
                            backgroundColor="#2C2A2B"
                            fontColor="#F1ECE2"
                            outline
                            centre
                            onFocus={() => handleButtonClick(button.id)}
                            focus={button.id === focus ? true : false}
                        />
                    </div>
                ))}
            </div>
            <div className='hidden lg:flex lg:block lg:items-center'>
                <ul>
                    {data.map((button, index) => (
                        <li key={index} className="mb-2">
                            <div key={index}>
                                <CustomTabButton 
                                    label={button.name}
                                    width="150px"
                                    backgroundColor="#2C2A2B"
                                    fontColor="#F1ECE2"
                                    outline
                                    centre
                                    onFocus={() => handleButtonClick(button.id)}
                                    focus={button.id === focus ? true : false}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {showContent(focus)}
            </div>
        </div>
    );
}

export default ResponsiveTab;