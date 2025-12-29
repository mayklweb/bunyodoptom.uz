import { getProducts } from "@/api/apiServices";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  images: { url: string }[];
  category_id: number;
  category?: string;
  description?: string;
  stock_qty?: number;
  mainImage?: string;
};

function normalizeProducts(products: Product[]): Product[] {
  return products
    .filter(
      (p) => Array.isArray(p.images) && p.images.length > 0 && p.images[0]?.url
    )
    .map((p) => ({
      ...p,
      mainImage: `https://api.bunyodoptom.uz${p.images[1].url}`, // har doim string bo‘ladi
    }));
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();

      const normalized = normalizeProducts(productList.data);
      setProducts(normalized);
    };

    fetchProducts();
  }, []);

  return (
    <section>
      <div className="container">
        <h1 className="text-xl lg:text-4xl font-semibold">Сизга ёқадиганлар</h1>

        <div className="mt-6 mb-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(0, 12).map((product, key) => (
            <Link
              href={`/product/${product.id}`}
              key={key}
              className="flex flex-col gap-2 rounded-xl cursor-pointer"
            >
              <div className="flex flex-col gap-2 rounded-xl cursor-pointer">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={product.mainImage ?? "/placeholder.png"} // agar mainImage undefined bo‘lsa placeholder ishlaydi
                    alt={product.name}
                    width={300}
                    height={200}
                  />
                </div>

                <div>
                  <h3 className="text-sm sm:text-base lg:text-xl font-medium">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base">
                    {product.price} USZ
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-full h-16">
          <button className="mb-24 w-full h-full text-white text-xl cursor-pointer bg-[#2e3192] rounded-2xl">
            КОПРОҚ КОРИШ
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;
