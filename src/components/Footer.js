import React from "react";
import {
  MapIcon,
  InboxIcon,
  PhoneIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-black text-slate-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-6 grid-cols-2 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Job</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partner</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privatcy</li>
            <li className="py-1">Tems</li>
            <li className="py-1">Pollicice</li>
            <li className="py-1">Condition</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="uppercase font-bold">Subscribe to our newslatter</p>
          <p>The last news, articales, and resources, sent to your inbox</p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Email"
            />
            <button className="p-1 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto  justify-between sm:flex-row text-center text-gray-500">
        <p>2022 Workflow, LLC, All right resverd</p>
        <div className="w-50 flex justify-between  pt-4 text-2xl">
          <PhoneIcon />
          <MapIcon />
          <InboxIcon />
          <CalendarIcon />
        </div>
      </div>
    </div>
  );
};
export default Footer;
