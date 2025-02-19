import React, { useState } from "react";
import SelectInput from "../../common/SelectInput";

const PopularDestinations = () => {
  const [params, setParams] = useState({ destinations: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold text-blue-700">
          Discover Popular Destinations
        </h1>

        <div className="w-[200px]">
          <SelectInput
            options={[
              { name: "Popular Cities", value: "cities" },
              { name: "Beaches", value: "beaches" },
              { name: "Waterfalls", value: "waterfalls" },
              { name: "Holy Places", value: "holyplaces" },
              { nanme: "Mountains", value: "mountains" },
              { name: "Treks", value: "treks" },
            ]}
            name="destinations"
            value={params?.destinations}
            handleChange={handleChange}
            // bgColor="#3F00FF"
            label="Destinations"
          />
        </div>
      </div>

      <div className="">
        <div className="w-20 h-20 border"></div>
      </div>
    </div>
  );
};

export default PopularDestinations;
