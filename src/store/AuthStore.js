import { makeAutoObservable } from "mobx";
import { modalStore } from "./ModalStore";

class AuthStore {
  token = localStorage.getItem("token") || null;
  user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem("token", token);
  }

  setUser(user) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  async login(credentials) {
    this.loading = true;
    try {
      const res = await fetch("http://localhost:4000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      
      const data = await res.json();
      console.log(res);
      console.log(data);

      if (data.token) {
        this.setToken(data.token);
        this.setUser(data.data);
        modalStore.close("login");
      }
      return data;
    } finally {
      this.loading = false;
    }
  }

  async signup(userData) {
    this.loading = true;
    try {
      const res = await fetch("http://localhost:4000/api/v1/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await res.json();

      if (data.token) {
        this.setToken(data.token);
        this.setUser(data.data);
        modalStore.close("signup");
      }
      return data;
    } finally {
      this.loading = false;
    }
  }
}

export const authStore = new AuthStore();
