import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CardDrawer from "../Layout/CardDrawer";

const Navbar = () => {
  const [cartDraw, setCartDraw] = useState(false);

  const toggleCartDrawer = () => {
    setCartDraw(!cartDraw);
  };

  return (
    <>
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 md:px-6 lg:px-16">
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
          <button onClick={toggleCartDrawer} className="relative text-gray-400 ">
            <HiOutlineShoppingBag className="h-6 w-6 hover:text-rabbit-green" />
            <span className="absolute -top-1 -right-1 bg-rabbit-green text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              4
            </span>
          </button>

          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <Link to="/profile" className="text-gray-400 md:hidden">
            <HiBars3BottomRight className="h-7 w-7 hover:text-rabbit-green" />
          </Link>
        </div>
      </nav>

      {/* Card Drawer */}
      <CardDrawer cartDraw={cartDraw} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
};

export default Navbar;
