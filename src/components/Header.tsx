"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [clientSideData, setClientSideData] = useState<null | number>(null);

  useEffect(() => {
    setClientSideData(Date.now()); // Client side specific code
  }, []);

  return (
    <div className="w-full px-6 h-[80px] bg-[#044E83] flex justify-between items-center sticky top-0 left-0 z-[999]">
      <div>
        <Image
          src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png"
          alt="bg_house"
          width={90}
          height={90}
          className="mt-20"
        />
      </div>
      <div>
        <h2 className="text-[#B9D8F3] text-2xl font-bold tracking-tight">
          Tuition Free Education Program on Latest Technologies
        </h2>
      </div>
      <div>
        <ul className="flex gap-10 justify-center items-center text-lg   text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>works</li>
          <li>Courses</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
// https://www.governorsindh.com/bg_house.jpg
