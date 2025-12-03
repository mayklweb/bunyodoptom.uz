"use client";
import { cartStore } from "@/store/CartStore";
import { Minus, Plus, Trash2 } from "lucide-react";
import { observer } from "mobx-react-lite";
import Image from "next/image";

const Cart = observer(() => {
  const { cart, inc, dec, remove } = cartStore;

  return (
    <section>
      <div className="container">
        <div className="mt-[70px]">
          <h1 className="text-xl lg:text-4xl font-semibold mb-2">SAVAT</h1>
          <div className="grid grid-cols-1 gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-3 border-t border-[#E0E0E0] border-solid py-3">
                <div className="rounded-2xl overflow-hidden w-[160px] h-[100px]">
                  <Image
                    src="/cookie.webp"
                    alt="product"
                    width={180}
                    height={120}
                    priority
                  />
                </div>
                <div className="flex flex-col flex-auto justify-between">
                  <div>
                    <h3 className="text-base font-medium">{item.name}</h3>
                    <p className="text-sm text-end">{item.price?.toLocaleString()} USZ</p>
                  </div>
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-3 border border-[#cccccc] border-solid rounded-xl ">
                      <button className="p-1" onClick={() => dec(item.id)}>
                        <Minus size={22} />
                      </button>
                      <p>{item.qty}</p>
                      <button className="p-1" onClick={() => inc(item.id)}>
                        <Plus size={22} />
                      </button>
                    </div>
                    <div>
                      <button className="p-1" onClick={() => remove(item.id)}>
                        <Trash2 strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Cart;
