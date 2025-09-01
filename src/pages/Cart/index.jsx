import React, { useState } from "react";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cartStore } from "../../store/CartStore";

function Cart() {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  console.log(user);

  const [cart, setCart] = useState(
    cartStore.cart.map((item) => ({
      ...item,
      selected: true, // qo‘shimcha maydon
    }))
  );

  const [selectAll, setSelectAll] = useState(true);

  // --- Select All toggle ---
  const handleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    setCart((prev) => prev.map((item) => ({ ...item, selected: newValue })));
  };

  // --- Select One toggle ---
  const handleSelectItem = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // --- Delete Item ---
  const handleDelete = (id) => {
    cartStore.remove(id);
  };

  // --- Delete Selected Items ---
  const handleDeleteSelected = () => {
    setCart((prev) => prev.filter((item) => !item.selected));
    setSelectAll(false);
  };

  // --- Calculation (selected items) ---
  const totalPrice = cart
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price * item.count, 0);

  console.log(cart);

  return (
    <div className="bg-white flex flex-row justify-center w-full mt-6 pb-24">
      <div className="container max-w-[1260px] w-full mx-auto relative">
        {/* Page Title */}
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Savat</h1>

        <div className="flex flex-col lg:flex-row mt-4 gap-6">
          {/* LEFT: Products */}
          <main className="w-full lg:w-2/3">
            {/* Select All */}
            <div className="w-full rounded-[10px] bg-[#CECFFF] p-3 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="w-5 h-5 rounded-[5px]"
                />
                <span className="text-sm lg:text-lg font-semibold text-[#0d0d2d] ml-2">
                  Barcha mavjud mahsulotlarni tanlash
                </span>
              </div>
            </div>

            {/* Product Items */}
            <div className="w-full mx-auto mt-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="w-full bg-[#e5e6ff] p-4 lg:p-5 rounded-[10px] flex flex-col sm:flex-row gap-4"
                >
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleSelectItem(item.id)}
                    className="w-5 h-5 rounded-[5px] sm:mt-4"
                  />

                  {/* Product Content */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    {/* Image (demo) */}
                    <div className="rounded-[8px] bg-white w-full sm:w-[140px] h-[160px] sm:h-[120px] flex items-center justify-center overflow-hidden">
                      <img
                        src={`http://localhost:4000${item.images[0].url}`}
                        crossOrigin="anonymous"
                        alt="product"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-between gap-3 flex-1">
                      <h1 className="text-lg lg:text-2xl font-medium">
                        {item.name}
                      </h1>

                      <div className="flex justify-between">
                        <p className="text-sm lg:text-lg">
                          Narxi: {item.price.toLocaleString()} UZS
                        </p>
                        <p className="text-sm lg:text-lg">
                          Jami: {(item.price * item.count).toLocaleString()} UZS
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 items-center">
                        <div className="inline-flex gap-4 border rounded-[8px] px-3 py-2 items-center">
                          <button onClick={() => handleDecrease(item.id)}>
                            <MinusIcon className="w-4 h-4" />
                          </button>
                          <p>{item.count}</p>
                          <button onClick={() => cartStore.inc(item.id)}>
                            <PlusIcon className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => cartStore.remove(item.id)}
                          className="border p-3 rounded-[8px] flex items-center"
                        >
                          <Trash2Icon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {cart.length === 0 && (
                <p className="text-center text-gray-500">Savat bo‘sh 🙁</p>
              )}
            </div>
          </main>

          {/* RIGHT: Order Summary */}
          <aside className="w-full lg:w-1/3">
            <div className="w-full p-4 lg:p-5 bg-[#e5e6ff] rounded-[10px]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg lg:text-2xl font-semibold">Telefon:</h3>
                <p className="text-base lg:text-xl">{user.phone}</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg lg:text-2xl font-semibold">F.I.O:</h3>
                <p className="text-base lg:text-xl">{user.name}</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3">
                <h3 className="text-lg lg:text-2xl font-semibold">Manzil:</h3>
                <p className="text-sm lg:text-base sm:ml-4 mt-1 sm:mt-0">
                  Xorazm, Xonqa tumani, Qirq-yop qishlog’i, Do’rman maxallasi,
                  Yashnar ko’chasi 24-uy
                </p>
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg lg:text-2xl font-semibold">Jami:</h3>
                <p className="text-base lg:text-xl">
                  {totalPrice.toLocaleString()} UZS
                </p>
              </div>

              <button
                disabled={totalPrice === 0}
                className="w-full text-white text-lg lg:text-xl p-3 lg:p-4 bg-[#2E3192] rounded-[10px] cursor-pointer disabled:opacity-50"
                onClick={() => alert("To‘lov amalga oshirildi ✅")}
              >
                To‘lash
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Cart;
