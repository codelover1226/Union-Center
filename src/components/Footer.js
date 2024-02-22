import * as React from "react";
import {useLocation} from 'react-router-dom';

export default function Footer(props) {
    const location = useLocation();
    const currentRoute = location.pathname;
    const pagesData = [
        { name: 'Home', link: './' },
        { name: 'Vision', link: './vision' },
        { name: 'Residences', link: './residences' },
        { name: 'Amenties', link: './amenties' },
        { name: 'Neighborfood', link: './neighborfood' },
        { name: 'Availability', link: './availability' },
        { name: 'Gallery', link: './gallery' },
        { name: 'Contact', link: './contact' }
    ];
    console.log(props.history);
    return (
        
        <div>
            <div className="py-4 px-4 z-10 relative" style={{ backgroundColor: "#2C2A2B" }} >
                <p className="text-white">{ currentRoute }</p>
            </div>  
        </div>
    );
}