import { Link, useLocation } from "react-router-dom";
import { AlignRight, ShoppingCart } from "lucide-react";
import { modalStore } from "../../store/ModalStore";
import { observer } from "mobx-react-lite";
import { authStore } from "../../store/AuthStore";

const Header = observer(() => {
  const location = useLocation();
  const path = location.pathname.split("").slice(0, 11).join("");

  const category = [
    {
      name: "Asosiy",
      slug: "/",
    },
    {
      name: "Biz haqimizda",
      slug: "/about",
    },
    {
      name: "Mahsulotlar",
      slug: "/products",
    },
  ];

  console.log(authStore.user);
  

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-full py-4">
          <div className="flex items-center gap-10">
            <div>
              <img className="w-[120px] lg:w-[240px] lg:h-[60px]" alt="Logo" src="/logo.svg" />
            </div>
            <div>
              <ul className="hidden lg:flex items-center gap-8">
                {category.map((item, index) => (
                  <Link
                    key={index}
                    to={item.slug}
                    className={`${
                      path === item.slug
                        ? "text-[#2e3192] font-semibold"
                        : "text-black font-normal"
                    } text-base hover:text-[#2e3192]`}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          {authStore.token ? (
            <div className="hidden lg:flex gap-4">
              <Link to={'/profile'}>{authStore.user?.name}</Link>
              <Link to={'/cart'}
              >
                <ShoppingCart />
              </Link>
            </div>
          ) : (
            <div className="hidden lg:flex gap-4">
              <button
                onClick={() => modalStore.open("login")}
                className="px-4 py-1.5 text-[#2e3192] rounded font-semibold text-base cursor-pointer"
              >
                KIRISH
              </button>
              <button
                onClick={() => modalStore.open("signUp")}
                className="px-4 py-1.5 bg-[#2e3192] text-white rounded font-semibold text-base cursor-pointer"
              >
                RO'YHATAN O'TISH
              </button>
            </div>
          )}

          <div className="lg:hidden">
            <button onClick={() => modalStore.open("menu")}>
              <AlignRight />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
