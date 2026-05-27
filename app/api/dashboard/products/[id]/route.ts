import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_ISHOP_API;

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const resolvedParams = await params;
        const id = resolvedParams.id;

        const response = await fetch(`${BASE_URL}/v1/products/${id}`);

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch product or product not found" },
                { status: response.status },
            );
        }

        const product = await response.json();

        return NextResponse.json(product, {
            status: 200,
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
}
