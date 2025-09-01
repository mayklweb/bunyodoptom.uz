import { Minus, Plus } from "lucide-react";
import React from "react";
import { cartStore } from "../store/CartStore";
import { observer } from "mobx-react-lite";

function Counter({ product }) {
  const item = cartStore.cart.find((p) => p.id === product.id);

  return (
    <div className="p-3 flex items-center gap-4 border border-[#E2E2E2] rounded-lg">
      <button
        onClick={() => cartStore.dec(product.id)}
        disabled={!item}
        className="counter-button"
      >
        <Minus />
      </button>
      <span className="counter-text">{item ? item.count : 0}</span>
      <button
        onClick={() => cartStore.inc(product.id)}
        // disabled={item && item.count >= product.stock_qty}
        className="counter-button"
      >
        <Plus />
      </button>
    </div>
  );
}

export default observer(Counter);
