import React from "react";
import FeatureSection from "./FeatureSection";

const DeliverySection = () => {
    return (
        <div className="bg-white mt-10 ">
             <h2 className="text-2xl font-bold text-center">আপনি কোথায় যেতে চান?</h2>
             <p className="text-gray-500 text-center ">সহজ উপায়ে ভাড়া করুন</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 p-8">
                {/* Left Side - Image */}
                <div className="w-[350px] md:w-1/2">
                    <img
                        src="https://i.ibb.co.com/R4czVPqQ/bn-poster-webp.png"
                        alt="Girl with phone"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Side - Content */}
               <FeatureSection />
            </div>
        </div>
    );
};

export default DeliverySection;
