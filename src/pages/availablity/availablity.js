import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import HomeIcon from '@mui/icons-material/Home';


const TABLE_HEAD = ["SPACES","INT/EXT SQ FT","EXPOSURE","PRICE","EST. MONTHLY CC","EST. MONTHLY TAXES","FLOORPLANS", ""];
const TABLE_ROWS = [
  {
    residences: "5th Fl",
    ext: "508",
    exposure: "N",
    price: "$750,000",
    est: "$562",
    taxes: "$456",
    image: './img/floor/1.jpg'
  }, 
  {
    residences: "6th Fl",
    ext: "508",
    exposure: "N",
    price: "$750,000",
    est: "$562",
    taxes: "$456",
    image: './img/floor/2.jpg'
  },
  {
    residences: "7th Fl",
    ext: "508",
    exposure: "N",
    price: "$750,000",
    est: "$562",
    taxes: "$456",
    image: './img/floor/3.jpg'
  },
  {
    residences: "8-14 Fl",
    ext: "508",
    exposure: "N",
    price: "$750,000",
    est: "$562",
    taxes: "$456",
    image: './img/floor/4.jpg'
  },
  {
    residences: "15th Fl",
    ext: "508",
    exposure: "N",
    price: "$750,000",
    est: "$562",
    taxes: "$456",
    image: './img/floor/5.jpg'
  },
  {
    residences: "16th Fl",
    ext: "508",
    exposure: "N",
    price: "$750,000",
    est: "$562",
    taxes: "$456",
    image: './img/floor/6.jpg'
  }
];

export default function Availability() {
  return (
    <div>
      <div className="px-4 content-center py-2 z-10 relative" style={{ backgroundColor: "#F1ECE2" }} >
          <div className="content-center xl:w-[1300px] m-auto ">
            <div className="max-w-[1280px] w-full m-auto mt-[10px]">
              <div className="xl:w-[600px] m-auto mb-4 mt-20">
                <p className="text-center font-GTPressura-Light text-5xl text-black px-4">AVAILABILITY</p>
              </div>
              <div className="flex items-center mb-20">
                <div className="w-auto mx-auto xl:w-2/3">
                  <p className="font-GTPressura-Light text-center text-2xl text-black px-4 mt-4">Please reach out to <a href="info@barbieliteam.com" className="text-[#B68064] hover:text-[#f5d7cc]">info@barbieliteam.com</a> for more information</p>
                </div>
              </div>
            </div>
            <div className="w-full overflow-x-scroll xl:overflow-x-auto">
              <table className="w-full min-w-max table-auto text-left text-3xl ">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b border-blue-gray-100 p-4">
                      <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                      >
                      {head}
                      </Typography>
                    </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(({ residences, ext, exposure, price, est, taxes, image }, index) => (
                    <tr key={index} className="even:bg-[#EAE2D4] h-[108px]">
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {residences}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {ext}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {exposure}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {price}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {est}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {taxes}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography as="a" variant="small" color="blue-gray" href={image} target="blank"  >
                        <p className="hover:scale-[120%] transition-all ease-in-out hover:ml-[10%]">
                          <HomeIcon/>
                        </p>
                      </Typography>
                    </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
  )
}