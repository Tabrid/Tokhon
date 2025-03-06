import React from "react";
import { Rocket, ThumbsUp, Shield, User } from "lucide-react";

const features = [
  {
    icon: <Rocket size={40} className="text-red-500" />,
    title: "দ্রুত বুকিং",
    description: "মাত্র কয়েক সেকেন্ডে আপনার ট্রিপ বুক করুন",
  },
  {
    icon: <ThumbsUp size={40} className="text-red-500" />,
    title: "সেরা রেট",
    description: "মার্কেটের তুলনায় সেরা রেট উপভোগ করুন",
  },
  {
    icon: <Shield size={40} className="text-red-500" />,
    title: "সুরক্ষিত ডেলিভারি",
    description: "আপনার মালামালের নিরাপদ ডেলিভারি নিশ্চিত করুন",
  },
  {
    icon: <User size={40} className="text-red-500" />,
    title: "ভেরিফাইড ড্রাইভার",
    description: "অসংখ্য ভেরিফাইড ড্রাইভার রয়েছে আপনার ট্রিপের অপেক্ষায়",
  },
];

const FeatureSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 shadow-lg rounded-lg bg-white text-center border border-gray-200"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
