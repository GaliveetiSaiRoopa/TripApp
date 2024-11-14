import React, { useState } from "react";
import bgImage from "../../Assests/Icons/bg.webp";
import logo from "../../Assests/Icons/logo.svg";

const Home = () => {
  const placesArray = [
    { value: "hotel", name: "Hotel" },
    { value: "tour", name: "Tour" },
    { value: "activity", name: "Activity" },
    { value: "holyday_rental", name: "Holyday Rentels" },
    { value: "car", name: "Car" },
    { value: "cruise", name: "Cruise" },
    { value: "flights", name: "Flights" },
  ];

  const [placeDetails, setPlaceDetails] = useState("hotel");
  const [guest, setGuest] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={bgImage}
        alt="Background Image"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* <!-- Gradient overlay div --> */}
      <div className="absolute inset-0 bg-gradient-to-l from-blue-400 to-indigo-600 opacity-5"></div>

      <div className="absolute top-4 left-4 w-full px-4 flex justify-between">
        <div className="flex gap-4 w-[60%]">
          <img src={logo} alt="logo" />
          <div className="flex gap-4 pt-3 justify-center">
            <p className="text-white font-bold text-base">Home</p>
            <p className="text-white font-bold text-base">Categories</p>
            <p className="text-white font-bold text-base">Destinations</p>
            <p className="text-white font-bold text-base">Blog</p>
            <p className="text-white font-bold text-base">Dashboard</p>
            <p className="text-white font-bold text-base">Contact</p>
          </div>
        </div>
        <div className="flex gap-4 w-[40%]">
          <div className="flex gap-3 pt-3 justify-center">
            <p className="text-white font-bold text-base">USD</p>
            <p className="text-white font-extralight">|</p>
            <p className="text-white font-bold text-base">United States</p>
          </div>
          <div className="flex gap-3">
            <button className="w-44 h-12 bg-white text-indigo-950 rounded-md text-sm px-6">
              Become An Expert
            </button>
            <button className="w-44 h-12 border border-white rounded-md text-sm px-6 text-white font-semibold">
              Sign In / Register
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center absolute top-[30%] gap-3">
        <h1 className="font-bold text-6xl text-white">
          Find Next Place To Visit
        </h1>
        <p className="text-white">Discover amzaing places at exclusive deals</p>

        <div className="flex gap-3 pt-9 px-2 pb-1">
          {placesArray.map((item: any) => (
            <button
              onClick={() => setPlaceDetails(item.value)}
              className={`text-white font-semibold text-base pb-1 px-3 ${
                placeDetails === item.value ? "border-b border-white " : ""
              } hover:text-blue-800`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="w-[65%] h-20 rounded-full bg-white divide-x divide-cyan-800 flex items-start p-4">
          <div className="flex flex-col w-[23%] items-start px-6">
            <label className="">Location</label>
            <input
              name=""
              type="text"
              placeholder="where are you going?"
              className="border-none "
            />
          </div>
          <div className="flex flex-col w-[30%] items-start px-6">
            <label>Check in - Check out</label>
            <input
              name=""
              type="text"
              placeholder="Check in - Check out"
              className="border-none"
            />
          </div>
          <div className="flex flex-col w-[35%] items-start px-6 relative">
            <label>Guest</label>
            <button
              onClick={() => setGuest(!guest)}
              className="text-gray-400 cursor-text"
            >
              adults-{adults} children-{children} rooms-{rooms}
            </button>

            {guest && (
              <div className="absolute top-[-347%] bg-white w-[300px] left-[-1%] divide-y">
                <div className="h-[50px] p-2 flex justify-between">
                  <div>Adults</div>
                  <div className="flex">
                    <button className="w-8 h-8 border">+</button>
                    <div className="w-8 h-8 border">{adults}</div>
                    <button className="w-8 h-8 border">-</button>
                  </div>
                </div>
                <div className="h-[50px] p-2 flex justify-between">
                  <div>Children</div>
                  <div className="flex">
                    <div className="w-8 h-8 border">+</div>
                    <div className="w-8 h-8 border">{children}</div>
                    <div className="w-8 h-8 border">-</div>
                  </div>
                </div>
                <div className="h-[50px] p-2 flex justify-between">
                  <div>Rooms</div>
                  <div className="flex">
                    <div className="w-8 h-8 border">+</div>
                    <div className="w-8 h-8 border">{rooms}</div>
                    <div className="w-8 h-8 border">-</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="h-full w-[16%] px-6 bg-blue-700 text-white rounded-full font-semibold">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
