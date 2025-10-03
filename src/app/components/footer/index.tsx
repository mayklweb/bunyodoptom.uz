"use client";
import Link from 'next/link'
import { Home, LayoutGrid, ShoppingBag, User } from 'lucide-react'
import { authStore } from '@/store/AuthStore'
import { usePathname } from 'next/navigation';

function Footer() {
  const pathname = usePathname()

  return (
    <footer className="w-full bg-white fixed bottom-0 left-0">
      <div className={`w-full bg-white rounded-t-2xl shadow-[0px_-2px_5px_0px_rgba(0,_0,_0,_0.1)] py-3 ${pathname === "/cart" ? "block" : "hidden"}`}>
        <div className="container">
          <div>
            <button>Buyurtma</button>
          </div>
        </div>
      </div>
      <div className='w-full border-t-[0.5px] border-solid border-[#999] bg-[#FAFAFA] lg:hidden'>
        <div className="container">
          <div className="flex items-center justify-between">
            <Link className="flex my-4 items-center justify-center flex-col gap-1 " href="/">
              <span>
                <Home />
              </span>
              <span className="text-sm font-medium">Asosiy</span>
            </Link>
            <Link className="my-4 flex items-center justify-center flex-col gap-1 " href="/categories">
              <span>
                <LayoutGrid />
              </span>
              <span className="text-sm font-medium">Mahsulotlar</span>
            </Link>
            <Link className="my-4 flex items-center justify-center flex-col gap-1 " href="/cart">
              <span>
                <ShoppingBag />
              </span>
              <span className="text-sm font-medium">Savat</span>
            </Link>
            <Link className="my-4 flex items-center justify-center flex-col gap-1 " href={authStore.token ? "/profile" : "/login"}>
              <span>
                <User />
              </span>
              <span className="text-sm font-medium">{authStore.token ? "Hisob" : "Kirish"}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer