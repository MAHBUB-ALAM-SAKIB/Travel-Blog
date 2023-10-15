import React from "react";
import glass from "./assets/glass.webp";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import glass2 from "./assets/glass 2.webp";

function Footer() {
  return (
    <div className="w-fulll bg-gray-200 py-16 px-10">
      <div className="max-w-[1240px] mx-auto grid md:hidden">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold pb-3">ABOUT US</h1>
            <ul className="text-sm">
              <li className="pb-2 ">Buy Us A Coffee</li>
              <li className="pb-2 ">Instagram</li>
              <li className="pb-2 ">Travel Resources</li>
              <li className="pb-2 ">Privacy</li>
            </ul>
          </div>
          <img
            className="w-[50px] mr-[60px] mt-[40px] pb-10"
            src={glass}
            alt="/"
          />
        </div>
        <div className=" mt-7 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold pb-3">Explore</h1>
            <ul className="text-sm">
              <li className="pb-2 ">City Breaks</li>
              <li className="pb-2 ">Scenic Trips</li>
              <li className="pb-2 ">Best Hikes</li>
              <li className="pb-2 ">Road Trips</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold pb-3">TOP PLACES</h1>
            <ul className="text-sm">
              <li className="pb-2 ">Britain Travel Guides</li>
              <li className="pb-2 ">Iceland Travel Guides</li>
              <li className="pb-2 ">Italy Travel Guides</li>
              <li className="pb-2 ">Spain Travel Guides</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 mx-auto">
          <p className=" pb-3">© 2023 Anywhere We Roam. All rights reserved</p>
          <div className="flex space-x-4 mx-auto ml-32">
            <AiOutlineInstagram className="fill-black" size={20} />
            <FaFacebook className="fill-black" size={20} />
          </div>
        </div>
      </div>
      <div className="hidden max-w-[1240px]  md:grid md:grid-cols-2 ">
        <div className="pt-24 px-10 ">
          <img className="w-[200px] pb-14" src={glass2} alt="/" />
          <p className=" pb-3">© 2023 Anywhere We Roam. All rights reserved</p>
        </div>
        <div className=" mt-7 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold pb-3">Explore</h1>
            <ul className="text-sm">
              <li className="pb-2 ">City Breaks</li>
              <li className="pb-2 ">Scenic Trips</li>
              <li className="pb-2 ">Best Hikes</li>
              <li className="pb-2 ">Road Trips</li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold pb-3">TOP PLACES</h1>
            <ul className="text-sm">
              <li className="pb-2 ">Britain Travel Guides</li>
              <li className="pb-2 ">Iceland Travel Guides</li>
              <li className="pb-2 ">Italy Travel Guides</li>
              <li className="pb-2 ">Spain Travel Guides</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold pb-3">ABOUT US</h1>
            <ul className="text-sm">
              <li className="pb-2 ">Buy Us A Coffee</li>
              <li className="pb-2 ">Instagram</li>
              <li className="pb-2 ">Travel Resources</li>
              <li className="pb-2 ">Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
