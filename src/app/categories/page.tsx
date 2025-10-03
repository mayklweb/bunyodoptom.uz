"use client";
import { getCategories, getProducts } from "@/api/apiServices";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Categories() {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();
      const categoryList = await getCategories();
      setProducts(productList);
      setCategories(categoryList);
    };

    fetchProducts();
  }, []);

  console.log(products.data);

  return (
    <section>
      <div className="container">
        <div className="mt-[80px]">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-2xl lg:text-4xl font-semibold">Katalog</h1>
            <button
              className="text-[#2e3192] py-1 px-4 border-[1px] border-[#2e3192] border-solid rounded-md"
              onClick={() => setIsFilterOpen(true)}
            >
              Filter
            </button>
          </div>
          <div className="mt-6 mb-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.data?.map((product) => (
              <Link key={product._id} href={`/product/${product.id}`}>
                <div className="flex flex-col gap-2 rounded-xl cursor-pointer">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src={`http://localhost:4000${product.images[0].url}`}
                      alt="product"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <h3 className="text-base lg:text-xl font-medium">
                      {product.name}
                    </h3>
                    <p className="text-sm lg:text-base">{product.price} USZ</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full h-16">
            <button className="mb-24 w-full h-full text-white text-xl cursor-pointer bg-[#2e3192] rounded-2xl">
              KO'PROQ KO'RISH
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-[80%] bg-white fixed bottom-0 left-0 z-20 

    rounded-t-4xl pt-4 transition-transform duration-500
    ${
      isFilterOpen
        ? "translate-y-0 shadow-[0px_-2px_5px_0px_rgba(0,_0,_0,_0.1)] "
        : "translate-y-full"
    }`}
      >
        <div className="container">
          <div className="w-full">
            <div className="w-full flex justify-between">
              <h1 className="text-xl font-medium">Filter</h1>
              <button onClick={() => setIsFilterOpen(false)}>
                <X />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
