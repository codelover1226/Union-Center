import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-tailwind/react";
import Sidebar from './Sidebar';
import "./menu.css"
export default function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const ref = React.createRef();
    const [bar, setBar] = React.useState("bar");
    const openDrawer = () => {
        if(bar == 'bar') {
            setBar("bar active")
        }else{
            setBar("bar")
        }
        ref.current.log();
    }
    const handleScroll = () => {
        const isScrolled = window.scrollY >  50; // Adjust the value to control when opacity changes
        setIsScrolled(isScrolled);
      };
    
    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
          document.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <div className="z-[9997] fixed w-screen">
                <div className={`fixed w-full bg-[#153644] transition-opacity duration-300 ${isScrolled ? 'bg-opacity-100' : 'bg-opacity-0'}`} >
                <div className="flex h-[64px] items-center">
                <button onClick={openDrawer} className="button_close" style={{ marginLeft: 7 }}><span className={bar}></span></button>    
                <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    style={{ zIndex: 9999, marginLeft: 100, marginTop: 0 }}
                    color={"white"}
                    className="font-thin m-4 font-SctoGroteskA-Light"
                >
                    <a href="#" className="no-underline hover:underline">
                        SCHEDULE AN APPOINTMENT
                    </a>
                </Typography>
                <div className="flex justify-end items-center">
                    <Typography
                        variant="subtitle2"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        color={"white"}
                        className="font-thin m-4 font-SctoGroteskA-Light"
                    >
                        <a href="#" className="no-underline hover:underline">
                            646.863.1846
                        </a>
                    </Typography>
                    <Button color="white" className="text-center rounded-none h-9 ml-7 mr-10 hover:bg-brown-300">CONTACT</Button>
                </div>
                </div>
                <Sidebar ref={ref}/>
                </div>
                
            </div>
        </div>
    );
}