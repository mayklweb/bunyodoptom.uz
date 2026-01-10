"use client";
import { authStore } from "@/store/AuthStore";
import { cartStore } from "@/store/CartStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

interface CheckoutFormData {
  address_id: string;
  comment: string;
  paymentMethod: "cash" | "click" | "payme";
}

const getAddresses = async () => {
  const res = await fetch(`https://api.bunyodoptom.uz/api/v1/addresses`);
  const data = await res.json();
  return data?.data || [];
};

const Checkout = observer(() => {
  const { user } = authStore;
  const { cart, clearCart } = cartStore;
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    defaultValues: {
      address_id: "",
      comment: "",
      paymentMethod: "cash",
    },
  });

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // React Query — load addresses
  const {
    data: addresses = [],
    isLoading: addressLoading,
    isError: addressError,
  } = useQuery({
    queryKey: ["addresses"],
    queryFn: () => getAddresses(),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    if (!user) {
      console.log("User is not authenticated");
      return;
    }

    setLoading(true);

    try {
      // Online Payments (click / payme)
      if (data.paymentMethod === "click" || data.paymentMethod === "payme") {
        const res = await fetch(
          "https://api.bunyodoptom.uz/api/v1/click/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: user.id,
              total_amount: Number(totalAmount),
              address_id: data.address_id,
              notes: data.comment,
              payment_method: data.paymentMethod,
              idempotency_key: crypto.randomUUID(),
            }),
          }
        );

        const responseData = await res.json();

        if (!res.ok) {
          console.log("Server error:", responseData);
          alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
          return;
        }

        window.location.href = responseData.paymentUrl;
        return;
      }

      // Cash Payment — Create Order Directly
      if (!data.address_id) {
        alert("Iltimos, yetkazib berish manzilini tanlang!");
        return;
      }
      const token = localStorage.getItem("token"); // JSON.stringify kerak emas

      const res = await fetch(
        "https://api.bunyodoptom.uz/api/v1/orders/checkout",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            user_id: 1,
            address_id: 1,
            idempotency_key: "",
            notes: "string",
            payment_method: data.paymentMethod,
            items: cart.map((item) => ({
              product_id: Number(item.id),
              qty: Number(item.qty),
            })),
          }),
        }
      );

      const responseData = await res.json();

      if (res.ok) {
        alert("Buyurtma muvaffaqiyatli yaratildi!");
        console.log(res);
        clearCart();
        window.location.href = "/profile/orders";

        // TODO: clear cart / redirect success
      } else {
        console.log("Order creation error:", responseData);
        alert("Buyurtma yaratishda xatolik yuz berdi");
      }
    } catch (error) {
      console.log("Checkout error:", error);
      alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="my-[80px]">
          <h1 className="text-xl lg:text-4xl font-semibold mb-2">SAVAT</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* USER INFO */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h2 className="font-semibold text-gray-800 mb-2">Oluvchi:</h2>
              <p className="text-gray-700">{user?.name}</p>
              <p className="text-gray-700">+998 {user?.phone}</p>
            </div>

            {/* ADDRESS SELECT */}
            <div className="mb-6">
              <h2 className="font-semibold text-gray-800 mb-3">
                Yetkazib berish manzili:
              </h2>

              {addressLoading && <p>Manzillar yuklanmoqda...</p>}
              {addressError && (
                <p className="text-red-500">Manzil yuklashda xatolik</p>
              )}

              {!addressLoading && !addressError && (
                <select
                  {...register("address_id", {
                    required: "Manzilni tanlang",
                  })}
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.address_id ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Manzilni tanlang</option>

                  {addresses.map((a: any) => (
                    <option key={a.id} value={a.id}>
                      {a.city}, {a.street}
                    </option>
                  ))}
                </select>
              )}

              {errors.address_id && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address_id.message}
                </p>
              )}
            </div>

            {/* CART ITEMS */}
            <div className="mb-6">
              <h2 className="font-semibold text-black mb-3">Mahsulotlar:</h2>

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

              <div className="flex justify-between items-center pt-3 mt-3 border-t-2 border-gray-500">
                <span className="text-lg font-bold text-gray-800">Jami:</span>
                <span className="text-lg font-bold text-[#2e3192]">
                  {totalAmount.toLocaleString()} so'm
                </span>
              </div>
            </div>

            {/* COMMENT */}
            <div className="mb-6">
              <label className="block font-semibold text-black mb-2">
                Izoh (ixtiyoriy):
              </label>
              <textarea
                {...register("comment")}
                placeholder="Qo'shimcha ma'lumot..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none resize-none"
                rows={3}
              />
            </div>

            {/* PAYMENT METHODS */}
            <div className="mb-6">
              <h2 className="font-semibold text-black mb-3">To'lov usuli:</h2>

              <div className="space-y-3">
                {/* CASH */}
                <label className="flex items-center p-4 rounded-xl cursor-pointer bg-[#2e3192]/10">
                  <input
                    type="radio"
                    {...register("paymentMethod", {
                      required: "To'lov usulini tanlang",
                    })}
                    value="cash"
                    className="w-5 h-5"
                  />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">
                      Naqd pul
                    </span>
                    <p className="text-sm text-gray-600">
                      Yetkazib berilganda to'lash
                    </p>
                  </div>
                </label>

                {/* CLICK */}
                <label className="flex items-center p-4 rounded-xl bg-[#2e3192]/10 opacity-50">
                  <input
                    type="radio"
                    {...register("paymentMethod")}
                    value="click"
                    disabled
                  />
                  <div className="ml-3">
                    <Image
                      src="/click.svg"
                      alt="click"
                      width={100}
                      height={25}
                    />
                  </div>
                </label>

                {/* PAYME */}
                <label className="flex items-center p-4 rounded-xl bg-[#2e3192]/10 opacity-50">
                  <input
                    type="radio"
                    {...register("paymentMethod")}
                    value="payme"
                    disabled
                  />
                  <div className="ml-3">
                    <Image
                      src="/payme.svg"
                      alt="payme"
                      width={100}
                      height={32}
                    />
                  </div>
                </label>
              </div>

              {errors.paymentMethod && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.paymentMethod.message}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2e3192] text-white py-4 rounded-xl disabled:bg-gray-400"
            >
              {loading ? "Kutilmoqda..." : "Buyurtma berish"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Checkout;
