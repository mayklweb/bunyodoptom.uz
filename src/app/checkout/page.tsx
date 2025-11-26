"use client";
import { authStore } from "@/store/AuthStore";
import { cartStore } from "@/store/CartStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import React, { useState } from "react";

const Checkout = observer(() => {
  const { user } = authStore;
  const { cart } = cartStore;

  const [loading, setLoading] = useState<boolean>(false);

  async function handleCheckout() {
    setLoading(true);

    // Create order on backend
    const resp = await fetch("http://localhost:4000/api/v1/checkout", {
      // agar frontend va backend alohida bo'lsa baza URL ga o'zgartir
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 1,
        address_id: null,
        total_amount: 12000, // Click talab qilgan formatda (so'm yoki tiyin)
        notes: "Order from Next.js",
      }),
    });

    const json = await resp.json();
    setLoading(false);

    if (json && json.paymentUrl) {
      // Redirect user to Click payment page
      window.location.href = json.paymentUrl;
    } else {
      alert("Payment link generation failed");
    }
  }
  return (
    <section>
      <div className="container">
        <div className="mt-[70px]">
          <h1 className="text-xl lg:text-4xl font-semibold mb-2">SAVAT</h1>
          <div>
            <div className="bg-[#fafafa]">
              <p className="text-sm">Oluvchi: </p>
              <h1 className="text-lg font-semibold">{user?.name}</h1>
              <p className="">+998 {user?.phone}</p>
              {/* <p>Xorazm, Xonqa</p>
              <input type="text" placeholder="manzil" /> */}
            </div>
            <div>
              <div>Ertaga, 27-noyabr</div>
              {cart.map((item) => (
                <div key={item.id}>
                  <div>{/* <Image src={item.images} /> */}</div>
                  <div>
                    <p>
                      {item.name} x {item.qty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button>NAQT</button>
              <button>CLICK</button>
              <button>PAYME</button>
            </div>
          </div>
          <button className="bg-[#2e3192]" onClick={handleCheckout} disabled={loading}>CLICK</button>
        </div>
      </div>
    </section>
  );
});

export default Checkout;
