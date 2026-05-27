"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCardRender from "./ProductCardRender";

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export default function ProductCard() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);

                const response = await fetch(
                    "https://fakestoreapi.com/products",
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data: Product[] = await response.json();
                setProducts(data);
            } catch (err) {
                setError(
                    `Something went wrong while fetching products. ${err}`,
                );
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500">Loading products...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                    <ProductCardRender product={product} />
                </Link>
            ))}
        </div>
    );
}
