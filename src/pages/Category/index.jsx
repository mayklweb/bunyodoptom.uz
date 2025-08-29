import React, { useEffect, useState } from "react";

import { getCategories, getProducts } from "../../api/apiServices";
import { Link } from "react-router-dom";
import { modalStore } from "../../store/ModalStore";

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


  return (
    <div className="container max-w-[1260px] w-full mx-auto">
      {/* Main  */}
      <main className="">
        {/* div */}
        <div className="">
          <div className="w-full flex gap-2 items-center text-sm">
            <div>
              <Link to="/" className="font-normal text-[#33a0ff] text-lg">
                Asosiy
              </Link>
            </div>
            <div className="font-normal text-[#c1c8ce] text-sm">/</div>
            <div>
              <p className="font-normal text-neutral-800 text-lg">
                Mahsulotlar
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mb-10">
          <aside className="w-[300px] h-full hidden lg:block">
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

          <div className="w-full flex justify-between items-center mt-5">
            <h3 className="text-2xl">Mahsulotlar</h3>
            <button
              onClick={() => modalStore.open("filter")}
              className="text-lg px-6 py-1.5 text-[#2E3192] rounded-lg border-[1px] border-solid border-[#2E3192]"
            >
              Filter
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {products.data?.map((product, index) => (
              <div key={index}>
                <div
                  key={`product-${index}`}
                  className="w-full h-full rounded-xl"
                >
                  <div className="relative w-full h-[60%] bg-cover bg-center rounded-[10px] overflow-hidden">
                    {/* <button className="absolute top-[12px] right-[12px] bg-white rounded-full p-2.5">
                    <HeartIcon size={20} />
                  </button> */}
                    <div className="w-full h-full">
                      <img
                        src={"/product.jfif"}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <h3
                      className={`font-semibold text-[#0d0d2d] text-lg lg:text-2xl mt-1`}
                    >
                      {product.name}
                    </h3>
                    <p className={"font-semibold text-base text-[#61778d]"}>
                      {product.price}
                    </p>
                  </div>
                </div>
                {/* <div
                  onClick={() => openProductModal(product)}
                  key={index}
                  className="w-full h-full rounded-[20px]"
                >
                  <div className="relative w-full h-[60%] rounded-[20px] overflow-hidden">
                    
                    <img
                      className="w-full h-full object-cover"
                      src={"/product.jfif"}
                      alt=""
                    />
                  </div>
                  <h3 className="mt-[5px] font-semibold text-[#283645] text-xl">
                    {product.name}
                  </h3>
                  <p className="text-[#61778d] text-sm font-semibold">
                    {product.price}
                  </p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Products;
