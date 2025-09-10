type Product = {
    id: number
    title: string
}

async function fetchProducts(): Promise<Product[]> {
    const res = await fetch("https://fakestoreapi.com/products", {
        cache: "force-cache",
        next: { revalidate: 10 },
    })
    return res.json()
}

export default async function Products() {
    const products = await fetchProducts()

    return (
        <div className="flex flex-col gap-4 w-full max-w-xl">
            <p className="text-gray-500 text-sm"></p>
            <ul className="flex flex-col gap-4">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                    >
                        {product.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
