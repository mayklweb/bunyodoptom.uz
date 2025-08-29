import React, { useState } from "react";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet.",
      qty: 1,
      price: 1000000,
      checked: false,
      deliveryTime: "1 ish kuni",
      deliveryPrice: 0,
      image: "/product.jfif",
    },
    {
      id: 2,
      name: "Mahsulot 2",
      qty: 2,
      price: 500000,
      checked: false,
      deliveryTime: "2 ish kuni",
      deliveryPrice: 10000,
      image: "/product.jfif",
    },
  ]);

  // Select All
  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setCart(cart.map((item) => ({ ...item, checked })));
  };

  // Select One
  const handleSelect = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Increase Qty
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease Qty
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  // Delete
  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Total Price
  const total = cart
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.qty * item.price, 0);

  // Check if all selected
  const allSelected = cart.length > 0 && cart.every((item) => item.checked);

  return (
    <div className="bg-white flex flex-row justify-center w-full mt-6 pb-24">
      <div className="container max-w-[1260px] w-full mx-auto relative">
        {/* Page Title */}
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Savat</h1>

        <div className="flex flex-col lg:flex-row mt-4 gap-6">
          {/* LEFT: Products */}
          <main className="w-full lg:w-2/3">
            {/* Select All */}
            <div className="w-full rounded-[10px] bg-[#CECFFF] p-3 flex items-center">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleSelectAll}
                className="w-5 h-5 rounded-[5px]"
              />
              <span className="text-sm lg:text-lg font-semibold text-[#0d0d2d] ml-2">
                Barcha mavjud mahsulotlarni tanlash
              </span>
            </div>

            {/* Product Items */}
            <div className="w-full mx-auto mt-4 space-y-4 mb-12">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="w-full bg-[#e5e6ff] p-4 lg:p-5 rounded-[10px] flex flex-col sm:flex-row gap-4"
                >
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleSelect(item.id)}
                    className="w-5 h-5 rounded-[5px] sm:mt-4"
                  />

                  {/* Product Content */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    {/* Image */}
                    <div className="rounded-[8px] bg-white w-full sm:w-[140px] h-[160px] sm:h-[120px] flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-between gap-3 flex-1">
                      <h1 className="text-lg lg:text-2xl font-medium">
                        {item.name}
                      </h1>

                      <div className="space-y-1 text-sm lg:text-lg">
                        <div className="flex justify-between">
                          <p>Taxminiy yetkazib berish vaqti:</p>
                          <p>{item.deliveryTime}</p>
                        </div>
                        <div className="flex justify-between">
                          <p>Yetkazib berish narxi:</p>
                          <p>{item.deliveryPrice} so'm</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 items-center">
                        <div className="inline-flex gap-4 border rounded-[8px] px-3 py-2 items-center">
                          <button onClick={() => decreaseQty(item.id)}>
                            <MinusIcon className="w-4 h-4" />
                          </button>
                          <p>{item.qty}</p>
                          <button onClick={() => increaseQty(item.id)}>
                            <PlusIcon className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="border p-2 rounded-[8px] flex items-center"
                        >
                          <Trash2Icon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* RIGHT: Order Summary (only on desktop) */}
          <aside className="hidden lg:block w-full lg:w-1/3">
            <div className="w-full p-4 lg:p-5 bg-[#e5e6ff] rounded-[10px]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg lg:text-2xl font-semibold">Telefon:</h3>
                <p className="text-base lg:text-xl">+998335136053</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg lg:text-2xl font-semibold">F.I.O:</h3>
                <p className="text-base lg:text-xl">Farrux Bozorboyev</p>
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
                  {total.toLocaleString()} UZS
                </p>
              </div>

              <button className="w-full text-white text-lg lg:text-xl p-3 lg:p-4 bg-[#2E3192] rounded-[10px] cursor-pointer">
                To‘lash
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-[80px] left-0 w-full flex items-center justify-center">
        <div className="w-9/10 p-2 bg-white border-[1px] rounded-2xl shadow-[0_-2px_8px_rgba(0,0,0,0.1)] flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Jami:</p>
            <p className="font-semibold">
              {total.toLocaleString()} UZS
            </p>
          </div>
          <button className="bg-[#2E3192] text-white px-4 py-2 rounded-[10px] font-semibold">
            Buyurtma berish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
