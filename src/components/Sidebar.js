import React, { forwardRef, useImperativeHandle } from "react";
import {
  IconButton,
  Typography,
  Drawer,
  Card,
  CardHeader,
  CardBody
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "./menu.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YoutubeIcon from '@mui/icons-material/YouTube';


const Sidebar = forwardRef((props, ref) => {
  const closeDrawer = () => setIsDrawerOpen(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [outside, setOutside] = React.useState("outside");
  const openDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (outside === 'outside') {
      setOutside("in");
    }else{
      closeDrawer();
      setOutside("outside");
    }
  }
  
  useImperativeHandle(ref, () => ({
    log() {
        openDrawer();
    }
  }));
  const pagesData = [
    { name: 'HOME', link: './' },
    { name: 'VISION', link: './vision' },
    // { name: 'RESIDENCES', link: './residences' },
    { name: 'AMENITIES', link: './amenities' },
    { name: 'NEIGHBORHOOD', link: './neighborhood' },
    { name: 'AVAILABILITY', link: './availability' },
    { name: 'GALLERY', link: './gallery' },
    { name: 'CONTACT', link: './contact' }
  ];
  return ( 
    <div>
      <Drawer transition={{ duration: 1.0 }} size={360} open={isDrawerOpen} className="z-[9996] bg-[#153644]">
        <div className={outside}>	
          <div>
            <ul className="menu">
              {pagesData.map((item, index) => (
                <li key={index}>
                  <span className="fa fa-dashboard"></span><a href={item.link} className="hover:text-brown-400">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <div className="w-full flex">
            <div className="w-[250px] ml-6">
              <div className="mt-4 flex">
                <div className="flex space-x-4" style={{ alignItems: 'center' }}>
                  <a href="https://www.instagram.com/barbie_li_ny_broker"><p className="text-main-bg hover:text-brown-bg animate-duration"><InstagramIcon/></p></a>
                  <a href="https://www.instagram.com/barbie_li_ny_broker"><p className="text-main-bg hover:text-brown-bg animate-duration"><FacebookIcon/></p></a>
                  <a href="https://www.instagram.com/barbie_li_ny_broker"><p className="text-main-bg hover:text-brown-bg animate-duration"><YoutubeIcon/></p></a>
                  <a href="https://www.instagram.com/barbie_li_ny_broker"><p className="text-main-bg hover:text-brown-bg animate-duration"><TwitterIcon/></p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
    
)});

Sidebar.displayName = "Sidebar";

export default Sidebar;
