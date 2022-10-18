import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
        <ul className="hidden md:flex">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Platfoms</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <Bars3Icon className="w-10" />
          ) : (
            <XMarkIcon className="w-10" />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <a href="">Home</a>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <a href="">About</a>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <a href="">Support</a>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <a href="">Platfoms</a>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <a href="">Contact</a>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 py-3 px-8 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
