"use client";
import React from "react";
// import Swiper styles
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const CourseInfo = () => {
  return (
    <div className="w-full h-full ">
      <div className="pt-20">
        <h2 className="text-[36px] font-[750] tracking-tighter px-10 text-center text-[#044E83]">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h2>
      </div>
      <div>
        <p className="text-start px-10 mt-10 text-xl text-[#69696a]">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
      </div>
      <div className="flex justify-center gap-10 mt-10 mb-10 ">
        <div className="w-[400px] h-[290px]  overflow-hidden shadow-2xl shadow-black">
          <img
            src="https://www.governorsindh.com/_next/static/media/imageWebsite.5c6ae62f.jpg"
            alt=""
            className="object-center"
          />
        </div>
        <div className="w-[400px] h-[290px]  overflow-hidden shadow-2xl shadow-black">
          <img
            src="https://www.governorsindh.com/_next/static/media/imageWebsite2.a102c7b5.jpg"
            alt=""
            className="object-center"
          />
        </div>
        <div className="w-[400px] h-[290px]  overflow-hidden shadow-2xl shadow-black">
          <img
            src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
            alt=""
            className="object-center"
          />
        </div>
      </div>
      <div className=" h-screen  w-full px-10 ">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
        //   autoplay={{
        //     delay: 1000,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        //   }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-full  mt-10 "
        >
          <SwiperSlide>
            <div className="flex gap-2 items-end justify-start">
              <img
                src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
                alt=""
                className="object-center hover:shadow-2xl hover:shadow-blue-500 transition-shadow duration-300 "
              />
            
              <img
                src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
                alt=""
                className="object-center hover:shadow-2xl hover:shadow-blue-500 transition-shadow duration-300 "
                />
                </div>
              
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-2 items-end justify-start">
              <img
                src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
                alt=""
                className="object-center hover:shadow-2xl hover:shadow-blue-500 transition-shadow duration-300 "
              />
            
              <img
                src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
                alt=""
                className="object-center hover:shadow-2xl hover:shadow-blue-500 transition-shadow duration-300 "
                />
                </div>
              
          </SwiperSlide>
          {/* <SwiperSlide>
            <img
              src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
              alt=""
              className="object-center hover:shadow-2xl hover:shadow-blue-500 transition-shadow duration-300 "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
              alt=""
              className="object-center hover:shadow-2xl hover:shadow-blue-500 transition-shadow duration-300 "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
              alt=""
              className="object-center hover:shadow-2xl hover:shadow-blue-500 transition-shadow duration-300 "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
              alt=""
              className="object-center hover:shadow-2xl hover:shadow-blue-500 transition-shadow duration-300 "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
              alt=""
              className="object-center hover:shadow-2xl hover:shadow-blue-500 transition-shadow duration-300 "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
              alt=""
              className="object-center hover:shadow-2xl hover:shadow-blue-500 transition-shadow duration-300 "
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default CourseInfo;
