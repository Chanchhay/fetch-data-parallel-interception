import ProductRenderById from "@/components/dashboard/products/ProductRenderById";
import RouteModal from "@/components/dashboard/products/RouteModal";
import { getProductsById } from "@/lib/products/fetch-products";
import { Suspense } from "react";

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const productPromise = getProductsById(id);

    return (
        <RouteModal>
            <Suspense
                fallback={
                    <div className="p-10 text-center text-gray-500">
                        Loading product details...
                    </div>
                }
            >
                <ProductRenderById product={productPromise} />
            </Suspense>
        </RouteModal>
    );
}
