import { ProductDetail } from "@/lib/products/product-type";
import Image from "next/image";
import { use } from "react";

export default function ProductRenderById({
    product,
}: {
    product: Promise<ProductDetail>;
}) {
    const productDetail = use(product);

    return (
        <div className="flex flex-col md:flex-row gap-8 w-full bg-white">
            <div className="relative w-full md:w-1/2 aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
                <Image
                    src={productDetail?.thumbnail ?? ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    alt={productDetail.name}
                    priority
                />
            </div>

            <div className="flex flex-col flex-1 justify-center py-2 md:py-4">

                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                    {productDetail.name}
                </h1>

                <div className="mb-6">
                    <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        ${productDetail.priceOut}
                    </span>
                </div>

                <hr className="border-gray-200 mb-6" />

                <div className="prose prose-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                    <p>{productDetail.description}</p>
                </div>

                <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                    <button className="flex-1 px-8 py-3.5 bg-black text-white text-base font-semibold rounded-xl hover:bg-gray-800 transition-all shadow-md hover:shadow-lg active:scale-[0.98]">
                        Add to Cart
                    </button>
                    <button className="px-8 py-3.5 bg-gray-100 text-gray-900 text-base font-semibold rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98]">
                        Save for later
                    </button>
                </div>
            </div>
        </div>
    );
}
