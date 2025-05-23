import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className="bg-rabbit-green text-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 sm:px-8 md:px-12 lg:px-16">

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>

        {/* Centered Text */}
        <div className="text-sm text-center flex-grow">
           <span>We ship worldwide - Fast and relible shipping!</span>
        </div>

        {/* Phone Number */}
        <div className="text-sm hidden md:block">
          <a href="tel:+1234567890" className="hover:text-gray-300">+1 (234) 567-890 </a>
        </div>

      </div>
    </div>
  );
};

export default Topbar;
