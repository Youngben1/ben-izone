import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center p-4 bg-gray-300 shadow-xl w-full z-[100] max-w-[1240px] mx-auto">
      <div>
        <a href="/">
          <h1 className="font-bold text-5xl cursor-pointer">Renny</h1>
        </a>
      </div>

      <ul className="hidden space-x-5 text-xl font-bold md:flex sm:space-x-3">
        <a href="/" className="text-2xl font-base cursor-pointer">
          Home
        </a>
        <a href="/about" className="text-2xl font-base cursor-pointer">
          About
        </a>
        <a href="/skills" className="text-2xl font-base cursor-pointer">
          Skills
        </a>
        <a href="/contact" className="text-2xl font-base cursor-pointer">
          Contact
        </a>
      </ul>

      {/* Mobile menu navbar */}
      <div onClick={handleNav} className="block cursor-pointer md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 right-0 w-[60%] h-full bg-gray-400 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="m-4 text-4xl font-bold cursor-pointer hover:text-purple-900">
          Renny.JS
        </h1>
        <ul className="p-4 pt-12">
          <li className="p-4 text-3xl font-bold border-b border-gray-700 cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="p-4 text-3xl font-bold border-b border-gray-700 cursor-pointer">
            <a href="/about">About</a>
          </li>
          <li className="p-4 text-3xl font-bold border-b border-gray-700 cursor-pointer">
            <a href="/skills">Skills</a>
          </li>
          <li className="p-4 text-3xl font-bold border-b border-gray-700 cursor-pointer">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
