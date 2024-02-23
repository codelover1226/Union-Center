import React from "react";
import BackgroundIamge1 from './../../assets/img/neighbood1.jpg'
import BackgroundIamge2 from './../../assets/img/neighbood2.jpg'
import BackgroundIamge3 from './../../assets/img/neighbood3.jpg'
import TextImage1 from './../../assets/img/nei_t1.jpg'
import TextImage2 from './../../assets/img/nei_t2.jpg'
import TextImage3 from './../../assets/img/nei_t3.jpg'
import TextImage4 from './../../assets/img/nei_t4.jpg'

export default function Neighborhood() {
    return (
        <div>
            <img src={ BackgroundIamge1} className="inset-0 bg-black opacity-100"/>
            <div className="px-4 content-center z-10 relative" style={{ backgroundColor: "#F1ECE2" }} >
                <div className="content-center py-20">
                    <div className="m-auto">
                        <p className="text-sm font-GTPressura-Bold text-center text-black pb-5">GREENPOINT</p>
                    </div>
                    <div className="xl:w-[600px] m-auto mb-4">
                        <p className="text-center font-GTPressura-Light text-5xl text-black px-4">TAn Authenically 
                        Brooklyn Condo</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-auto mx-auto xl:w-1/3">
                            <p className="text-base font-GTPressura-Light text-center text-2xl text-black px-4">An ever-evolving, vibrant enclave, Greenpoint’s authenticity is emphatically Brooklyn. Both gritty and refined, Greenpoint is home to artists, restaurants, shops, and culture that keep New York exciting.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 content-center z-10 relative" style={{ backgroundColor: "#F1ECE2" }} >
                <div className="content-center xl:w-[1280px] m-auto">
                    
                    <div className="max-w-[1280px] w-full m-auto sm:flex justify-center">
                        <div className="right-0 mr-3">
                            <img className="h-[599px] w-[536px]" src={ TextImage1 }/>
                        </div>
                        <div className="right-0 ml-3">
                            <img className="h-[599px] w-[536px]" src={ TextImage2 }/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 content-center py-2 z-10 relative" style={{ backgroundColor: "#F1ECE2" }} >
                <div className="content-center xl:w-[1100px] m-auto ">
                    <div className="max-w-[1280px] w-full m-auto mt-[10px]">
                        <div className="xl:w-[600px] m-auto mb-4 mt-20">
                            <p className="text-center font-GTPressura-Light text-5xl text-black px-4">AN EASY CHARM</p>
                        </div>
                        <div className="flex items-center mb-20">
                            <div className="w-auto mx-auto xl:w-2/3">
                                <p className="text-base font-GTPressura-Light text-center text-2xl text-black px-4">From lush nature to bountiful farmland, from bustling industrial and manufacturing district to one of the most desirable residential areas, a hub for tech companies and film production studios, the setting for many TV series, Greenpoint has incorporated and honored its diverse history, nourishing an eclectic, multicultural community soul. As dazzling new developments fuse gracefully with remnants of an honored past, every street, every corner speaks the language of memory. There is a distinctly intimate, easy-going, small-town vibe.</p>
                            </div>
                        </div>
                        <div className=" w-full right-0 sm:w-auto sm:mb-20">
                            <img  src={ TextImage3 }/>
                        </div>
                    </div>
                </div>
            </div>

            <img src={ BackgroundIamge2}/>

            <div className="px-4 content-center py-10 z-10 relative" style={{ backgroundColor: "#F1ECE2" }} >
                <div className="content-center xl:w-[1280px] m-auto ">
                    <div className="max-w-[1280px] w-full m-auto mt-[90px] sm:flex-row-reverse sm:flex justify-center">
                        <div className="w-full sm:w-2/6 left-0 sm:bottom-0 ml-7">
                            <p className="text-6xl ml-3 mb-5">PARKS</p>
                            <p className="text-base font-GTPressura-Light text-left text-black px-4">The Huron has unparalleled access to Brooklyn’s expanded and connected waterfront promenade than other Greenpoint condos, as well as several local favorites for sports and picnics, such as McCarren Park to the south. A gem for dog-lovers is McGolrick Park, while Transmitter Park is ideal for relaxing to gorgeous river views. </p>
                        </div>
                        <div className=" w-full right-0 sm:w-3/5">
                            <img  src={ TextImage4 }/>
                        </div>
                    </div>
                </div>
            </div>
            
            <img src={ BackgroundIamge3}/>

        </div>
        
    )
}