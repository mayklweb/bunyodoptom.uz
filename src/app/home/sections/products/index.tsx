import { getProducts } from "@/api/apiServices";
import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);

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
                    src={product.mainImage}
                    alt={product.name}
                    width={300}
                    height={200}
                  />
                </div>

                <div>
                  <h3 className="text-sm sm:text-base lg:text-xl font-medium">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base">{product.price} USZ</p>
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
