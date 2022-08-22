import Image from "next/image";
import React from "react";
import foodImg from "../public/assets/projects/foodApp.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const food = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={foodImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Food App</h2>
          <h3>React JS / CSS / Context Api</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app shows how to use context api to pass data from one
            component to another component. Built with React JS and CSS.
          </p>
          <a
            href="https://github.com/Geoffrey2002/Food-App"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://food-app-dun.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 py-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Context Api
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default food;
