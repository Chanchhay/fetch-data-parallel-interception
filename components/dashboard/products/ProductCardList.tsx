"use client";

import { use } from "react";
import { Product } from "@/lib/products/product-type";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductCardList({
    products,
}: {
    products: Promise<Product>;
}) {
    const allProducts = use(products);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.content.map((product) => (
                <Link
                    href={`/dashboard/products/${product.uuid}`}
                    key={product.uuid}
                >
                    <ProductCard product={product} />
                </Link>
            ))}
        </div>
    );
}
