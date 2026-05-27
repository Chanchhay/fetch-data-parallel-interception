export type Product = {
    content: Content[];
};

export type Content = {
    uuid: string;
    name: string;
    description: string;
    priceOut: number;
    thumbnail: string;
};

export type ProductDetail = {
    uuid: string;
    name: string;
    description: string;
    priceOut: number;
    thumbnail: string;
};
