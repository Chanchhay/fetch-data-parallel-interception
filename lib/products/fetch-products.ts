import { Product, ProductDetail } from "./product-type";

const BASE_URL = "http://localhost:3000/api/dashboard/products";

export async function getAllProducts(): Promise<Product> {
    const data = await fetch(`${BASE_URL}`);
    const products = await data.json();
    return products;
}
export async function getProductsById(uuid: string): Promise<ProductDetail> {
    const data = await fetch(`${BASE_URL}/${uuid}`);
    const product = await data.json();
    return product;
}
