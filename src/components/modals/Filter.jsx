import React, { useEffect, useState } from "react";
import { modalStore } from "../../store/ModalStore";
import { X } from "lucide-react";
import { getCategories } from "../../api/apiServices";

function Filter() {
  const filter = modalStore.activeModal === "filter";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getCategories();
      setCategories(categoryList);
    };

    fetchCategories();
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-screen h-screen transition-all duration-300 ${
        filter ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full h-full bg-black/50"></div>

      <div
        className={`w-full h-[60%] bg-white absolute bottom-0 right-0 transition-transform duration-300 ${
          filter ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-b-neutral-200">
          <h3>Filter</h3>
          <button
            onClick={() => modalStore.close("filter")}
            className=""
          >
            <X />
          </button>
        </div>

        <div className="p-4">
          {categories.data?.map((category, index) => (
            <div key={`category-${index}`} className="flex justify-between">
              <span
                className={`text-lg ${
                  category.selected
                    ? "font-semibold "
                    : "font-normal text-neutral-800"
                } cursor-pointer`}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
