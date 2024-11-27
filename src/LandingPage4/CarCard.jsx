import React from "react";
import car1 from "./assets/car1.png";
import car2 from "./assets/car2.png";
import car3 from "./assets/car3.png";
import car4 from "./assets/car4.png";
import { CiUser } from "react-icons/ci";
import { GiCarDoor } from "react-icons/gi";
import {motion} from "framer-motion"

import { GiAutoRepair } from "react-icons/gi";
import { IoIosSnow } from "react-icons/io";

let cards = [car1, car2, car3, car4];
import { IoIosStar } from "react-icons/io";

export default function CarCard({ carDetails }) {
  return (
    <section className="font-poppins ">

      <div className="w-[290px] h-[405px] py-2 px-3 shadow-lg rounded-md     ">
        {/* {image car} */}
        <div  className="flex justify-center overflow-hidden items-center h-[100px]">
          <motion.img
          initial={{opacity:0 , scale:0.5 , x:-100}}
          whileInView={{opacity:1 , scale:1 , x:0}} 
          transition={{duration:0.7 , delay:carDetails.delay}}
          
          
          src={cards[carDetails.id]} alt="" />
        </div>

        <div className="">
          <h1 className="text-[#333333] font-bold">{carDetails.title}</h1>
          {/* rating  */}
          <div className="flex items-center gap-2 mt-3 ">
            <h1 className="text-yellow-500">
              <IoIosStar />
            </h1>
            <h1>
              {carDetails.rating}{" "}
              <span className="text-[#959595]">
                {" "}
                ({carDetails.review} reviews)
              </span>
            </h1>
          </div>
        </div>

        {/* Features  */}

        <div className="grid grid-cols-2 gap-1 mt-3 ">
          <h1 className="flex items-center gap-1 text-[14px] text-[#4f4e4e] ">
            <span>{<CiUser />}</span> {carDetails.features[0]}
          </h1>
          <h1 className="flex items-center gap-1 text-[14px] text-[#4f4e4e] ">
            <span>{<GiAutoRepair />}</span> {carDetails.features[1]}
          </h1>
          <h1 className="flex items-center gap-1 text-[14px] text-[#4f4e4e] ">
            <span>{<IoIosSnow />}</span> {carDetails.features[2]}
          </h1>
          <h1 className="flex items-center gap-1 text-[14px] text-[#4f4e4e] ">
            <span>{<GiCarDoor />}</span> {carDetails.features[3]}
          </h1>
        </div>

        {/* bottom line  */}

        <div className="w-[100%] h-[1.5px] opacity-80 bg-[#959595] mt-[20px] "></div>

        {/* price */}

        <div className="flex justify-between items-center mt-6">
          <h1>Price</h1>
          <h1 className="text-[#333333] font-bold">
            ${carDetails.price}<span className="text-[#959595] font-[500]" >/day</span>
          </h1>
        </div>

        {/* bottom button  */}

        <div className="flex justify-center items-center mt-6 w-[80%] mx-auto">
          <button className="py-2 px-4 w-full rounded-md  group  bg-primary text-[#FFFFFF]">Rent Now</button>
        </div>
      </div>
    </section>
  );
}
