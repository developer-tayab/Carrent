import React from 'react'
import bottomLogo from "./bottomLogo.png"
import { AiOutlineFacebook } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";


export default function Bottom() {
  return (
   <section className='bg-[#051C34] text-[#FFFFFF] font-poppins'>

<div className='container flex justify-between items-center py-5'>


<div className='flex  justify-center items-center gap-3'>
  <img src={bottomLogo} alt="logo" />
  <h1 className='text-[#FFFFFF]'>RENTCARS</h1>
  <h1 className='text-[#959595] font-thin hidden md:block'>Copyright 2024, All Rights Reserved</h1>
</div>


<div className='flex justify-center items-center gap-5 text-[1.7rem]'>
  <AiOutlineFacebook/>
  <CiInstagram/>
  <CiYoutube/>
</div>

</div>



   </section>
  )
}
