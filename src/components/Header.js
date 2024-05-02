import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-tailwind/react";
import Sidebar from "./Sidebar";
import "./menu.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = React.useState(false);
  const ref = React.createRef();
  const [bar, setBar] = React.useState("bar");
  const openDrawer = () => {
    if (bar === "bar") {
      setBar("bar active");
    } else {
      setBar("bar");
    }
    ref.current.log();
  };
  
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled);
    };

    // openDrawer()
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
          <Sidebar ref={ref} />
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
