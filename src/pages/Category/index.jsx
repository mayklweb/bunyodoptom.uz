import React, { useEffect, useState } from "react";

import { HeartIcon } from "lucide-react";
import { getCategories, getProducts } from "../../api/apiServices";

function Products() {
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

  console.log(categories);

  return (
    <div className="container max-w-[1260px] w-full mx-auto">
      {/* Main  */}
      <main className="">
        {/* div */}
        <div className="h-[51px]">
          <div className="relative w-[184px] h-[23px] top-3.5 left-[10px] flex gap-4 items-center">
            <div>
              <div href="#" className="font-normal text-[#33a0ff] text-lg">
                Asosiy
              </div>
            </div>
            <div className="font-normal text-[#c1c8ce] text-sm">/</div>
            <div>
              <div href="#" className="font-normal text-neutral-800 text-lg">
                Mahsulotlar
              </div>
            </div>
          </div>
        </div>

        <div className="flex ">
          {/* Sidebar */}
          <aside className="w-[300px] h-full">
            {/* Categories */}
            <div className="sticky top-10 left-10 bg-[#e5e5ff] rounded-[10px]">
              <div className="p-5">
                <h2 className="font-semibold text-app-primary text-xl mb-6">
                  Kategoriya
                </h2>
                <ul className="space-y-4">
                  {categories.data?.map((category, index) => (
                    <li
                      key={`category-${index}`}
                      className="flex justify-between"
                    >
                      <span
                        className={`${
                          category.selected
                            ? "font-semibold text-app-primary"
                            : "font-normal text-[#0d0d2d]"
                        } ${category.color || ""} text-lg`}
                      >
                        {category.name}
                      </span>
                      <span
                        className={`${
                          category.selected
                            ? "font-semibold text-app-primary"
                            : "font-normal text-[#0d0d2d]"
                        } ${category.color || ""} text-lg text-right`}
                      >
                        {category.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 grid grid-cols-3 gap-6 pl-5 ">
            {products.data?.map((product, index) => (
              <div key={`product-${index}`} className="w-full h-full">
                <div className="relative w-full h-[80%] bg-cover bg-center rounded-[10px] overflow-hidden">
                  <button className="absolute top-[12px] right-[12px] bg-white rounded-full p-2.5">
                    <HeartIcon size={20} />
                  </button>
                  <div className="w-full h-full object-cover">
                    <img
                      src={product.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3
                  className={`w-[252px] font-semibold ${
                    index === 0 ? "text-app-primary" : "text-[#283645]"
                  } text-xl mt-1`}
                >
                  {product.name}
                </h3>
                <p
                  className={`w-[252px] h-6 font-semibold text-base ${
                    index === 0 ? "text-[#0d0d2d]" : "text-[#61778d]"
                  }`}
                >
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Products;
