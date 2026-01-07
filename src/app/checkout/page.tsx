"use client";
import { authStore } from "@/store/AuthStore";
import { cartStore } from "@/store/CartStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useState } from "react";

const Checkout = observer(() => {
  const { user } = authStore;
  const { cart } = cartStore;
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  async function handleCheckout() {
    if (!user) {
      console.log("User is not authenticated");
      return;
    }

    setLoading(true);

    try {
      if (paymentMethod === "click" || paymentMethod === "payme") {
        // Online payment flow
        const res = await fetch(
          "https://api.bunyodoptom.uz/api/v1/click/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: user.id,
              total_amount: totalAmount,
              address_id: null,
              notes: comment,
              payment_method: paymentMethod,
              idempotency_key: crypto.randomUUID(),
            }),
          }
        );

        const data = await res.json();

        if (!res.ok) {
          console.log("Server error:", data);
          return;
        }

        // Redirect to payment page
        window.location.href = data.paymentUrl;
      } else {
        // Cash or card payment - create order directly
        const res = await fetch(
          "https://api.bunyodoptom.uz/api/v1/orders/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: user.id,
              total_amount: totalAmount,
              address_id: null,
              notes: comment,
              payment_method: paymentMethod,
              status: "pending",
            }),
          }
        );

        const data = await res.json();

        if (res.ok) {
          alert("Buyurtma muvaffaqiyatli yaratildi!");
          // Redirect to success page or clear cart
        } else {
          console.log("Order creation error:", data);
        }
      }
    } catch (error) {
      console.log("Checkout error:", error);
      alert("Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  }

  // async function handleCheckout() {
  //   if (!user) {
  //     console.log("User is not authenticated");
  //     return;
  //   }

  //   try {
  //     const res = await fetch(
  //       "https://api.bunyodoptom.uz/api/v1/click/create",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           user_id: user.id, // user ID
  //           total_amount: 1000, // umumiy summa
  //           address_id: null, // bo‘lsa
  //           notes: "", // optional
  //           idempotency_key: crypto.randomUUID(), // optional
  //         }),
  //       }
  //     );

  //     const data = await res.json();

  //     if (!res.ok) {
  //       console.log("Server error:", data);
  //       return;
  //     }

  //     // Payment URL → Userni Click tolovga yo‘naltiramiz
  //     window.location.href = data.paymentUrl;
  //   } catch (error) {
  //     console.log("Checkout error:", error);
  //   }
  // }

  return (
    <section>
      <div className="container">
        <div className="mt-[70px]">
          <h1 className="text-xl lg:text-4xl font-semibold mb-2">SAVAT</h1>
          <div>
            {/* Delivery Info */}
            <div className="bg-[#2e3192]/10 rounded-lg p-4 mb-6">
              <h2 className="font-semibold text-black mb-2">Oluvchi:</h2>
              <p className="text-gray-700">{user?.name}</p>
              <p className="text-gray-700">+998 {user?.phone}</p>
              <p className="text-gray-600 mt-2">Xorazm, Xonqa</p>
              <p className="text-gray-600">Ertaga yetkazib beriladi</p>
            </div>

            {/* Cart Items */}
            <div className="mb-6">
              <h2 className="font-semibold text-black mb-3">Mahsulotlar:</h2>
              <div className="">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-2 border-b border-gray-300"
                  >
                    <span className="text-gray-700">
                      {item.name} x {item.qty}
                    </span>
                    <span className="font-semibold text-gray-800">
                      {(item.price * item.qty).toLocaleString()} so'm
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-3 mt-3 border-t-2 border-gray-500">
                <span className="text-lg font-bold text-gray-800">Jami:</span>
                <span className="text-lg font-bold text-[#2e3192]">
                  {totalAmount.toLocaleString()} so'm
                </span>
              </div>
            </div>

            {/* Comment Section */}
            <div className="mb-6">
              <label className="block font-semibold text-black mb-2">
                Izoh (ixtiyoriy):
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Buyurtmangiz haqida qo'shimcha ma'lumot yozing..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#2e3192] resize-none"
                rows={3}
              />
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <h2 className="font-semibold text-black mb-3">
                To'lov usuli:
              </h2>
              <div className="space-y-3">
                {/* Cash Payment */}
                <label className="flex items-center p-4 rounded-xl cursor-pointer bg-[#2e3192]/10 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-[#2e3192]"
                  />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">
                      Naqd pul
                    </span>
                    <p className="text-sm text-gray-600">
                      Yetkazib berilganda to'lang
                    </p>
                  </div>
                </label>

                {/* CLICK Payment */}
                <label className="flex items-center p-4 rounded-lg cursor-pointer bg-[#2e3192]/10 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="click"
                    disabled
                    checked={paymentMethod === "click"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-[#2e3192]"
                  />
                  <div className="ml-3 flex items-center">
                    <Image
                      src={"/click.svg"}
                      alt="click"
                      width={100}
                      height={25}
                    />
                  </div>
                </label>

                {/* PAYME Payment */}
                <label className="flex items-center p-4 rounded-xl cursor-pointer bg-[#2e3192]/10 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="payme"
                    disabled  
                    checked={paymentMethod === "payme"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-[#2e3192]"
                  />
                  <div className="ml-3 flex items-center">
                    <Image
                      src={"/payme.svg"}
                      alt="click"
                      width={100}
                      height={32}
                    />
                  </div>
                </label>
              </div>
            </div>

            <div>
              <div>Ertaga, 27-noyabr</div>
              {cart.map((item) => (
                <div key={item.id}>
                  <div>
                    <Image
                      src={`https://api.bunyodoptom.uz${item.images[0].url}`}
                      alt={item.name}
                      width={180}
                      height={120}
                      priority
                    />
                  </div>
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
