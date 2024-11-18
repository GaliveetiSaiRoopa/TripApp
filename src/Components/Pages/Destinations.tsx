import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";

const Destinations = () => {
  const cards = [
    // { id: 1, color: "bg-blue-400", name: "Rome" },
    // { id: 2, color: "bg-violet-400", name: "Goa" },
    // { id: 3, color: "bg-gray-300", name: "Italy" },
    // { id: 4, color: "bg-red-300", name: "Ooty" },
    // { id: 5, color: "bg-purple-300", name: "France" },
    // { id: 6, color: "bg-slate-500", name: "Pondi" },
    // { id: 7, color: "bg-indigo-400", name: "Greece" },
    {
      id: 1,
      color: "bg-blue-400",
      name: "Rome",
      details: "14 hotels- 22 cars- 18 tours- 95 activities",
    },
    {
      id: 2,
      color: "bg-purple-400",
      name: "Goa",
      details: "20 hotels- 24 cars- 24 tours- 90 activities",
    },
    {
      id: 3,
      color: "bg-blue-400",
      name: "Italy",
      details: "18 hotels- 20 cars- 17 tours- 98 activities",
    },
    {
      id: 4,
      color: "bg-purple-400",
      name: "Ooty",
      details: "19 hotels- 25 cars- 14 tours- 80 activities",
    },
    {
      id: 5,
      color: "bg-blue-400",
      name: "France",
      details: "14 hotels- 22 cars- 18 tours- 95 activities",
    },
    {
      id: 6,
      color: "bg-purple-400",
      name: "Pondi",
      details: "15 hotels- 26 cars- 19 tours- 70 activities",
    },
    {
      id: 7,
      color: "bg-blue-400",
      name: "Greece",
      details: "25 hotels- 28 cars- 24 tours- 105 activities",
    },
    {
      id: 8,
      color: "bg-purple-400",
      name: "Vietnam",
      details: "26 hotels- 30 cars- 25 tours- 85 activities",
    },
  ];

  const [hoverTours, sethoverTours] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden ml-28">
      <div className="flex justify-between pt-32 pb-10">
        <div className="flex flex-col  items-start gap-3">
          <h1 className="text-2xl font-bold text-blue-950">
            Popular Destinations
          </h1>
          <p className="text-gray-400">
            These popular destinations have a lot to offer
          </p>
        </div>
        <div className="bg-blue-100 h-10 px-4  mr-32 rounded-md  flex items-center text-lg font-medium text-blue-950">
          View Destinations
        </div>
      </div>
      <div className="w-full pb-8 relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          //   loop={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          <div className="flex gap-5">
            {cards.map((item: any) => (
              // <SwiperSlide key={item.id}>
              //   <div
              //     className={`w-80 h-96 ${
              //       item.color
              //     } rounded-md ${"flex justify-center items-end pb-4"} `}
              //   >
              //     <div className="px-2 text-white font-semibold pt-8 text-sm">
              //       {item.details}
              //     </div>
              //     <div className="flex flex-col items-center gap-4 pb-5 px-2 -translate-y-6">
              //       <div className="text-white font-bold text-3xl">
              //         {item.name}
              //       </div>
              //       <button className="w-64 h-12 bg-white rounded-md flex items-center justify-center text-indigo-950 hover:bg-blue-700 hover:text-white">
              //         Discover
              //       </button>
              //     </div>
              //   </div>
              // </SwiperSlide>
              //   <div className="w-56 h-56 bg-slate-300 group">
              //     <p className="opacity-0 group-hover:opacity-100 transition delay-150">sairoopa</p>
              //   </div>
              <SwiperSlide key={item?.id}>
                <div
                  className={`w-80 h-96 ${item.color} rounded-md  group transition duration-300 group-hover:brightness-75`}
                >
                  <div className="flex flex-col justify-between px-2 h-full">
                    <div className=" text-white font-semibold pt-6 text-sm opacity-0 group-hover:opacity-100 transition delay-150 group-hover:brightness-100">
                      {item.details}
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-white font-bold text-3xl translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-linear group-hover:brightness-100">
                        {item.name}
                      </div>
                      <button className="w-64 h-12 bg-white rounded-md flex items-center justify-center text-indigo-950 hover:bg-blue-700 hover:text-white translate-y-[100%] opacity-1 group-hover:opacity-100 group-hover:-translate-y-3  transition-all duration-500 ease-linear group-hover:brightness-150">
                        Discover
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>

          <button className=" rounded-full swiper-button-next p-7 h-5 w-5 size-0 text-white hover: bg-blue-500" />
          <button className=" rounded-full swiper-button-prev p-7 h-5 w-5 size-0 text-white hover: bg-blue-500" />
        </Swiper>
      </div>
    </div>
  );
};

export default Destinations;
