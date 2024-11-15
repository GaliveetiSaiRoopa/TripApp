import React, { useState } from "react";
import bgImage from "../../Assests/Icons/bg.webp";
import logo from "../../Assests/Icons/logo.svg";
import { ClickAwayListener } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Destinations from "./Destinations";

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
  const [activeButton, setActiveButton] = useState<any>(null);

  const handleGuests = (typeofguest: string, operation: string) => {
    setActiveButton(`${typeofguest}-${operation}`);
    if (typeofguest === "adults") {
      if (operation === "add") {
        setAdults((prev: any) => prev + 1);
      } else if (operation === "sub" && adults > 0) {
        setAdults((prev: any) => prev - 1);
      }
    } else if (typeofguest === "children") {
      if (operation === "add") {
        setChildren((prev: any) => prev + 1);
      } else if (operation === "sub" && children > 0) {
        setChildren((prev: any) => prev - 1);
      }
    } else if (typeofguest === "rooms") {
      if (operation === "add") {
        setRooms((prev: any) => prev + 1);
      } else if (operation === "sub" && rooms > 0) {
        setRooms((prev: any) => prev - 1);
      }
    }
    // setTimeout(() => {});
  };

  const handleClickAway = () => {
    setGuest(false);
  };

  return (
    <>
      <div className="sticky top-0 bg-purple-400/[55] z-10 w-full">
        <div className=" px-4 flex justify-between py-4 items-center">
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
      </div>
      <div className="relative w-full min-h-screen">
        <img
          src={bgImage}
          alt="Background Image"
          className="absolute inset-0 object-cover w-full h-full top-0"
        />

        {/* <!-- Gradient overlay div --> */}
        <div className="absolute inset-0 bg-gradient-to-l from-blue-400 to-indigo-600 opacity-20"></div>

        {/* <div className="sticky top-0 bg-purple-400/[55] z-10 w-full">
          <div className=" px-4 flex justify-between py-4 items-center">
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
        </div> */}

        <div className="flex flex-col w-full items-center absolute top-[30%] gap-3">
          <h1 className="font-bold text-6xl text-white">
            Find Next Place To Visit
          </h1>
          <p className="text-white">
            Discover amzaing places at exclusive deals
          </p>

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
              {/* <DatePicker /> */}
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
                <ClickAwayListener
                  mouseEvent="onMouseDown"
                  touchEvent="onTouchStart"
                  onClickAway={handleClickAway}
                >
                  <div
                    className="absolute top-0 left-0 shadow-lg min-w-[400px] p-30 rounded-md bg-white"
                    style={{
                      inset: `auto auto 0px 0px`,
                      transform: `translate3d(9px, -70px, 0px)`,
                    }}
                  >
                    <div className=" divide-y">
                      <div className="h-[60px] px-6 flex justify-between items-center pt-2 mb-4">
                        <div>Adults</div>
                        <div className="flex gap-3">
                          <div
                            className={`w-10 h-10 border cursor-pointer border-blue-600 text-blue-600 text-xl rounded-md flex items-center justify-center ${
                              activeButton === "adults-add" ? "bg-blue-400" : ""
                            }`}
                            onClick={() => handleGuests("adults", "add")}
                          >
                            +
                          </div>
                          <div className="w-10 h-10 flex items-center justify-center text-lg">
                            {adults}
                          </div>
                          <div
                            className={`w-10 h-10 border cursor-pointer border-blue-600 text-blue-600 text-xl rounded-md flex items-center justify-center ${
                              activeButton === "adults-sub" ? "bg-blue-400" : ""
                            }`}
                            onClick={() => handleGuests("adults", "sub")}
                          >
                            -
                          </div>
                        </div>
                      </div>
                      <div className="h-[60px] px-6 flex justify-between items-center mb-4 pt-2">
                        <div>Children</div>
                        <div className="flex gap-3">
                          <div
                            className={`w-10 h-10 border cursor-pointer border-blue-600 text-blue-600 text-xl rounded-md flex items-center justify-center ${
                              activeButton === "children-add"
                                ? "bg-blue-400"
                                : ""
                            }`}
                            onClick={() => handleGuests("children", "add")}
                          >
                            +
                          </div>
                          <div className="w-10 h-10  flex items-center justify-center text-lg">
                            {children}
                          </div>
                          <div
                            className={`w-10 h-10 border cursor-pointer border-blue-600 text-blue-600 text-xl rounded-md flex items-center justify-center ${
                              activeButton === "children-sub"
                                ? "bg-blue-400"
                                : ""
                            }`}
                            onClick={() => handleGuests("children", "sub")}
                          >
                            -
                          </div>
                        </div>
                      </div>
                      <div className="h-[60px] px-6 flex justify-between items-center mb-4 pt-2">
                        <div>Rooms</div>
                        <div className="flex gap-3">
                          <div
                            className={`w-10 h-10 border cursor-pointer border-blue-600 text-blue-600 text-xl rounded-md flex items-center justify-center ${
                              activeButton === "rooms-add" ? "bg-blue-400" : ""
                            }`}
                            onClick={() => handleGuests("rooms", "add")}
                          >
                            +
                          </div>
                          <div className="w-10 h-10 flex items-center justify-center text-lg">
                            {rooms}
                          </div>
                          <div
                            className={`w-10 h-10 border cursor-pointer border-blue-600 text-blue-600 text-xl rounded-md flex items-center justify-center ${
                              activeButton === "rooms-sub" ? "bg-blue-400" : ""
                            }`}
                            onClick={() => handleGuests("rooms", "sub")}
                          >
                            -
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ClickAwayListener>
              )}
            </div>
            <button className="h-full w-[16%] px-6 bg-blue-700 text-white rounded-full font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>

      <Destinations/>
    </>
  );
};

export default Home;
