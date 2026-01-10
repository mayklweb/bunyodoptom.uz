"use client";
import { getCategories, getProducts } from "@/api/apiServices";
import { CategoryType } from "@/types";
import { ProductType } from "@/types";
import { useEffect, useState } from "react";
import ProductGrid from "@/app/components/catalog/ProductGrid";
import FilterDrawer from "@/app/components/catalog/FilterDrawer";

function normalizeProducts(products: ProductType[]): ProductType[] {
  return products
    .filter(
      (p) => Array.isArray(p.images) && p.images.length > 0 && p.images[0]?.url
    )
    .map((p) => ({
      ...p,
      mainImage:
        `https://api.bunyodoptom.uz${p.images[0].url}` &&
        `https://api.bunyodoptom.uz${p.images[0].url}`,
    }));
}

function Categories() {
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
              className="text-white py-1 px-4 bg-[#2e3192]
              border border-[#2e3192] rounded-lg hover:bg-transparent
              hover:text-[#2e3192] transition"
              onClick={() => setIsFilterOpen(true)}
            >
              Filter
            </button>
          </div>

          <ProductGrid products={products} />

          <div className="w-full h-16">
            <button className="mb-24 w-full h-full text-white text-xl bg-[#2e3192] rounded-2xl">
              KOPROQ KORISH
            </button>
          </div>
        </div>
      </div>

      <FilterDrawer
        isOpen={isFilterOpen}
        categories={categories}
        onClose={() => setIsFilterOpen(false)}
      />
    </section>
  );
}

export default Categories;
