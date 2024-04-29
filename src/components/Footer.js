import * as React from "react";
import {ReactComponent as InstagramSvg} from './../assets/svg/instagram.svg';
import {ReactComponent as HomeSvg} from './../assets/svg/home.svg';
import director from './../assets/img/director.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

import wechaticon from './../assets/img/wechat.svg'
import credit1 from './../assets/img/credits_logo1.png'
import credit2 from './../assets/img/credits_logo2.png'
import credit3 from './../assets/img/credits_logo3.png'
import wechatQR from './../assets/img/wechat.jpg'
import PageButtonLayout from "./PageButton/PageButtonLayout";
import "./Footer.css"

export default function Footer(props) {
const title = 
<>
  <div className="w-[250px] flex my-6">
    <img alt="" src={wechatQR} className="mx-auto w-[200px]"/>
  </div>
  <p className="text-main-bg text-center text-[14px]">WeChat ID: tangramnyc</p>
  <p className="text-brown-bg text-center text-[14px]">Follow us on WeChat</p>
</>
return (
  
  <div className="w-full">
    <div className="w-full flex bg-dark-bg ">
      <div className="footer_container relative" >
        <PageButtonLayout />
        <div className="pt-10 border-t-[1px] border-b-[1px] pb-4">
          <div className="w-full xl:flex justify-between">
            <div className="w-full sm:flex  md:w-[700px]">
              <img alt="" src={director} className="footer_avatar"/>
              <div className="py-8 w-full space-y-1 xl:border-r-[1px]">  
                <p className="light_text_lg font-bold"> Barbie Li</p>
                <p className="light_text_small"> Lic. R.E. Broker</p>
                <p className="light_text_small"> Team Leader of BLT</p>
                <p className="light_text_small"> Team Mentor of B2STARS</p>
                <div className="flex w-full space-x-4">
                  <p className="light_text_small uppercase">call us at:</p>
                  <a href="tel:+646.889.9988">
                    <p className="text_phone_number hover-after"> 
                      646.889.9988
                    </p>
                  </a>
                </div>
                <div className="flex w-full space-x-4" style={{ alignItems: 'center' }}>
                  <p className="light_text_small  uppercase">Email us at:</p>
                  <a href="mailto:info@barbieliteam.com">
                    <p className="text-main-bg font-GTPressura-Bold italic"> info@barbieliteam.com</p></a>
                </div>
                <div className="flex space-x-4" style={{ alignItems: 'center' }}>
                  <a href="https://www.instagram.com/barbielibroker"><p className="text-main-bg hover:text-brown-bg animate-duration"><InstagramIcon/></p></a>
                  <p className="text-main-bg">barbielibroker</p>
                </div>
                {/* <div className="flex space-x-4" style={{ alignItems: 'center' }}>
                  <Tooltip 
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                    title={title}
                    arrow
                    placement="top-start"
                  >
                    <img alt="" src={wechaticon} className="w-[24px]"/>
                  </Tooltip>
                  <p className="text-main-bg uppercase">add wechat account</p>
                </div> */}
              </div>
            </div>
            <div className="sm:flex sm:space-x-5 w-full lg:w-auto">
              <div className="w-full sm:w-auto py-5  lg:pl-6 md:py-10 flex-none">
                <p className="text-main-bg mb-6">More information </p>
                <div>
                  <input placeholder="Please sign up" className="footer_form_input" style={{ background: 'none' }}>
                  </input>
                </div>
                <button className="animate-duration footer_form_button">
                  sign up
                </button>
              </div>
              <div className="w-full md:w-[200px] py-5 md:py-10 md:mx-6">
                <p className="text-main-bg mb-6">More information </p>
                <button className="mt-0 footer_form_button w-full">
                  contact us <span className="md:float-right">{'>'}</span>
                </button>
              </div>
            </div>
            
            {/* <div className="w-full sm:w-[300px]">
              <div className="w-full relative">
                <div className="absolute right-0">
                  <InstagramSvg />
                </div>
              </div>
              <div className="w-full mt-6">
                <p className="text-main-font text-[14px] uppercase  md:text-right">add wechat account</p>
                <img 
                  alt=""
                  src={wechatQR}
                  className="w-[120px] mx-xauto md:float-right"
                />
              </div>
            </div> */}
          </div>
          
        </div>
      </div>  
    </div>
    
    <div className="w-full flex">
      <div className="max-w-[1280px] footer_container flex">
        <div className="w-[400px] p-6">
          <p className="text-main-font text-[14px]">Another innovative development by</p>
        </div>
        <div className="w-full lg:flex mx-auto">  
          <div className="flex w-[320px] lg:w-full mx-auto">
            <div className="w-full content-center mx-auto">
              <a href="https://www.fandtgroup.com/" className="text-center flex w-full">
                <img
                  alt=""
                  src={credit1}
                  className="mx-auto w-[60px]"
                />
              </a>
            </div>
            <div className="w-full content-center mx-auto">
              <a href="https://www.fandtgroup.com/" className="text-center flex w-full">
                <img
                  alt=""
                  src={credit2}
                  className="mx-auto w-[60px]"
                />
              </a>
            </div>
          </div>
          <div className="flex w-[320px] lg:w-full my-3 mx-auto">
            <div className="w-full content-center mx-auto">
              <a href="https://www.fandtgroup.com/" className="text-center flex w-full">
                <div className="mx-auto w-[120px]">
                  <p className="text-main-font uppercase text-[12px] text-center md:text-left">marketing agent</p>
                  <p className="text-main-font uppercase text-[14px] text-center md:text-left font-bold">行销代理</p>
                </div>
              </a>
            </div>
            <div className="w-full content-center mx-auto">
              <div className="w-full content-center mx-auto">
                <a href="https://www.fandtgroup.com/" className="text-center flex w-full">
                  <img
                    alt=""
                    src={credit3}
                    className="mx-auto w-[60px]"
                  />
                </a>
                <p className="text-main-font uppercase text-[12px] text-center font-bold">富顿地产</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[240px] flex justify-end p-6">
          <a href="/contact" className="mx-auto w-full">
            <p className="text-main-font text-[14px] text-center">contact</p>
          </a>
          <a href="/vision" className="mx-auto w-full text-center">
            <p className="text-main-font text-[14px]">vision</p>
          </a>
        </div>
      </div>
    </div>
    <div className="w-full flex my-1">
      <div className="footer_container flex">
        <p className="footer_dark_text">
          THE COMPLETE OFFERING TERMS ARE IN AN OFFERING PLAN AVAILABLE FROM THE SPONSOR. FILE NO. CD22-0064. ARTIST RENDERINGS. THE ARTIST REPRESENTATIONS AND INTERIOR DECORATIONS, FINISHES, APPLIANCES AND FURNISHINGS ARE PROVIDED FOR ILLUSTRATIVE PURPOSES ONLY. SPONSOR MAKES NO REPRESENTATIONS OR WARRANTIES EXCEPT AS SET FORTH IN THE OFFERING PLAN. SPONSOR RESERVES THE RIGHT TO SUBSTITUTE MATERIALS, APPLIANCES, EQUIPMENT, FIXTURES AND OTHER CONSTRUCTION AND DESIGN DETAILS SPECIFIED HEREIN WITH SIMILAR MATERIALS, APPLIANCES, EQUIPMENT AND/OR FIXTURES OF SUBSTANTIALLY EQUAL OR BETTER QUALITY. SPONSOR RESERVES THE RIGHT TO MAKE CHANGES IN ACCORDANCE WITH THE TERMS OF THE OFFERING PLAN. ALL DIMENSIONS ARE APPROXIMATE AND SUBJECT TO NORMAL CONSTRUCTION VARIANCES AND TOLERANCES. SQUARE FOOTAGE EXCEEDS THE USABLE FLOOR AREA. THE USE OF ANY DESIGNATIONS, LABELS OR NOMENCLATURE IS FOR MARKETING PURPOSES ONLY AND DOES NOT OBLIGATE SPONSOR TO DELIVER SUCH AREAS OR ROOMS DESIGNED OR FITTED OUT IN THE MANNER DEPICTED OR IMPLIED IN THIS ADVERTISING. ANY FURNITURE OR LANDSCAPING SHOWN ARE FOR CONCEPT ONLY AND ARE NOT COORDINATED WITH THE BUILDING SYSTEMS. IMAGES ARE ILLUSTRATIONS ONLY AND DO NOT REFLECT ACTUAL VIEWS. NO REPRESENTATION IS MADE REGARDING THE VIEWS FROM ANY WINDOWS IN THE BUILDING AND ALL VIEWS ARE SUBJECT TO CHANGE AT ANY TIME, FOR ANY REASON, AND/OR MAY BECOME OBSTRUCTED. SPONSOR: QBDK HURON LLC, 261 FIFTH AVENUE, STE. 1802, NEW YORK, NY 10016. EXCLUSIVE SALES AND MARKETING BY SERHANT. NEW DEVELOPMENT. EQUAL HOUSING OPPORTUNITY. <a href="/" className="text-[#b95a01] hover:text-dark-font">FAIR HOUSING NOTICE.</a> <a href="/" className="text-[#b95a01] hover:text-dark-font">RE LEGAL SOP</a> 
        </p>
      </div>
    </div>
  </div>
);
}