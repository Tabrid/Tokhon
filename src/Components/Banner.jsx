import React from 'react'

function Banner() {
    return (
        <div className='mb-40'>
            <div
                className="bg-gray-900  flex flex-col items-center text-white bg-cover bg-center relative h-[80vh]"
                style={{ backgroundImage: "url('https://i.ibb.co.com/1YHLL29Z/Image-Shadow.png')" }}
            >
                <nav className="w-full p-4 bg-black/20 flex justify-between items-center px-8">
                    <img
                        className="h-12"
                        src="https://i.ibb.co.com/KxJD53tp/app-logo-truck-lagbe-truck-lagbe-dark-svg.png"
                        alt="logo"
                    />

                    <button className="bg-green-500 px-4 py-2 rounded">লগ ইন</button>
                </nav>
                <section className="text-start py-16 w-4/5 flex justify-start items-center h-full">
                    <div>
                        <h2 className="text-4xl font-bold text-end">কম সময়ে কম খরচে দ্রুত ভাড়া করুন</h2>
                        <button className="bg-green-500 px-6 py-3 mt-6 rounded">অ্যাপ ডাউনলোড করুন</button>
                    </div>
                </section>
            </div>
            <div className="flex justify-center gap-6 p-8 w-4/5 absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                <div className="bg-[#FB2C36]/90 bg-opacity-90 p-6 rounded-lg text-center w-[350px]">
                    <div className="flex justify-center items-center gap-5">
                        <img
                            className="h-10"
                            src="https://i.ibb.co.com/Txzrqmfs/icn-personal-svg-fill.png"
                            alt="logo"
                        />
                        <h3 className="text-xl font-bold">ব্যবহারকারী</h3>
                    </div>
                    <p className="mt-4 text-end">প্রতি মুহূর্তের জন্য সহজ সমাধান। নির্ভরযোগ্য সার্ভিস।</p>
                    <div className="flex justify-end items-end">
                        <button className="mt-4 px-4 py-2 rounded text-end">এখনই ডাউনলোড করুন &gt;</button>

                    </div>
                </div>
                <div className="bg-[#FB2C36]/90 bg-opacity-90 p-6 rounded-lg text-center w-[350px]">
                    <div className="flex justify-center items-center gap-5">
                        <img
                            className="h-10"
                            src="https://i.ibb.co.com/whGqXvbP/icn-driver-svg.png"
                            alt="logo"
                        />
                        <h3 className="text-xl font-bold">ড্রাইভার</h3>
                    </div>
                    <p className="mt-4 text-end">আপনার সেবার মাধ্যমে আয় বাড়ান।</p>
                    <div className="flex justify-end items-end mt-5">
                        <button className="mt-4  py-2 rounded">আমাদের সাথে যোগ দিন &gt;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner