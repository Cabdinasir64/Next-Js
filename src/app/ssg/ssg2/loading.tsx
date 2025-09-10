export default function Loading() {
    return (
        <div className="flex flex-col gap-4 p-4 w-full max-w-xl">
            {[1, 2, 3].map((n) => (
                <div
                    key={n}
                    className="h-12 bg-gray-300 rounded-lg animate-pulse"
                ></div>
            ))}
        </div>
    )
}
