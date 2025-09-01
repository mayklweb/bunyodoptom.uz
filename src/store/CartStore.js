import { makeAutoObservable } from "mobx";

class CartStore {
  cart = [];

  constructor() {
    makeAutoObservable(this);
    const saved = localStorage.getItem("cart");
    if (saved) {
      this.cart = JSON.parse(saved);
    }
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  getQuantity(id) {
    const item = this.cart.find((p) => p.id === id);
    return item ? item.count : 0; // ✅ count ishlatiladi
  }

  addToCart(item) {
    if (item.stock_qty <= 0) return; // stokda yo‘q bo‘lsa qo‘shmaydi

    const existing = this.cart.find((p) => p.id === item.id);
    if (existing) {
      if (existing.count < item.stock_qty) {
        existing.count += item.qty || 1;
      }
    } else {
      this.cart.push({ ...item, count: 1 });
    }
    this.saveCart();
  }

  inc(id) {
    this.cart = this.cart.map((item) =>
      item.id === id && item.count < item.stock_qty
        ? { ...item, count: item.count + 1 }
        : item
    );
    this.saveCart();
  }

  dec(id) {
    this.cart = this.cart.map((item) =>
      item.id === id && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item
    );
    this.saveCart();
  }

  remove(id) {
    this.cart = this.cart.filter((item) => item.id !== id);
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }
}

export const cartStore = new CartStore();
