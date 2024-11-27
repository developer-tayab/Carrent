import React from "react";
import { MdPriceChange } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Ri24HoursFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
export const services = [
  {
    id: 1,
    title: "Best price guaranteed",
    para: " Find a lower price? We’ll refund you 100% of the difference.",
    delay: 0.6,
  },
  {
    id: 2,
    title: "Experience driver",
    para: "  Don’t have driver? Don’t worry, we have many experienced driver for you.  ",
    delay: 0.8,
  },
  {
    id: 3,
    title: "24 hour car delivery",
    para: " Book your car anytime and we will deliver it directly to you.",
    delay: 1,
  },
  {
    id: 4,
    title: "24/7 technical support",
    para: " Have a question? Contact Rentcars support any time when you have problem.",
    delay: 1.2,
  },
];

let servicesIcons = [
  <MdPriceChange />,
  <CiUser />,
  <Ri24HoursFill />,
  <MdMessage />,
];

export default function RightSide() {
  return (
    <section className="font-poppins   ">
      <div className="container">
        {/* {Button } */}

        <div>
          <button className="text-primary bg-[#E8F1FB] mb-2 py-2 px-3 rounded-md ">
            WHY CHOOSE US
          </button>
        </div>

        {/* {heading } */}

        <h1 className="text-[#333333] font-bold capitalize text-[1.5rem]  md:text-[2rem] ">
          We offer the best experience with our rental deals
        </h1>

        {/* {Services } */}

        <div>
          {services.map((item, index) => {
            return (
              <div className="flex items-center gap-2 mt-1 h-[100px] ">
                <div className="bg-[#ECF5FF] text-primary w-[50px] h-[50px] flex justify-center items-center rounded-md ">
                  <h1 className="text-[2rem] ">{servicesIcons[index]}</h1>
                </div>

                <div className="flex flex-col items-start gap-1 w-[90%]   ">
                  <h1 className="text-[#333333] font-bold capitalize ">
                    {item.title}
                  </h1>
                  <p>{item.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
