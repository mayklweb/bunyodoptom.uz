import { ProductType } from "@/types";
import { makeAutoObservable } from "mobx";

class CartStore {
  cart: (ProductType & { qty: number })[] = [];

  constructor() {
    makeAutoObservable(this);

    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      this.cart = saved ? JSON.parse(saved) : [];
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

    const existing = this.cart.find((p) => p.id === item.id);
    if (existing) {
      if (existing.qty < item.stock_qty) {
        existing.qty += item.qty || 1;
      }
    } else {
      this.cart.push({ ...item, qty: 1 });
    }
    this.saveCart();
  };

  inc = (id: number) => {
    const item = this.cart.find((p) => p.id === id);
    if (item && item.qty < item.stock_qty) {
      item.qty += 1;
      this.saveCart();
    }
  };

  dec = (id: number) => {
    this.cart = this.cart.map((item) =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    this.saveCart();
  };

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
