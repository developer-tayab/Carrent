import { ImLocation } from "react-icons/im";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaJediOrder } from "react-icons/fa6";
import frame1 from "../LandingPage2/assets/images/frame1.png";
import frame2 from "../LandingPage2/assets/images/frame2.png";
import frame3 from "../LandingPage2/assets/images/frame3.png";
import frame4 from "../LandingPage2/assets/images/frame4.png";
import frame5 from "../LandingPage2/assets/images/frame5.png";
import frame6 from "../LandingPage2/assets/images/frame6.png";
import {motion } from "framer-motion"

export default function LandingPage2() {
  return (
    <section className="font-poppins py-16 md:h-screen h-full ">
      <div className="">

        
        {/* {container center text} */}

        <div className="centerContent container flex justify-center items-center flex-col ">
          {/* {button center } */}

          <div className="bg-[#ECF5FF] my-5">
            <button className="text-primary py-2 px-4 rounded-md">
              HOW IT WORK
            </button>
          </div>

          <h1 className="text-[#333333]  text-[3rem] capitalize mb-5 ">
            Rent with following 3 working steps
          </h1>

          <div className="flex flex-col md:flex-row gap-5 md:mt-5 justify-center  items-center ">

            <motion.div
            initial={{opacity:0 , scale:0.5 , x:-150}}
            whileInView={{opacity:1 , scale:1 , x:0}}
            transition={{duration:0.5 , delay:0.4}}
            w
            className=" text-center w-[300px] ">

              <div className="flex mx-auto justify-center items-center w-[100px] h-[100px] bg-[#ECF5FF]  mb-3 rounded-lg shadow-lg ">
                {" "}
                <ImLocation className=" text-[2rem] text-primary  " />{" "}
              </div>

              <h1 className="bold text-[1.5rem]  ">Choose location</h1>
              <p className="text-secondary pt-4 font-thin">
                Choose your and find your best car and rent it
              </p>
            </motion.div>

            <motion.div
             initial={{opacity:0 , scale:0.5 , y:-150}}
            whileInView={{opacity:1 , scale:1 , y:0}}
            transition={{duration:0.5 , delay:0.4}}
            
            className=" text-center w-[300px] ">
              <div className="flex mx-auto justify-center items-center w-[100px] h-[100px] bg-[#ECF5FF]  mb-3 rounded-lg shadow-lg ">
                {" "}
                <FaCalendarCheck className=" text-[2rem] text-primary " />{" "}
              </div>
              <h1 className="bold text-[1.5rem]  ">Pick-up date</h1>
              <p className="text-secondary pt-4 font-thin">
                Select your pick up date and time to book your car
              </p>
            </motion.div>

            <motion.div
            initial={{opacity:0 , scale:0.5 , x:150}}
            whileInView={{opacity:1 , scale:1 , x:0}}
            transition={{duration:0.5 , delay:0.4}}
            
            
            className="text-center  w-[300px] ">
              <div className="flex mx-auto justify-center items-center w-[100px] h-[100px] bg-[#ECF5FF]  mb-3 rounded-lg shadow-lg ">
                {" "}
                <FaJediOrder className=" text-[2rem] text-primary  " />{" "}
              </div>
              <h1 className="bold text-[1.5rem]  ">Book your car</h1>
              <p className="text-secondary pt-4 font-thin">
                Book your car and we will deliver it directly to you
              </p>
            </motion.div>


          </div>
        </div>

        {/* {bottom section images and logo} */}

        <div className="  mt-[15%] pb-3  md:pb-3 overflow-x-hidden">
          <div className="flex justify-between items-center ">
            <img className="w-[50px]   md:w-[150px] " src={frame1} alt="" />
            <img className="w-[50px]   md:w-[150px] " src={frame2} alt="" />
            <img className="w-[50px]   md:w-[150px] " src={frame3} alt="" />
            <img className="w-[50px]   md:w-[150px] " src={frame4} alt="" />
            <img className="w-[50px]   md:w-[150px] " src={frame5} alt="" />
            <img className="w-[50px]   md:w-[150px] " src={frame6} alt="" />
          </div>
        </div>  
      </div>
    </section>
  );
}
