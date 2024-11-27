import React from "react";
import carRentLogo from "./assets/carlogo.png";
import { navbarStore } from "./navbarstore";
export default function Navbar() {
  return (
    <nav className="pt-4 font-poppins container ">
      <div className="flex justify-between items-center">
        {/* {car-ogo} */}
        <div className="flex items-center gap-3">
          <img src={carRentLogo} alt="logo" />
          <h1 className="text-primary uppercase">RENTCARS</h1>
        </div>

        {/* {navbar menu} */}

        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-5">
            {navbarStore.map((item) => (
              <li key={item.id}>
                <a href={item.path} className="text-secondary">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* {navbar signUp & login button} */}

        <div className="flex gap-3 justify-center items-center">
          <button className="py-2 px-4 rounded-md hover:text-[#FFFFFF] transition-all 2s  hover:bg-primary text-secondary">
            Sign In
          </button>
          <button className="py-2 px-4 rounded-md  text-[#FFFFFF] bg-primary">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}
