import React from "react";
import HeadingPage4 from "./HeadingPage4";
import CarCard from "./CarCard";
import { MdArrowOutward } from "react-icons/md";


const cardRentDetails = [
  {
    id: 0,
    title: "Jaguar XE L P250",
    rating: 4.8,
    review: 2463,
    features: ["4 Passagers", "Auto", "Air Conditioning", "4 Doors"],
    price: "1,800",
    delay: 0.3,
  },
  {
    id: 1,
    title: "Audi R8",
    rating: 4.6,
    review: 1.953,
    features: ["2 Passagers", "Auto", "Air Conditioning", "2 Doors"],
    price: "2,100",
    delay: 0.6,
  },
  {
    id: 2,
    title: "BMW M3",
    rating: 4.5,
    review: 2.034,
    features: ["4 Passagers", "Auto", "Air Conditioning", "4 Doors"],
    price: "1,600",
    delay: 0.9,
  },
  {
    id: 3,
    title: "Lamborghini Huracan",
    rating: 4.3,
    review: 2.453,
    features: ["2 Passagers", "Auto", "Air Conditioning", "2 Doors"],
    price: "2,300",
    delay: 1.2,
  },
  
];

export default function LandingPage4() {
  return (
    <section className="md:h-screen  h-full py-6  flex flex-col justify-between items-center">
      <HeadingPage4 />
      {/* {car cards} */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {cardRentDetails.map((card) => {
        return <CarCard  carDetails={card} />;
      })} 

      {/* {bottom button } */}



      </div>
      <div className="flex justify-center items-center mt-5">
  <button className=" flex justify-between hover:-rotate-[5deg] hover:border-[orange] transition-all 2s text-[#4E4E4E] items-center capitalize py-2 px-4  rounded-md border-[1px] border-[#4E4E4E] "> show all vehicles <span className=" text-[1.5rem] text-[#727171]">  <MdArrowOutward /> </span></button>

</div>
    </section>
  );
}
