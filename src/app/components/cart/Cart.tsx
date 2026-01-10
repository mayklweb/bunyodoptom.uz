"use client";
import { cartStore } from "@/store/CartStore";
import { observer } from "mobx-react-lite";
import CartItem from "./CartItem";

export const Cart = observer(() => {
  const { cart } = cartStore;

  return (
    <section>
      <div className="container">
        <div className="mt-[70px]">
          <h1 className="text-xl lg:text-4xl font-semibold mb-2">SAVAT</h1>

          <div className="grid grid-cols-1 gap-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

