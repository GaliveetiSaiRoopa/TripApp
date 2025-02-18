import React from "react";
import { useNavigate } from "react-router";
import { navbarData } from "../utils/helpers";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full relative">
      <div className="relative">
        <div className="fixed top-0 h-[70px] bg-blue-600 w-full flex justify-between px-[80px] py-[10px] items-center text-white font-semibold">
          <div className="cursor-pointer">
            <img
              src="./icons/logo.webp"
              alt="logo"
              className="w-12 h-12 rounded-full"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex gap-10">
            <div className="flex gap-10">
              {navbarData.map((item: any) => (
                <div
                  className="group relative cursor-pointer"
                  key={item.name}
                  onClick={() => navigate(item.link)}
                >
                  <p className="group-hover:text-yellow-400 font-semibold p-2">
                    {item.name}
                  </p>
                  <div className="group-hover:bg-yellow-400 w-full h-[2px] absolute bottom-2 transition-all delay-100" />
                </div>
              ))}
            </div>

            <div className="cursor-pointer relative group">
              <p className="group-hover:text-yellow-400 font-semibold p-2">
                Login/SignUp
              </p>
              <div className="group-hover:bg-yellow-400 w-full h-[2px] absolute bottom-2 transition-all delay-100" />
            </div>
          </div>
        </div>
        <img
          src="./icons/Homebackground.webp"
          alt="Background"
          className="w-full h-screen inset-0"
        />
        {/* navbar */}
      </div>
    </div>
  );
};

export default HomePage;
