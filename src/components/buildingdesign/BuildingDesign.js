import React, {useState} from "react";
import design1 from './../../assets/img/floor/1.jpg'
import design2 from './../../assets/img/floor/2.jpg'
import design3 from './../../assets/img/floor/3.jpg'
import design4 from './../../assets/img/floor/4.jpg'
import design5 from './../../assets/img/floor/5.jpg'
import design6 from './../../assets/img/floor/6.jpg'

const floor_data = [
  {id: 1,title: "1st Floor", src: design1, brief: "Brief1"},
  {id: 2,title: "2nd Floor", src: design2, brief: "Brief2"},
  {id: 3,title: "3rd Floor", src: design3, brief: "Brief3"},
  {id: 4,title: "4th Floor", src: design4, brief: "Brief4"},
  {id: 5,title: "5th Floor", src: design5, brief: "Brief5"},
  {id: 6,title: "6th Floor", src: design6, brief: "Brief6"}
]

export default function BuildingDesign () {

  const [focus, setFocus] = useState(1)
  const current = floor_data.find(item => item.id === focus)

  return(
    <>
      <div className="w-full md:flex max-w-[1400px] mx-auto">
        <div className="hidden md:block w-[100%] bg-cover ml-6" style={{ backgroundImage: 'url(./img/floor/tab.jpg)' }}>
        <div className={`cursor-pointer ml-[17.2%]  opacity-90 mr-[20%] animate-duration mb-0 mt-[16.7%] h-[5.53%] relative ${focus === 1 ? 'bg-brown-bg': 'bg-none'}`} onMouseEnter={() => setFocus(1)}>
          <p className={` position absolute -right-[50%] text-black text-[20px] xl:text-[30px] text-center ${focus === 1 ? 'block': 'hidden'}`}>{floor_data[0].title}</p>
        </div>
        <div className={`cursor-pointer ml-[17.2%]  opacity-90 mr-[15%] animate-duration mb-0 mt-0 h-[5.53%] relative ${focus === 2 ? 'bg-brown-bg': 'bg-none'}`} onMouseEnter={() => setFocus(2)}>
          <p className={`position absolute -right-[44%] text-black text-[20px] xl:text-[30px] text-center ${focus === 2 ? 'block': 'hidden'}`}>{floor_data[1].title}</p>
        </div>
        <div className={`cursor-pointer ml-[17.2%]  opacity-90 mr-[15%] animate-duration mb-0 mt-0 h-[5.53%] relative ${focus === 3 ? 'bg-brown-bg': 'bg-none'}`} onMouseEnter={() => setFocus(3)}>
          <p className={`position absolute -right-[44%] text-black text-[20px] xl:text-[30px] text-center ${focus === 3 ? 'block': 'hidden'}`}>{floor_data[2].title}</p>
        </div>
        <div className={`cursor-pointer ml-[17.2%]  opacity-90 mr-[11%] animate-duration mb-0 mt-0 h-[5.53%] relative ${focus === 4 ? 'bg-brown-bg': 'bg-none'}`} onMouseEnter={() => setFocus(4)}>
          <p className={`position absolute -right-[40%] text-black text-[20px] xl:text-[30px] text-center ${focus === 4 ? 'block': 'hidden'}`}>{floor_data[3].title}</p>
        </div>
        <div className={`cursor-pointer ml-[17.2%]  opacity-90 mr-[11%] animate-duration mb-0 mt-0 h-[32.8%] relative content-center ${focus === 5 ? 'bg-brown-bg': 'bg-none'}`} onMouseEnter={() => setFocus(5)}>
          <p className={`position absolute -right-[40%] text-black text-[20px] xl:text-[30px] text-center ${focus === 5 ? 'block': 'hidden'}`}>{floor_data[4].title}</p>
        </div>
        <div className={`cursor-pointer ml-[17.2%]  opacity-90 mr-[11%] animate-duration mb-0 mt-0 h-[5.53%] relative ${focus === 6 ? 'bg-brown-bg': 'bg-none'}`} onMouseEnter={() => setFocus(6)}>
          <p className={`position absolute -right-[40%] text-black text-[20px] xl:text-[30px] text-center ${focus === 6 ? 'block': 'hidden'}`}>{floor_data[5].title}</p>
        </div>
        </div>
        <div className="block md:hidden w-full mb-[20px]">
          <select 
            className="w-full bg-main-bg h-[60px] text-[28px] p-2 uppercase" 
            onChange={(e) => setFocus(parseInt(e.target.value))}
          >
            {
              floor_data.map((item, index) => (
                <option key={index} value={index + 1} className="h-[60px]">
                  <div>
                    {item.title}
                  </div>
                </option>
              ))
            }
          </select>
        </div>
        <div className="w-full md:w-[150%] px-0 md:px-[100px]">
          <img alt="" src={current.src} className="w-full"></img>
        </div>
      </div>
    </>
  )
}