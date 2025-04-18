import React from "react";

const apps = [
  {
    title: "আমাদের কাস্টমার অ্যাপ",
    image: "Tokhon.png",
    appStore: null,
    playStore: "https://play.google.com/store/apps/details?id=com.goridelagbeapp.customer",
  },
  {
    title: "আমাদের পার্টনার অ্যাপ",
    image: "https://i.ibb.co.com/qFrMtmvj/Tokhon-Partner.png",
    appStore: null,
    playStore: "https://play.google.com/store/apps/details?id=com.gorideapp.driver",
  },
];

const AppSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 text-center">
      <h2 className="text-2xl font-bold mb-6">আমাদের অ্যাপ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {apps.map((app, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">{app.title}</h3>
            <img
              src={app.image}
              alt={app.title}
              className="w-24 h-24 mx-auto mb-4"
            />
            <div className="flex justify-center gap-4">
              {app.appStore && (
                <a href={app.appStore} target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="App Store" className="h-10" />
                </a>
              )}
              {app.playStore && (
                <a href={app.playStore} target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="h-10" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppSection;
