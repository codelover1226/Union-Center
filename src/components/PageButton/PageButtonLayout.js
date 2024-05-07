import React from "react";
import {useLocation} from 'react-router-dom';
import { Link } from "react-router-dom";

export default function PageButtonLayout  ()  {
  const location = useLocation();
  const currentRoute = location.pathname;
  const pagesData = [
      { id: 0, name: 'HOME', link: '/' },
      { id: 1, name: 'VISION', link: '/vision' },
      { id: 2, name: 'RESIDENCES', link: '/residences' },
      { id: 3, name: 'AMENTIES', link: '/amenities' },
      { id: 4, name: 'NEIGHBORHOOD', link: '/neighborhood' },
      { id: 5, name: 'AVAILABILITY', link: '/availability' },
      { id: 6, name: 'GALLERY', link: '/gallery' },
      { id: 7, name: 'CONTACT', link: '/contact' }
  ];
  
  let i = 0;
  if (currentRoute === '/' )
    return (
      <div>
        <div className="flex justify-between pb-2">
          <div className="page-button">
            <Link className="flex-grow" to="./contact"><p className="text-[#f2ede4] hover:text-[#b95a01] ml-[20px]">CONTACT</p></Link>
          </div>
          <div className="page-button-next">
            <Link className="flex-grow" to="./vision"><p className="text-[#f2ede4] hover:text-[#b95a01] mr-[20px]">VISION</p></Link>
          </div>
        </div>
      </div>
    );
  else if(currentRoute === '/contact')
    return(<div>
    
    </div>)
    ;
  else for (i = 0; i < 7 ;i++) {
    if(currentRoute === pagesData[i].link){
      return (
        <div className="flex justify-between pb-2">
          <div className="page-button">
            <Link className="flex-grow" to={'.'+  pagesData[i-1].link}>
              <p className="text-[#f2ede4] hover:text-[#b95a01] ml-[20px]">
                {pagesData[i-1].name}
              </p>
            </Link>
          </div>
          <div className="page-button-next">
            <Link className="flex-grow" to={'.'+  pagesData[i+1].link}>
              <p className="text-[#f2ede4] hover:text-[#b95a01] mr-[20px]">
                {pagesData[i+1].name}
              </p>
            </Link>
          </div>
        </div>
      );
    }
  }

}

