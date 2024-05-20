import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-tailwind/react";
import { Drawer } from "@material-tailwind/react";
import "./menu.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YoutubeIcon from "@mui/icons-material/YouTube";

export default function Header() {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [bar, setBar] = React.useState("bar");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [outside, setOutside] = React.useState("outside");
  const openDrawer = () => {
    if (bar === "bar") {
      setBar("bar active");
    } else {
      setBar("bar");
    }
    openSideDrawer()
  };
  
  const closeDrawer = () => setIsDrawerOpen(false);
  
  const openSideDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (outside === "outside") {
      setOutside("in");
    } else {
      closeDrawer();
      setOutside("outside");
    }
  };

  const pagesData = [
    { name: "HOME", link: "./" },
    { name: "VISION", link: "./vision" },
    { name: "AMENITIES", link: "./amenities" },
    { name: "NEIGHBORHOOD", link: "./neighborhood" },
    { name: "AVAILABILITY", link: "./availability" },
    { name: "GALLERY", link: "./gallery" },
    { name: "CONTACT", link: "./contact" },
  ];
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled);
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [location]);
  return (
    <div>
      <div className="z-[9997] fixed w-full">
        <div
          className={`fixed w-full bg-[#153644] transition-opacity duration-300 ${
            isScrolled ? "bg-opacity-100" : "bg-opacity-0"
          }`}
        >
          <div className="flex h-[64px] items-center">
            <button
              onClick={openDrawer}
              className="button_close"
              style={{ marginLeft: 7 }}
            >
              <span className={bar}></span>
            </button>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ zIndex: 9999, marginLeft: 100, marginTop: 0 }}
              color={"white"}
              className="font-thin m-4 font-SctoGroteskA-Light hidden sm:block"
            >
              <Link to={"/"}>
                <div className="w-[60px] sm:w-full">
                  <p className="text-[11px] sm:text-[15px]">
                    SCHEDULE AN APPOINTMENT
                  </p>
                </div>
              </Link>
            </Typography>
            <div className="sm:flex justify-end items-center hidden">
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ flexGrow: 1 }}
                color={"white"}
                className="font-thin m-4 font-SctoGroteskA-Light"
              >
                <a href="tel:+646.889.9988">
                  <p className="text_phone_number hover-after">
                    1.646.889.9988{" "}
                  </p>
                </a>
              </Typography>
              <Button
                color="white"
                className="text-center rounded-none h-9 ml-7 mr-10 hover:bg-brown-300 animate-duration"
                onClick={() => navigate("/contact")}
              >
                CONTACT
              </Button>
            </div>
          </div>
          <div>
            <Drawer
              transition={{ duration: 0.75 }}
              size={360}
              open={isDrawerOpen}
              className="z-[9996] bg-[#153644] opacity-90"
            >
              <div className={outside}>
                <div>
                  <ul className="menu">
                    {pagesData.map((item, index) => (
                      <li key={index}>
                        <span className="fa fa-dashboard"></span>
                        <Link to={item.link} onClick={openDrawer}>
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
            </Drawer>
          </div>
          <div
            className={`w-full h-full z-[100] ${
              bar === "bar" ? "hidden" : "fixed"
            }`}
            onClick={() => {
              openDrawer();
            }}
          ></div>
        </div>
        
      </div>
    </div>
  );
}
