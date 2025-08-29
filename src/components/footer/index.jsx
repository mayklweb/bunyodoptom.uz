import {
  Home,
  LayoutGrid,
  MailIcon,
  PhoneIcon,
  ShoppingBasket,
  User,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="w-full mt-[40px] bg-[#0d0d2c] hidden lg:block ">
        <div className="container">
          <div className="py-10">
            <div className="flex justify-between items-center">
              <img
                className="w-[273px] h-[60px]"
                alt="Logo"
                src="/footer-logo.svg"
              />

              <div className="flex gap-4">
                <button className="bg-[#ffffff] text-[#0a142f] gap-1">
                  <img
                    className="w-6 h-6"
                    alt="Play Market"
                    src="/frame-23.svg"
                  />
                  <span className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-lg">
                    Play market
                  </span>
                </button>

                <button className="bg-[#ffffff] text-[#0a142f] gap-1">
                  <img
                    className="w-6 h-6"
                    alt="App Store"
                    src="/frame-26.svg"
                  />
                  <span className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-lg">
                    App store
                  </span>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex">
                <div className="flex gap-4 text-white">
                  <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                    To'lov
                  </span>
                  <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                    Savol va javob
                  </span>
                  <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                    Taklif
                  </span>
                  <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                    Ishlar
                  </span>
                </div>
                <div></div>
                <div className="flex gap-4 text-white">
                  <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                    Hamkorlar
                  </span>
                  <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                    Yetkazib berish
                  </span>
                  <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                    olib kelish
                  </span>
                  <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                    Kontaktlar
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  to={"/"}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                >
                  <img alt="/ig.svg" src="/ig.svg" />
                </Link>
                <Link
                  to={"/"}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                >
                  <img alt="/tg.svg" src="/tg.svg" />
                </Link>
                <Link
                  to={"/"}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                >
                  <img alt="" src="/fb.svg" />
                </Link>
                <Link
                  to={"/"}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                >
                  <img alt="" src="/x.svg" />
                </Link>
              </div>
            </div>

            <div className="flex justify-between items-center mt-10">
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-6 h-6 text-white" />
                  <span className="[font-family:'Source_Sans_Pro',Helvetica] text-white text-lg">
                    +998 (71) 000-00-00
                  </span>
                </div>

                <div className="flex items-center gap -2">
                  <MailIcon className="w-6 h-6 text-white" />
                  <span className="[font-family:'Source_Sans_Pro',Helvetica] text-white text-lg">
                    explore@mail.com
                  </span>
                </div>
              </div>

              <div className="[font-family:'Source_Sans_Pro',Helvetica] text-white text-lg">
                © 2022 BUNYOD OPTOM. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="w-full mt-[40px] bg-white lg:hidden shadow-[0px_0px_20px_#00000020] fixed bottom-0 left-0 z-50">
        <div className="container">
          <div className="py-4 flex justify-between ">
            <button>
              <Link to={"/"}>
                <Home />
              </Link>
            </button>
            <button>
              <Link to={"/"}>
                <LayoutGrid />
              </Link>
            </button>
            <button>
              <Link to={"/"}>
                <ShoppingBasket />
              </Link>
            </button>
            <button>
              <Link to={"/"}>
                <User />
              </Link>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
