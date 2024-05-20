import React, { useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import gallerydata from "./../../utils/gallery.json";

const breakpoints = [1920, 1080, 640];
const unsplashPhotos = gallerydata.data;
const photos = (word) => {
  var data = [];
  data.length = 0;
  for (let i = 0; i < unsplashPhotos.length; i++) {
    if (word === "all" || unsplashPhotos[i].key === word) {
      data.push({
        src: unsplashPhotos[i].src,
        width: unsplashPhotos[i].width,
        height: unsplashPhotos[i].height,
        key: `${unsplashPhotos[i].key}-${i}`, // Append index to ensure uniqueness
        srcSet: breakpoints.map((breakpoint) => {
          const height = Math.round(
            (unsplashPhotos[i].height / unsplashPhotos[i].width) * breakpoint
          );
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
};

export default function Gallery() {
  const [data, setData] = React.useState(photos("all"));
  const onchange = (e) => {
    var data = photos(e.target.value);
    setData(data);
  };

  return (
    <div
      className="px-4 content-center py-2 z-10 relative bg-main-bg"
    >
      <div className="content-center xl:w-[1300px] m-auto">
        <div className="max-w-[1280px] w-full m-auto mt-[10px]">
          <div className="xl:w-[600px] m-auto mb-4 mt-20">
            <p className="text-center font-GTPressura-Light text-5xl text-dark-font px-4">
              GALLERY
            </p>
          </div>
          <div className="flex items-center mb-20">
            <div className="w-auto mx-auto xl:w-1/3">
              <p className="font-GTPressura-Light text-center text-1xl text-dark-font px-4 mt-4">
                An iconic Greenpoint landmark, with refined residences on Brooklyn’s scenic waterfront, breathtaking views of the New York City skyline, prestigious positioning and awe-inspiring design.
              </p>
              <div className="w-full flex mt-5">
                <select
                  className="m-auto w-full sm:w-1/2 bg-main-bg border-[1px] text-dark-font border-dark-font rounded-none outline-none p-1"
                  onChange={onchange}
                >
                  <option
                    value="all"
                    className="m-auto w-1/3 bg-main-bg border-[1px] outline-dark-font text-dark-font"
                  >
                    All
                  </option>
                  <option
                    value="exterior"
                    className="m-auto w-1/3 bg-main-bg border-[1px] outline-dark-font text-dark-font"
                  >
                    Exterior
                  </option>
                  <option
                    value="residences"
                    className="m-auto w-1/3 bg-main-bg border-[1px] outline-dark-font text-dark-font"
                  >
                    Residences
                  </option>
                  <option
                    value="amenities"
                    className="m-auto w-1/3 bg-main-bg border-[1px] outline-dark-font text-dark-font"
                  >
                    Amenities
                  </option>
                  <option
                    value="greenpoint"
                    className="m-auto w-1/3 bg-main-bg border-[1px] outline-dark-font text-dark-font"
                  >
                    Greenpoint
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full mb-12">
            <PhotoAlbum photos={data} layout="rows" />
          </div>
        </div>
      </div>
    </div>
  );
}