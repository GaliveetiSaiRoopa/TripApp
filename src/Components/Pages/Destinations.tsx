import { colors } from "@mui/material";
import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import "swiper/css";

const Destinations = () => {
  const cards = [
    { id: 1, color: "bg-blue-400" },
    { id: 2, color: "bg-violet-400" },
    { id: 3, color: "bg-gray-300" },
    { id: 4, color: "bg-red-300" },
    { id: 5, color: "bg-purple-300" },
    { id: 6, color: "bg-slate-500" },
    { id: 7, color: "bg-indigo-400" },
  ];
  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-between pt-32 pb-10">
        <div className="flex flex-col ml-28 items-start gap-3">
          <h1 className="text-2xl font-bold text-blue-950">
            Popular Destinations
          </h1>
          <p className="text-gray-400">
            These popular destinations have a lot to offer
          </p>
        </div>
        <div className="bg-blue-100 h-10 mr-32 px-4 rounded-md  flex items-center text-lg font-medium text-blue-950">
          View Destinations
        </div>
      </div>
      {/* <div className="ml-32 flex gap-6 w-full pb-8">
        {cards.map((item: any) => (
          <div className={`w-56 h-60 ${item.color}`} key={item.id}></div>
        ))}
      </div> */}
      <div className="ml-32 w-full pb-8 relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 5 },
          }}
          //   style={{
          //
          //      transition-duration: `0ms`,
          //       transition-delay: `0ms`
          //   }}
          style={{
            transform: `translate3d(-194.4px, 0px, 0px)`,
          }}
        >
          {cards.map((item: any) => (
            <SwiperSlide key={item.id}>
              <div className={`w-56 h-60 ${item.color}`}></div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-gray-800 cursor-pointer z-50">
          ➔
        </div>
        <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-gray-800 cursor-pointer z-50">
          ➔
        </div>
      </div>
    </div>
  );
};

export default Destinations;
