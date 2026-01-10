"use client";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/types";

interface Props {
  product: ProductType;
}

export default function ProductCard({ product }: Props) {
  const image =
    product.images?.[1]?.url ??
    product.images?.[0]?.url ??
    "";

  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex flex-col gap-2 rounded-xl cursor-pointer">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={`https://api.bunyodoptom.uz${image}`}
            alt={product.name}
            width={300}
            height={200}
          />
        </div>

        <div>
          <h3 className="text-base lg:text-xl font-medium">
            {product.name}
          </h3>
          <p className="text-sm lg:text-base">
            {product.price} UZS
          </p>
        </div>
      </div>
    </Link>
  );
}
