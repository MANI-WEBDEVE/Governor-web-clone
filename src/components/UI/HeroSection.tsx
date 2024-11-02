import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full overflow-hidden  h-[120vh]  ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://www.governorsindh.com/bg_house.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.3",
          }}
        />
        <div className="flex w-full h-full items-center justify-between  px-8 overflow-hidden">
          <div className="relative z-10 text-[#044E83] w-[40%]  h-full flex flex-col gap-5 justify-center mt-20">
            <div>
              <h1 className="text-[60px] font-extrabold leading-[60px]  ">
                Governor Sindh
              </h1>
              <h2 className="text-[44px] mt-4 leading-[40px] font-normal">
                Kamran Khan Tessori
              </h2>
            </div>
            <h3 className="text-[#2EB6E8] text-[43px] leading-[3.2rem]  font-extrabold">
              Certified Cloud <br /> Applied Generative AI <br /> Engineer
              (GenEng)
            </h3>
            <div  className="text-2xl font-extrabold tracking-[0.01rem]">
              <p className="mb-4">Earn up to $5,000 / month</p>
              <p>Now admissions are open in Hyderabad</p>
            </div>
            <div className="flex gap-20    mt-6 mb-10 ">
                <div >
                <button className="px-12 uppercase py-3  rounded-lg  bg-[#044E83] text-white text-lg font-extrabold">Apply Now</button>
                </div>
                <div className="text-center">
                <h3 className="text-[36px] leading-[30px] font-extrabold " >505,550</h3>
                <p className="text-lg font-normal  mt-2">Accepted Applications</p>
                </div>
            </div>
          </div>
          <div className=" z-[98]  w-[70%] h-full flex items-center justify-end absolute right-[-21%] mt-16 ">
            <img
              src="https://www.governorsindh.com/_next/static/media/cover.1d863e39.png"
              className="w-[1200px] object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
