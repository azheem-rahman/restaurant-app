import React from "react";
import Image from "next/image";
import FeastFinderLogo from "../../../../public/FeastFinderLogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex justify-left items-center">
        <Link href="/">
          <div className="w-1/4 flex justify-left items-center">
            <p className="text-lg font-bold">FeastFinder</p>
            <SearchIcon className="text-2xl font-bold" />
          </div>
        </Link>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <div className="w-1/2 flex justify-end items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="/search">Search</Link>
          <Link href="/login">
            <button className="text-custom-one bg-custom-three hover:bg-custom-four font-medium rounded-lg text-sm px-4 py-2">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
