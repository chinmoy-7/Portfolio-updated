import React from "react";

function About() {
  return (
    <div className="bg-onyx  h-screen font-Merriweather flex flex-col lg:flex-row lg:justify-center px-10 ">
      <div className="flex  lg:w-1/2 flex-col ">
        <div className="w-28 border-2 h-8 border-gray-500 rounded-lg mb-14 mt-10 flex justify-around items-center">
          <img src="account.png" className="w-5 h-6 " alt="" />
          <h2 className="text-white">About</h2>
        </div>
        <h1 className="text-white text-2xl lg:text-4xl ">
          Coding: Unleashing Tomorrow's Limitless{" "}
          <span className="text-noiceGreen">Techno-Wizardry</span>.
        </h1>
        <p className="text-justify mt-20 text-sm lg:text-xl text-gray-500 leading-loose">
          A creative and diligent aspiring full-stack developer with a
          specialization in Mern Stack development. Self-believing and
          enthusiastic, with a keen interest in building and designing Backend
          and Frontend. Looking forward to sharpening my skills in a challenging
          environment. I guarantee enthusiasm in work and fulfilling my projects
          with inexpressible efforts. The web can sometimes be indistinguishable
          from magic, but I have the knowledge and patience required to make
          just about anything.
        </p>
      </div>
    </div>
  );
}

export default About;
