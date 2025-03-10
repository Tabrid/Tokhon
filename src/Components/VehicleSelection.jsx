import React from "react";

const vehicles = [
  { name: "অ্যাম্বুলেন্স", image: "https://i.ibb.co.com/23WNnfXh/Ambulance.png" },
  { name: "কার", image: "https://i.ibb.co.com/0Rz3sdFX/image.png" },
  { name: "কভার ভ্যান", image: "https://i.ibb.co.com/pBMVw3h2/image.png" },
  { name: "ট্রাক", image: "https://i.ibb.co.com/B2tTtxrw/image.png" },
  { name: "পিক আপ", image: "https://i.ibb.co.com/1tVVtQzM/truck-rental-company-in-dhaka1670918235-removebg-preview.png" },
  { name: "ট্রেইলার", image: "https://i.ibb.co.com/FLmK64JB/image.png" },
];

const VehicleSelection = () => {
  return (
    <div className="mx-10 py-10">
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
