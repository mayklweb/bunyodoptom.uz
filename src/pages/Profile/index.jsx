import React, { useState } from "react";
import {
  ChevronRightIcon,
  HeartIcon,
  MapPinIcon,
  UserIcon,
} from "lucide-react";
import { authStore } from "../../store/AuthStore";

function Profile() {
  const [activeTab, setActiveTab] = useState("personal");

  const profile = JSON.parse(localStorage.getItem("user"));

  console.log(profile);

  const sidebarItems = [
    {
      key: "personal",
      icon: <UserIcon className="w-6 h-6" />,
      label: "Shaxsiy ma'lumotlar",
    },
    {
      key: "orders",
      icon: <UserIcon className="w-6 h-6" />,
      label: "Mening buyurtmalarim",
    },
    {
      key: "addresses",
      icon: <MapPinIcon className="w-6 h-6" />,
      label: "Manzillar",
    },
    {
      key: "favorites",
      icon: <HeartIcon className="w-6 h-6" />,
      label: "Sevimli mahsulotlar",
    },
  ];

  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="container max-w-[1260px] w-full mx-auto relative">
        <div className="flex gap-6 mt-10">
          {/* Sidebar */}
          <aside className="w-1/3 flex flex-col space-y-[18px]">
            {sidebarItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`flex w-full items-center gap-2.5 pt-3 pb-[13px] px-5 cursor-pointer border text-[#2E3192] rounded-[10px]
                  ${activeTab === item.key && "bg-[#CECFFF] border-none"}`}
              >
                {item.icon}
                <div className="font-semibold text-app-primary text-lg leading-[26px] whitespace-nowrap">
                  {item.label}
                </div>
              </button>
            ))}
          </aside>

          {/* Content */}
          <div className="w-2/3">
            {/* Title */}

            {activeTab === "personal" && (
              <div>
                <h1 className="font-semibold text-2xl leading-[26px]">
                  Shaxsiy ma’lumotlar
                </h1>
                <div className="flex flex-col gap-4 w-1/2">
                  <div>
                    <h5>Ism familiya</h5>
                    <div className="px-4 py-2.5 mt-2 rounded-[10px] bg-[#EEEEEE]">
                      <input
                        value={profile?.name}
                        className="w-full h-full outline-none"
                        type="text"
                        placeholder="Farrux Bozorboyev"
                      />
                    </div>
                  </div>
                  <div>
                    <h5>Telefon raqam</h5>
                    <div className="px-4 py-2.5 mt-2 rounded-[10px] bg-[#EEEEEE]">
                      <input
                        value={profile?.phone}
                        className="w-full h-full outline-none"
                        type="text"
                        placeholder="+998 (33) 513-60-53"
                      />
                    </div>
                  </div>
                  <div>
                    <h5>Tug’ilgan kun</h5>
                    <div className="px-4 py-2.5 mt-2 rounded-[10px] bg-[#EEEEEE]">
                      <input
                        value={profile?.brightday}
                        className="w-full h-full outline-none"
                        type="text"
                        placeholder="24/04/2001-yil"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div>
                <h1 className="font-semibold text-2xl leading-[26px]">
                  Mening buyurtmalarim
                </h1>
                <div className="w-full bg-[#e5e6ff] rounded-[10px] p-5 space-y-4 mt-4">
                  <div className="flex gap-6">
                    <div className="rounded-[8px] bg-[#e5e6ff] w-[140px] h-[120px] flex items-center justify-center overflow-hidden">
                      <img
                        src="/product.jfif"
                        alt="product"
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <h1 className="text-2xl">Lorem ipsum dolor sit amet.</h1>
                    </div>
                    <div className="h-fit bg-[#f9cf94] text-[#9b5a00] rounded-[20px] px-[15px] py-1 font-normal text-lg tracking-[0.36px]">
                      Yo‘lda
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-lg">
                      <p>Taxminiy yetkazib berish vaqti:</p>
                      <p>1 ish kuni</p>
                    </div>
                    <div className="flex justify-between text-lg">
                      <p>Yetkazib berish narxi:</p>
                      <p>0 so'm</p>
                    </div>
                    <div className="flex justify-between text-lg">
                      <p>Mahsulotlar soni:</p>
                      <p>10</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col text-[#363e59] text-center">
                      <div className="text-lg">24/Yan</div>
                      <div className="text-base">11:46</div>
                    </div>
                    <div className="ml-[15px]">
                      <div className="text-base text-[#0a142fcc]">
                        Yetkazib berishda
                      </div>
                      <div className="text-base text-[#0a142fe6]">Buxoro</div>
                    </div>
                  </div>

                  <div className="flex items-center mt-[5px] cursor-pointer">
                    <span className="text-app-primary text-base">
                      Batafsil ma’lumotni ko‘rsatish
                    </span>
                    <ChevronRightIcon className="w-[18px] h-[18px] ml-2" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "addresses" && (
              <div>
                <div className="w-full flex items-center justify-between">
                  <h1 className="font-semibold text-app-primary text-2xl leading-[26px] whitespace-nowrap">
                    Manzillar
                  </h1>
                  <button>+ Manzil qo'shish</button>
                </div>
                <div></div>
              </div>
            )}

            {activeTab === "favorites" && (
              <div className="bg-[#f4f4f4] p-5 rounded-lg">
                Sevimli mahsulotlaringiz shu yerda chiqadi
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
