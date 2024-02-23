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
    console.log(word, "-->>");
    for (let i = 0; i < unsplashPhotos.length; i++) {
        if (unsplashPhotos[i].key === word) {
            return ({
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
}

console.log(photos("amenities"));

export default photos;
