import React from "react";

function Contact() {
  return (
    <div className="bg-onyx  lg:h-screen font-Merriweather flex flex-col lg:flex-row lg:justify-center px-10 ">
      <div className="flex  lg:w-1/2 flex-col ">
        <div className="w-28 border-2 h-8 border-gray-500 rounded-lg mb-14 mt-10 flex justify-around items-center">
          <img src="account.png" className="w-5 h-6 " alt="" />
          <h2 className="text-white">Contact</h2>
        </div>
            <div className=" lg:h-screen flex flex-col gap-10 lg:gap-16 text-white">
                <h1 className="text-white lg:text-5xl text-4xl">Let's Work <span className="text-noiceGreen">Together</span></h1>
                <h5 className="text-white  lg:text-xl">chinmoy.dehingia@gmail.com</h5>
                <form action="/" className="flex text-white flex-wrap gap-6 ">
                    <div className="flex flex-col lg:w-2/5 w-full gap-2">
                        <label htmlFor="name" className="text-md">Full Name <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Your Full Name" className="bg-onyx border-b-2 pb-1 focus:border-sky-500 focus:outline-none"/>
                    </div>
                    <div className="flex flex-col lg:w-2/5 w-full gap-2">
                        <label htmlFor="email" className="text-md">Email <span className="text-red-500">*</span></label>
                        <input type="email" placeholder="Your Email" className="bg-onyx border-b-2  pb-1 focus:border-sky-500 focus:outline-none"/>
                    </div>
                    <div className="flex flex-col lg:w-2/5 w-full gap-2">
                        <label htmlFor="phone" className="text-md">Phone (Optional)</label>
                        <input type="phone" placeholder="Your Phone No" className="bg-onyx border-b-2  pb-1 focus:border-sky-500 focus:outline-none"/>
                    </div>
                    <div className="flex flex-col lg:w-2/5 w-full gap-2">
                        <label htmlFor="budget" className="text-md">Budget <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Your budget for the project" className="bg-onyx border-b-2  pb-1 focus:border-sky-500 focus:outline-none"/>
                    </div>
                    <div className="flex flex-col lg:w-5/6 w-full gap-2">
                        <label htmlFor="message" className="text-md">Message <span className="text-red-500">*</span></label>
                        <textarea name="message" id="" cols="30" placeholder="Write your message here" rows="5" className="bg-onyx border-b-2  pb-1 focus:border-sky-500 focus:outline-none"></textarea>
                        {/* <input type="text" placeholder="Your budget for the project" className="bg-onyx border-b-2  pb-1 focus:border-sky-500 focus:outline-none"/> */}
                    </div>
                    <button type="button" className="bg-noiceGreen text-black text-sm w-1/2 lg:w-1/4 h-10 lg:h-10 rounded-xl font-semibold">SEND MESSAGE</button>
                </form>
            </div>
      </div>
    </div>
  );
}

export default Contact;
