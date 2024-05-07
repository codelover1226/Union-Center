import * as React from "react";
import PageButtonLayout from "./PageButton/PageButtonLayout";
import {ReactComponent as InstagramSvg} from './../assets/svg/instagram.svg';
import {ReactComponent as HomeSvg} from './../assets/svg/home.svg';
import {ReactComponent as HomeHuronSvg} from './../assets/svg/homehuron.svg'
import {ReactComponent as SerhantSvg} from './../assets/svg/serhant.svg'

import "./Footer.css"
export default function Footer(props) {
    
    return (
        
        <div>
            <div className="py-4 px-5 z-10 relative" style={{ backgroundColor: "#2C2A2B" }} >
                <PageButtonLayout />
                <div className="pt-10 border-t-[1px] border-b-[1px] pb-4">
                    <div className="flex justify-between w-full flex-wrap">
                        <div className="w-[260px] text-wrap overflow-hidden">
                            <HomeHuronSvg />
                            <div className="py-10">
                                <p className="text-[#f2ede4]"> SALES GALLERY:</p>
                                <p className="text-[#f2ede4] "> 29 Huron Street, Brooklyn, NY 11222 </p>
                                <a href="tel:+646.863.1846"><p className="text-[#f2ede4] flex flex-col hover-after after:bg-blue-gray-50 after:transition-all after:h-[1px]"> 646.863.1846</p></a>
                            </div>
                        </div>
                        <div>
                            <InstagramSvg />
                        </div>
                    </div>
                    <div className="flex justify-between w-full flex-wrap">
                        <div className="w-[860] text-wrap" >
                            <div>

                            </div>
                        </div>
                        <div className="">
                            <SerhantSvg className="h-4"/>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <p className="text-[#f2ede4] tracking-[1px] text-xs/[10px] leading-[1.357] font-GTPressura-Light">THE COMPLETE OFFERING TERMS ARE IN AN OFFERING PLAN AVAILABLE FROM THE SPONSOR. FILE NO. CD22-0064. ARTIST RENDERINGS. THE ARTIST REPRESENTATIONS AND INTERIOR DECORATIONS, FINISHES, APPLIANCES AND FURNISHINGS ARE PROVIDED FOR ILLUSTRATIVE PURPOSES ONLY. SPONSOR MAKES NO REPRESENTATIONS OR WARRANTIES EXCEPT AS SET FORTH IN THE OFFERING PLAN. SPONSOR RESERVES THE RIGHT TO SUBSTITUTE MATERIALS, APPLIANCES, EQUIPMENT, FIXTURES AND OTHER CONSTRUCTION AND DESIGN DETAILS SPECIFIED HEREIN WITH SIMILAR MATERIALS, APPLIANCES, EQUIPMENT AND/OR FIXTURES OF SUBSTANTIALLY EQUAL OR BETTER QUALITY. SPONSOR RESERVES THE RIGHT TO MAKE CHANGES IN ACCORDANCE WITH THE TERMS OF THE OFFERING PLAN. ALL DIMENSIONS ARE APPROXIMATE AND SUBJECT TO NORMAL CONSTRUCTION VARIANCES AND TOLERANCES. SQUARE FOOTAGE EXCEEDS THE USABLE FLOOR AREA. THE USE OF ANY DESIGNATIONS, LABELS OR NOMENCLATURE IS FOR MARKETING PURPOSES ONLY AND DOES NOT OBLIGATE SPONSOR TO DELIVER SUCH AREAS OR ROOMS DESIGNED OR FITTED OUT IN THE MANNER DEPICTED OR IMPLIED IN THIS ADVERTISING. ANY FURNITURE OR LANDSCAPING SHOWN ARE FOR CONCEPT ONLY AND ARE NOT COORDINATED WITH THE BUILDING SYSTEMS. IMAGES ARE ILLUSTRATIONS ONLY AND DO NOT REFLECT ACTUAL VIEWS. NO REPRESENTATION IS MADE REGARDING THE VIEWS FROM ANY WINDOWS IN THE BUILDING AND ALL VIEWS ARE SUBJECT TO CHANGE AT ANY TIME, FOR ANY REASON, AND/OR MAY BECOME OBSTRUCTED. SPONSOR: QBDK HURON LLC, 261 FIFTH AVENUE, STE. 1802, NEW YORK, NY 10016. EXCLUSIVE SALES AND MARKETING BY SERHANT. NEW DEVELOPMENT. EQUAL HOUSING OPPORTUNITY. <a href="/" className="text-[#b95a01] hover:text-[#f2ede4]">FAIR HOUSING NOTICE.</a> <a href="/" className="text-[#b95a01] hover:text-[#f2ede4]">RE LEGAL SOP</a> </p>
                </div>
            </div>  
        </div>
    );
}