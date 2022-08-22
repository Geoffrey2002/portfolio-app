import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>

          <p className="py-2 text-gray-600">
            {" "}
            I am a self-taught web developer with a passion for creating
            beautiful and functional websites. I have a strong passion for
            creating clean and functional websites. I have spent the last 2
            years learning to code . I have always had a knack for technology
            and working with computers. In 2019 I started working with HTML and
            CSS to make some minor edits on a small business website that I was
            operating. What I thought was just a few small edits turned into a
            love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I am now spending my time
            building projects with React JS, Firebase, and learning new
            technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
