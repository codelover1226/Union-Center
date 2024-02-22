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
        { name: 'RESIDENCES', link: './residences' },
        { name: 'AMENITIES', link: './amenties' },
        { name: 'NEIGHBORHOOD', link: './neighborfood' },
        { name: 'AVAILABILITY', link: './availability' },
        { name: 'GALLERY', link: './gallery' },
        { name: 'CONTACT', link: './contact' }
    ];
  return ( 
        <Drawer transition={{ duration: 1.0 }} size={480} open={isDrawerOpen} className="z-[9996] bg-[#153644]">
            <div class={outside}>	
                <div>
                    <ul class="menu">
                        {pagesData.map((item, index) => (
                            <li key={index}>
                                <span class="fa fa-dashboard"></span><a href={item.link} className="hover:text-brown-400">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Drawer>
)});

Sidebar.displayName = "Sidebar";

export default Sidebar;
