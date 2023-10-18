import React, { Fragment } from "react";
import { FaBars, FaBullhorn, FaBook, FaHome, FaUsers, FaFolderOpen } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import abhis from "../../asset/abhis.png";
// Assuming you have a leftmenu image
import leftMenu from "../../asset/left.png";
import rightMenu from "../../asset/rightmenu.png"; // Define rightMenu here
import { BiSolidFolderOpen } from "react-icons/bi"; // Replace 'bi' with the appropriate icon set

const SideBar = ({ handleToggle, open }) => {
  const Menus = [
    { title: "Home", icon: <FaHome />, path: "/homepage/home" },
    { title: "My Batches", icon: <FaUsers />, path: "/homepage/My Batches" },
    {
      title: "Announcement",
      icon: <FaBullhorn />,
      path: "/homepage/Announcement",
    },

    {
      title: "File Management",
      icon: <FaFolderOpen />,
      path: "/homepage/File Management",
    },
    { title: "E-Library", icon: <FaBook />, path: "/homepage/E-Library" },
    { title: "Support", icon: <MdCall />, path: "/homepage/support" },
  ];

  const location = useLocation();

  return (
    <div
      className={`${
        open ? "w-[238px]" : "w-[6%]"
      } bg-primary left-0 fixed duration-300 h-screen overflow-y-scroll overflow-x-hidden`}
    >
      <div className="w-full border-b px-[18px] py-3 h-[100px]">
        {open ? (
          <>
            <div className="w-full flex flex-row items-center gap-6">
              <div className="flex flex-row items-center">
                <img
                  src={abhis}
                  className={` w-[45px] cursor-pointer h-fit `}
                />
                <h1 className="text-[45px] text-white font-bold mt-[6px]">
                  bhis
                </h1>
              </div>

              <img
                alt="leftmenu"
                src={leftMenu}
                className={`cursor-pointer w-7 h-7 mt-3 text-gray-900
             `}
                onClick={handleToggle}
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-full flex justify-center items-center h-full ">
              <FaBars
                className={` cursor-pointer w-7 h-7 text-white
             `}
                onClick={handleToggle}
              />
              {/* <FaBars
                  className={` cursor-pointer w-7 h-7 text-white
             `}
                  onClick={handleToggle}
                /> */}
            </div>
          </>
        )}
      </div>
      <div className={`w-full flex flex-col gap-1 py-[10px]`}>
        {Menus.map((menu, id) => (
          <Fragment key={id}>
            <NavLink
              to={menu.path}
              isActive={(match, location) => {
                // Check if the current location matches the menu's path or any of its subpaths
                return (
                  match || location.pathname.startsWith(menu.path + "/") 
                );
              }}
              style={({ isActive }) => {
                return isActive
                  ? {
                      background:
                        "linear-gradient(to right, #ffffff 3%, #FF9800 3%)",

                      // borderLeft: "6px solid white",
                    }
                  : {
                      // color: "white",
                      // borderLeft: "6px solid #105D50",
                    };
              }}
            >
              <div className="w-full flex flex-row pl-[18px] pr-[12px] py-[13px] gap-4  hover:bg-custom-gradient">
                <span className="text-[24px] text-white ">{menu.icon}</span>
                <h1
                  className={`${
                    open ? "text-[15px]" : "hidden"
                  } duration-300 text-white font-medium`}
                >
                  {menu.title}
                </h1>
              </div>
            </NavLink>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
