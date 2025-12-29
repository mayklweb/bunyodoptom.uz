import { getCategories } from "@/api/apiServices";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getCategories();
      setCategories(categoryList.data);
    };

    fetchCategories();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="mt-6 mb-10 grid grid-cols-4 gap-2 lg:gap-4">
          {categories.slice(2, 10).map((category: any, key: number) => (
            <Link
              href={`/categories/category?id=${category.id}`}
              key={key}
              className="lg:bg-[#CECFFF] bg-transparent rounded-xl flex items-center justify-center flex-col lg:flex-row gap-1 lg:p-2 cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out"
            >
              <div className="p-2 bg-[#CECFFF] rounded-md flex items-center justify-center">
                <Image
                  src="/favicon.svg"
                  className="lg:p-1"
                  alt="categories"
                  width={50}
                  height={50}
                />
              </div>
              <p className="text-xs text-center lg:text-lg font-semibold text-[#2e3192]">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
