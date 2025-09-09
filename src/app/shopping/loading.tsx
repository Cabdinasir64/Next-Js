export default function ShoppingLoading() {
    return (
        <div className="max-w-3xl mx-auto p-6 mt-20">
            <h1 className="text-3xl font-bold mb-6 text-center animate-pulse text-gray-400">
                Loading Products...
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="p-4 border rounded-lg shadow-lg bg-gray-200 animate-pulse h-72"
                    >
                        <div className="w-full h-32 bg-gray-300 rounded mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
