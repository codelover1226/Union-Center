import React from "react";
import { motion } from 'framer-motion';
import CustomButton from "../../components/Button/CustomButton";
import Image1 from './../../assets/img/1.jpg'
import Image2 from './../../assets/img/2.jpg'
import Image3 from './../../assets/img/3.jpg'
import Image4 from './../../assets/img/4.jpg'

export default function Home() {
    
    return (
        <div>
            <div className="top-0 left-0  h-screen z-[-1] home_video ">
                <iframe
                    src="https://player.vimeo.com/video/651590904?background=1&loop=1&byline=0&title=0&autoplay=1"
                    className="min-h-full h-[100vw] min-h-screen min-w-[177.77vh] w-screen top-1/2 left-1/2 fixed  -translate-x-1/2 -translate-y-1/2"
                    allowFullScreen={true}
                    frameBorder="0" 
                    allow="autoplay; fullscreen"  
                    data-ready="true" 
                    title=" "
                />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 min-w-[450] z-10">
                        <p className="text-center font-SctoGroteskA-Light font-normal text-5xl text-white px-4">A GREENPOINT LANDMARK</p>
                        <p className="text-center font-GTPressura-Light font-normal text-lg text-white px-4">Two distinguished towers on Brooklyn’s iconic waterfront, designed by acclaimed architect Morris Adjmi. Strikingly refined residences, these condominiums in Brooklyn offer enduring views of the New York City skyline, over 30,000 square feet of amenities and an abundance of outdoor space. Even by unfairly high standards, The Huron is truly exceptional.</p>
                    </div>
            </div>
            

            <div className="py-10 px-4 content-center md:py-36  z-10 relative" style={{ backgroundColor: "#B68064" }} >
                <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">VISION</p>
                <p className="text-center font-GTPressura-Light text-6xl text-white px-4">Endless</p>
                <p className="text-center font-GTPressura-Light text-6xl text-white pb-7">Horizons</p>
                <div className="flex items-center">
                    <div className="w-auto mx-auto xl:w-1/4">
                        <p className="text-base font-GTPressura-Light text-center text-white px-4">A graceful masterpiece, a brilliant new lifestyle experience, a true embodiment of the incredible spirit of Greenpoint.</p>
                    </div>
                                      
                </div>
                <div className="contetn-center">
                    <div className="m-auto my-4">
                        <CustomButton 
                            label="EXPLORE OUR VISION"
                            width="200px"
                            backgroundColor="#B68064"
                            fontColor="#F1ECE2"
                            outline
                            centre
                        />
                    </div>
                </div>  
            </div>

            <section className="h-screen relative">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover " style={{ backgroundImage: `url(${Image1})` }}></div>
                    <div className="relative z-10 flex items-center justify-center">
                    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    </motion.div>
                </div>
            </section>


            <div className="py-10 px-4 content-center md:py-36 z-10 relative" style={{ backgroundColor: "#153644" }} >
                <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">RESIDENCES</p>
                <p className="text-center font-GTPressura-Light text-6xl text-white px-4">Effortlessly Refined</p>
                <div className="flex items-center">
                    <div className="w-auto mx-auto xl:w-1/4">
                        <p className="text-base font-GTPressura-Light text-center text-white px-4">A home that matches your style, where every detail is carefully crafted, framing dramatic views with inspired design, sprawling layouts and outdoor spaces.</p>
                    </div>                    
                </div>
                <div className="contetn-center">
                    <div className="m-auto my-4">
                        <CustomButton 
                            label="EXPLORE OUR RESIDENCES"
                            width="250px"
                            backgroundColor="#153644"
                            fontColor="#F1ECE2"
                            outline
                            centre
                        />
                    </div>
                </div>  
            </div>

            <section className="h-screen relative">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover" style={{ backgroundImage: `url(${Image2})` }}></div>
                    <div className="relative z-10 flex items-center justify-center">
                    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        {/* Letters for section 1 */}
                    </motion.div>
                </div>
            </section>
            
            
            <div className="py-10 px-4 content-center md:py-36 z-10 relative" style={{ backgroundColor: "#2C2A2B" }} >
                <p className="text-sm font-GTPressura-Bold text-center text-white pb-5">AMENITIES</p>
                <p className="text-center font-GTPressura-Light text-6xl text-white pb-7">Elevated Waterfront Living</p>
                <div className="flex items-center">
                    <div className="w-auto mx-auto xl:w-1/4">
                        <p className="text-base font-GTPressura-Light text-center text-white px-4">Thoughtfully curated and always evolving, with every aspect created to exhilarate and inspire residents with endless possibilities.</p>
                    </div>                    
                </div>
                <div className="contetn-center">
                    <div className="m-auto my-4">
                        <CustomButton 
                            label="EXPLORE OUR AMENTIES"
                            width="200px"
                            backgroundColor="#2C2A2B"
                            fontColor="#F1ECE2"
                            outline
                            centre
                        />
                    </div>
                </div>  
            </div>
            
            
            <section className="h-screen relative xl:h-screen xl:relative">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover" style={{ backgroundImage: `url(${Image3})` }}></div>
                    <div className="relative z-10 flex items-center justify-center">
                    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        {/* Letters for section 1 */}
                    </motion.div>
                </div>
            </section>
            
            <div className="py-10 px-4 content-center md:py-36 z-10 relative" style={{ backgroundColor: "#F1ECE2" }} >
            <p className="text-sm font-GTPressura-Bold text-center text-amber-950 pb-5">NEIGHBORHOOD</p>
                <p className="text-center font-GTPressura-Light text-6xl text-amber-950 pb-7">Deep Roots, New Beat</p>
                <div className="flex items-center">
                    <div className="w-auto mx-auto xl:w-1/4">
                        <p className="text-base font-GTPressura-Light text-center text-amber-950 px-4">Discover a unique opportunity to live in an iconic Greenpoint landmark, with residences ranging from studio to four bedrooms, and eight absolutely unique penthouses.</p>
                    </div>                    
                </div>
                <div className="contetn-center">
                    <div className="m-auto my-4">
                        <CustomButton 
                            label="EXPLORE OUR NEIGHBORHOOD"
                            width="250px"
                            backgroundColor="#F1ECE2"
                            fontColor="black"
                            outline
                            centre
                        />
                    </div>
                </div>  
            </div>


            <section className="h-screen relative">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-fixed xl:bg-cover md:bg-center md:object-cover" style={{ backgroundImage: `url(${Image4})` }}></div>
                    <div className="relative z-10 flex items-center justify-center">
                    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        {/* Letters for section 1 */}
                    </motion.div>
                </div>
            </section>
            
            <div className="py-10 px-4 content-center md:py-36 z-10 relative" style={{ backgroundColor: "#75989C" }} >
                <p className="text-sm font-bold text-center text-white pb-5">VISION</p>
                <p className="text-center font-normal text-6xl text-white px-4">Endless</p>
                <p className="text-center font-normal text-6xl text-white pb-7">Horizons</p>
                <div className="flex items-center">
                    <div className="w-auto mx-auto xl:w-1/4">
                        <p className="text-base font-light text-center text-white px-4">A graceful masterpiece, a brilliant new lifestyle experience, a true embodiment of the incredible spirit of Greenpoint.</p>
                    </div>                    
                </div>
                <div className="contetn-center flex">
                    <div className="m-auto my-4">
                        <CustomButton 
                            label="CONTACT US FOR MORE INFORMATION"
                            width="300px"
                            backgroundColor="#75989C"
                            fontColor="#F1ECE2"
                            outline
                        />
                    </div>
                </div>  
            </div>

            
        </div>
    )
}