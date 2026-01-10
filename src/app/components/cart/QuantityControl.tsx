"use client";
import { Minus, Plus } from "lucide-react";
import { cartStore } from "@/store/CartStore";
import { CartItemType } from "@/types/cart";

interface Props {
  item: CartItemType;
}

const QuantityControl: React.FC<Props> = ({ item }) => {
  const { inc, dec } = cartStore;

  return (
    <div className="flex items-center gap-3 border border-[#cccccc] border-solid rounded-xl">
      <button
        className="p-1 cursor-pointer"
        aria-label="Decrease quantity"
        onClick={() => dec(item.id)}
      >
        <Minus size={22} />
      </button>

      <p>{item.qty}</p>

      <button
        className="p-1 cursor-pointer"
        onClick={() => inc(item.id)}
      >
        <Plus size={22} />
      </button>
    </div>
  );
};

export default QuantityControl;
