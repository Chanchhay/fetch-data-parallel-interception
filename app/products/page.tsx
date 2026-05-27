import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-gray-50 px-6 py-10">
            <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
                Products
            </h1>

            <ProductCard />
        </main>
    );
}
