import ProductRenderById from "@/components/dashboard/products/ProductRenderById";
import { getProductsById } from "@/lib/products/fetch-products";

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = getProductsById(id);

    return (
        <div>
            <ProductRenderById product={product} />
        </div>
    );
}
