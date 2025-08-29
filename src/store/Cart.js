import { makeAutoObservable } from "mobx";

class CartStore {
  cart = [];

  constructor() {
    makeAutoObservable(this);
    // Sahifa ochilganda localStorage dan yuklab olish
    const saved = localStorage.getItem("cart");
    if (saved) {
      this.cart = JSON.parse(saved);
    }
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  addToCart(item) {
    const existing = this.cart.find((p) => p.id === item.id);
    if (existing) {
      existing.count += item.qty || 1;
    } else {
      this.cart.push({ ...item, count: item.qty || 1 });
    }
    this.saveCart();
  }

  inc(id) {
    this.cart = this.cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
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

export default new CartStore();
