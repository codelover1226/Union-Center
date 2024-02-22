import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import "./vision.css"
import BackgroundIamge1 from './../../assets/img/visionBackground1.jpg'
import BackgroundIamge2 from './../../assets/img/visionBackground2.jpg'
import SubBackgroundIamge from './../../assets/img/subbackground.jpg'
import TextImage1 from './../../assets/img/text-image1.jpg'
import TextImage2 from './../../assets/img/text-image2.jpg'
import TextImage3 from './../../assets/img/text-image3.jpg'

export default function Vision() {
    return (
        <div>
            <div className="position relative">
                <Vimeo 
                    video="https://player.vimeo.com/video/789651572?background=1&player_id=full_video&loop=1&byline=0&title=0&autoplay=1"
                    autoplay={true}
                    loop
                    controls={false}
                    responsive={true}
                    style={{ width: '100%' }}
                />
            </div>

            <div className="px-4 content-center z-10 relative" style={{ backgroundColor: "#B68064" }} >
                <div className="md:min-h-[100vh] content-center p-10 md:py-96">
                    <div className="m-auto">
                        <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">VISION</p>
                    </div>
                    <div className="xl:w-[600px] m-auto">
                        <p className="text-center font-GTPressura-Light text-4xl text-white px-4">The Huron: Our Vision for Greenpoint’s Newest Condos</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-auto mx-auto xl:w-1/3">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">Rooted in the history of an ever-evolving neighborhood, The Huron is a striking tribute to Greenpoint’s heritage, interweaving past and present through stunning design and inspired creativity.</p>
                        </div>                    
                    </div>
                </div>
                <div className="px-4 relative">
                    <div className="m-auto">
                        <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">A BRIEF HISTORY</p>
                    </div>
                    <div className="xl:w-[600px] m-auto">
                        <p className="text-center font-GTPressura-Light text-4xl text-white px-4">A quintessential NYC Story</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <img src={ BackgroundIamge1}/>
            <div className="px-8 content-center py-10 z-10 relative" style={{ backgroundColor: "#B68064" }} >
                <div className="content-center p-12">
                    <div className="m-auto">
                        <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">DESIGN & ARCHITECTURE</p>
                    </div>
                    <div className="xl:w-[600px] m-auto">
                        <p className="text-center font-GTPressura-Light text-4xl text-white px-4">A Remarkable Tribute</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-auto mx-auto xl:w-1/3">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">Guided by a life-long passion and renowned reputation for re-interpreting historic districts through architecture, Morris Adjmi designed The Huron with his signature thoughtful engagement with history, distinct interpretation of industrial forms, and creative expression of materials.</p>
                        </div>               
                    </div>
                </div>
                <div className="content-center">
                    <img className="max-w-[1280px] w-full m-auto " src={ SubBackgroundIamge } />
                    <div className="max-w-[1280px] w-full m-auto mt-[90px] sm:flex  sm:flex-row-reverse">
                        <div className=" w-full right-0 sm:w-4/5">
                            <img  src={ TextImage1 }/>
                        </div>
                        <div className="w-full sm:w-1/5 left-0">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">Rooted in Greenpoint’s industrial heritage, The Huron is uniquely contemporary, functional, and inspirational. The H shaped two-tower configuration, with its long, linear connected lobby, is reminiscent of a ship with two smoke stacks.</p>
                        </div>
                    </div>
                </div>
                <div className="content-center p-12 xl:w-[1280px] m-auto">
                    <div className="m-auto mb-10">
                        <p className="text-center font-GTPressura-Light text-5xl text-white px-4">“We create buildings that stand out by fitting in.”</p>
                    </div>
                    <div className="flex items-center mt-10">
                        <div className="w-auto mx-auto xl:w-1/3">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">MORRIS ADJMI</p>
                        </div>               
                    </div>
                    
                    <div className="max-w-[1280px] w-full m-auto mt-[90px] sm:flex">
                        <div className=" w-full right-0 sm:w-3/5">
                            <img  src={ TextImage3 }/>
                        </div>
                        <div className="w-full sm:w-1/5 left-0">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">Rooted in Greenpoint’s industrial heritage, The Huron is uniquely contemporary, functional, and inspirational. The H shaped two-tower configuration, with its long, linear connected lobby, is reminiscent of a ship with two smoke stacks.</p>
                        </div>
                    </div>
                    <div className="max-w-[1280px] w-full m-auto mt-[90px]  sm:flex  sm:flex-row-reverse">
                        <div className=" w-full sm:w-3/5">
                            <img  src={ TextImage2 }/>
                        </div>
                        <div className="w-full sm:w-1/5 left-0">
                            <p className="text-base font-GTPressura-Light text-center text-white px-4">Rooted in Greenpoint’s industrial heritage, The Huron is uniquely contemporary, functional, and inspirational. The H shaped two-tower configuration, with its long, linear connected lobby, is reminiscent of a ship with two smoke stacks.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={ BackgroundIamge2}/>
            
        </div>
    )
}