import React from "react";

function Skills() {
  return (
    <div className="bg-onyx  lg:h-screen font-Merriweather flex flex-col lg:flex-row lg:justify-center px-10 ">
      <div className="flex  lg:w-1/2 flex-col ">
        <div className="w-28 border-2 h-8 border-gray-500 rounded-lg mb-14 mt-10 flex justify-around items-center">
          <img src="account.png" className="w-5 h-6 " alt="" />
          <h2 className="text-white">My Skills</h2>
        </div>
          <div className="lg:h-screen flex  lg:flex-row gap-8 items-center justify-start flex-wrap lg:justify-start">
              <div className="lg:w-1/4 lg:h-1/3 flex flex-col items-center  justify-center ">
                <div className="border-solid h-4/5 border-white border-2 rounded-3xl justify-center flex items-center hover:border-noiceGreen">
                <img src="react.png" className="w-1/2" alt="" />
                </div>
                <h1 className="text-white mt-6">REACT</h1>
              </div>
              <div className="lg:w-1/4 lg:h-1/3 flex flex-col items-center  justify-center lg:ml-10">
                <div className="border-solid h-4/5 border-white border-2 rounded-3xl justify-center flex items-center hover:border-noiceGreen">
                <img src="wind.png" className="w-1/2" alt="" />
                </div>
                <h1 className="text-white mt-6">TailWindCSS</h1>
              </div>
              <div className="lg:w-1/4 lg:h-1/3 flex flex-col items-center  justify-center lg:ml-10">
                <div className="border-solid h-4/5 border-white border-2 rounded-3xl justify-center flex items-center hover:border-noiceGreen">
                <img src="node-js.png" className="w-1/2" alt="" />
                </div>
                <h1 className="text-white mt-6">NodeJS</h1>
              </div>
              <div className="lg:w-1/4 lg:h-1/3 flex flex-col items-center  justify-center">
                <div className="border-solid h-4/5 border-white border-2 rounded-3xl justify-center flex items-center hover:border-noiceGreen">
                <img src="sql.png" className="w-1/2" alt="" />
                </div>
                <h1 className="text-white mt-6">SQL</h1>
              </div>
              <div className="lg:w-1/4 lg:h-1/3 flex flex-col items-center  justify-center lg:ml-10">
                <div className="border-solid h-4/5 border-white border-2 rounded-3xl justify-center flex items-center hover:border-noiceGreen">
                <img src="js.png" className="w-1/2" alt="" />
                </div>
                <h1 className="text-white mt-6">SQL</h1>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Skills;
