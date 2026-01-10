"use client";

import { CategoryType } from "@/types";
import { X } from "lucide-react";
import CategoryChips from "./CategoryChips";

interface Props {
  isOpen: boolean;
  categories: CategoryType[];
  onClose: () => void;
}

export default function FilterDrawer({ isOpen, categories, onClose }: Props) {
  return (
    <div
      className={`
        w-full h-[80%] bg-white fixed bottom-0 left-0 z-20  
        overflow-y-scroll rounded-t-4xl py-4 transition-transform duration-500
        ${isOpen ? "translate-y-0 shadow-[0_-2px_5px_rgba(0,0,0,.1)]"
                 : "translate-y-full"}
      `}
    >
      <div className="container">
        <div className="w-full flex justify-between">
          <h1 className="text-lg font-semibold tracking-tight">KATEGORIYA</h1>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <CategoryChips categories={categories} />

        <div className="mt-5">
          <h3 className="text-lg font-semibold tracking-tight">Brendlar</h3>
          <CategoryChips categories={categories} />
        </div>
      </div>
    </div>
  );
}
