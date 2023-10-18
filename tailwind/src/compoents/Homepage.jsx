import React, { useState } from "react";

import Sidebar from "./bars/Sidebar";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "./Common/BradCrubms";
import Navbar from "./bars/Navbar";
import { FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";


const Homepage = () => {
  const [open, setOpen] = useState(true);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Sidebar open={open} handleToggle={handleToggle} />
      <Navbar open={open} />
     
      <div
        className={`${
          open
            ? "absolute top-[50px] w-[81%] left-[19%] right-0 h-auto "
            : "absolute top-[50px] w-[94%] left-[6%] right-0 h-auto"
        } duration-300 px-6 bg-white`}
      >
        <div className="py-1 capitalize">
        <BreadCrumbs/>
        </div>
      
        <Outlet />
        <div className="w-full flex flex-row justify-between items-center py-[7px] px-8">
          <span className="text-[15px] text-primary cursor-pointer">V1.0.1 Copyright &copy; 2023 Abhis</span>
          <div className="flex flex-row items-center gap-3">
            <FaFacebookSquare className="text-2xl text-sky-500 cursor-pointer"/>
            <FiInstagram className="text-2xl text-rose-500 cursor-pointer"/>
            <FaWhatsapp className="text-2xl text-green-500 cursor-pointer"/>
            <FaLinkedin className="text-2xl text-blue-500 cursor-pointer"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;