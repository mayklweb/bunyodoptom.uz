"use client";
import { authStore } from "@/store/AuthStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface OrderItem {
  id: number;
  product_id: number;
  qty: number;
  unit_price: number;
}

interface Order {
  id: number;
  total_amount: number;
  payment_method: string;
  status: string;
  items: OrderItem[];
  created_at: string;
}

const Orders = () => {
  const { user } = authStore;
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("token");
    setToken(t);
  }, []);

  const fetchOrders = async () => {
    if (!user) return [];
    const res = await fetch("https://api.bunyodoptom.uz/api/v1/orders", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Xatolik yuz berdi");
    return data.data || [];
  };

  const {
    data: orders = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders", user?.id],
    queryFn: fetchOrders,
    enabled: !!user, // user bo‘lsa ishlaydi
  });

  if (!user) return <p>Iltimos, tizimga kiring</p>;
  if (isLoading) return <p>Buyurtmalar yuklanmoqda...</p>;
  if (isError) return <p>Buyurtmalarni olishda xatolik</p>;

  return (
    <div className="my-20">
      <div className="container">
        <h1 className="text-2xl font-bold mb-6">Mening buyurtmalarim</h1>
        {orders.length === 0 && <p>Sizda hali buyurtmalar mavjud emas</p>}

        {orders.map((order: Order) => (
          <div key={order.id} className="border p-4 rounded-lg mb-4 bg-gray-50">
            <div className="flex justify-between mb-2">
              <span>Buyurtma ID: {order.id}</span>
              <span>Status: {order.status}</span>
            </div>
            <div className="mb-2">
              To‘lov usuli: <strong>{order.payment_method}</strong>
            </div>
            <div className="mb-2">
              Umumiy summa:{" "}
              <strong>{order.total_amount.toLocaleString()} so‘m</strong>
            </div>
            <div>
              <h3 className="font-semibold">Mahsulotlar:</h3>
              <ul>
                {order.items?.map((item) => (
                  <li key={item.id}>
                    Mahsulot ID: {item.product_id}, miqdor: {item.qty}, narx:{" "}
                    {item.unit_price.toLocaleString()} so‘m
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
