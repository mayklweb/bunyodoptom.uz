"use client";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { cartStore } from "@/store/CartStore";
import QuantityControl from "./QuantityControl";
import { CartItemType } from "@/types/cart";

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { remove } = cartStore;

  return (
    <div className="flex gap-3 border-t border-[#E0E0E0] border-solid py-3">
      <div className="rounded-xl overflow-hidden w-[160px] h-[110px]">
        <Image
          src={`https://api.bunyodoptom.uz${item.images[0]?.url}`}
          alt={item.name}
          width={180}
          height={120}
          priority
        />
      </div>

      <div className="flex flex-col flex-auto justify-between">
        <div>
          <h3 className="text-base font-medium">{item.name}</h3>
          <p className="text-sm text-end">
            {(item.price ?? 0).toLocaleString()} UZS
          </p>
        </div>

        <div className="flex items-center justify-between">
          <QuantityControl item={item} />

          <button
            className="p-1 cursor-pointer"
            onClick={() => remove(item.id)}
          >
            <Trash2 strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
