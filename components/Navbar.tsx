"use client";

import Image from "next/image";
import profile from "/public/profile.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";

interface NavbarProps {
  cartCount: number;
}

import React, { useState } from "react";

const Navbar = ({ cartCount }: NavbarProps) => {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <>
      <div className="fixed max-w-[1000px] mx-auto bg-white w-full h-16 md:h-20 flex justify-between items-center px-8 lg:px-0 border-b z-10">
        <div className=" flex items-center gap-4  font-bold text-gray-600">
          <GiHamburgerMenu
            onClick={() => setNav(true)}
            className="md:hidden text-xl md:text-2xl cursor-pointer"
          />
          <h1 className="text-2xl text-gray-700">sneakers</h1>
          <ul className="hidden md:flex items-center gap-6 font-normal ms-8 text-sm text-gray-500 ">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-4 md:gap-8 text-2xl font-bold text-gray-600 z-20">
          <div className="relative">
            <AiOutlineShoppingCart />
              <div className={cartCount > 0 ? "w-5 h-5 absolute -top-2.5 -right-2.5 text-xs flex justify-center items-center text-white p-1 rounded-full bg-red-500" : ""}>
                {cartCount > 0 ? cartCount : ""}
              </div>
          </div>
          <Image
            src={profile}
            alt="profile image"
            className="w-8 rounded-full"
          />
        </div>
      </div>

      {/* Overlay  */}
      {nav && (
        <div className="fixed md:hidden top-0 left-0 w-full h-screen bg-black/70 z-40" />
      )}
      {/* Nav Menu */}
      <div
        className={
          nav
            ? "fixed md:hidden top-0 left-0 h-screen w-[60%] sm:w-[40%] bg-white p-5  ease-in duration-300 overflow-scroll z-40"
            : "fixed md:hidden top-0 left-[-500px] h-screen w-[60%] bg-white p-5 ease-in duration-300 overflow-scroll z-40"
        }
      >
        <div
          onClick={() => setNav(false)}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-300 hover:text-white cursor-pointer transform duration-300 "
        >
          <AiOutlineClose />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={profile}
            alt="profile image"
            className="w-12 rounded-full cursor-pointer hover:scale-105 duration-300"
          />
          <h1 className="font-bold text-xl text-gray-700">
            Jahz10 <br />
            sneakers
          </h1>
        </div>
        <ul className="font-semibold text-gray-800 space-y-4 mt-8">
          <li className="cursor-pointer hover:animate-pulse">Collections</li>
          <li className="cursor-pointer hover:animate-pulse">Men</li>
          <li className="cursor-pointer hover:animate-pulse">Women</li>
          <li className="cursor-pointer hover:animate-pulse">About</li>
          <li className="cursor-pointer hover:animate-pulse">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
