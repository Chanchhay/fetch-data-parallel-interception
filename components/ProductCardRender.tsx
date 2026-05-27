import Image from "next/image";
import { Product } from "./ProductCard";

interface ProductCardRenderProps {
    product: Product;
}

export default function ProductCardRender({ product }: ProductCardRenderProps) {
    return (
        <div className="w-full max-w-md">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl transition hover:shadow-2xl">
                <div className="relative h-64 bg-gray-100">
                    <Image
                        src={product.image}
                        alt={product.title}
                        className="object-contain p-6"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    <div className="absolute right-4 top-4 z-20 rotate-12 rounded-full bg-gray-100 px-3 py-2 text-xs font-bold">
                        NEW
                    </div>
                </div>

                <div className="p-6">
                    <p className="mb-2 text-sm font-semibold uppercase text-indigo-600">
                        {product.category}
                    </p>

                    <h2 className="mb-2 line-clamp-2 text-xl font-extrabold text-gray-800">
                        {product.title}
                    </h2>

                    <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                        {product.description}
                    </p>

                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-2xl font-bold text-indigo-600">
                            ${product.price}
                        </span>

                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-yellow-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <span className="ml-1 text-sm text-gray-600">
                                4.9
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-lg"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
