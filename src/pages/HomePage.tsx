import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { navbarData } from "../utils/helpers";
import PopularDestinations from "./popular-destinations/PopularDestinations";

const HomePage = () => {
  const navigate = useNavigate();
  const words = [
    "Adventure",
    "Family",
    "Road",
    "Solo",
    "Island",
    "Wellness",
    "Honeymoon",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [params, setParams] = useState({ place: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div
        className="min-h-screen w-full relative pt-[80px] bg-cover bg-center bg-no-repeat flex flex-col gap-10"
        style={{ backgroundImage: "url('/icons/Homebackground.webp')" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col gap-8">
          <h1 className=" font-bold 2xl:text-6xl text-center text-blue-600 lg:text-5xl md:text-4xl 2xl:w-[1060px] lg:w-[850px] md:w-[400px] text-4xl">
            Plan Your Next{" "}
            <span className="text-yellow-500 2xl:text-7xl lg:text-6xl md:text-5xl text-4xl">
              {" "}
              {words[index]}{" "}
            </span>{" "}
            Trip
          </h1>

          <div className="2xl:w-[650px] lg:w-[520px] w-[400px] bg-white flex justify-between h-16 py-2 rounded-full px-4 shadow-lg shadow-blue-300">
            <input
              className="w-3/4 focus:outline-none"
              type="text"
              onChange={handleChange}
              name="place"
              value={params?.place}
              placeholder="Find your next destination...."
            />
            <button className="bg-blue-700 text-white px-8 py-1 font-semibold rounded-full">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="px-28 py-16">
        <PopularDestinations />
      </div>
    </>
  );
};

export default HomePage;
