"use client";
import { useEffect, useState } from "react";
import { getProducts } from "@/api/apiServices";
import { cartStore } from "@/store/CartStore";
import { ProductType } from "@/types";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

import React, { use } from "react";
import { observer } from "mobx-react-lite";

export default observer(function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [item, setItem] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = use(params);
  const Id = parseInt(id);

  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true);
        const { data } = await getProducts();
        const productList = data ?? [];
        const product = productList?.find((p: ProductType) => p.id === Id);

        setItem(product || null);
      } catch (error) {
        console.error("Error fetching product:", error);
        setItem(null);
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, [Id]);

  if (loading) {
    return (
      <section>
        <div className="container">
          <div className="mt-[80px] lg:mt-[100px]">
            <p>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!item) {
    return (
      <section>
        <div className="container">
          <div className="mt-[80px] lg:mt-[100px]">
            <p>Product not found</p>
          </div>
        </div>
      </section>
    );
  }

  const cartItem = cartStore.cart.find((product) => product.id === Id);
  const currentQty = cartItem?.qty || 0;

  return (
    <section>
      <div className="container">
        <div className="mt-[80px] lg:mt-[100px]">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-2">
              {item.images.map((image: any, i) => (
                <div key={i} className="w-full h-full rounded-md overflow-hidden">
                  <Image
                    key={image.id}
                    src={`https://api.bunyodoptom.uz${image.url}`}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-xl lg:text-4xl">{item.name}</h1>
              <p className="text-base lg:text-xl mt-2.5 lg:mt-5">
                {item.description}
              </p>
              <p className="text-lg lg:text-2xl mt-2.5 lg:mt-5">
                {item.price?.toLocaleString()} USZ
              </p>

              {/* Stock info */}
              <p className="text-sm text-gray-600 mt-2">
                Stock: {item.stock_qty}
              </p>

              {/* Add to cart / quantity controls */}
              {!cartItem ? (
                <button
                  onClick={() => cartStore.addToCart(item)}
                  disabled={item.stock_qty <= 0}
                  className="text-white w-full h-10 bg-[#2e3192] rounded-lg cursor-pointer mt-5 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {item.stock_qty <= 0 ? "OUT OF STOCK" : "SAVATGA"}
                </button>
              ) : (
                <div className="mt-5">
                  <div className="w-max flex items-center gap-3 border border-solid border-black px-3 py-1 rounded-lg">
                    <button
                      onClick={() => cartStore.dec(Id)}
                      disabled={currentQty <= 1}
                      className="disabled:opacity-50"
                    >
                      <Minus />
                    </button>

                    <span>{currentQty}</span>

                    <button
                      onClick={() => cartStore.inc(Id)}
                      disabled={currentQty >= item.stock_qty}
                      className="disabled:opacity-50"
                    >
                      <Plus />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl font-medium">Tavsia etamiz</h1>
            <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2 cursor-pointer">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={`/candy.webp`}
                    alt="product"
                    width={300}
                    height={200}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium">Mahsulot nomi</h3>
                  <p className="text-sm">55 000 USZ</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 cursor-pointer">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={`/candy.webp`}
                    alt="product"
                    width={300}
                    height={200}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium">Mahsulot nomi</h3>
                  <p className="text-sm">55 000 USZ</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 cursor-pointer">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={`/candy.webp`}
                    alt="product"
                    width={300}
                    height={200}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium">Mahsulot nomi</h3>
                  <p className="text-sm">55 000 USZ</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 cursor-pointer">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={`/candy.webp`}
                    alt="product"
                    width={300}
                    height={200}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium">Mahsulot nomi</h3>
                  <p className="text-sm">55 000 USZ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
