import { Suspense } from "react";
import Products from "./products";
import Loading from "./loading";

export default function ShoppingPage() {
    return (
        <div className="max-w-5xl mx-auto p-6 mt-16">
            <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
                Shopping Store
            </h1>
            <Suspense fallback={<Loading />}>
                <Products />
            </Suspense>
        </div>
    );
}
