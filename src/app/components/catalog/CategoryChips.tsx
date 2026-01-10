"use client";
import { CategoryType } from "@/types";
import Link from "next/link";

interface Props {
  categories: CategoryType[];
}

export default function CategoryChips({ categories }: Props) {
  return (
    <div className="mt-2.5 flex flex-wrap gap-4">
      {categories.map((c) => (
        <Link
          key={c.id}
          href={`/categories?category=${c.id}`}
          className="text-sm bg-[#CECFFF] px-4 py-2 rounded-lg"
        >
          {c.name}
        </Link>
      ))}
    </div>
  );
}
