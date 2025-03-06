import React from "react";

const vehicles = [
  { name: "মোটরসাইকেল", image: "https://static.vecteezy.com/system/resources/previews/049/430/486/non_2x/a-man-with-a-beard-riding-a-motorcycle-vector.jpg" },
  { name: "সেডান", image: "https://i.ibb.co.com/0Rz3sdFX/image.png" },
  { name: "১ টন ট্রাক", image: "https://i.ibb.co.com/pBMVw3h2/image.png" },
  { name: "১ টন কাভার্ড ভ্যান", image: "https://i.ibb.co.com/B2tTtxrw/image.png" },
  { name: "১ টন পিক আপ ট্রাক", image: "https://i.ibb.co.com/FLmK64JB/image.png" }
];

const VehicleSelection = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">অনেক প্রকারের যানবাহন</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="p-4 shadow-lg rounded-lg bg-white text-center">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-lg font-semibold">{vehicle.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSelection;
