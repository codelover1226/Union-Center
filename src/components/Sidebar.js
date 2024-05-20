import React, { forwardRef, useImperativeHandle } from "react";
import { Drawer } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "./menu.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YoutubeIcon from "@mui/icons-material/YouTube";

const Sidebar = forwardRef((props, ref) => {
  const closeDrawer = () => setIsDrawerOpen(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [outside, setOutside] = React.useState("outside");
  const openSideDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (outside === "outside") {
      setOutside("in");
    } else {
      closeDrawer();
      setOutside("outside");
    }
  };

  useImperativeHandle(ref, () => ({
    log() {
      openSideDrawer();
    },
  }));
  const pagesData = [
    { name: "HOME", link: "./" },
    { name: "VISION", link: "./vision" },
    { name: "AMENITIES", link: "./amenities" },
    { name: "NEIGHBORHOOD", link: "./neighborhood" },
    { name: "AVAILABILITY", link: "./availability" },
    { name: "GALLERY", link: "./gallery" },
    { name: "CONTACT", link: "./contact" },
  ];
  return (
    <div className="opacity-0.8">
      {/* <Drawer
        transition={{ duration: 1.0 }}
        size={360}
        open={isDrawerOpen}
        opacity={0.8}
      > */}
      <div className="opacity-80">
        <div className={outside}>
          <div>
            <ul className="menu">
              {pagesData.map((item, index) => (
                <li key={index}>
                  <span className="fa fa-dashboard"></span>
                  <Link to={item.link} onClick={closeDrawer}>
                    <p className="hover:text-brown-400">{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <div className="w-full flex">
            <div className="w-[250px] ml-6">
              <div className="mt-4 flex">
                <div
                  className="flex space-x-4"
                  style={{ alignItems: "center" }}
                >
                  <a href="https://www.instagram.com/barbie_li_ny_broker">
                    <p className="text-main-bg hover:text-brown-bg animate-duration">
                      <InstagramIcon />
                    </p>
                  </a>
                  <a href="https://www.instagram.com/barbie_li_ny_broker">
                    <p className="text-main-bg hover:text-brown-bg animate-duration">
                      <FacebookIcon />
                    </p>
                  </a>
                  <a href="https://www.instagram.com/barbie_li_ny_broker">
                    <p className="text-main-bg hover:text-brown-bg animate-duration">
                      <YoutubeIcon />
                    </p>
                  </a>
                  <a href="https://www.instagram.com/barbie_li_ny_broker">
                    <p className="text-main-bg hover:text-brown-bg animate-duration">
                      <TwitterIcon />
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </Drawer> */}
      </div>
    </div>
  );
});

export default Sidebar;
