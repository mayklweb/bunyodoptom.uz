"use client";
import { ProductType } from "@/types";
import ProductCard from "./ProductCard";

interface Props {
  products: ProductType[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className="mt-6 mb-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
