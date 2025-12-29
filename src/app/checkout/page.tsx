"use client";
import { authStore } from "@/store/AuthStore";
import { cartStore } from "@/store/CartStore";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";

const Checkout = observer(() => {
  const { user } = authStore;
  const { cart } = cartStore;

  const [loading, setLoading] = useState<boolean>(false);

  async function handleCheckout() {
    if (!user) {
      console.log("User is not authenticated");
      return;
    }

    try {
      const res = await fetch(
        "https://api.bunyodoptom.uz/api/v1/click/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.id, // user ID
            total_amount: 1000, // umumiy summa
            address_id: null, // bo‘lsa
            notes: "", // optional
            idempotency_key: crypto.randomUUID(), // optional
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.log("Server error:", data);
        return;
      }

      // Payment URL → Userni Click tolovga yo‘naltiramiz
      window.location.href = data.paymentUrl;
    } catch (error) {
      console.log("Checkout error:", error);
    }
  }

  return (
    <section>
      <div className="container">
        <div className="mt-[70px]">
          <h1 className="text-xl lg:text-4xl font-semibold mb-2">SAVAT</h1>
          {/* <div>
            <div className="bg-[#fafafa]">
              <p className="text-sm">Oluvchi: </p>
              <h1 className="text-lg font-semibold">{user?.name}</h1>
              <p className="">+998 {user?.phone}</p>
              <p>Xorazm, Xonqa</p>
              <input type="text" placeholder="manzil" />
            </div>
            <div>
              <div>Ertaga, 27-noyabr</div>
              {cart.map((item) => (
                <div key={item.id}>
                  <div><Image src={item.images} /></div>
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
          </div> */}
          <form
            id="click_form"
            action="https://my.click.uz/services/pay"
            method="get"
            target="_blank"
          >
            <input type="hidden" name="amount" value="1000" />
            <input type="hidden" name="merchant_id" value="15196" />
            <input type="hidden" name="merchant_user_id" value="24319" />
            <input type="hidden" name="service_id" value="21168" />
            <input type="hidden" name="transaction_param" value="52" />
            <input
              type="hidden"
              name="return_url"
              value="merchant website url"
            />
            <input type="hidden" name="card_type" value="uzcard/humo" />
            <button type="submit" >
              <i></i>Pay with CLICK
            </button>
          </form>
          <button
            className="bg-[#2e3192]"
            onClick={handleCheckout}
            disabled={loading}
          >
            CLICK
          </button>
        </div>
      </div>
    </section>
  );
});

export default Checkout;
