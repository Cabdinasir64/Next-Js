const SSRPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store", });
    const users = await res.json();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
            <div className="max-w-4xl mx-auto mt-20">
                <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
                    👥 Modern SSR Users List
                </h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {users.map((user: any) => (
                        <div
                            key={user.id}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-[1.02] transform transition"
                        >
                            <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
                            <p className="text-gray-600 mt-1">{user.email}</p>
                            <p className="text-gray-500 text-sm mt-2">🏙️ {user.address.city}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default SSRPage;
