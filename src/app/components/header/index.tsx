import { authStore } from "@/store/AuthStore";
import { Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div className="w-full bg-white shadow-sm fixed top-0 left-0 z-10">
        <div className="container">
          <div className="flex items-center justify-between py-2">
            <div>
              <Link className="hidden lg:block" href="/">
                <Image
                  src="/logo.svg"
                  alt="Bunyod Optom"
                  width={240}
                  height={50}
                />
              </Link>
            </div>
            <div className="flex lg:hidden flex-auto ">
              <form className="w-full flex items-center border-[1px] border-solid border-[#C4C4C4] bg-[#e5e7eb] focus-within:border-[#2e3192] rounded-md overflow-hidden">
                <button className="p-2 cursor-pointer">
                  <Search strokeWidth={1.5} size={20} color="#777" />
                </button>
                <input
                  placeholder="Qidirish..."
                  className="w-full text-base py-1.5 outline-none"
                  type="text"
                />
              </form>
            </div>
            <div className="hidden lg:flex gap-2">
              <Link
                href={authStore.token ? "/profile" : "/login"}
                className="flex gap-2 px-2 lg:px-4 py-2 rounded-md items-center justify-center hover:bg-[#e5e7eb] cursor-pointer transition-all duration-200 ease-in-out"
              >
                <User size={24} strokeWidth={1.5} />
                <p className="text-lg font-medium hidden lg:block">
                  {authStore.token ? authStore.user?.name : "Kirish"}
                </p>
              </Link>
              <Link
                href={"/cart"}
                className="flex gap-2 px-2 lg:px-4 rounded-md items-center justify-center hover:bg-[#e5e7eb] cursor-pointer transition-all duration-200 ease-in-out"
              >
                <ShoppingBag size={24} strokeWidth={1.5} />
                <p className="text-lg font-medium hidden lg:block">Savat</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
