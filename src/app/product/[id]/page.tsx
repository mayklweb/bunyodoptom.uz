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
  const [item, setItem] = useState({} as ProductType);

  const { id } = use(params);
  const Id = parseInt(id);

  useEffect(() => {
    async function getProduct() {
      try {
        const data = await getProducts();

        const productList = data ?? [];

        const product = productList.find((p: ProductType) => p.id === Id);

        setItem(product || null);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    getProduct();
  }, [Id]);

  return (
    <section>
      <div className="container">
        <div className="mt-[80px] lg:mt-[100px]">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2">
              <div className="w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/candy.webp"
                  alt=""
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/cookie.webp"
                  alt=""
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/candy.webp"
                  alt=""
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/cookie.webp"
                  alt=""
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-xl lg:text-4xl">{item.name}</h1>
              <p className="text-base lg:text-xl mt-2.5 lg:mt-5">
                {item.description}
              </p>
              <p className="text-lg lg:text-2xl mt-2.5 lg:mt-5">50 000 USZ</p>
            </div>
            {!cartStore.cart.find((product) => product.id === Id) ? (
              // product cartda yo‘q → "SAVATGA"
              <button
                onClick={() => cartStore.addToCart(item)}
                className="text-white w-full h-10 bg-[#2e3192] rounded-lg cursor-pointer mt-5"
              >
                SAVATGA
              </button>
            ) : (
              <div>
                <div className="w-max flex items-center gap-3 border border-solid border-black px-3 py-1 rounded-lg">
                  <button onClick={() => cartStore.dec(Id)}>
                    <Minus />
                  </button>

                  <span>{cartStore.cart.find((p) => p.id === Id)?.qty}</span>

                  <button onClick={() => cartStore.inc(Id)}>
                    <Plus />
                  </button>
                </div>
              </div>
            )}
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
