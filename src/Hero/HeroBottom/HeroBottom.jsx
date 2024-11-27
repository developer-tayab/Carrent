import React from 'react'
import { GrLocation } from "react-icons/gr";
import { LuCalendarDays } from "react-icons/lu";
import {motion } from "framer-motion"

export default function HeroBottom() {
  let RandomColor = ()=>{
    let color = "#";
    let letter = "1234567890ABCDEF";

    for (let i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * 16)];
    }
    return color
  }
  return (
    <motion.section
    
    initial={{opacity:0 , scale:0.5 , }}
    whileInView={{opacity:1 , scale:1 }}
    transition={{duration:0.5 , delay:0.4}}

    className=' container  '>

      <div className='flex flex-col md:flex-row py-2 opacity-75 shadow-[0px_4px_4px_0px_purple] bg-[#FFFFFF] gap-3 justify-between items-center  md:w-[900px]  rounded-md  px-3 '>
      



    {/* {location & searchBar} */}
    <div className="flex items-center gap-2 p-2 ">
    <GrLocation  className='text-secondary text-[2rem]'/>

    <div className='flex flex-col items-start  '>
      <h1 className='text-secondary '>Location</h1>
      <input style={{color:RandomColor()}} type="text" placeholder='Search Your Location'  className='  w-[110%]  placeholder-[#747474] outline-none py-1 '/>
    </div>

    </div>

{/* {calendar and choiceDate} */}
<div className="flex items-center gap-2 p-2  border-r-primary border-r-[0.7px]">
    <LuCalendarDays   className='text-secondary text-[2rem]'/>
    <div >
      <h1 className='text-secondary'>Pickup date</h1>
      <input type="date"   className=' outline-none py-1  bg-transparent '/>
    </div>

    </div>


    {/* {calendar and return date} */}

    <div className="flex items-center gap-2 p-2 border-r-primary border-r-[0.7px]">
    <LuCalendarDays   className='text-secondary text-[2rem]'/>
    <div>
      <h1 className='text-secondary'>Return date</h1>
      <input type="date"   className=' outline-none py-1 bg-transparent  '/>
    </div>

    </div>

{/* {Search button} */}

<div>
  <button className='text-[#FFFFFF] bg-primary py-2 px-4 rounded-md shadow-md'>Search</button>
</div>



      </div>
    </motion.section>
  )
}
