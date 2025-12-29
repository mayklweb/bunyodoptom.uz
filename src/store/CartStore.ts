import { ProductType } from "@/types";
import { makeAutoObservable, runInAction } from "mobx";

class CartStore {
  cart: (ProductType & { qty: number })[] = [];

  constructor() {
    makeAutoObservable(this);

    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      if (saved) {
        runInAction(() => {
          this.cart = JSON.parse(saved);
        });
      }
    }
  }

  saveCart = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  };

  getQuantity = (id: number) => {
    const item = this.cart.find((p) => p.id === id);
    return item ? item.qty : 0;
  };

  addToCart = (item: ProductType) => {
    if (item.stock_qty <= 0) return;

    const existingIndex = this.cart.findIndex((p) => p.id === item.id);

    if (existingIndex !== -1) {
      const existing = this.cart[existingIndex];
      const newQty = existing.qty + (item.qty || 1);
      const clampedQty = newQty > item.stock_qty ? item.stock_qty : newQty;
      
      // Create new array with updated item to maintain MobX reactivity
      this.cart = [
        ...this.cart.slice(0, existingIndex),
        { ...existing, qty: clampedQty },
        ...this.cart.slice(existingIndex + 1)
      ];
    } else {
      this.cart = [...this.cart, { ...item, qty: item.qty || 1 }];
    }

    this.saveCart();
  };

  inc = (id: number) => {
    this.cart = this.cart.map((item) =>
      item.id === id
        ? { ...item, qty: Math.min(item.qty + 1, item.stock_qty) }
        : item
    );
    this.saveCart();
  };

  dec = (id: number) => {
    this.cart = this.cart.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );

    this.saveCart();
  };

  getTotal = () => this.cart.reduce((acc, item) => acc + (item.price ?? 0) * item.qty, 0);

  getItemCount = () => this.cart.reduce((acc, item) => acc + item.qty, 0);

  remove = (id: number) => {
    this.cart = this.cart.filter((item) => item.id !== id);
    this.saveCart();
  };

  clearCart = () => {
    this.cart = [];
    this.saveCart();
  };
}

export const cartStore = new CartStore();