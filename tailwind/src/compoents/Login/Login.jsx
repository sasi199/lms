import React from "react";
import { Link } from "react-router-dom";
import abhis from "../../asset/abhisbg.png";
import loginImg from "../../asset/study.jpeg.jpg";
import { FaEnvelope, FaKey } from "react-icons/fa";
import key from "../../asset/key.png";

const Login = () => {
  return (
    <div className="grid grid-col-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block ">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-[#FAFAFA] flex flex-col  justify-center">
        <form className="w-[400px] mx-auto h-fit bg-[#EEEEEE] px-8   pt-8 pb-4 rounded-2xl">
          <div className="">
            <img src={abhis} className="w-[240px] h[150px] mx-auto "></img>
          </div>

          <h2 className="text-2xl text-black mt-8 mb-6 font-medium text-center">
            Login
          </h2>

          <div className="flex flex-col text-gray-400 py-2 relative">
            {/* <label>Password</label> */}
            <span class="absolute  top-[22px] left-3 font-normal  text-center text-red-500 items-center justify-center ">
              <FaEnvelope className="text-xl"/>
            </span>
            <div className="absolute flex text-color-red items-center" />
            <input
              className="rounded-lg bg-white px-11 py-3 focus:border-blue-50 focus:bg-gray-50 focus:outline-none "
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2 relative">
            {/* <label>Password</label> */}
            <span class="absolute top-[18px] left-2  font-normal  text-center text-green-500 items-center justify-center ">
              <img src={key} alt="key" className="w-7 h-7"/>
            </span>
            <div className="absolute flex text-color-red items-center" />
            <input
              className="rounded-lg bg-white px-11 py-3 focus:border-blue-50 focus:bg-gray-50 focus:outline-none "
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="w-[300px] flex flex-row justify-between text-gray-800 py-5 mx-auto">
            <div className="flex items-center text-[12px] font-medium">
              <input className="mr-2 w-4 h-4 text-red-600 " type="checkbox" />
              Remember Me
            </div>
            <Link to={''}>
            <p  className="flex items-center text-[12px] font-semibold text-[rgb(21,164,157)] hover:bg-slate-200">Forgot Password</p>
         </Link>
          </div>
          <div className="w-full ">
          <Link to={"/homepage/home"}>
            <button className="w-[300px] h-12 mx-4 bg-[rgb(21,164,157)] hover:bg-teal-500 shadow-lg text-xl text-white font-medium rounded">
             Login
            </button>
          </Link>
          </div>
        
         
            <span className="w-full text-gray-500 flex flex-row items-center justify-center mt-10 gap-6 ">
              <span className="text-[12px] cursor-pointer">Home</span>
              <span className="text-[12px] cursor-pointer">Support</span>
              <span className="text-[12px] cursor-pointer">Privacy</span>
            </span>
       
        </form>
      </div>
    </div>
  );
};

export default Login;