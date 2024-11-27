import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

export default function LandingPage3() {
  return (
    <section className='md:h-screen bg-landingpage3 h-full flex  items-center justify-center  '>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 '>
      <LeftSide/>
      <RightSide/>
      </div>
    </section>
  )
}
