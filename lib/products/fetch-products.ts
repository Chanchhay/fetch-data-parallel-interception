import { Product, ProductDetail } from "./product-type";

// const BASE_URL = "http://localhost:3000/api/dashboard/products";
// const BASE_URL = process.env.NEXT_PUBLIC_ISHOP_API;
const BASE_URL = process.env.NEXT_PUBLIC_ISHOP_API
    ? `${process.env.NEXT_PUBLIC_ISHOP_API}/v1/products`
    : "http://localhost:3000/api/dashboard/products";

console.log(BASE_URL);

export async function getAllProducts(): Promise<Product> {
    const data = await fetch(`${BASE_URL}`);
    const products = await data.json();
    console.log(products);
    return products;
}
export async function getProductsById(uuid: string): Promise<ProductDetail> {
    const data = await fetch(`${BASE_URL}/${uuid}`);
    const product = await data.json();
    return product;
}
