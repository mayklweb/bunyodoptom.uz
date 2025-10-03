import { makeAutoObservable } from "mobx";
import { modalStore } from "./ModalStore";
import { LogInType, SignUpType, UserType } from "@/types";

class AuthStore {
  token: string | null = null;
  user: UserType | null = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);

    // ✅ localStorage faqat clientda o‘qiladi
    if (typeof window !== "undefined") {
      this.token = localStorage.getItem("token") || null;
      this.user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null;
    }
  }

  setToken(token: string) {
    this.token = token;
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    }
  }

  setUser(user: UserType) {
    this.user = user;
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }

  logout() {
    this.token = null;
    this.user = null;
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }

  async login(credentials: LogInType) {
    this.loading = true;
    try {
      const res = await fetch("http://localhost:4000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();
      console.log("login response:", data);

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

  async signup(userData: SignUpType) {
    this.loading = true;
    try {
      const res = await fetch("http://localhost:4000/api/v1/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      console.log("signup response:", data);

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
