import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const Pricing = () => {
  return (
    <div className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-6 text-slate-300">
          <h2 className="uppercase text-3xl">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The Right For Your Research.
          </h3>
          <p className="text-3xl">
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years.
          </p>
        </div>

        <div className=" grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="upercase px-3 py-1 bg-indigo-300 rounded-2xl text-sm font-semibold">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-6 flex">
                49$
                <span className="text-xl font-semibold text-slate-500 flex flex-col justify-end ">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              sometimes by accident, sometimes on purpose
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                page editors now use Lore
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                page editors now use Lore
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                page editors now use Lore
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                page editors now use Lore
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                page editors now use Lore
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="upercase px-3 py-1 bg-indigo-300 rounded-2xl text-sm font-semibold">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-6 flex">
                59$
                <span className="text-xl font-semibold text-slate-500 flex flex-col justify-end ">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              sometimes by accident, sometimes on purpose
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                page editors now use Lore
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                page editors now use Lore
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                page editors now use Lore
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                page editors now use Lore
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                page editors now use Lore
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
