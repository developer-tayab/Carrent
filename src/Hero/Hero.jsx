import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import car from "./assets/car.png"
import HeroBottom from "./HeroBottom/HeroBottom";
import {motion } from "framer-motion"

export default function Hero() {

  



  
  return (
    <section className="font-poppins flex justify-center items-center  relative   h-[93vh]  ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5    ">
        {/* hero section heading */}
        <div className=" md:ml-[10rem] p-2 md:p-0">
          <h1 className="text-[#242424] semibold text-[48px] capitalize ">
            Find, book and rent a car{" "}
            <span className="text-primary bold  ">Easily</span>
          </h1>
          <p className="text-secondary  ">
            Get a car wherever and whenever you need it with your IOS and
            Android device.
          </p>

          {/* {social buttons} */}

    <div>


<div className="flex items-center gap-5 pt-5">
<div className="flex items-center gap-2 bg-black text-[#FFFFFF] py-1 px-2 rounded-md shadow-lg">
<IoLogoGooglePlaystore className=" text-[2.5rem] text-[#62F4D1] " />
<h1 className="flex flex-col  ">
  <span className="capitalize font-thin ">Get it on</span>
  <span  className="capitalize font-bold ">Google Play</span>
</h1>
</div>
<div className="flex items-center gap-2 bg-black text-[#FFFFFF] py-1 px-2 rounded-md shadow-lg">
<FaApple className="text-[#FFFFFF] text-[2.5rem] " />
<h1 className="flex flex-col  ">
  <span className="capitalize font-thin ">download on the</span>
  <span className="capitalize font-bold ">apple store</span>
</h1>
</div>

</div>



    </div>

        </div>

        <div>
          <motion.img
          initial={{ scale:0.4, x:200}}
          animate={{scale:1, x:0}}
          transition={{duration:0.8 }}
         
          src={car} alt="car logo" />
        </div>


      </div>
      <div className=" absolute  bottom-4 " >
      <HeroBottom/>
      </div>
    </section>
  );
}
