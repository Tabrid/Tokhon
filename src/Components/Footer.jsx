import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-white py-10 px-6 md:px-20 text-gray-800 border-t">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm">
                {/* Column 1 - সার্ভিস */}
                <div>
                    <div className=" text-center">
                        <div className="flex flex-col items-center gap-2">
                            <img
                                className="h-12"
                                src="https://i.ibb.co.com/wZ2hvBVs/Group-3-1.png"
                                alt="logo"
                            />
                            <p className="text-gray-600">কপিরাইট © Tokhon.com | 2025</p>
                        </div>

                        {/* Download Section */}
                        <div className="mt-5">
                            <h4 className="font-bold">ডাউনলোড করুন Tokhon অ্যাপ</h4>
                            <div className="flex justify-center space-x-4 mt-2">
                                <div>
                                    <h1 className="mb-2">কাস্টমার অ্যাপ</h1>
                                    <a href="https://play.google.com/store/apps/details?id=com.goridelagbeapp.customer">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                                            alt="Google Play"
                                            className="h-10"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <h1 className="mb-2">পার্টনার অ্যাপ</h1>
                                    <a href="https://play.google.com/store/apps/details?id=com.gorideapp.driver">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                                            alt="Google Play"
                                            className="h-10"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:ml-10">
                    <h3 className="font-bold mb-3">প্রতিষ্ঠান</h3>
                    <ul className="space-y-2">
                        <li>আমাদের সম্পর্কে </li>
                        <li>যোগাযোগ</li>
                        <li>আমাদের কাজ</li>
                        <li>ব্লগ</li>
                        <li>সাইটম্যাপ</li>
                    </ul>
                </div>

                {/* Column 2 - কোম্পানি */}
                <div>
                    <h3 className="font-bold mb-3">সেবাসমূহ</h3>
                    <ul className="space-y-2">
                        <li>শিফটিং</li>
                        <li>কুরিয়ার</li>
                        <li>ফ্রেইট</li>
                        <li>এক্সপ্রেস</li>
                        <li>ডেলিভারি</li>
                    </ul>
                </div>

                {/* Column 3 - নীতিমালা */}
                <div>
                    <h3 className="font-bold mb-3">নীতিমালা</h3>
                    <ul className="space-y-2">
                        <li>কাস্টমার</li>
                        <li>পার্টনার</li>
                        <li>গোপনীয়তা নীতি</li>
                        <li>নিরাপত্তা পলিসি</li>
                    </ul>
                </div>

                {/* Column 4 - যোগাযোগ */}
                <div>
                    <h3 className="font-bold mb-3">যোগাযোগ</h3>
                    <p>info@tokhon.com</p>
                    <p>+8801745500555</p>
                    <div className="flex items-center">
                        <div className="flex justify-center h-[30px] space-x-4 mt-3 text-red-500 text-xl">
                            <img src="facebook.png" alt="facebook"></img>
                        </div>
                        <div className="flex justify-center h-[26px] space-x-4 mt-3 text-red-500 text-xl">
                            <img src="instagam.png" alt="facebook"></img>
                        </div>
                        <div className="flex justify-center h-[30px] space-x-4 mt-3 ml-[-10px] text-red-500 text-xl">
                            <img src="linkedin.png" alt="facebook"></img>
                        </div>
                        <div className="flex justify-center h-[22px] space-x-4 mt-3 text-red-500 text-xl">
                            <img src="twitter.jpg" alt="facebook"></img>
                        </div>
                        <div className="flex justify-center h-[40px] ml-[10px] space-x-4 mt-3 text-red-500 text-xl">
                            <img src="youtube.png" alt="facebook"></img>
                        </div>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
