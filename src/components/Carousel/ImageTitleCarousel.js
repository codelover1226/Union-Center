import React, {useState} from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './ImageTitleCarousel.css'

export default function ImageTitleCarousel(props){
  const carouselData = props.carouselData
  const len = carouselData.length;
  const [after, setAfter] = useState(1)
  const [active, setActive] = useState(0)
  const [before, setBefore] = useState(len-1)
  const [beforeBefore, setBeforeBefore] = useState(len-2)
  const [afterAfter, setAfterAfter] = useState(2)
  const [direct, setDirect] = useState('right')

  const onclickBefore = () => {
    setBefore((before - 1 + len) % len);
    setAfter((after - 1 + len) % len);
    setActive((active - 1 + len) % len);
    setBeforeBefore((beforeBefore - 1 + len) % len);
    setAfterAfter((afterAfter - 1 + len) % len);
    setDirect('left')
  };
   
   const onclickAfter = () => {
    setBefore((before + 1) % len);
    setAfter((after + 1) % len);
    setActive((active + 1) % len);
    setBeforeBefore((beforeBefore + 1) % len);
    setAfterAfter((afterAfter + 1 ) % len);
    setDirect('right')
  };

  const onClickIndicator = (index) => {
    
    setBefore((index -1 + len) % len);
    setAfter((index +1 + len) % len);
    setActive((index) % len);
    setBeforeBefore((index -2 + len) % len);
    setAfterAfter((index + 2 + len) % len);

    if(index > active) {
      setDirect('right')
    } 
    else {
      setDirect('left')
    }
  }
   
  return(
    <>
      <div className='relative w-full py-24'>
        <div className='absolute top-0 right-0 p-4 space-x-3 h-24'>
          <button className='p-4 rounded-full border-[1px] border-dark-bg hover:bg-dark-bg animate-duration-fast' onClick={onclickBefore}><ArrowBackIosNewIcon color='#494243' fontSize='large'/></button>
          <button className='p-4 rounded-full border-[1px] border-dark-bg hover:bg-dark-bg animate-duration-fast' onClick={onclickAfter}><ArrowForwardIosIcon color='#494243' fontSize='large'/></button>
        </div>
        <div className=' flex z-10 h-[300px] md:h-[500px] xl:h-[600px]'>
          {carouselData.map((item, index) => (
            <div
              key={index}
              className={
                `bg-cover bg-center z-10 h-[300px] md:h-[500px] xl:h-[600px] w-[96%] sm:w-[64%] carousel-item 
                ${index === active ? 'active' : index === before ?  'before' : index === after ? 'after': index === beforeBefore? 'before-before' : index === afterAfter ? 'after-after' : ''}
                ${ direct === 'right' ? 'right-slide' : 'left-slide'}`}
              style={{ backgroundImage: `url(${item.url})` }}
            ></div>
          ))}
        </div>
        <div className='absolute md:w-[50%] lg:w-[75%] top-0 left-0 h-full hidden md:block z-0' />

        <div className='absolute bottom-0 right-0 left-0 w-full flex h-24 z-20'>
          <div className='mx-auto flex items-center'>
            {carouselData.map((item, index) => (
              <div className={`${index === active ? 'bg-brown-bg' : 'bg-white'} rounded-full p-[6px] mx-[4px] h-3 cursor-pointer animate-duration hover:bg-brown-bg`} key={index} onClick={() => onClickIndicator(index)}></div>
            ))}
          </div>
        </div>
      </div>      
    </>
  )
}