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
 
  return ( 
        <Drawer transition={{ duration: 1.0 }} size={480} open={isDrawerOpen} className="z-[9996] bg-[#153644]">
            <div class={outside}>	
                <div>
                    <ul class="menu">
                        <li><span class="fa fa-dashboard"></span><a href="#" className="hover:text-brown-400">HOME</a></li>
                        <li><span class="fa fa-shopping-basket"></span><a href="#" className="hover:text-brown-400"> VISION</a></li>
                        <li><span class="fa fa-shopping-cart"></span><a href="#" className="hover:text-brown-400"> RESIDENCES</a></li>
                        <li><span class="fa fa-info-circle"></span><a href="#" className="hover:text-brown-400"> AMENITIES</a></li>
                        <li><span class="fa fa-credit-card"></span><a href="#" className="hover:text-brown-400"> NEIGHBORHOOD</a></li>
                        <li><span class="fa fa-leaf"></span><a href="#" className="hover:text-brown-400"> AVAILABILITY</a></li>
                        <li><span class="fa fa-leaf"></span><a href="#" className="hover:text-brown-400"> GALLERY</a></li>
                        <li><span class="fa fa-leaf"></span><a href="#" className="hover:text-brown-400"> CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </Drawer>
)});

Sidebar.displayName = "Sidebar";

export default Sidebar;
