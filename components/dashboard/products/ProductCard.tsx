import { Content } from "@/lib/products/product-type";
import Image from "next/image";

export default function ProductCard({ product }: { product: Content }) {
    return (
        <div className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out">
            {/* Image Container */}
            <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                <Image
                    src={product.thumbnail}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={product.name}
                />
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-900 line-clamp-1 mb-1">
                    {product.name}
                </h2>

                <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                    {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                        ${product.priceOut}
                    </span>
                    <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
}
