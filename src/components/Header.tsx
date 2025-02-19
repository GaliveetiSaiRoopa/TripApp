import React from "react";
import { navbarData } from "../utils/helpers";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* {desktop} */}
      <div className="fixed top-0 lg:h-[70px] bg-blue-600 w-full px-[80px] py-[10px] items-center text-white font-semibold z-10 lg:block hidden">
        <div className="flex justify-between">
          <div className="cursor-pointer">
            <img
              src="./icons/logo.webp"
              alt="logo"
              className="w-12 h-12 rounded-full"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex gap-10 2xl:text-lg text-base">
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
                  <div className="group-hover:bg-yellow-400 w-full h-[2px] absolute bottom-2 transition-all ease-linear delay-100" />
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
      </div>
      {/* {mobile} */}
    </>
  );
};

export default Header;
