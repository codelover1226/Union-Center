import React from "react";
import PhotoAlbum from "react-photo-album";
// import photos from "./photos";
import './Gallery.css';

const unsplashPhotos = [
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-03-HERO-ELEVATED-P5-FINAL-HR-scaled.jpg",
        width: 1920, 
        height: 1958,
        key: "exterior"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-01-HERO-WATER-FRONT-P5-FINAL-HR-scaled.jpg",
        width: 1920, 
        height: 1958,
        key: "exterior"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-02-HERO-WEST-ST-P4-FINAL-HR-scaled.jpg",
        width: 1920, 
        height: 1281,
        key: "exterior"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-04-HERO-ELEVATION-P4-FINAL-HR-scaled.jpg",
        width: 1920, 
        height: 1139,
        key: "exterior"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-06-HERO-BRIDGE-P4-FINAL-HR-scaled.jpg",
        width: 1920, 
        height: 1281,
        key: "exterior"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-05-ARRIVAL-P3-FINAL-HR-scaled.jpg",
        width: 1920, 
        height: 1281,
        key: "residences"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-12-LIVING-RM-P5-FINAL-MEDIUM-RES-scaled.jpg",
        width: 1920, 
        height: 1103,
        key: "residences"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-11-KITCHEN-LARGE-P4-FINAL-MEDIUM-RES-scaled.jpg",
        width: 1920, 
        height: 1235,
        key: "residences"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-34-MAIN-BEDRM-P4-FINAL-MEDIUM-RES-scaled.jpg",
        width: 1920, 
        height: 1424,
        key: "residences"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-33-7TH-2ND-BEDRM-P4-FINAL-MEDIUM-RES-scaled.jpg",
        width: 1920, 
        height: 1000,
        key: "residences"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-16-SECONDARY-BATH-P10-FINAL-MEDIUM-RES-scaled.jpg",
        width: 1920, 
        height: 1000,
        key: "residences"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-23-BATH-MAIN-TYP-P5-FINAL-MEDIUM-RES-scaled.jpg",
        width: 1920, 
        height: 1920,
        key: "residences"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-27-7TH-FLR-TERRACE-P3-FINAL-HIGH-RES-scaled.jpg",
        width: 1920, 
        height: 1000,
        key: "amenities"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-30-LOBBY-P5-OP-FINAL-MEDIUM-RES-scaled.jpg",
        width: 1920, 
        height: 1068,
        key: "amenities"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/08/ONE-HURON-ST-07-POOL-P3-FINAL-HIGH-RES-scaled.jpg",
        width: 1920, 
        height: 1424,
        key: "greenpoint"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2388-Edit.jpg",
        width: 1920, 
        height: 1424,
        key: "greenpoint"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2665.jpg",
        width: 1920, 
        height: 1424,
        key: "greenpoint"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2647.jpg",
        width: 1920, 
        height: 1281,
        key: "greenpoint"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2276-scaled.jpg",
        width: 1920, 
        height: 3385,
        key: "greenpoint"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2625.jpg",
        width: 1920, 
        height: 1902,
        key: "greenpoint"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2624.jpg",
        width: 1920, 
        height: 1424,
        key: "greenpoint"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2354-Edit-2.jpg",
        width: 1920, 
        height: 1424,
        key: "greenpoint"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2346.jpg",
        width: 1920, 
        height: 1424,
        key: "greenpoint"    
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2777.jpg",
        width: 1920, 
        height: 1424,
        key: "greenpoint"
    },
    {
        src:
            "https://thehuron.com/wp-content/uploads/2022/07/JQ6A2602.jpg",
        width: 1920, 
        height: 1424,
        key: "greenpoint"    
    }
];

const breakpoints = [1920 ,1080 , 640, 384, 256, 128, 96, 64, 48];

const photos = (word) => {
    var data = [];
    data.length = 0;
    for (let i = 0; i < unsplashPhotos.length; i++) {
        if (unsplashPhotos[i].key === word) {
            data.push({
                src: unsplashPhotos[i].src,
                width: unsplashPhotos[i].width,
                height: unsplashPhotos[i].height,
                srcSet: breakpoints.map((breakpoint) => {
                    const height = Math.round((unsplashPhotos[i].height / unsplashPhotos[i].width) * breakpoint);
                    return {
                        src: unsplashPhotos[i].src,
                        width: breakpoint,
                        height,
                    };
                }),
            });
        }
        if (word === 'all') {
            data.push({
                src: unsplashPhotos[i].src,
                width: unsplashPhotos[i].width,
                height: unsplashPhotos[i].height,
                key: unsplashPhotos[i].key,
                srcSet: breakpoints.map((breakpoint) => {
                    const height = Math.round((unsplashPhotos[i].height / unsplashPhotos[i].width) * breakpoint);
                    return {
                        src: unsplashPhotos[i].src,
                        width: breakpoint,
                        height,
                    };
                }),
            });
        }
    }
    return data;
}

export default function Gallery() {
    const [ data, setData ] = React.useState(photos);
    React.useEffect(()=> {
        var data = photos("all");
        setData(data);
    }, [])
    const onchange = (e) => {
        var data = photos(e.target.value);
        console.log(data);
        setData(data);
    }

    return (
        <div>
            <div className="px-4 content-center py-2 z-10 relative" style={{ backgroundColor: "#153644" }} >
                <div className="content-center xl:w-[1300px] m-auto ">
                    <div className="max-w-[1280px] w-full m-auto mt-[10px]">
                        <div className="xl:w-[600px] m-auto mb-4 mt-20">
                            <p className="text-center font-GTPressura-Light text-5xl text-white px-4">GALLERY</p>
                        </div>
                        <div className="flex items-center mb-20">
                            <div className="w-auto mx-auto xl:w-1/3">
                                <p className="font-GTPressura-Light text-center text-1xl text-white px-4 mt-4">An iconic Greenpoint landmark, with refined residences on Brooklyn’s scenic waterfront, breathtaking views of the New York City skyline, prestigious positioning and awe-inspiring design.</p>   
                                <div className="w-full flex mt-5">
                                    <select className="m-auto w-1/3 bg-[#153644] outline outline-cyan-50 text-cyan-50" onChange={onchange}>
                                        <option value="all">All</option>
                                        <option value="exterior">Exterior</option>
                                        <option value="residences">Residences</option>
                                        <option value="amenities">Amenities</option>
                                        <option value="greenpoint">Greenpoint</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PhotoAlbum 
                        photos={data} 
                        layout="rows" 
                    />
                </div>
            </div>    
        </div>
    )
}