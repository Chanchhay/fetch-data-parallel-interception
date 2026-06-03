import ProductCardList from "@/components/dashboard/products/ProductCardList";
import { getAllProducts } from "@/lib/products/fetch-products";
import { Suspense } from "react";
import Loading from "../loading";

export default function Page() {
    const products = getAllProducts();
    console.log(products);

    return (
        <main className="container mx-auto px-4 py-12 max-w-7xl">
            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Products
                </h1>
                <p className="text-gray-500 mt-2">
                    Browse our latest collection.
                </p>
            </header>

            <Suspense fallback={<Loading />}>
                <ProductCardList products={products} />
            </Suspense>
        </main>
    );
}
