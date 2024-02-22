import React from "react";
import {useLocation} from 'react-router-dom';

export default function PageButton  ()  {
    const location = useLocation();
    const currentRoute = location.pathname;
    const pagesData = [
        { id: 0, name: 'Home', link: '/' },
        { id: 1, name: 'Vision', link: '/vision' },
        { id: 2, name: 'Residences', link: '/residences' },
        { id: 3, name: 'Amenties', link: '/amenities' },
        { id: 4, name: 'Neighborhood', link: '/neighborhood' },
        { id: 5, name: 'Availability', link: '/availability' },
        { id: 6, name: 'Gallery', link: '/gallery' },
        { id: 7, name: 'Contact', link: '/contact' }
    ];
    
    let i = 0;
    if (currentRoute == '/' )
        return (
            <div>
                <a href="./contact">Contact</a>
                <a href="./vision"> Vision</a>
            </div>
        );
    else if(currentRoute == '/contact')
        return(<div>
            null
        </div>)
        ;
    else for (i = 0; i < 7 ;i++) {
        if(currentRoute == pagesData[i].link){
            return (
                <div>
                    <a href={'.'+  pagesData[i-1].link}>{pagesData[i-1].name}</a>
                    <a href={'.'+  pagesData[i+1].link}>{pagesData[i+1].name}</a>
                </div>
            );
        }
    }

}

