import ProductsClient from "./product";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
};

async function fetchProducts(): Promise<Product[]> {
    const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
    return res.json();
}

export default async function ShoppingPage() {
    const products = await fetchProducts();

    return (
        <div className="max-w-5xl mx-auto p-6 mt-16">
            <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
                Shopping Store
            </h1>
            <ProductsClient products={products} />
        </div>
    );
}
