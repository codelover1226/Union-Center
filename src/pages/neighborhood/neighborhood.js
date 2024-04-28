import React, {useState, useEffect, useRef} from "react";
import BackgroundIamge2 from './../../assets/img/neighbood2.jpg'
import BackgroundIamge3 from './../../assets/img/neighbood3.jpg'
import TextImage3 from './../../assets/img/nei_t3.jpg'
import TextImage4 from './../../assets/img/nei_t4.jpg'
import ImageTitleCarousel from "../../components/Carousel/ImageTitleCarousel";

const carouselData = [
  {'url': './img/neighborhood/carousel-1.jpg'},
  {'url': './img/neighborhood/carousel-2.jpg'},
  {'url': './img/neighborhood/carousel-3.jpg'},
  {'url': './img/neighborhood/carousel-4.jpg'},
  {'url': './img/neighborhood/carousel-5.jpg'},
  {'url': './img/neighborhood/carousel-6.jpg'}
]

export default function Neighborhood() {
  
  const [isScrolledToSection, setIsScrolledToSection] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
 });

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          setIsScrolledToSection((prevState) => ({
            ...prevState,
            [id]: entry.isIntersecting,
          }));
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const sections = [section1Ref, section2Ref, section3Ref, section4Ref];
    sections.forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      sections.forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, []);
  
  console.log(isScrolledToSection)

  return (
    <div>
      <div className="w-full h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${'./img/neighborhood/1.jpg'})` }}></div>
      <div className="px-4 content-center z-10 relative bg-main-bg" >
        <div className="content-center py-20" >
          <div className="m-auto">
            <p className={`text-sm font-GTPressura-Bold text-center ${isScrolledToSection.section1? 'text-black' : 'text-main-bg'} animate-duration pb-5`}>GREENPOINT</p>
          </div>
          <div className="xl:w-[600px] m-auto mb-4">
            <p className={`text-center font-GTPressura-Light text-5xl ${isScrolledToSection.section1? 'text-black' : 'text-main-bg'} animate-duration px-4`}>TAn Authenically 
            Brooklyn Condo</p>
          </div>
          <div className="flex items-center">
            <div className="w-auto mx-auto xl:w-1/3">
              <p className={`text-base font-GTPressura-Light text-center ${isScrolledToSection.section1? 'text-black' : 'text-main-bg'} animate-duration px-4`}>An ever-evolving, vibrant enclave, Greenpoint’s authenticity is emphatically Brooklyn. Both gritty and refined, Greenpoint is home to artists, restaurants, shops, and culture that keep New York exciting.</p>
            </div>
          </div>
          <div  ref={section1Ref} id="section1"></div>
        </div>
      </div>

      <div className="px-4 content-center z-10 relative" style={{ backgroundColor: "#F1ECE2" }} id="section2" ref={section2Ref}>
        <div className="content-center xl:w-[1280px] m-auto">
          
        </div>
      </div>
      <div className="w-full bg-main-bg">
        <ImageTitleCarousel carouselData = {carouselData}/>
      </div>
      <div className="px-4 content-center py-2 z-10 relative" style={{ backgroundColor: "#F1ECE2" }} >
        <div className="content-center xl:w-[1100px] m-auto ">
          <div className="max-w-[1280px] w-full m-auto mt-[10px]">
            <div className="xl:w-[600px] m-auto mb-4 mt-20">
              <p className={`text-center font-GTPressura-Light text-5xl ${isScrolledToSection.section3? 'text-black' : 'text-main-bg'} animate-duration px-4`}>AN EASY CHARM</p>
            </div>
            <div className="flex items-center mb-20">
              <div className="w-auto mx-auto xl:w-2/3">
                <p className={`font-GTPressura-Light text-center text-base ${isScrolledToSection.section3? 'text-black' : 'text-main-bg'} animate-duration px-4`}>From lush nature to bountiful farmland, from bustling industrial and manufacturing district to one of the most desirable residential areas, a hub for tech companies and film production studios, the setting for many TV series, Greenpoint has incorporated and honored its diverse history, nourishing an eclectic, multicultural community soul. As dazzling new developments fuse gracefully with remnants of an honored past, every street, every corner speaks the language of memory. There is a distinctly intimate, easy-going, small-town vibe.</p>
              </div>
            </div>
            <div id="section3" ref={section3Ref}></div>
            <div className=" w-full right-0 sm:w-auto sm:mb-20 h-[600px] overflow-hidden">
              <img  src={ TextImage3 } alt="" className="w-full"/>
            </div>
          </div>
        </div>
      </div>

      <img src={ BackgroundIamge2} alt="" className="w-full h-[100vh]"/>

      <div className="px-4 content-center py-10 z-10 relative bg-main-bg" >
        <div className="content-center xl:w-[1280px] m-auto ">
          <div className="max-w-[1280px] w-full m-auto mt-[90px] sm:flex-row-reverse sm:flex justify-center">
            <div className="w-full sm:w-2/6 left-0 sm:bottom-0 ml-7">
              <p className={`text-6xl ml-3 mb-5 ${isScrolledToSection.section4? 'text-black' : 'text-main-bg'} animate-duration`}>PARKS</p>
              <p className={`text-base font-GTPressura-Light text-left  ${isScrolledToSection.section4? 'text-black' : 'text-main-bg'} animate-duration px-4`}>The Huron has unparalleled access to Brooklyn’s expanded and connected waterfront promenade than other Greenpoint condos, as well as several local favorites for sports and picnics, such as McCarren Park to the south. A gem for dog-lovers is McGolrick Park, while Transmitter Park is ideal for relaxing to gorgeous river views. </p>
            </div>
            <div id="section4" ref={section4Ref}></div>
            <div className=" w-full right-0 sm:w-3/5">
              <img  src={ TextImage4 } alt=""/>
            </div>
          </div>
        </div>
      </div>
      
      <img src={ BackgroundIamge3} alt=""/>

    </div>
        
  )
}