import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXCircle } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex justify-center items-center w-full transition-all duration-300 ${
        isOpen
          ? "absolute top-0 left-0 bg-black w-full h-24 z-50"
          : "width-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border border-gray-400 rounded-md outline-none focus:border-rabbit-green px-4 py-2 pr-12 pl-2 placeholder:text-gray-400 text-gray-300 w-full"
            />
            {/* Search - Icon */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <HiMagnifyingGlass className="w-6 h-6 text-gray-400 hover:text-rabbit-green" />
            </button>
          </div>
          {/* Close Button */}
          <button
            onClick={handleSearchToggle}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <HiMiniXCircle className="w-6 h-6 text-gray-400 hover:text-rabbit-green" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle} className="flex items-center">
          <HiMagnifyingGlass className="w-6 h-6 text-gray-400 hover:text-rabbit-green" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
