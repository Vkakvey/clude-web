import React from "react";
import {
  PhoneIcon,
  ArrowSmallUpIcon,
  CpuChipIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import supportImg from "../assets/support.jpg";
const Support = () => {
  return (
    // Img
    <div className="w-full  mt-24">
      <div className="w-full h-[760px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt=""
        />
      </div>
      {/* Contenter */}
      <div className="max-w-[1248px] m-auto  text-white relative">
        <div className="px-4  py-12 ">
          <h2 className="text-3xl pt-8 text-center uppercase text-slate-200">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-slate-300 text-center">
            Finding The right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
          </p>
        </div>
        {/* Icon */}
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sale</h3>
              <p className="text-gray-600 text-xl ">
                making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 rounded-xl">
              <p className="flex items-center text-indigo-600 font-bold">
                <a href="#">Contact</a>
                <ArrowSmallUpIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PowerIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl ">
                making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 rounded-xl">
              <p className="flex items-center text-indigo-600 font-bold">
                <a href="#">Contact</a>
                <ArrowSmallUpIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <CpuChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Media Inquires</h3>
              <p className="text-gray-600 text-xl ">
                making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 rounded-xl">
              <p className="flex items-center text-indigo-600 font-bold">
                <a href="#">Contact</a>
                <ArrowSmallUpIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Support;
