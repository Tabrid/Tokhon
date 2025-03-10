import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-white py-10 px-6 md:px-20 text-gray-800 border-t">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                {/* Column 1 - সার্ভিস */}
                <div>
                    <h3 className="font-bold mb-3">সার্ভিস</h3>
                    <ul className="space-y-2">
                        <li>শিপিং</li>
                        <li>কুরিয়ার</li>
                        <li>ফ্রেইট</li>
                        <li>এক্সপ্রেস</li>
                        <li>নগরীয় ডেলিভারি</li>
                    </ul>
                </div>

                {/* Column 2 - কোম্পানি */}
                <div>
                    <h3 className="font-bold mb-3">কোম্পানি</h3>
                    <ul className="space-y-2">
                        <li>আমাদের সম্পর্কে</li>
                        <li>ক্যারিয়ার</li>
                        <li>গোপনীয়তা নীতি</li>
                        <li>শর্তাবলী</li>
                    </ul>
                </div>

                {/* Column 3 - নীতিমালা */}
                <div>
                    <h3 className="font-bold mb-3">নীতিমালা</h3>
                    <ul className="space-y-2">
                        <li>নতুনত্ব - শিপিং</li>
                        <li>নতুনত্ব - ট্রাক ভাড়া</li>
                        <li>নিরাপত্তা পলিসি</li>
                    </ul>
                </div>

                {/* Column 4 - যোগাযোগ */}
                <div>
                    <h3 className="font-bold mb-3">যোগাযোগ</h3>
                    <p>customercare@tokhon.com</p>
                    <p>+82 10-5957-5040</p>
                    <div className="flex space-x-4 mt-3 text-red-500 text-xl">
                        <FaFacebook />
                        <FaYoutube />
                        <FaLinkedin />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center border-t pt-5 flex flex-col md:flex-row lg:flex-row justify-between">
                <div className="flex flex-col items-center">
                    <img
                        className="h-12"
                        src="https://i.ibb.co.com/tTcSCpWX/Group-2-2.png"
                        alt="logo"
                    />
                    <p className="text-gray-600">কপিরাইট © Tokhon.com | 2025</p>
                </div>

                {/* Download Section */}
                <div className="mt-5">
                    <h4 className="font-bold">ডাউনলোড করুন Tokhon অ্যাপ</h4>
                    <div className="flex justify-center space-x-4 mt-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                            alt="Google Play"
                            className="h-10"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                            alt="Google Play"
                            className="h-10"
                        />

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
