import React, { useState } from "react";
import {
  ChevronRightIcon,
  HeartIcon,
  MapPinIcon,
  PackageCheck,
  UserIcon,
} from "lucide-react";

function ProfileMobile() {
  const [activeTab, setActiveTab] = useState("personal"); // desktop uchun default
  const [showContent, setShowContent] = useState(false); // mobile uchun

  const profile = JSON.parse(localStorage.getItem("user"));

  const tabs = [
    {
      key: "personal",
      icon: <UserIcon className="w-5 h-5" />,
      label: "Shaxsiy",
    },
    {
      key: "orders",
      icon: <PackageCheck className="w-5 h-5" />,
      label: "Buyurtmalar",
    },
    {
      key: "addresses",
      icon: <MapPinIcon className="w-5 h-5" />,
      label: "Manzillar",
    },
    {
      key: "favorites",
      icon: <HeartIcon className="w-5 h-5" />,
      label: "Sevimlilar",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <div className="space-y-4">
            <h1 className="font-semibold text-xl">Shaxsiy ma’lumotlar</h1>
            <div>
              <h5 className="text-sm">Ism familiya</h5>
              <div className="px-3 py-2 mt-2 rounded-lg bg-gray-100">
                <input
                  value={profile?.name}
                  className="w-full bg-transparent outline-none"
                  type="text"
                  placeholder="Farrux Bozorboyev"
                />
              </div>
            </div>
            <div>
              <h5 className="text-sm">Telefon raqam</h5>
              <div className="px-3 py-2 mt-2 rounded-lg bg-gray-100">
                <input
                  value={profile?.phone}
                  className="w-full bg-transparent outline-none"
                  type="text"
                  placeholder="+998 (33) 513-60-53"
                />
              </div>
            </div>
            <div>
              <h5 className="text-sm">Tug‘ilgan kun</h5>
              <div className="px-3 py-2 mt-2 rounded-lg bg-gray-100">
                <input
                  value={profile?.brightday}
                  className="w-full bg-transparent outline-none"
                  type="text"
                  placeholder="24/04/2001-yil"
                />
              </div>
            </div>
          </div>
        );

      case "orders":
        return (
          <div>
            <h1 className="font-semibold text-xl mb-3">Mening buyurtmalarim</h1>
            <div className="bg-[#e5e6ff] rounded-lg p-4 space-y-3">
              <div className="flex gap-4">
                <div className="rounded-lg bg-gray-200 w-[100px] h-[90px] overflow-hidden">
                  <img
                    src="/product.jfif"
                    alt="product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-medium">
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <div className="bg-[#f9cf94] text-[#9b5a00] rounded-full px-3 py-1 inline-block text-xs mt-2">
                    Yo‘lda
                  </div>
                </div>
              </div>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Yetkazib berish vaqti:</span>
                  <span>1 ish kuni</span>
                </div>
                <div className="flex justify-between">
                  <span>Yetkazib berish narxi:</span>
                  <span>0 so'm</span>
                </div>
                <div className="flex justify-between">
                  <span>Mahsulotlar soni:</span>
                  <span>10</span>
                </div>
              </div>
              <div className="flex items-center cursor-pointer text-app-primary text-sm">
                Batafsil ma’lumot
                <ChevronRightIcon className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        );
      case "addresses":
        return (
          <div>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xl text-app-primary">
                Manzillar
              </h1>
              <button className="text-sm text-blue-600">
                + Manzil qo'shish
              </button>
            </div>
            <p className="text-gray-500 mt-2">Hozircha manzillar yo‘q</p>
          </div>
        );
      case "favorites":
        return (
          <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-600">
            Sevimli mahsulotlaringiz shu yerda chiqadi
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      {/* Mobile view */}
      <div className="bg-white w-full flex flex-col gap-6 sm:hidden">
        {!showContent ? (
          <div className="flex flex-col gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setShowContent(true);
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-white text-[#2E3192] border-[1px] border-[#2E3192F] border-solid  font-medium text-sm"
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        ) : (
          <div className="w-full">
            <button
              className="text-[#2E3192] mb-4 text-sm"
              onClick={() => setShowContent(false)}
            >
              ← Ortga
            </button>
            {renderContent()}
          </div>
        )}
      </div>

      {/* Desktop view */}
      <div className="mt-10 hidden sm:flex bg-white gap-6">
        <div className="flex flex-col gap-3 w-1/4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 py-3 px-4 rounded-lg text-sm font-medium border-[1px] border-[#2E3192] border-solid cursor-pointer ${
                activeTab === tab.key
                  ? "bg-[#CECFFF] text-[#2E3192]"
                  : "bg-white text-[#2E3192]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex-1">{renderContent()}</div>
      </div>
    </div>
  );
}

export default ProfileMobile;
