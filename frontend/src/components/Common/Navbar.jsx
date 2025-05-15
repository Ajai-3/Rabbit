import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left - Logo */}
        <div>
          <Link to="/" className="font-medium text-2xl">
            Rabbit
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-400 hover:text-rabbit-green text-sm font-medium uppercase"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-gray-400 hover:text-rabbit-green text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-400 hover:text-rabbit-green text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-400 hover:text-rabbit-green text-sm font-medium uppercase"
          >
            Top wear
          </Link>
          <Link
            to="#"
            className="text-gray-400 hover:text-rabbit-green text-sm font-medium uppercase"
          >
            Bottom wear
          </Link>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="text-gray-400 ">
            <HiOutlineUser className="h-6 w-6 hover:text-rabbit-green" />
          </Link>
          <button className="relative text-gray-400 ">
            <HiOutlineShoppingBag className="h-6 w-6 hover:text-rabbit-green" />
            <span className="absolute -top-1 -right-1 bg-rabbit-green text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">4</span>
          </button>

          {/* Search */}

          <Link to="/profile" className="text-gray-400 ">
            <HiBars3BottomRight className="h-6 w-6 hover:text-rabbit-green" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
