"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Product } from "@/components/ProductCard";

export default function ProductDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        async function fetchProductById() {
            try {
                setLoading(true);

                const response = await fetch(
                    `https://fakestoreapi.com/products/${id}`,
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch product");
                }

                const data: Product = await response.json();
                setProduct(data);
            } catch (err) {
                setError("Something went wrong while fetching product detail.");
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            fetchProductById();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <p className="text-gray-600">Loading product detail...</p>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <p className="text-red-500">{error || "Product not found."}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="-mx-4 flex flex-wrap">
                    <div className="mb-8 w-full px-4 md:w-1/2">
                        <div className="relative h-[500px] rounded-lg bg-white shadow-md">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="rounded-lg object-contain p-8"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="w-full px-4 md:w-1/2">
                        <p className="mb-2 text-sm font-semibold uppercase text-indigo-600">
                            {product.category}
                        </p>

                        <h2 className="mb-2 text-3xl font-bold text-gray-900">
                            {product.title}
                        </h2>

                        <p className="mb-4 text-gray-600">
                            SKU: PRODUCT-{product.id}
                        </p>

                        <div className="mb-4">
                            <span className="mr-2 text-2xl font-bold text-gray-900">
                                ${product.price}
                            </span>

                            <span className="text-gray-500 line-through">
                                ${(product.price + 10).toFixed(2)}
                            </span>
                        </div>

                        <div className="mb-4 flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6 text-yellow-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ))}

                            <span className="ml-2 text-gray-600">
                                4.5 (120 reviews)
                            </span>
                        </div>

                        <p className="mb-6 text-gray-700">
                            {product.description}
                        </p>

                        <div className="mb-6">
                            <h3 className="mb-2 text-lg font-semibold">
                                Color:
                            </h3>

                            <div className="flex space-x-2">
                                <button className="h-8 w-8 rounded-full bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" />
                                <button className="h-8 w-8 rounded-full bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2" />
                                <button className="h-8 w-8 rounded-full bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="quantity"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                Quantity:
                            </label>

                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                min={1}
                                defaultValue={1}
                                className="w-16 rounded-md border border-gray-300 px-2 py-1 text-center shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>

                        <div className="mb-6 flex space-x-4">
                            <button className="flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Add to Cart
                            </button>

                            <button className="flex items-center gap-2 rounded-md bg-gray-200 px-6 py-2 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                Wishlist
                            </button>
                        </div>

                        <div>
                            <h3 className="mb-2 text-lg font-semibold">
                                Key Features:
                            </h3>

                            <ul className="list-inside list-disc text-gray-700">
                                <li>High-quality product</li>
                                <li>Fast delivery available</li>
                                <li>Best price guarantee</li>
                                <li>Easy return policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
