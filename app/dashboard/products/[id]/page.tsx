import ProductRenderById from "@/components/dashboard/products/ProductRenderById";
import { getProductsById } from "@/lib/products/fetch-products";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = await getProductsById(id);

    const title = product.name;
    const description = product.description;
    const image = product.thumbnail;
    const url = `https://fetch-data-parallel-interception-qk.vercel.app/dashboard/products/${id}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            type: "website",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: product.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

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
