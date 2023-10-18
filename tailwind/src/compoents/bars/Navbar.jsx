import React, { useState, useEffect, useRef } from "react";
import { FaBell, FaComments, FaSignOutAlt, FaVideo } from "react-icons/fa";
import profile from "../../asset/Profile.png";
import { MdSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = React.memo(({ open }) => {
  const [showlog, setShowlog] = useState(false);



  const menuRef = useRef(null);
  //  const sideRef = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowlog(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <nav
      className={`${
        open
          ? "fixed top-0 right-0 left-[262px] flex grow"
          : "fixed top-0 right-0 left-[8%] flex grow"
      } duration-300 z-10 border-b-[1.3px] h-[50px] border-primary justify-end items-center bg-white px-5`}
    >
      <div className="flex items-center gap-4">
        {/* <div className="tooltip tooltip-bottom " data-tip="video"></div> */}
        <div class="relative group flex items-center">
          <button class="w-8 h-8 group-hover:bg-secondary rounded-full duration-500">
            {" "}
            <FaVideo className="text-xl cursor-pointer mx-auto" />
          </button>
          <div class="tooltip text-[11.5px] hidden group-hover:block bg-primary text-white text-sm px-3 py-0.5 rounded-md shadow-lg absolute top-[42px] left-4 transform -translate-x-1/2">
            Video
          </div>
        </div>
        <div class="relative group flex items-center">
          <button class="w-8 h-8 group-hover:bg-secondary rounded-full duration-500">
            {" "}
            <FaBell className="text-xl cursor-pointer mx-auto" />
          </button>
          <div class="tooltip text-[11.5px] hidden group-hover:block bg-primary text-white text-sm px-3 py-0.5 rounded-md shadow-lg absolute top-[42px] left-4 transform -translate-x-1/2">
            Notifications
          </div>
        </div>
        <div class="relative group flex items-center">
          <button class="w-8 h-8 group-hover:bg-secondary rounded-full duration-500">
            {" "}
            <FaComments className="text-xl cursor-pointer mx-auto" />
          </button>
          <div class="tooltip text-[11.5px] hidden group-hover:block bg-primary text-white text-sm px-3 py-0.5 rounded-md shadow-lg absolute top-[42px] left-4 transform -translate-x-1/2">
            Chat
          </div>
        </div>
        <div class="relative group flex items-center">
          <button class="w-8 h-8 group-hover:bg-secondary rounded-full duration-500" onClick={handleLogout}>
            {" "}
            <FaSignOutAlt className="text-xl cursor-pointer mx-auto" />
          </button>
          <div class="tooltip text-[11.5px] hidden group-hover:block bg-primary text-white text-sm px-3 py-0.5 rounded-md shadow-lg absolute top-[42px] left-4 transform -translate-x-1/2">
            Logout
          </div>
        </div>

        <div className="relative"  ref={menuRef}>
          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setShowlog(!showlog)}
          />

         
        </div>
        {showlog && (
            <>
              <div className="fixed top-16 right-4 h-fit w-[145px] bg-white flex flex-col rounded-lg shadow border border-gray-50">
                <div className="flex flex-col p-3 gap-2">
                  <span className="font-semibold  text-gray-800">Account</span>
                  <span className="text-nav-ash font-md capitalize">
                    Faculty
                  </span>
                </div>
                <div className="w-full h-px bg-gray-300"></div>
                <div className="w-full flex flex-col p-2 gap-2">
                  <div className="flex flex-col  justify-between">
                    {/* <Link to={`/homepage/setting/${getData}`}> */}
                      {" "}
                      <span
                        className="flex flex-row items-center gap-2 cursor-pointer text-gray-600 pl-1 pr-2 py-1 font-md hover:rounded hover:duration-300  hover:bg-secondary hover:text-white"
                        onClick={() => setShowlog(!showlog)}
                      >
                        <MdSettings className="text-[22px]" />
                         Settings
                      </span>
                    {/* </Link> */}
                  </div>
                  <div className="flex flex-col  justify-between">
                    <span
                      className="flex flex-row items-center gap-2 cursor-pointer px-2 py-1
                      hover:bg-secondary hover:text-white hover:rounded hover:duration-300 text-gray-600 font-md"
                      // onClick={logOut}
                    >
                      <FaSignOutAlt className="text-[18px]" />
                      Log out
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
      </div>
    </nav>
  );
});

export default Navbar;