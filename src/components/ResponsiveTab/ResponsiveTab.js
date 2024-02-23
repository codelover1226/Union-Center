import React, { useState } from 'react'
import CustomButton from '../Button/CustomButton';
const ResponsiveTab = ({data}) => {
    const [focus, setFocuse] = useState(0);
    const showContent = (id) => {
        let i;
        for ( i=0; i< data.length; i++){
            if (data[i].id == id){
                console.log(data[i])
                return (
                    <div className='md:flex max-h-[450px]'>
                        <div className='xl:w-4/5'>
                            <img src={data[i].image} className='max-h-96'/>
                        </div>
                        <div className='max-h-96'>
                            <div className='border-l border-white border-r-0 border-t-0 border-b-0 xl:w-1/4'>
                                <div>
                                    <p>
                                        {data[i].title}  
                                    </p>
                                    <p>
                                        {data[i].text}  
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
            }
        }
    }

    return (
        <div className='lg: flex max-w-[1080px] m-auto'>
            <div className='lg:hidden'>
                {data.map((button, index) => (
                    <button key={index}>
                        <CustomButton 
                            label={button.name}
                            width="250px"
                            backgroundColor="#F1ECE2"
                            fontColor="black"
                            outline
                            centre
                        />
                    </button>
                ))}
            </div>
            <div className='hidden lg:flex lg:block'>
                <ul>
                    {data.map((button, index) => (
                        <li key={index} className="mb-2">
                            <div key={index}>
                                <CustomButton 
                                    label={button.name}
                                    width="200px"
                                    backgroundColor="#2C2A2B"
                                    fontColor="#F1ECE2"
                                    outline
                                    centre
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