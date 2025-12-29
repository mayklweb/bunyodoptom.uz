"use client";
import { getCategories, getProducts } from "@/api/apiServices";
import { CategoryType } from "@/types";
import { ProductType } from "@/types";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function normalizeProducts(products: ProductType[]): ProductType[] {
  return products
    .filter(
      (product) =>
        Array.isArray(product.images) &&
        product.images.length > 0 &&
        product.images[0]?.url
    )
    .map((product) => ({
      ...product,
      mainImage: `https://api.bunyodoptom.uz${product.images[1].url}`,
    }));
}

function Categories() {

 const searchParams = useSearchParams();

 console.log(searchParams);
 
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [categories, setCategories] = useState<Array<CategoryType>>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();
      const categoryList = await getCategories();
      const normalized = normalizeProducts(productList.data);
      setProducts(normalized);
      setCategories(categoryList.data);
    };

    fetchProducts();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="mt-[80px]">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-2xl lg:text-4xl font-semibold">Katalog</h1>
            <button
              className="text-[#fff] py-1 px-4 bg-[#2e3192] border-[1px] border-[#2e3192] border-solid rounded-md cursor-pointer transition-all duration-200 ease-in-out hover:bg-transparent hover:text-[#2e3192]"
              onClick={() => setIsFilterOpen(true)}
            >
              Filter
            </button>
          </div>
          <div className="mt-6 mb-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products?.map((product, key) => (
              <Link key={key} href={`/product/${product.id}`}>
                <div className="flex flex-col gap-2 rounded-xl cursor-pointer">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src={
                        product.images?.[0]?.url
                          ? `https://api.bunyodoptom.uz${product.images[1].url}`
                          : "/placeholder.png"
                      }
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
              KOPROQ KORISH
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
            <div>
              {categories.map((category, key) => (
                <Link href={`/categories?category=${category.id}`} key={key} className="mt-4">
                {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
