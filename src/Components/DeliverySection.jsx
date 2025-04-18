import React from "react";
import { Rocket, ThumbsUp, Shield, User } from "lucide-react";

const features = [
    {
        icon: <img src="https://i.ibb.co.com/mrdQq6Qr/icons8-fast-delivery-48-1.png" alt="" />, 
        title: "দ্রুত & সহজ বুকিং",
        description: "সহজেই এবং দ্রুত গাড়ি বুকিং করুন অপেক্ষার ঝামেলা নেই",
    },
    {
        icon: <img src="https://i.ibb.co.com/G3c90wNT/icons8-ticket-purchase-48.png" alt="" />, 
        title: "ডেলিভারি প্রতিশ্রুতি",
        description: "আপনার মূল্যবান পণ্য দ্রুত, নিরাপদ ও নির্ভরযোগ্যভাবে গন্তব্যে পৌঁছাতে অঙ্গীকারবদ্ধ",
    },
    {
        icon: <img src="https://i.ibb.co.com/BHd23WSr/icons8-good-48-1.png" alt="" />,
        title: "মানসম্পন্ন সার্ভিস",
        description: "প্রতিযোগিতামূলক দামে সেরা পরিষেবা উপভোগ করুন",
    },
    {
        icon: <img src="https://i.ibb.co.com/Mx5gHn3z/driver-icone.png" alt="" />,
        title: "বিশ্বস্ত & যাচাইকৃত চালক",
        description: "অভিজ্ঞ ও প্রশিক্ষিত চালকদের সাথে নিরাপদে আস্থাশীলভাবে যাত্রা করুন",
    },
];

const DeliverySection = () => {
    return (
        <div className="bg-white mt-10 text-center">
            <h2 className="text-3xl font-bold mb-2">যখন অ্যাপ তখন!</h2>
            <p className="text-gray-600 mb-8">আমাদের অ্যাপ থেকে খুব সহজে গাড়ি ভাড়া করুন</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 lg:mx-10 md:mx-10 mx-2">
                {/* Left Features */}
                <div className="flex flex-col space-y-6 md:w-1/3 lg:w-1/3 w-full">
                    {features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="p-6 shadow-lg rounded-lg bg-white text-center border border-gray-200">
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Center Image */}
                <div className="md:w-1/3 lg:w-1/3 w-full flex justify-center items-center bg-[#d90166]/20 p-7 rounded-4xl">
                    <img
                        src="App web transparent.png"
                        alt="App Preview"
                        className="rounded-lg shadow-lg h-[350px]"
                    />
                </div>

                {/* Right Features */}
                <div className="flex flex-col space-y-6 md:w-1/3 lg:w-1/3 w-full">
                    {features.slice(2, 4).map((feature, index) => (
                        <div key={index} className="p-6 shadow-lg rounded-lg bg-white text-center border border-gray-200">
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeliverySection;
