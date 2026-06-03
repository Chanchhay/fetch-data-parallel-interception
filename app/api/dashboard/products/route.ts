import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_ISHOP_API;

export async function GET() {
    const response = await fetch(`${BASE_URL}/v1/products`);
    const products = await response.json();
    console.log(products)
    if (response.ok) {
        return NextResponse.json(products, {
            status: 201,
        });
    }

    return NextResponse.json({
        error: "error failed to fetch products",
        status: 500,
    });
}
