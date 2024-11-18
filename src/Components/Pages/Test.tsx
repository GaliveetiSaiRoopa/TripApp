import React from "react";

const Test = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute right-[5%] bottom-[2%] w-40 h-40 bg-red-500"></div>
      <div className="absolute w-[1100px] h-[400px] bg-blue-400 bottom-[11%] right-[10%]"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-400 left-[22%] bottom-[16%]"></div>
    </div>
  );
};

export default Test;
